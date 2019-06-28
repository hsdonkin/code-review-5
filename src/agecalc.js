class Person {
  constructor(birthday, age, expectedDeath){
    this.birthday = new Date(birthday);
    this.currentDate = new Date();
    this.age = (this.currentDate.getFullYear() - this.birthday.getFullYear());
    this.lifeExpectancy = 100;
    this.deathDate = new Date("January 1, 1999");

  }
}


Person.prototype.calcDeath = function(){
	let birthDayYear = this.birthday.getFullYear();
  let lifeExp = this.lifeExpectancy;
	this.deathDate.setFullYear(birthDayYear + lifeExp);
}


var x = new Person("August 1, 2000");
x.calcDeath();
console.log(x);
