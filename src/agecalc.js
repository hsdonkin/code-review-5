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

// sets the Death Date for a person to get around the weirdness of strings in Javascript date object
Person.prototype.calcDeath = function(){
	let birthDayYear = this.birthday.getFullYear();
  let lifeExp = this.lifeExpectancy;
	this.deathDate.setFullYear(birthDayYear + lifeExp);
}

// calculates a person's age given an input conversion factor
Person.prototype.planetaryAgeCalc = function(planetFactor){
    return Math.floor(this.age / planetFactor);
}

// calculates the difference between their life expectancy and current age -- possible to return negative values, indicating that the person is now past their life expectancy
Person.prototype.lifeExpCalc = function(){

    return this.lifeExpectancy - this.age;
}

// similar to planetaryAgeCalc, takes an input conversion factor and does the same math using the difference
Person.prototype.lifeExpOnPlanet = function(planetFactor){
    return Math.floor((this.lifeExpectancy - this.age) / planetFactor);
}

export const samplePerson = new Person("June 28, 1919");
samplePerson.calcDeath();
console.log(samplePerson);
