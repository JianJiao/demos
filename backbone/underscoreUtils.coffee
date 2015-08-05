$ document
	.ready ->
		dest =
			name: 'dest'
			obj:
				a: 'ok'
				b: 'yes'
				c: 'hale'

		src =
			name: 'src'
			obj:
				more: 'more'
				but: 'but'
				override: 'youbet'

		# shallow merge
		# _.extend dest, src
		# console.log JSON.stringify dest

		# recursive merge
		$.extend true, dest, src
		console.log JSON.stringify dest


