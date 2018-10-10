const http = require('http');

const server = http.createServer((request, response) => {

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Node server is running at port ' + port + '. Everything is OK!');
  response.end();

});
