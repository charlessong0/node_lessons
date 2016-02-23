var eventproxy = require('eventproxy');
var cheerio = require('cheerio');
var superagent = require('superagent');
var async = require('async');

var url = require('url');

var cnodeUrl = "https://cnodejs.org";

superagent.get(cnodeUrl)
  .end(function (err, res) {
    if (err) {
      return console.error(err);
    }
    
    var topicUrls = [];
    var $ = cheerio.load(res.text);

    $("#topic_list .topic_title").each(function (idx, element) {
      var $element = $(element);
      var href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
    });
    console.log(topicUrls);
  
    var ep = new eventproxy();

    ep.after("all_html", topicUrls.length, function (topics) {
      topics= topics.map(function (topicPair) {
        var topicUrl = topicPair[0];
        var topicHtml = topicPair[1];

        var $ = cheerio.load(topicHtml);
        var author_href = $('.reply_author').attr('href');
        //console.log("123123123" + cnodeUrl + author_href);
        var score;
        
        
        var  title = $('.topic_full_title').text().trim();
          var first_comment = $('.reply_content').eq(0).text().trim();
          var comment_author = $('.reply_author').eq(0).text().trim();

        if (author_href != undefined) {
          var author_href_full = url.resolve(cnodeUrl, author_href);

        var score =   superagent.get(author_href_full)
            .end(function (err, res) {
                if (!res) {
                  return 0;
                } 
                else {
                  
                var $ = cheerio.load(res.text);
                var tempscore = $('.unstyled').find('.big').text();
                console.log("44444"+tempscore);
                return score;
                }
            });
            /**

            superagent.get(author_href_full)
              .end(function (err, res) {
                var $1 = cheerio.load(res.text);
                score = $1('.unstyled').find('.big').text();
                console.log("44444"+score);
              });
            **/
        }



        return ({
          title: title,
          href: topicUrl,
          first_comment: first_comment,
          comment_author: comment_author,
          score: score,
        });
      });
      console.log('final result:');
      console.log(topics);
    });

    
//    topicUrls.forEach(function (topicUrl) {
    async.eachLimit(topicUrls, 10, function (topicUrl, callback) {
      superagent.get(topicUrl)
        .end(function (err, res) {
//            if (err) {
//              console.error(err);
//            }
            console.log('fetch ' + topicUrl + ' successful!');
            ep.emit("all_html", [topicUrl, res.text]);
            callback();
        });
    });
});

