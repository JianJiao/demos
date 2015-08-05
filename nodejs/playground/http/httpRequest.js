var http = require('http');
var stream = require('stream');
var fs = require('fs');
var options = {
	host: 'www.google.com'
};

var request = http.get(options, function(res){
	res.pipe(fs.createWriteStream('lala'));
}).pipe(fs.createWriteStream('rslt'));

request.on('error', function(err){
	console.log('get an error')
	console.log(err);
});


// request.pipe(fs.createWriteStream('rslt'));
// console.log(request);
// console.log(typeof reqeust);
// console.log(request.constructor);
// console.log(request instanceof stream.Readable);
 console.log(request instanceof stream.Writable);
// console.log(request instanceof stream);
// if(request.pipe !== null){
// 	console.log('it is readable');
// 	console.log(request.pipe);
// }

// console.log(Object.prototype.toString.apply(request.pipe));
// var str = request.pipe.toString();
// console.log(str);

