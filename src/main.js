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

function getGif(gifId, classId) {
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${process.env.API_KEY}`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };

  request.open("GET", url, true);
  request.send();

  const getElements = function(response) {
    $("#gif").append(`<video class="${classId}-gif" src="${response.data.images.original_mp4.mp4}" autoplay loop muted>`);
  };
}

$(document).ready(function () {
  let animal = new Animal();
  animal.hunger();
  animal.thirst();
  animal.fatigue();
  animal.isAlive();
  updateAnimalNeeds(animal);
  getGif("NCTyZu7dakFWM", "feed");
  getGif("iWTnpqPv2N1PG", "water");
  getGif("xUA7aXQ2c3QNxKppqo", "sleep");

  const fail = setInterval(() => {
    if (!animal.alive) {
      $("#gif, .buttons, .instructions, .status").hide();
      $("#fail").show();
      clearInterval(fail);
    }
  }, 500);

  $("#feed").click(function () {
    event.preventDefault();
    animal.feed();
    $("#food-level").text(animal.foodLevel);
    $(".water-gif, .sleep-gif").hide();
    $(".feed-gif").show();
  });

  $("#water").click(function () {
    event.preventDefault();
    animal.water();
    $("#water-level").text(animal.waterLevel);
    $(".feed-gif, .sleep-gif").hide();
    $(".water-gif").show();
  });

  $("#sleep").click(function () {
    event.preventDefault();
    animal.sleep();
    $("#energy").text(animal.energy);
    $(".water-gif, .feed-gif").hide();
    $(".sleep-gif").show();
  });
});