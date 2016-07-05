var http = require("http");
var fs = require("fs");

// Create a server
var server = http.createServer(function(request, response) {
    fs.createReadStream('index.html', {
        'bufferSize': 4*1024
    }).pipe(response);
});

// Lets start our server
server.listen(8080);