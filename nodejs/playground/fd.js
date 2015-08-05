var fs = require("fs");

fs.open("./path/test/result.txt", 'a', function(err, fd){
	if(err){
		throw err;
	}
	console.log(fd);
	fs.close(fd);
});

fs.open("./path/test/result.txt", 'a', function(err, fd){
	if(err){
		throw err;
	}
	console.log(fd);
	fs.close(fd);
});

fs.open("./path/test/result.txt", 'a', function(err, fd){
	if(err){
		throw err;
	}
	console.log(fd);
	fs.close(fd);
});
