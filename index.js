var express = require('express');
var app = express();
var http = require('http').Server(app);
var services = require('dbc-node-services');
var io = require('socket.io');
var socket = io(http);

services.init(socket);

app.use('/', express.static(__dirname + '/dist'));

app.use('/img', express.static(__dirname + '/app/static/images'));

app.get('/', function root (req, res) {
 res.sendFile(__dirname + '/app/layouts/index.html');
});
app.get('/questions', function root (req, res) {
 res.sendFile(__dirname + '/app/layouts/index.html');
});
app.get('/questions/*', function root (req, res) {
 res.sendFile(__dirname + '/app/layouts/index.html');
});
app.get('/admin/', function root (req, res) {
 res.sendFile(__dirname + '/app/layouts/index.html');
});

app.get('/search/*', function root (req, res) {
 res.sendFile(__dirname + '/app/layouts/index.html');
});

http.listen(4000, function http_listen () {
 console.log('the app is up and running');
});


