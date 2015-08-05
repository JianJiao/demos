class A
	constructor: ->
		@name = "A"

	say: =>
		console.log @name

	notFat: ->
		console.log @name


class B extends A
	constructor: ->
		@age = 3

	fight: ->
		console.log "hey!"

class C extends A
	fight: ->
		console.log "C fight"


a = new A()
b = new B()
c = new C()
console.log a.name
console.log b.name
console.log c.name