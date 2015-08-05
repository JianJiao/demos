$(document).ready ->
	class TestView extends Backbone.View
		tagName: "div"
		className: "zombie"
		initialize: =>
			# note we didn't explicitly pass the context
			@model.on "a" , @myHandler

		events: 
			"click button": "remove"

		myHandler: =>
			console.log "this is the handler"

		render: =>
			input ="<label for = 'me'>hahaha</label>
				<input id = 'me' name = 'me' type = 'text' value = 'haha'/>
				<button>remove</button>"
			@$el.append input
			@

		remove: =>
			super
			@off()
			@model.off null, null, @


	class Test extends Backbone.Model
		someMethod: =>
			@trigger "a"

	# THE APP LOGIC
	test = new Test()
	$("#create").click ->
		testView = new TestView
			model: test
		$("#testZombie").append testView.render().el







