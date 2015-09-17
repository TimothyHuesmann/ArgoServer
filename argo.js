//Declaring all Requirements:
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes/index');
//var routes = require('./routes/login');
//var register = require('./routes/register');
//var mainMenu = require('./routes/main');
//var newTrip = require('./routes/newTrip');
var sendGrid = require('./routes/sendGrid');
var twillio = require('./routes/twillio');
var braintree = require('./routes/braintree');
var fs = require('fs');

//Declaring Graphics Connections:
app.use(express.static(__dirname +'/views'));

//Connecting Webpages to Server:
app.use('/', routes);
//app.use('/login', login);
//app.use('/register', register);
//app.use('/mainMenu', main);
//app.use('/newTrip', newTrip);
app.use('/email', sendGrid);
app.use('/sms', twillio);
app.use('/braintree', braintree);




//Server Listening Location:
app.listen(5000);