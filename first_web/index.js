var server = require("./server");
var route = require("./route");
var requestHeaders = require("./requestHeaders");

var handle = {};
handle["/"] = requestHeaders.start;
handle["/start"] = requestHeaders.start;
handle["/upload"] = requestHeaders.upload;

server.start(route.route, handle);
