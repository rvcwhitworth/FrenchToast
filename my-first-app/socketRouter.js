const http = require('./server.js').http
const io = require('socket.io')(http);


module.exports = (payload) => {

	// let routing = {
	// 	opened: 'roomname1',
	// 	labeled: 'roomname2',
	// 	created: 'roomname3',
	// 	unlabeled: 'roomname4'
	// }


	// let path = routing[payload.action]

	// if(path){
	// 	console.log('pathing', path)
	// } else{
	// 	console.log('undefined')
	// }
	let roomName = payload.action
	io.sockets.in(roomName).emit('payload', payload);

}

io.on('connection', (socket) => {
  let roomName = '';
  console.log('server: a user is connected');
  socket.on('room', (room) => {
    roomName = room;
    socket.join(room);
  });
  // socket.on('chat message', (msg) => {
  //   io.sockets.in(roomName).emit('chat message', msg);
  // });
  socket.on('disconnect', (socket) => {
    console.log('a user has disconnected');
  });
});