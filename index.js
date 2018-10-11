const port = 8080;
const host = 'https://test-therocklist.netlify.com';

const http = require('http');

const server = http.createServer((request, response) => {

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Node server is running at port ' + port + '. Everything is OK!');
  response.end();

});

server.listen(port, host, () => {

  console.log('Node server is running at port ' + port + '. Everything is OK!');

});
