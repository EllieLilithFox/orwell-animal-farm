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

// function getGif(gifId) {
//   let request = new XMLHttpRequest();
//   const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${process.env.API_KEY}`;

//   request.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };

//   request.open("GET", url, true);
//   request.send();

//   const getElements = function(response) {
//     // $("#gif").append(`<img class="animal-gif" src="${response.data.images.original_mp4.mp4}>`);
//     $(".showGif").html(`<img src="${response.body.data.images.original_mp4.mp4}></img>`);
//   };
// }

$(document).ready(function () {
  let animal = new Animal();
  animal.hunger();
  animal.thirst();
  animal.fatigue();
  animal.isAlive();
  updateAnimalNeeds(animal);
  // getGif("NCTyZu7dakFWM");

  $("#feed").click(function () {
    event.preventDefault();
    let image = animal.feed();
    $("#food-level").text(animal.foodLevel);
  });

  $("#water").click(function () {
    event.preventDefault();
    animal.water();
    $("#water-level").text(animal.waterLevel);
  });

  $("#sleep").click(function () {
    event.preventDefault();
    animal.sleep();
    $("#energy").text(animal.energy);
  });

(async () => {
  let gifAPI = new GifAPI();
  const response = await gitAPI.getImage(image);
  getElements(response);

})();

const getElements = function(response) {
  //     // $("#gif").append(`<img class="animal-gif" src="${response.data.images.original_mp4.mp4}>`);
      $(".showGif").html(`<img src="${response.body.data.images.original_mp4.mp4}></img>`);
  //   };

  

  
});


