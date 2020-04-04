const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config();
const keys = require("./keys");

const api = keys.api.secret;
const domain = keys.domain.secret;

const auth = {
  auth: {
    api_key: api,
    domain: domain,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, subject, email, phone, message, cb) => {
  const mailOptions = {
    from: email,
    to: "kbmajor80@gmail.com", // TODO: the receiver email has to be authorized for the free tier
    name,
    phone,
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

  module.exports = sendMail;
