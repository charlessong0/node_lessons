var express = require('express');
var router = express.Router();
//var test = require("./test");


/* GET home page. */
/**
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
**/


var test1 = {};
test1.username = "wo";
test1.title = "hahaha";

console.log(test1.username);

var test = {
  "username": "charles",
  "usertype": "judge",
  "title": "Express"
};


module.exports = function(app) {
  app.get('/', function (req, res) {
    //res.test = test;

//test.data();

    res.render('index', {test: test});
  });
  app.get('/test', function (req, res) {
    res.send("hello, world! hahahaha!");
  });

  app.get('/login', function (req, res) {
    res.render('login', {test: test});
  });
  app.post('/login', function (req, res) {
    
  });

  app.get('/reg', function (req, res) {
    res.render('reg', {test:test});
  });

  app.post('/reg', function (req, res) {
    
  });
  app.get('/post', function (req, res) {
    res.render('post', {test:test});
  });

  app.post('/post', function (req, res) {
    
  });
  app.get('/logout', function (req, res) {
    
  });
};

//module.exports = router;
