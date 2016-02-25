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

function start() {
    var onRequest = function(request, response) {
      console.log("this is the callback method!");
      response.writeHead(200, {"Content-type": "text/plain"});
      response.write("hello world!");
      response.end();
    };

    var printPort = function(port) {
      console.log("the node server is listening at port " + port);
    }

    http.createServer(onRequest).listen(port, printPort(port));
}

exports.start = start;
