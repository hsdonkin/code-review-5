import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import {Person, planetList, planetFactors, factorAssigner} from "./agecalc.js";

console.log("hello");

$(document).ready(function(){
  $(".galactic-form").submit(function(event){
    event.preventDefault();
    let userDOB = $(".user-birthday").val();
    let userPlanet = $(".selected-planet :selected").val();
    console.log(userDOB);
    console.log(userPlanet);

    let userPerson = new Person(`"${userDOB}"`);
    userPerson.calcDeath();
    console.log(userPerson);

    // let planetFactor = factorAssigner(userPlanet);

    $(".output").append(`<div>If you were born on ${userDOB}, then your age on ${userPlanet} would be: ${userPerson.planetaryAgeCalc(factorAssigner(userPlanet))} </div>`);
    $(".output").append(`<div>Your estimated death date on Earth would be ${userPerson.deathDate} </div>`);

  })
})
