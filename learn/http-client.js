var http = require('http');

var req = http.request({
	hostname: '127.0.0.7',
	port: 8142,
	path: '/',
	method: 'Post',
	headers: {
		'Content-Type': 'text/plain',
		'Connection': 'keep-alive',
		'Expect': '100-continue'
	},
	auth: ''
});

req.on('response', function(res) {
	res.on('data', function(chunk) {
		console.log(chunk + '');
	});
});

req.on('socket', function() {
	console.log('socket');
});

req.on('connect', function() {
	console.log('connect');
});

req.on('upgrade', function() {
	console.log('upgrade');
});

req.on('continue', function() {
	console.log('continue');
});

req.write('hello ');
req.write('server');
req.end();