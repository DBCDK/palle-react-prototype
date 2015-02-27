var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/', express.static(__dirname + '/dist'));

app.use('/img', express.static(__dirname + '/app/static/images'));

/*app.use(function(req, res){
       res.sendFile(__dirname + '/dist/index.html');
   });*/
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

var fs = require('fs');
var busboy = require('connect-busboy');
app.use(busboy());
app.post('/fileupload', function(req, res) {
 var fstream;
 req.pipe(req.busboy);
 req.busboy.on('file', function (fieldname, file, filename) {
  fstream = fs.createWriteStream(__dirname + '/files/' + filename);
  file.pipe(fstream);
  fstream.on('close', function () {
   res.redirect('back');
  });
 });
});

var Search = require('./app/utils/Search');

app.get('/API/search', function search(req, res) {
  var query = unescape(req.query.query);
  var template = Search.transformers.workView;

 Search.get(query).transform(template)
 .then(function(result){
  res.send(result);
 })
 .catch(function (err) {
  res.send(err);
 });
});

