### map, filter, reduce, when ###
arr = [1..5]
# map = filter + map || map + filter
# overwrite original
arr = arr
	.filter (e)->
		e > 3
	.map (e)->
		e + 4
	.reduce (red, cur)->
		red + cur

# reduce will return a single value
console.log arr

# coffeescript version of map + filter: also create a new array
# when for filtering, comprehension for map
arr = [1...6]
arr1 = (elem + 4 for elem in arr when elem > 3)
console.log arr
console.log arr1


### loop, comprehension ###
# whether it becomes array comprehension depends on the context

# the for loop returns value **if you ask for it**
arr = [1..10]
result = for idx in [0...arr.length]
	arr[idx]++
console.log result
console.log arr

# if won't if you don't ask for it: look at the compiled code
for i in [0...arr.length]
	arr[i]++

# @note: so return explicitly in any of your function. Or you might
# mistakenly put a loop at the end of a function and it becomes an
# array comprehension and consumes memory.


# wrong:
arr = [1..9]
arr = val for val in arr when val > 3   # should add parenthesis
console.log arr

# if no value matching: will create an empty array
arr = [1..9]
arr = (val for val in arr when val > 3)
console.log arr


# object comprehension: will result in an array
obj =
	name: 'obj'
	age: 12
	tag: 'ok'
console.log obj
# fail silently, for 7 < undefined evaluates to false
for val in obj
	console.log val
# right:
for key of obj
	console.log key
	# console.log obj.key   #wrong
	console.log obj[key]

arr = (obj[key] for key of obj when key == 'name')
console.log arr


### parenthesis ###

# interesting:
# subtractNumbers 12, addNumbers 5,7


### loop ###

# both direction
arr = [5..1]
console.log arr
# but you can control the direction of the loop in another way
arr = [1...3]
# wrong:
for idx in [10..arr.length]
	console.log 'gotcha'
# good:
for idx in [10..arr.length] by 1
	console.log 'this is ok'


### play around ###
# undefined:
# noname.first = 'ka'
# noname.second = 'ja'











