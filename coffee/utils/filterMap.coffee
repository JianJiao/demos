arr = [1...10]
# filter: if the filter is complicated
arr = (val for val in arr when do ->
	val % 2 == 0
)


# map: if the map is complecated
arr = for val in arr
	"number " + val
console.log arr

# but if you want to do the same map and filter in multiple arrays
# you can use underscore filter and map function for the case
# or call the filter and map function with the val:

arr = [1...20]
map = (val) ->
	return val + 3
arr = for val in arr
	map(val)
console.log arr





name = 'ok'
# still wrong:
# obj ={
# 	"#{name}": 'kd'
# 	key: 3
# }


# for loop won't create local variable
arr = [1...10]
for val in arr
	obj = {}
	obj[val] = 10

console.log obj
console.log val
