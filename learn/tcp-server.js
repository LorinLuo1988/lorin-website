var net = require('net');

var server = net.createServer();
var serverPort = 8124;

server.on('connection', function(socket) {
	socket.on('data', function(data) {
		console.log(data + '');
		socket.write('welcom node!');
	});

	socket.on('end', function() {
		console.log('链接断开');
	});
});

server.on('close', function() {
	console.log('serer close');
});

server.on('error', function(error) {
	console.log(`server error ${error}`);
});

server.listen(serverPort, function() {
	console.log(`server listen ${serverPort}`);
});
