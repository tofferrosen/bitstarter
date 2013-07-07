var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// read from index.html
var indexData = null;
fs.readFile("index.html", function(err, data) {
	if (err) throw err;
	indexData = data;
});
	
app.get('/', function(request, response) {
  response.send(indexData);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
