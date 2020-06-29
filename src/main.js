import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Animal } from './animals';


function updateAnimalNeeds(animal) {
  setInterval(() => {
    $("#food-level").text(animal.foodLevel);
    $("#water-level").text(animal.waterLevel);
    $("#energy").text(animal.energy);
  }, 1000);
}



$(document).ready(function () {
  let animal = new Animal();
  animal.hunger();
  animal.thirst();
  animal.fatigue();
  animal.isAlive();
  updateAnimalNeeds(animal);

  $("#feed").click(function () {
    event.preventDefault();
    animal.feed();
    $("#food-level").text(animal.foodLevel);
  });

});


