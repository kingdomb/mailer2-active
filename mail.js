const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config();
const api = keys.api.secret;
const domain = keys.domain.secret;
const keys = require("./keys");


const auth = {
  auth: {
    api_key: api,
    domain: domain
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, subject, email, phone, message, cb) => {
  const mailOptions = {
    from: email, 
    to: "kbmajor80@gmail.com", // TODO: the receiver email has to be authorized for the free tier
    name,
    phone,
    subject,
    text: message
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    console.log("error occurs");
    console.log(err)
    } else {
      cb(null, data);
    console.log("Message sent");
    
    }
  });
};

newFunction();
function newFunction() {
    module.exports = sendMail;
}

