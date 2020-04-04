const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "d0fe7bb800cb811af545f7c991d619d5-46ac6b00-9fce7426",
    domain: "sandboxb930cbfa85884786bf6bf33a47f86a86.mailgun.org"
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

