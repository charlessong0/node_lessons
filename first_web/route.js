function route(handle, pathname, request, response, postData) {
  console.log("about requesting for " + pathname);
  if (typeof(handle[pathname]) === 'function') {
    handle[pathname](request, response, postData);
  } else {
    console.log("no request handler for " + pathname);
    
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("404 not found");
  response.end();
  }
}

exports.route = route;
