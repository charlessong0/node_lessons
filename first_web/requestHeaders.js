var exec = require("child_process").exec;
var querystring = require("querystring");
var formidable = require("formidable"),
    util = require("util");
var fs = require("fs");

function sleep(milliSeconds) {
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
}

function start(request, response, postData) {
  console.log("Request handler 'start' is called");
  
  /**
  exec("ls -lah", 
  {timeout: 10000, maxBuffer: 20000*1024},
  function (error, stdout, stderr) {
  
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
    console.log("completed");
  });
  **/
/**
    var body = '<html>'+
        '<head>'+
            '<meta http-equiv="Content-Type" content="text/html; '+
                'charset=UTF-8" />'+
                    '</head>'+
                        '<body>'+
                            '<form action="/upload" method="post">'+
                                '<textarea name="text" rows="20" cols="60"></textarea>'+
                                    '<input type="submit" value="Submit text" />'+
                                        '</form>'+
                                            '</body>'+
                                                '</html>';
  
  **/
                      
var body = '<html>'+
    '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
            'charset=UTF-8" />'+
                '</head>'+
                    '<body>'+
                        '<form action="/upload" enctype="multipart/form-data" '+
                            'method="post">'+
                                '<input type="file" name="upload" multiple="multiple">'+
                                    '<input type="submit" value="Upload file" />'+
                                        '</form>'+
                                            '</body>'+
                                                '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

function upload(request, response, postData) {
  console.log("Request handler 'upload' is called");
  /**
  if (typeof(postData) === 'undefined') {
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("no input data!");
  response.end();
  } else {
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("you've sent " + querystring.parse(postData).text);
  //response.write(postData);
  response.end();
  
  }
  **
  /
  var form = new formidable.IncomingForm();
  form.parse(request, function(err, fields, files) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("received!");
    response.end(util.inspect({fields: fields, files: files}));
  });
  **/
  var form = new formidable.IncomingForm();
      form.parse(request, function(err, fields, files) {
        fs.renameSync(files.upload.path, "tmp/test.txt");
           // response.writeHead(200, {'content-type': 'text/html'});
                 // response.write('received upload:<br>');
                //  response.write("");
                
                response.writeHead(302, {
                  'location': 'show'
                });
                response.end();
                        //response.end(util.inspect({fields: fields, files: files}));
                            });

}

function show(request, response, postData) {
  console.log("Request handler 'show' was called.");
    fs.readFile("tmp/test.txt", function(error, file) {
        if(error) {
              response.writeHead(500, {"Content-Type": "text/plain"});
                    response.write(error + "\n");
                          response.end();
                              } else {
                                    response.writeHead(200, {"Content-Type": "text/plain"});
                                          response.write(file);
                                                response.end();
                                                    }
                                                      });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
