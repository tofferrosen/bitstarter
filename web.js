var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// read from index.html
var indexFile = fs.readFileSync("index.html", 'utf8'); 
	
app.get('/', function(request, response) {
  response.send(indexData.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
