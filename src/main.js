import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import {Person} from "./agecalc.js";

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

  })
})
