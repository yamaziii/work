class Animal {
	constructor(type, age, name) {
		this.type = type
		this.age = age
		this.name = name
	}
}
class Dog extends Animal {
	constructor(type, age, name, voice) {
		super(type, age, name)
		this.voice = voice
	}
	sayGav() {
		console.log(`${this.voice}`)
	}
}

class Cat extends Animal {
	constructor(type, age, name, action) {
		super(type, age, name)
		this.action = action
	}
	doAction() {
		console.log(`${this.action}`)
	}
}
const dog = new Dog('dog', 3, 'alex', 'Gav')
dog.sayGav()
const cat = new Cat('cat', 3, 'barsik', 'прыгаю')
cat.doAction()

// class Tiger extends Cat {
// 	constructor(type, age, name, weight)
// 		super(type, age, name){
// 		this.weight = weight
//  }
//  sayWeight() {
// 	console.log(`${this.weight}`);
//  }
// }
// class Wolf extends Dog {
// 	constructor(type, age, name, weight)
// 	super(type, age, name){
// 		this.weight = weight
//  }
//  sayWeight () {
// 	console.log(`${this.weight}`);
//  }
// }

// const tiger = new Tiger('cat', 6, 'bars', '100kg')
// tiger.sayWeight()
// const wolf = new Wolf('dog', 4, 'maks', '50kg')
// wolf.sayWeight()

// простые задачи
class Worker {
	constructor(name, surname, rate, days) {
		this.name = name
		this.surname = surname
		this.rate = rate
		this.days = days
	}
	getSalary() {
		console.log(`${this.rate * this.days}`)
	}
}
const worker = new Worker('Иван', 'Иванов', 10, 31)
console.log(worker.name)
console.log(worker.surname)
console.log(worker.rate)
console.log(worker.days)
console.log(worker.getSalary())

class Worker1 extends Worker {
	constructor(name, surname, rate, days) {
		this.name = name
		this.surname = surname
		this.rate = rate
		this.days = days
	}
	getSalary() {
		console.log(`${this.rate * this.days}`)
	}
}
const worker1 = new Worker('тема', 'Иванов', 30, 21)
console.log(worker1.name)
console.log(worker1.surname)
console.log(worker1.rate)
console.log(worker1.days)
console.log(worker1.getSalary())
class Worker2 extends Worker {
	constructor(name, surname, rate, days) {
		this.name = name
		this.surname = surname
		this.rate = rate
		this.days = days
	}
	getSalary() {
		console.log(`${this.rate * this.days}`)
	}
}
const worker2 = new Worker('вася', 'Иванов', 13, 21)
console.log(worker2.name)
console.log(worker2.surname)
console.log(worker2.rate)
console.log(worker2.days)
console.log(worker2.getSalary())
