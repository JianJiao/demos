$(document).ready(function(){

	var AppView = Backbone.View.extend({
		el: "#appView"
		,template: {}
		,events: {
			"click p": "clicked"
		}
		,initialize: function(){
			this.on("what", function(e, args){
				console.log("what happend");
				console.log(e);
				console.log(args);
			});
			this.render();
			console.log(this.$el);
		}
		,render: function(){
			console.log("render itself");
			this.trigger("what", {da:"ta", ta:"da"}, "la");
			console.log($("#appView"));
			this.$el.on("click", function(event){
				console.log("bind via $");
				console.log(event);
			});
		}
		,clicked: function(event){
			console.log("note what is the arg");
			console.log(event);
		}
	});

	var FormView = Backbone.View.extend({
		el: "#aForm"
		,template: {}
		,events: {
			"submit form": "submitted"
		}
		,initialize: function(){}
		,render: function(){}
		,submitted: function(e){
			console.log("default prevented");
			e.preventDefault();
			console.log("called here");
		}
	});

	// var formView = new FormView();

	// var appView = new AppView();



//****************immediate functions***

	/**
	*	show a problem with backbone model defaults
	*/
	(function(){
		var NodeModel = Backbone.Model.extend({
			defaults: {
				name: "default"
			}
		});

		var Integer = NodeModel.extend({
			defaults: {
				name: "Integer"
			}
		});

		// will override the super class's defaults
		// now yuo lose name
		// solution: if you want to use inherit defaults and extend it,
		// define it as a function and call the super and extend it in the subclass
		var Bool = NodeModel.extend({
			defaults: {
				age: "23"
			}
		});


		var integer = new Integer();
		var bool = new Bool();
		console.log(integer.get("name"));
		console.log(bool.get("name"));
		console.log(bool.get("age"));

		// this is ok since it is primitive
		console.log("test same reference");
		var integer1 = new Integer();
		integer1.set("name", "myOwn");
		console.log(integer1.get("name"));
		console.log(integer.get("name"));


	});


	/**
	*	use defaults nested attr, or obj attr, 
	* problematic: shared by all objs
	*/
	(function(){
		var Node = Backbone.Model.extend({
			defaults: {
				pro: {
					name: "parent"
				}
			}
		});

		var node1 = new Node();
		var node2 = new Node();

		node1.get("pro").name = "son";
		console.log(node2.get("pro"));

	})();


	/**
	*	attr and prop, backbone model 
	*/
	(function(){
		// ### to use backbone model attribute, you gotto follow its convention

		// *provide direct prop
		var NodeModel = Backbone.Model.extend({
			// this is not a conventional way of defining properties
			// you can access it directly
			// so it is not consistent with:
			// defaults, set, get, and providing attrs obj in new
			name: "node"
		});

		var node1 = new NodeModel();
		// *provide attr at initialization
		var node2 = new NodeModel({
			// note this doesn't override the previous one
			name: "bug"
			, title: "new field"
		});

		// *direct access
		console.log(node1.name);
		console.log(node2.title);
		console.log(node2.name);

		node2.title = "another";
		console.log(node2.title);

		// *use the getter 
		console.log("getter and setter");
		console.log(node1.get("name"));
		console.log(node2.get("name"));
		console.log(node2.get("title"));

		// *use the setter
		console.log("test setter");
		node1.set("name", "node1");
		node2.set("name", "node2");
		console.log(node1.name);
		console.log(node2.name);
		console.log(node1.get("name"));
		console.log(node2.get("name"));

	});







	(function(){
		var FatherView = Backbone.View.extend({
			el:{}
			,template: {a: "b"}
			,events:{}
			,initialize: function(){}
			,render: function(){
				console.log("form the father");
			}
		});

		var SonView = FatherView.extend({
			el:{}
			,template: {c: "d"}
			,events: {}
			,initialize: function(){}
			,render: function(){
				console.log("from the son");
			}
		});

		var son = new SonView();
		son.render();
		console.log(son.template.c);
	});



});

