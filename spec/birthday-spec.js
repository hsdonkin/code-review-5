// import {inputAgeDate, currentDate, expectedDeathDate, mercuryAgeCalc, venusAgeCalc, marsAgeCalc, jupiterAgeCalc, ageDifferenceCalc, expectedLifeDifference} from "./../src/birthday.js";
import {Person, samplePerson} from "./../src/agecalc.js";


describe ('planet age', function(){

  it('should take an age and return it in Mercury years, divided by 0.24', function(){
    console.log(samplePerson);
    expect(samplePerson.planetaryAgeCalc(0.24)).toEqual(416);
  })

  it('should take an age and return it in Venus years, divided by 0.62', function(){
    expect(samplePerson.planetaryAgeCalc(0.62)).toEqual(161);
  })

  it('should take an age and return it in Mars years, divided by 1.88', function(){
    expect(samplePerson.planetaryAgeCalc(1.88)).toEqual(53);
  })
  it('should take an age and return it in Jupiter years, divided by 11.86', function(){
    expect(samplePerson.planetaryAgeCalc(11.86)).toEqual(8);
  })

  it('take a base life expenctancy and a sample age, and return the difference between the two', function(){

    expect(samplePerson.lifeExpCalc()).toEqual(20);
  })

  it('take the difference between age and expectancy, and return it in Mercury years, Venus years, etc', function(){
    expect(samplePerson.lifeExpOnPlanet(0.24)).toEqual(83);
  })

})
