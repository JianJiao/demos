class First
	name: "first"
	printName: ()=>
		console.log @name
	printConstructor: ()=>
		console.log @constructor

class Second extends First
	name: "second"
	

second = new Second()
second.printName()
second.printConstructor()
console.log(Second)
console.log('****')
second.getFName();