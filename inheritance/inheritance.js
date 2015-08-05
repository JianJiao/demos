// refere to backbone for inheritance issue with 
// backbone extend and model.defaults

/**
*	Here are good reasons to 
*		+ have fields declared in constructor and 
*			methods added to prototype.
*		+ not use new directly to implement inheritance
*
*/

var A = function(){
	this.name = "la";
	this.papa = {
		name: "i"
	};
}

var B = function(){
	this.time = "bit";
}

B.prototype = new A();

var a1 = new A();
var a2 = new A();

var b1 = new B();
var b2 = new B();

console.log(a1.name);
console.log(a2.name);
console.log(b1.name);
console.log(b2.name);

console.log("above should all be la");

// ok with A 
a1.name = "ti";
console.log(a1.name);
console.log(a2.name);
console.log(b1.name);
console.log(b2.name);
console.log("still ok with A");

// also ok with b if you do it this way
// because you create your own local copy, 
// you didn't change the one in the prototype chain
b1.name = "ta";
console.log(a1.name);
console.log(a2.name);
console.log(b1.name);
console.log(b2.name);


// but here, if that prop is an obj!
console.log("before");
console.log(a1.papa);
console.log(a2.papa);
console.log(b1.papa);
console.log(b2.papa);

console.log("after");
console.log("fine with A");
a1.papa.name = "j";
console.log(a1.papa);
console.log(a2.papa);
console.log(b1.papa);
console.log(b2.papa);

console.log("not fine with B")
// here what's in the prototype chain is an obj, you create a local reference 
// to that obj. So all instances share that same obj
b1.papa.name = "k";
console.log(a1.papa);
console.log(a2.papa);
console.log(b1.papa);
console.log(b2.papa);

console.log("right way to do it");
// in the constructor you define the fields
var C = function(){
	// you cannot directly call it in this way, this will bind the propoties to global
	// A();
	A.call(this);
	this.another = "ha";
}

// in the prototype you only copy the methods
// and you only store methods in prototype, and you store methods only 
// in prototype, so A.prototype will 
// have all the methods of A
C.prototype = Object.create(A.prototype);
// also should do the constructor 
// ...

var c1 = new C();
var c2 = new C();

console.log("before");
console.log(c1.papa);
console.log(c2.papa);

console.log("after");
c1.papa.name = "en";
console.log(c1.papa);
console.log(c2.papa);



















