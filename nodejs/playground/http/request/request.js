var request = require('request');
var fs = require('fs');
var stream = require('stream');
//request.get('http://www.google.com').pipe(fs.createWriteStream('result'));
var myrequest = request.get('http://www.google.com');
myrequest.on('error', function(err){
	console.log('error happens');
	console.log(err);
});
myrequest.pipe(fs.createWriteStream('yahoo'));

// console.log(typeof myrequest);
// console.log(myrequest.construtor);
// console.log(Object.prototype.toString.apply(myrequest));
//console.log(myrequest);

// var arr = [2,4,5];
// console.log(typeof arr);
// console.log(Object.prototype.toString.apply(arr));
console.log(myrequest instanceof stream.Writable);
console.log(myrequest instanceof stream);
console.log(myrequest instanceof stream.Readable);
if(myrequest.pipe){
	console.log('can pipe');
}


console.log(typeof myrequest);
var a = 4;

var test = require('tap').test;

test("can get the type", function(t){
	t.type(1, "number");
	t.type(myrequest, stream);
	t.type(myrequest, stream.Readable);
	t.type(a, "number");
	t.end();
})




