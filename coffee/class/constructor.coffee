class A 
	age: 3
	name: "jack"
	getAge: ()=>
		return @age
	getName: ()=>
		return @name

class B
	age: 4
	name: "rose"
	getName: ()=>
		return @name


a = new A()
b = new B()

class C extends A

c = new C()


switch c.constructor
	when A then console.log("A")
	when B then console.log("B")

console.log(c instanceof A)
console.log(c instanceof B)
console.log(c instanceof C)
