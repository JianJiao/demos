$(document).ready(function(){
	// right:
	var C = Backbone.Model.extend({
		defaults:{
			name: "java"
			, age: 13
		}
		,initialize: function(){
			this.obj = {
				state: "excited"
				, age: "young"
				, motto: "simple"
			}
		}
		,say: function(){
			console.log(this.get("name"));
		}
	});

	var c1 = new C();
	console.log(c1.defaults);
	console.log(c1.attributes);
	console.log(c1.obj);

	// set it:
	console.log("change it!");
	c1.set("name", "python");
	console.log(c1.defaults);
	console.log(c1.attributes);
	console.log(c1.obj);


	console.log("now change the obj");
	c1.obj.state = "angry";

	console.log(c1.obj);

	var c2 = new C();
	console.log(c2.obj);


	console.log("**😈***\n\n\n")



	// wrong: shouldn't put fields in prototype
	//    + primitive would be ok 
	//    + obj is not ok 
	//    + inheritance is the same
	var A = Backbone.Model.extend({
		name: "A"
		,obj: {
			name: "inside"
		}
		,say: function(){
			console.log(this.name);
			console.log(this.obj.name);
		}
	});

	var a1 = new A();
	a1.say();
	var a2 = new A();
	a2.say();

	// change it
	console.log("after");
	a1.name = "pili";
	a1.obj.name = "pala";

	a1.say();
	a2.say();


	// inheritance
	console.log("with inheritance");
	var B = A.extend({});

	var b1 = new B();
	var b2 = new B();
	b1.say();
	b2.say();

	// change will affect prototype
	console.log("change again")
	b1.name = "changed";
	b1.obj.name = "also changed";

	b1.say();
	b2.say();

	console.log("and test as");
	a1.say();
	a2.say();

	// result shows that primitives is safe, you can define it in 
	// prototype or in constructor(attached directly to the obj itself)
	// , but objs are not ok with prototype.
	// to create your own copy, should declare them in constructor





});