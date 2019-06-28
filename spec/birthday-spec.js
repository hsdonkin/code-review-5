import {inputAgeDate, currentDate, expectedDeathDate, mercuryAgeCalc, venusAgeCalc, marsAgeCalc, jupiterAgeCalc, ageDifferenceCalc, expectedLifeDifference} from "./../src/birthday.js";



describe ('planet age', function(){

  it('should take an age and return it in Mercury years, divided by 0.24', function(){
    expect(mercuryAgeCalc(inputAgeDate, currentDate)).toEqual(416);
  })

  it('should take an age and return it in Venus years, divided by 0.62', function(){
    expect(venusAgeCalc(inputAgeDate, currentDate)).toEqual(161);
  })
  it('should take an age and return it in Mars years, divided by 1.88', function(){
    expect(marsAgeCalc(inputAgeDate, currentDate)).toEqual(53);
  })
  it('should take an age and return it in Jupiter years, divided by 11.86', function(){
    expect(jupiterAgeCalc(inputAgeDate, currentDate)).toEqual(8);
  })
  it('take a base life expenctancy and a sample age, and return the difference between the two', function(){

    expect(ageDifferenceCalc(inputAgeDate, currentDate, expectedDeathDate)).toEqual(-12);
  })
  it('take the difference between age and expectancy, and return it in Mercury years, Venus years, etc', function(){
    expect(mercuryAgeCalc()).toEqual(-50);
  })


})
