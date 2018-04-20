const io = require('socket.io')();
const port = 3000;



io.on('connection', (socket)=> {
	console.log('user connected')


	socket.on('disconnect', ()=> {
		console.log('user disconnected')
	})
});

io.listen(port);
	console.log('listening on port 3000')