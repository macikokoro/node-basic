var express = require('express');
var http = require('http');

var app = express();

// Route handler for the home path
app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(3000, function(){
  console.log('Listening on port 3000');
});
