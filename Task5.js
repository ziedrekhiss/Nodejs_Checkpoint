const mailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'myEmail@gmail.com',
      pass: 'myPass'
    }
  });
  
  var mailOptions = {
    from: 'myEmail@gmail.com',
    to: 'mailTo@mail.com',
    subject: 'Hello Node!!',
    text: 'Learn nodejs'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });