$ document
	.ready ->
		obj1 =
			inputs:
				in0: ''
				in1: ''
			outputs:
				out0: {name: 'a'}
				out1: {name: 'b'}
		obj2 =
			outputs:
				out0: {name: 'a', type: 'heating'}

		obj = $.extend true, obj2, obj1
		console.log obj


