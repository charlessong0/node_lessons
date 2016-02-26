var http = require("http");
var url = require("url");

/**
http.createServer(function (request, response) {
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write("hello world!");
  response.end();
}).listen(8888);
console.log("the node server is listening at port 8888")

**/

var port = 8888;

function start(route, handle) {
    var onRequest = function(request, response) {
      console.log("the server is started!");
      var postData = "";
      var pathname = url.parse(request.url).pathname;
      console.log("the user is requesting " + pathname);

      request.setEncoding("utf8");

      request.addListener("data", function(postDataChunk) {
        postData += postDataChunk;
        console.log("received POST data chunk '" + postDataChunk + "'.");
      });

      request.addListener("end", function () {
        route(handle, pathname, response, postData);
      });
      
      //route(handle, pathname, response);
      //response.writeHead(200, {"Content-type": "text/plain"});
      //response.write("hello world!");
      //response.end();
    };

    var printPort = function(port) {
      console.log("the node server is listening at port " + port);
    }

    http.createServer(onRequest).listen(port, printPort(port));
}

exports.start = start;
