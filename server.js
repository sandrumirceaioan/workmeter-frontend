// // Require express
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

var express = require('express');
var httpProxy = require('http-proxy');
var apiForwardingUrl = 'https://workmeter-backend.herokuapp.com';
var server = express();
server.set('port', 3000);
server.use(express.static(__dirname + '/dist'));
var apiProxy = httpProxy.createProxyServer();

server.listen(process.env.PORT || 8080);