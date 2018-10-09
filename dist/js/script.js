const APP = (() => {

	const http = require('http');

	const server = http.createServer( (request, response) => {

		// Send the HTTP header
		// HTTP Status: 200 : OK
		// Content Type: text/plain
		response.writeHead(200);

		// Send the response body as "Hello World"
		response.end('Hi everybody!');

	});
	server.listen(8080);

	// Console will print the message
	console.log('Server running at http://127.0.0.1:8081/');

})();
