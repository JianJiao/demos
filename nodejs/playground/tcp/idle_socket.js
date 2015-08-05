var server = require('net').createServer(function(socket) {
  console.log('new connection');

  socket.setEncoding('utf8');

  socket.write("Hello! You can start typing. Type 'quit' to exit.\n");

  socket.on('data', function(data) {
    console.log('got:', data.toString());
    if (data.trim().toLowerCase() === 'quit') {
      socket.write('Bye bye!');
      return socket.end();
    }
    socket.write(data);
  });

  socket.on('end', function() {
    console.log('Client connection ended');
  });

  socket.setTimeout(3000, function(){
  	socket.end("idle timeout, disconnecting, bye!");
  });

  socket.setKeepAlive(true, 1000);

}).listen(4001);