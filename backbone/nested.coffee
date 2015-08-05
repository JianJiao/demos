# bad: array is obj, they share the same one if you do it in the defaults/prototype
$ document
	.ready ->
		class Backpack extends Backbone.Model
			defaults:
				name: "easy"
				age: 45
			initialize: ->
				@set {ids: [4,5,6]}

				@on "change:ids", @say
				@on 'change:name', @name

			say: ->
				console.log "ids has changed"
			name: ->
				console.log 'name changed'

		# b1 = new Backpack()
		# ids = b1.get "ids"
		# ids[1] = 0
		# b1.set {ids: ids}

		# b2 = new Backpack()
		# console.log b2.get("ids")[1]

		# ids2 = b2.get "ids"
		# ids2[0] = 100
		# b2.set {ids: ids2}


		# b2.set
		# 	obj:
		# 		name: "haha"
		# 		age: 13
		# 		yes: true
		# 	model: b1
		# console.log(b2.toJSON())



		# class Pickle extends Backbone.Model
		# 	initialize: (options) ->
		# 		console.log @get 'name'


		# pickle = new Pickle
		# 	name: "pickle"
		# 	age: 13

		# console.log pickle.get 'name'
		# console.log pickle.get 'age'
		# console.log pickle.get 'what'

		# console.log pickle.cid
		# console.log pickle.id


		# pickle1 = new Pickle
		# 	name: 'me'
		# 	id: 5

		# console.log pickle1.id
		# console.log pickle1.get 'id'
		backpack = new Backpack()
		console.log backpack.get 'name'
		backpack.set {'name': 'ok'}
		console.log backpack.get 'name'
		backpack.set {'name': 'ok'}
		console.log 'anything happened?'
























