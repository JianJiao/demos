# if no value matching:
arr = [1..9]
arr = (val for val in arr when val > 10)
console.log arr


obj =
	name: 'obj'
	age: 19

newObj = {}
newObj[key] = val for key, val of obj when do ->
	key == 'name'
console.log newObj

# list comprehension with long filter function:
arr = [1..10]
# no: you changed val in the filter function
arr = (val for val in arr when do ->
	val = val / 2
	val > 3
	)
console.log arr

arr = [1..10]
arr = (val for val in arr when do->
	tmp = val / 2
	tmp > 3
)
console.log arr

# the equivalent
arr = [1..10]
# have to explicitly assign since it creates a new array
arr = arr.filter (val)->
	tmp = val / 2
	tmp > 3

console.log arr


arr = [1...10]
sum = arr.reduce (memo, cur)->
  memo + cur
, 0
console.log sum






