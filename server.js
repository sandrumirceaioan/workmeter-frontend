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
var path = require('path');
var httpProxy = require('http-proxy');
var apiForwardingUrl = "https://workmeter-backend.herokuapp.com";

var server = express();
server.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/index.html'));
    });

var apiProxy = httpProxy.createProxyServer();
console.log('Forwarding API requests to ' + apiForwardingUrl);
server.all("/api/*", function(req, res) {
    apiProxy.web(req, res, {target: apiForwardingUrl});
});

// Start the app by listening on the default Heroku port
server.listen(process.env.PORT || 8080);