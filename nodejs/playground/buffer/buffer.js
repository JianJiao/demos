var buf1 = new Buffer("cat");
var buf2 = buf1.slice(1,3);
console.log(buf2.toString());
console.log(buf2.length);

var buf3 = new Buffer(2);
buf1.copy(buf3, 0, 1, 3);
console.log(buf3.toString());

buf1[2] = 222;
console.log(buf1.toString());

console.log(buf2.toString());
console.log(buf3.toString());


