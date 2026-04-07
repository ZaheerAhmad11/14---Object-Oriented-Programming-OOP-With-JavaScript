'use strict';

// -----------------------05
// -------------------------Constructor Function and the New Operator

const Person = function (fristname, birthyear) {
  // Instance Properties
  this.fristname = fristname;
  this.birthyear = birthyear;
  
  // Instance Method
  //never do this
//   this.calcAge = function () {
//     console.log(2026 - this.birthyear)
//   }

};

// 1. New {} is created
// 2. function is called , this = {}
// 3. linked to prototype
// 4. function automatically return {}



const zaheer = new Person('Rao Zaheer', 2005);
const mubashir = new Person('Mubashir iQbal', 2001);
const raffy = new Person('Abd Raffy', 2002);
const abdullah = new Person('Abdullah', 2003);
console.log(zaheer, mubashir , raffy, abdullah);

console.log(zaheer instanceof Person)
// console.log(hamyu instanceof Person)

// -----------------------06
// -------------------------Prototypes
console.log(Person.prototype)
Person.prototype.calcAge =  function () {
     console.log(2026 - this.birthyear)
}

zaheer.calcAge();
console.log(zaheer.__proto__);
console.log(zaheer.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(zaheer));



