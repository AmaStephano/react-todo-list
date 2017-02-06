var express = require('express');
var fs = require('fs');
var glob = require('glob');
var path = require('path');

var app = express();
//app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('fs-ac server is running at http://localhost:3000/');
});