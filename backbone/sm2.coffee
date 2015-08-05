

a = 4
class Car extends Backbone.Model
	doSomething: =>
		@trigger "dosomething"


class CarView extends Backbone.View
	initialize: =>
		@model.on "dosomething", @myHandler


	myHandler: =>
		console.log "yes"

	somethingelse: =>
		console.log "something else"

	showthemagic: =>
		console.log(JSON.stringify(@myHandler))
		console.log @somethingelse



car = new Car()
carView = new CarView
	model: car

carView.showthemagic()

