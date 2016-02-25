function route(handle, pathname) {
  console.log("about requesting for " + pathname);
  if (typeof(handle[pathname]) === 'function') {
    handle[pathname]();
  } else {
    console.log("no request handler for " + pathname);
  }
}

exports.route = route;
