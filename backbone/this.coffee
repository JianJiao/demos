$ document
	.ready ->
		Pistol = Backbone.View.extend
			initialize: ->
				console.log @

			say: ->
				console.log @

		pistol = new Pistol
			name: "good"

		dummy = pistol.say
		dummy()

