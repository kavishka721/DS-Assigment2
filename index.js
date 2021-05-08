// Import express
let express = require('express')

//import mongoose
let mongoose = require('mongoose');

//import bodyParser
let bodyParser = require('body-parser');

// Initialize the app
let app = express();



// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());



mongoose.connect('mongodb://localhost/itemshoppingsystem', { useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Import routes
let apiRoutes = require("./routes/api-routes");
// Use api routes in the App
app.use('/api', apiRoutes);

let mobileApiRoutes = require('./routes/mobile-api-routes');

app.use('/mobile', mobileApiRoutes);


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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') //process.env.SENDGRID_API_KEY 
const msg = {
  to: 'kavishka.kolamunna1@gmail.com', // Change to your recipient
  from: 'techgadget1100@gmail.com', // Change to your verified sender
  subject: 'Order is confirmed.',
  text: 'Thank you for your order.',
  html: '<strong>and easy to do anywhere,th Node.js</strong>',
}

// send confirmation email
sgMail.send(msg).then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  });
  

// app.get('/send-email', (req,res) => {
    
//     //Get Variables from query string in the search bar
//     //const { recipient, sender, topic, text } = req.query; 

//     //Sendgrid Data Requirements
//     const msg = {
//         to: recipient, 
//         from: sender,
//         subject: topic,
//         text: text,
//     }

//     //Send Email
//     sgMail.send(msg)
//     .then((msg) => console.log(text));
// });

// Setup server port
var port = process.env.PORT || 8082;

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});