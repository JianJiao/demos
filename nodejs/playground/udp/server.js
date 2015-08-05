var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var message = new Buffer('this is a multicast message');

// shit! No backward compatibility! The bind becomes asyanchronous
// now!

client.bind(4000, function(){
	client.setMulticastTTL(10);
	client.send(message, 0, message.length, 4000, '230.1.2.3');
	client.close();
});


// you might have to do the client and server in different machines?
// because you cannot bind two server on the same port on the same 
// machine
