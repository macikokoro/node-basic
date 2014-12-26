var express = require('express');
var http = require('http');

var app = express();

// Route handler for the home path
app.get('/', function(req, res){
  res.send('All aboard!!!');
});

var server = http.createServer(app);
server.listen(3000, function(){
  console.log('Listening on port 3000');
});
