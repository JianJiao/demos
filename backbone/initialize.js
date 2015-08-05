// this is to test if backbone initialize follows the same rule as coffeescript 
// constructor
// and the answer is yes

var Me = Backbone.Model.extend({
	initialize: function(){
		this.name = "me";
	}
	,say: function(){
		console.log("yes");
	}
});

var Son = Me.extend({
	and: function(){
		console.log("and");
	}
});

var C = Me.extend({
	initialize: function(){
		this.age = 3;
	}
})

var son = new Son();
var c = new C();
console.log(son.name);
console.log(c.name);
console.log(c.age);

