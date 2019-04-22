"use strict";
const nodemailer = require("nodemailer");

// nodemailer = require('nodemailer');
exports.sendMail = async (user) => {
const name= user.name
const email=user.email
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user:'selirten@gmail.com',
      pass:'se1234se'
    // user: 'yaraan98@gmail.com',
    // pass: '12051898'
  }
});
//selirten@gmail.com
var mailOptions = {
  from:'selirten@gmail.com',
  to: email ,
  subject: 'Registration for LirtenHUb',
  text: `Welcome to LirtenHub , please wait for another email for us for location and time to start using LirtenHUb`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
      console.log("here mailer")
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
//}
///
// // async..await is not allowed in global scope, must use a wrapper
// exports.sendMail = async () => {

//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     let testAccount = await nodemailer.createTestAccount();
  
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: testAccount.user, // generated ethereal user
//         pass: testAccount.pass // generated ethereal password
//       }
//     });
  
//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: '"yaraan98@gmail.com', // sender address
//       to: "omar.sherif-fathi@guc.edu.eg", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>" // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   }
  
//   main().catch(console.error);