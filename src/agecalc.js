class Person {
  constructor(birthday, age, expectedDeath){
    this.birthday = new Date(birthday);
    this.currentDate = new Date();
    this.age = (this.currentDate.getFullYear() - this.birthday.getFullYear());
    this.lifeExpectancy = 120;
    this.deathDate = new Date("January 1, 1945");
    this.lifeLeft = "";
  }
}

Person.prototype.calcDeath = function(){
	let birthDayYear = this.birthday.getFullYear();
  let lifeExp = this.lifeExpectancy;
	this.deathDate.setFullYear(birthDayYear + lifeExp);
}

Person.prototype.planetaryAgeCalc = function(planetFactor){
    return Math.floor(this.age / planetFactor);
}

Person.prototype.lifeExpCalc = function(){

    return this.lifeExpectancy - this.age;
}

Person.prototype.lifeExpOnPlanet = function(planetFactor){
    return Math.floor((this.lifeExpectancy - this.age) / planetFactor);
}

export const samplePerson = new Person("June 28, 1919");
samplePerson.calcDeath();
console.log(samplePerson);
export const planetFactor = [0.24, 0.62, 1.88, 11.86];
