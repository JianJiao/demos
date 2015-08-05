$ document
	.ready ->
		Backbone.Events.on "laterEvents", ->
			console.log "get the event"

		console.log "some initialization"

		Backbone.Events.trigger "laterEvents"

