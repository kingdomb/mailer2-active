
// Chunk 1
const express = require('express');
const path = require('path');
const sendMail = require('./mail');
const log = console.log;
const app = express();

const PORT = 8080;


// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//STATIC FOLDER
app.use("/public", express.static(path.join(__dirname, "public")));


// field data
app.post('/email', (req, res) => {

    const {name, subject, email, phone, message} = req.body;
    log('Data: ', req.body);
    
    sendMail(name, subject, email, phone, message, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error'})
        } else {
            res.json({ message: "Email sent!!!!"})
        }
    });
});


// Render home page
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// Error page
app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

// Email sent page
app.get('/email/sent', (req, res) => {
    res.sendFile('emailMessage.html');
});

// Start server
app.listen(PORT, () => log(`Server is starting on PORT, ${PORT}`));