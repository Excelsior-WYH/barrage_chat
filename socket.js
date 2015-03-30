	
	var io = require('socket.io');
	
	exports.createSocket = function (server) {
		io = io(server, {path : "/chat_video/socket_io"});
		io.on('connection', function(socket) {
		    console.log('正在举办活动!');
		});
	}
	
	
	exports.wallShow = function (info) {
		io.emit('wall show', info);
	}
	
