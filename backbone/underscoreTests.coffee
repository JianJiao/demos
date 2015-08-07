$ document
	.ready ->
		arr = []
		reduce = (memo, cur) ->
			memo + cur

		sum = _.reduce arr, reduce, 0
		console.log sum

		arr = []
		reduce1 = (memo, cur) ->
			memo[cur.name] = cur.type
			return memo

		arr = _.reduce arr, reduce1, {}
		console.log arr
