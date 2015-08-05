var EventEmitter = require("events").EventEmitter;
var util = require("util");
var MyClass = function(){}
util.inherits(MyClass, EventEmitter);

MyClass.prototype.say = function(){
	this.emit("hello", "from my class");
}

myClass = new MyClass();
myClass.on("hello", function(message){
	console.log(message);
});
myClass.say();


