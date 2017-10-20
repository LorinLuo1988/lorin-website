var net = require('net');

var serverPort = 8124;

var client = net.connect({port: serverPort});

client.on('connect', function() {
	client.write('welcom node');
	console.log('client conncted');
});

client.on('data', function(data) {
	console.log(data + '');
	client.end();
});

client.on('end', function() {
	console.log('client disconnected');
});