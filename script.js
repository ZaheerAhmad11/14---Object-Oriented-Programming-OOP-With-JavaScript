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
// -------------------------inheritence between classes constructor function
// const Person = function (firstname, birthyear) {

//   this.firstname = firstname;
//   this.birthyear = birthyear;
// };

// Person.prototype.calcage = function () {
//   console.log(2037 - this.birthyear)
// }

// const Student = function(firstname, birthyear, course){
//   Person.call(this, firstname,  birthyear)
//   this.course = course;
// };

// // Linking Prototypes
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function (){
//   console.log(` My Name is ${this,this.firstname} and i study in ${this.course}`)
// }
// const mike = new Student('Mike', 2020, 'Computer Science')

// mike.introduce();
// mike.calcage();

// -----------------------16
// -------------------------Coding Challenge # 3

// const Car = function (make , speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(` ${this.make} is going with ${this.speed} km/h`)
// }
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(` ${this.make} is going with ${this.speed} km/h`)
// }

// const bmw = new Car('BMW', 120);
// bmw.accelerate();
// bmw.brake();

// const Ev = function(make,speed ,charge ) {
//   Car.call(this, make,speed);
//   this.charge = charge;
// }

// //Link Prototype

// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   this.speed += 20;
//   this.charge --;
//   console.log(` ${this.make} is going with ${this.speed} km/h, with the charge of ${this.charge}`)
// }
// const tesla = new Ev('Tesla', 120, 23)

// tesla.chargeBattery(90);
// tesla.chargeBattery(90);
// tesla.chargeBattery(90);
// tesla.chargeBattery(90);
// console.log(tesla)

// -----------------------17
// -------------------------inheritence between classes ES6

// class PersonCl {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }
//   // Instance Method
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthyear);
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
//   static hey() {
//     console.log(`Hey there 👋`);
//     console.log(this);
//   }
// }

// // Linked Classes with "extends"
// class StudentCl extends PersonCl {
//   constructor(fullName, birthyear, course) {
//     //Always needs to happen first
//     super(fullName, birthyear);
//     this.course = course;
//   }
//   introduce () {
//     console.log(`My Name iS ${this.fullName} And I Stydy ${this,this.course}`)
//   }
//   calcAge() {
//     console.log(`I'm ${2037 - this.birthyear} years old, but as a student i feel more like ${2037 - this.birthyear + 10}`);
//   }
// }
// const martha = new StudentCl('Martha Jones', 2012 , 'Computer Science')
// martha.introduce();
// martha.calcAge();

// -----------------------18
// -------------------------inheritence between classes Object.create
// const PersonProto = {
//   calcage() {
//     console.log(2037 - this.birthyear);
//   },

//   init(firstname, birthyear) {
//     this.firstname = firstname;
//     this.birthyear = birthyear;
//   },
// };
// // Linked parent class with chil
// const steven = Object.create(PersonProto);

// // Linked parent class with chil
// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstname, birthyear, course) {
//   PersonProto.init.call(this, firstname, birthyear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My Name iS ${this.firstname} And I Stydy ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcage();

// -----------------------19
// -------------------------An other Class

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     console.log(`Thanks For Opening Account ${owner}`);
//   }
//   deposit(val) {
//     this.movements.push(val);
//   }
//   withdwral(val) {
//     this.deposit(-val);
//   }
//   approveLoan(val) {
//     return true;
//   }
//   reqLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan had been Approve`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(200);
// acc1.withdwral(140);
// acc1.approveLoan();
// acc1.reqLoan(200);
// console.log(acc1);

// -----------------------20
// -------------------------Encapsulation Protected Properties And Methods

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     this._movements = [];
//     console.log(`Thanks For Opening Account ${owner}`);
//   }
//   //Public interface
//   getMovments() {
//     return this._movements;
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdwral(val) {
//     this.deposit(-val);
//   }
//   _approveLoan(val) {
//     return true;
//   }
//   _requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan had been Approve`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(200);
// acc1.withdwral(140);
// acc1._approveLoan();
// acc1._requestLoan(200);
// console.log(acc1);

// -----------------------20
// -------------------------Encapsulation Privete Class Fields and methods

//1) Public Filed
//2) Private Filed
//3) Public Method
//4) Private Method
//5) Static Version

// class Account {
//   // 1) Public Fileds ('instances' not Prototype )
//   locale = navigator.language;
//   // _movements = [];
//   // 2) Private Filed (use of #)('instances' not Prototype )
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks For Opening Account ${owner}`);
//     console.log(this.locale);
//   }
//   //3) Public Method
//   //Public interface
//   getMovments() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//   }
//   withdwral(val) {
//     this.deposit(-val);
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan had been Approve`);
//     }
//   }
//   //4) Private Method
//   _approveLoan(val) {
//     return true;
//   }
//   //5) Static Version
//   static helper = function () {
//     console.log(`Helper...`)
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(200);
// acc1.withdwral(140);
// acc1.requestLoan(200);
// console.log(acc1.getMovments());
// // console.log(acc1.#movments);
// Account.helper();

// -----------------------21
// -------------------------Chaining Methods
// class Account {
//   locale = navigator.language;
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     console.log(`Thanks For Opening Account ${owner}`);
//     console.log(this.locale);
//   }
//   getMovments() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdwral(val) {
//     this.deposit(-val);
//     return this;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan had been Approve`);
//       return this;
//     }
//   }
//   _approveLoan(val) {
//     return true;
//   }
//   static helper = function () {
//     console.log(`Helper...`)
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// // -------------------------Chaining Methods
// acc1.deposit(200).withdwral(140).requestLoan(200).deposit(200).deposit(500).withdwral(100).deposit(1000).withdwral(5000);
// console.log(acc1.getMovments());

// -----------------------22
// -------------------------ES6 Classes Summary
//--------------------------------------------\\























