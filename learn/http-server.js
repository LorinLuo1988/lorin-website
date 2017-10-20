var http = require('http');

var server = http.createServer();
var serverPort = 8142;

function response(req, res) {
	var buffers = [];

	req.on('data', function(chunk) {
		buffers.push(chunk);
		console.log('chunk');
	}).on('end', function() {
		var buffer = Buffer.concat(buffers);

		console.log(buffer);
		res.setHeader('Content-Type', 'text/html');
		res.setHeader('charset', 'UTF-8');
		res.writeHead(200);
		res.write('<h1>hello</h1>');
		res.write('<h4>node!</h4>');
		res.end();
	});
}

server.on('connection', function() {
	console.log('connection');
});

server.on('request', function(req, res) {
	console.log('request');
	response(req, res);
});

server.on('close', function() {
	console.log('close');
});

server.on('checkContinue', function(req, res) {
	console.log('checkContinue');
	response(req, res);
});

server.on('connect', function(req, res) {
	console.log('connect');
});

server.on('upgrade', function() {
	console.log('upgrade');
});

server.on('clientError', function() {
	console.log('clientError');
});

server.listen(serverPort, function() {
	console.log(`server listen ${serverPort}`);
});