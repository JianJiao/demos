# The hash in class declaration will add everything to
# the prototype. Same to vanila javascript, this causes 
# problem when you assign an obj to a prop
# better to initialize fields inside constructors, so you'd better
# define a constructor function

# wrong:
class A
	# these two added to the prototype chain
	name: "a"
	obj: {
		da: "la"
	}
	# statements:
	# note: this one will be executed on the class itself
	# meaning: instances won't have this field
	@age = 4


class B extends A




a1 = new A()
a2 = new A()
a1.obj.da = "changed"
console.log(a2.obj.da)

console.log a1.age

# right:
class C
	constructor: ->
		@name = "yes"
		@obj = 
			da: "not changed"

c1 = new C()
c2 = new C()
c1.obj.da = "changed"
console.log c1.obj.da
console.log c2.obj.da







