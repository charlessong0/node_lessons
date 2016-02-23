var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
  superagent.get('https://cnodejs.org/')
      .end(function (err, sres) {
            if (err) {
                    return next(err);
                          }
                                var $ = cheerio.load(sres.text);
                                      var items = [];
                                            
                                            $('#topic_list .cell').each(function (idx, element) {
                                                    var $element = $(element);
                                                            items.push({
                                                                      author: $element.find('img').attr('title'),
                                                                                href: $element.find('.topic_title').attr('href'),
                                                                                title: $element.find('.topic_title').attr("title")
                                                                                        });
                                                                                              });
                                                                                              
                                                                                                    res.send(items);
                                                                                                        });
                                                                                                        });
                                                                                                        
                                                                                                        
                                                                                                        app.listen(3000, function () {
                                                                                                          console.log('app is listening at port 3000');
                                                                                                          });
