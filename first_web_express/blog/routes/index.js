var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var debug = require('debug');

var User = require('../models/user')
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
      var username = req.body.username,
            password = req.body.password,
                  password_re = req.body['password-repeat'];
                  debug(username);
                    //检验用户两次输入的密码是否一致
                      if (password_re != password) {
                          //req.flash('error', '两次输入的密码不一致!'); 
                              return res.redirect('/reg');//返回注册页
                                }
                                  //生成密码的 md5 值
                                    var md5 = crypto.createHash('md5'),
                                          password = md5.update(req.body.password).digest('hex');
                                            var newUser = new User({
                                                  username: username,
                                                        password: password,
                                                              email: req.body.email
                                                                });
                                                                  //检查用户名是否已经存在 
                         User.get(newUser.username, function (err, user) {
                                 if (err) {
                                  // req.flash('error', err);
                                    return res.redirect('/');
                                      }
                             if (user) {
                                                                                                  //req.flash('error', '用户已存在!');

                                                                                                        return res.redirect('/reg');//返回注册页
                                                                                                            }
                                                                                                                //如果不存在则新增用户
                                                                                                                    newUser.save(function (err, user) {
                                                                                                                          if (err) {
                                                                                                                                  //req.flash('error', err);
                                                                                                                                          return res.redirect('/reg');//注册失败返回主册页
                                                                                                                                                }
      req.session.user = user;//用户信息存入 session
                                                                                                                                                            req.//flash('success', '注册成功!');
                                                                                                                                                                  res.redirect('/');//注册成功后返回主页
                                                                                                                                                                      });
                                                                                                                                                                        });
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
