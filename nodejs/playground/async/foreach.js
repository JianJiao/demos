(function(){
	var arr = [1,3,4,5,6,3];
	arr.forEach(function(i){
		console.log(i);
	});
});

(function(){
	var fs = require('fs');
	var arr = [1,2,3,4,5,6,7];
	var ws = fs.createWriteStream('./test.txt');
	ws.on('error',function(err){
		console.log(err);
	});
	arr.forEach(function(i){
		ws.write(i.toString());
		console.log("en");
	});
	ws.end();
	console.log("llot");
});

(function(){
	var arr = [1,2,3,4,5,6,7];
	arr.forEach(function(i){
		if(i !== 4){
			setTimeout(function(){
				console.log("slow" + i);
			}, 3000)
		}else{
			console.log(4);
		}
	});
	console.log("outside");
	console.log("as you can see, the asynchronous functions \n are still async,"
		+ "nothing to do with the loop itself");
})();