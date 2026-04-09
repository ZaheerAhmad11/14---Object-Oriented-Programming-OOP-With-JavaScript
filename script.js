'use strict';

// -----------------------05
// -------------------------Constructor Function and the New Operator

// const Person = function (firstname, birthyear) {
//   // Instance Properties
//   this.firstname = firstname;
//   this.birthyear = birthyear;
// Instance Method
// never do this
//   this.calcAge = function () {
//     console.log(2026 - this.birthyear)
//   }
// };

// 1. New {} is created
// 2. function is called , this = {}
// 3. linked to prototype
// 4. function automatically return {}

// const zaheer = new Person('Rao Zaheer', 2005);
// const mubashir = new Person('Mubashir iQbal', 2001);
// const raffy = new Person('Abd Raffy', 2002);
// const abdullah = new Person('Abdullah', 2003);
// console.log(zaheer, mubashir, raffy, abdullah);

// console.log(zaheer instanceof Person);
// console.log(hamyu instanceof Person)

// -----------------------06
// -------------------------Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2026 - this.birthyear);
// };

// Person.prototype.species = 'Homo Sapiens';

// zaheer.calcAge();
// mubashir.calcAge();
// console.log(zaheer.species)
// console.log(zaheer.__proto__);
// console.log(zaheer.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(zaheer));
// console.log(zaheer.hasOwnProperty('firstname'))

// -----------------------08
// -------------------------Prototypal Inheritance on Built-in objects
// console.log(zaheer.__proto__);
// console.log(zaheer.__proto__.__proto__);
// console.log(zaheer.__proto__.__proto__.__proto__);

// const arr = [3, 4, 5, 6, 8, 9];
// console.log(arr.__proto__)
//////////////////////////////////////////////////
// -----------------------09
// -------------------------Coding Challenge # 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelrate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 100);
// bmw.accelrate()
// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.accelrate()
// bmw.accelrate()
// mercedes.accelrate()
// -----------------------10
// -------------------------ES6 Classes
// Class Expression
// const PersonCl = class {}

// Class Declaration
// class PersonCl {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2026 - this.birthyear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age () {
//     return 2037 - this.birthyear;
//   }
//   //Set a property that already exsist
//   set fullName(name){
//       if (name.includes(' ')) this._fullName = name;
//       else alert(`${name} is not a Full Name`)
//     }
//     get fullName () {
//       return this._fullName;
//     }
// }
// const jassica = new PersonCl('Jassica Devis', 1996);
// jassica.greet();
// jassica.calcAge();
// console.log(jassica.age)
// -----------------------11
// -------------------------Getters & Setters

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest () {
//     return this.movements.splice(-1).pop();
//   },

//   set latest (mov) {
//     this.movements.push(mov)
//   }
// };

// console.log(account.latest)
// account.latest = 500;
// console.log(account.movements)

// const walter = new PersonCl('walter', 1996);
// const jassica = new PersonCl('Jassica Devis', 1996);

// -----------------------12
// -------------------------Static Method

// class PersonCl {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }
//   // Instance Method
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2026 - this.birthyear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthyear;
//   }
//   //Set a property that already exsist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a Full Name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // -------------------------Static Method
//   static hey () {
//     console.log(`Hey there 👋`);
//     console.log(this);
//   }
// }

// PersonCl.hey();

// -----------------------13
// -------------------------Object.Create
//         const PersonProto = {
//   calcage( ) {
//     console.log(2037 - this.birthyear)
//   },

//   init (firstname, birthyear){
//     this.firstname = firstname;
//     this.birthyear = birthyear;
//   }
// }
// const steven = Object.create(PersonProto)
// steven.name = 'Steven';
// steven.birthyear = 2002;
// steven.calcage()

// const sarah = Object.create(PersonProto)
// sarah.init('Sarah', 1999)
// sarah.calcage()

//////////////////////////////////////////////////
// -----------------------14
// -------------------------Coding Challenge # 2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is Going With ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is Going With ${this.speed} km/h`);
//   }
//   get speedUs() {
//     return this.speed / 1.6;
//   }
//   set speedUs(speed) {
//     this.speed = speed* 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUs);
// ford.accelerate();
// ford.brake();
// ford.accelerate();
// ford.brake();
// ford.speedUs = 50;
// console.log(ford)

// -----------------------15
// -------------------------inheritence between classws constructor function
 const Person = function (firstname, birthyear) {
  
  this.firstname = firstname;
  this.birthyear = birthyear;
};

Person.prototype.calcage = function () {
  console.log(2037 - this.birthyear)
}

const Student = function(firstname, birthyear, course){
  Person.call(this, firstname,  birthyear)
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function (){
  console.log(` My Name is ${this,this.firstname} and i study in ${this.course}`) 
} 
const mike = new Student('Mike', 2020, 'Computer Science')

mike.introduce();
mike.calcage(); 




























































