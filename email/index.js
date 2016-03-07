var mailer = require("nodemailer");

// Use Smtp Protocol to send Email
var smtpTransport = mailer.createTransport("SMTP",{
    service: "Gmail",
        auth: {
                user: "charlessong0@gmail.com",
                        pass: "Zhuonanhaha123"
                            }
                            });
                            
                            var mail = {
                                from: "Yashwant Chavan <charlessong0@gmail.com>",
                                    to: "song343@purdue.edu",
                                        subject: "Send Email Using Node.js",
                                            text: "Node.js New world for me",
                                                html: "<b>Node.js New world for me</b>"
                                                }
                                                
                                                smtpTransport.sendMail(mail, function(error, response){
                                                    if(error){
                                                            console.log(error);
                                                                }else{
                                                                        console.log("Message sent: " + response.message);
                                                                            }
                                                                                
                                                                                    smtpTransport.close();
                                                                                    });
