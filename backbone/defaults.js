$(document).ready(function(){

	// var inner = {
	// 	time: 11
	// 	,good: true
	// 	,rock: "yes!"
	// };
	// var Test = Backbone.Model.extend({
	// 	defaults: {
	// 		name: "sam"
	// 		,age: 13
	// 	}
	// 	,initialize: function(options, more){
	// 		this.set(inner, inner);
	// 	}
	// });

	// var test  = new Test({name: "just"}, {aha: "good", ahha: "bad"});
	// console.log(test);
	// console.log(test.toJSON());
	// console.log(test.get("inner"));
	// console.log(inner);

	// var a = true;
	// console.log(_.isEmpty(a));



	console.log("testing")

	var Test = Backbone.Model.extend({
		defaults:{
			name: "test"
			,age: 13
		}
	});
	var test = new Test();
	test.on("change:end", say);
	function say(){
		console.log("something changed");
	}
	test.set({
		lalala: "haha"
		,papapa: "baba"
	});
	test.set("end", "oha");
	test.set("haha", "pilipala");
	console.log(test.hasChanged("haha"));
	console.log(test.changedAttributes());
	console.log(test.changed);
	console.log(test.get("haha"));



	console.log("end");




});