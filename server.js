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

var express = require('express'),
    proxy = require('http-proxy-middleware'),
    app = express(),
    path = require('path');

    app.use(proxy('/api', { target: 'https://workmeter-backend.herokuapp.com', changeOrigin: true }));
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/dist/index.html');
    });
    var server = require('http').createServer(app);
    server.listen(process.env.PORT || 8080);