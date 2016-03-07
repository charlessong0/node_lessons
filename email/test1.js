var nodemailer = require('nodemailer');
 
var smtpConfig = {
    host: 'smtp.office365.com',
        port: 587,
            secure: false, // use SSL 
                auth: {
                        user: 'song343@purdue.edu',
                                pass: 'Zhuonan@haha123'
                                    }
                                    };
 // create reusable transporter object using the default SMTP transport 
 var transporter = nodemailer.createTransport(smtpConfig);
  

  // setup e-mail data with unicode symbols 
  var mailOptions = {
      from: '"Fred Foo 👥" <song343@purdue.edu>', // sender address 
          to: 'charlessong0@gmail.com', // list of receivers 
              subject: 'Hello ✔', // Subject line 
                  text: 'Hello world 🐴', // plaintext body 
                      html: '<b>Hello world 🐴</b>' // html body 
                      };
                       
                       // send mail with defined transport object 
                       transporter.sendMail(mailOptions, function(error, info){
                           if(error){
                                   return console.log(error);
                                       }
                                           console.log('Message sent: ' + info.response);
                                           });
