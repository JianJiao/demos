class A
	name: "a"
	obj:
		da: "la"
	@age = 4

class B extends A


a1 = new A()
a2 = new A()
a1.obj.da = "changed"
console.log(a2.obj.da)


