// server.js
// load the things we need
var express = require('express');
var app = express();
var logger = require('morgan');
var port = process.env.port || 8080;


app.use(logger("combined"));
//var path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/img/clients", express.static(__dirname + "/img/clients"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/font-awesome", express.static(__dirname + "/font-awesome"));


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index.ejs');
});

// about page 
app.get('/Specials', function(req, res) {
    res.render('Specials.ejs');
});

// contact page 
app.get('/contact', function(req, res) {
    res.render('contact.ejs');
});

app.listen(port);
console.log('listening on http://127.0.0.1:' + port);