var path = require("path");
var curPath = path.normalize(".");
console.log(curPath);
// it doesn't touch the filesystem!
console.log(path.normalize("bilibili/pilipili/.."));

console.log(path.join("a", "b"));
console.log(path.resolve("a/b", "c/d","./e/f"));
// although this will append the current dir, it still doesn't touch
// the file system

console.log(path.relative("a/bc", "d/ef"));
console.log(path.relative("a/b/c/d", "b/c/d/e"));
console.log(path.relative("a/b/c/d", "a/b/c/d/e/f"));   // see the difference
// node will see them as absolute paths, that's why it's different

var filePath = path.normalize("./test/result.txt");
console.log(filePath);
console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(path.basename(filePath, path.extname(filePath)));

/******deprecated**********
path.exists(filePath, function(flag){
	console.log(flag);
});

path.exists("something", function(flag){
	console.log(flag);
});
**************************/

var fs = require("fs");
fs.exists(filePath, function(flag){
	console.log(flag);
});


fs.exists("something", function(flag){
	console.log(flag);
});

