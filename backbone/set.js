$("document").ready(function(){
	var Test = Backbone.Model.extend({
		defaults: {
			name: "test"
		}
	});

	var test = new Test({
		age: 13
	});

	test.set("more", "and more");


	test.set("name", "aha");
	test.set("name", "whatever");
	test.set("more", "what");
	test.set("more", "whatever");
	test.set("name", "silent");

	/**
	* because you can set multiple attrs at the same time: just pass an obj,
	* so the hasChanged just tells you which attrs has been changed in the last set
	*/

	console.log(test.get("name"));
	console.log(test.get("age"));
	console.log(test.get("nosuchthing"));

	console.log();

	console.log(test.hasChanged("name"));
	console.log(test.hasChanged("age"));
	console.log(test.hasChanged("more"));
	console.log(test.hasChanged());
	console.log(test.get("name"));



});