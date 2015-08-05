$ document
	.ready ->
		class Father extends Backbone.Model
			initialize: (name, second, sta)->
				console.log name, second, sta


		class Son extends Father
			initialize: (sta, name, second)->
				super


		son = new Son "tony", "mom", "aha"
