var http = require('http');
http.createServer(function (request, response){
    response.write('hello world');
    response.end();
    
    
});
http.listen(8080);
console.log("Server running at http://127.0.0.1:8000/");

