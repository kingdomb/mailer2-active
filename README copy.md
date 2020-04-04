# Email Examples - Nodejs

This is a list of email examples in Node.js

| Topics          | Videos                                                               | Project                |
| -------         |:--------------------------------------------------------------------:| -------------------:|
| Send email Attachment | [video](https://youtu.be/9zEhGUIUwxY)| [Link](https://github.com/accimeesterlin/nodemailer-examples/tree/master/sendAttachment) |
| Send email with MailGun | [video](https://youtu.be/Va9UKGs1bwI)| [Link](https://github.com/accimeesterlin/nodemailer-examples/tree/master/sendEmailWithMailGun) |
| Send Email with Gmail | [video](https://youtu.be/Va9UKGs1bwI)| [Link](https://github.com/accimeesterlin/nodemailer-examples/tree/master/sendEmailWithGmail) |
| Send email templates with Handlebars | [video](https://youtu.be/38aE1lSAJZ8)| [Link](https://github.com/accimeesterlin/nodemailer-examples/tree/master/sendTemplates) |
| Submit a form, and recieve an email | [video](https://youtu.be/JpcLd5UrDOQ)| [Link](https://github.com/accimeesterlin/nodemailer-examples/tree/master/sendFormEmail) |horized recipient](https://app.mailgun.com/app/account/authorized) otherwise you will NOT be able to send email to any recipients on the free tier without authorizing their email. Once you have an authorized recipient, replace the RECEIVER_EMAIL with the authorized recipient email

```
const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'RECEIVER_EMAIL', // TODO: the receiver email
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}
```


#### Step 4
In order to send an email, we can bring our `sendMail` function from `mail.js` file, and use it as below. If everything goes well, you should receive an email.
```
const sendMail = require('./mail');

sendMail(email, subject, text, function(err, data) {
    if (err) {
        return console.log('Error occurs);
    }
    return console.log('Message sent!!!');
});

```



Once you have successfully completed the above steps. Run `npm start` and navigate to http://localhost:8080 to start the app. 

If you're having issues with sending emails, please watch this [walkthrough video](https://youtu.be/JpcLd5UrDOQ). If you are still experiencing issues, please open an issue