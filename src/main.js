import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
// import { getAPI } from "./apiCall.js";
//import { pokeGatchi } from "./pokeGatchi.js";

$(document).ready(function(){
  $("#pokemon-selection img").click(function() {
    let pokeName = this.id;

    // .attr("id");

    // event.target.value
    
    //let pokemon = new pokeGatchi(pokeName);


    console.log(pokeName)
  })
})

// (".clickable").click(function() {
//   let userAge = parseInt($("#inputAge").val());
//   let planet = planets.find(planet => planet.name == this.id)

//base form: 
//(async function () {
//  let response = await fetch(`url`)
//  let jsonified;
//  if (response.ok && response.status === 200) {jsonified = await response.json()}
//})
//
//


// class pokeGatchi () {
//   constructor() {

//     $('#weatherLocation').click(function() {
      //     const city = $('#location').val();
      //     $('#location').val("");
      
          // (async () => {
          //   let weatherService = new WeatherService();
          //   const response = await weatherService.getWeatherByCity(city);
          //   getElements(response);
          // })();
          
          //
      
      //     function getElements(response) {
      //       if (response) {
      //         $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      //         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      //       } else {
      //         $('.showHumidity').text(`There was an error handling your request.`);
      //         $('.showTemp').text(`Please check your inputs and try again!`);
      //       }
      //     }
//   }
// }

//  

//   });
// });


// pokegatchi --> frontend --> getAPI (populate pokedata)?


// let pokemon = "charmander";

// switch (variable) {
//   case "charmander": url = "";
//   case "squirtle": url = "";
//   case "bulbasaur": url = "";
// }


// bulbasaur gif : https://projectpokemon.org/images/normal-sprite/bulbasaur.gif
// ivysaur: https://projectpokemon.org/images/normal-sprite/ivysaur.gif
// Venusaur: https://projectpokemon.org/images/normal-sprite/venusaur.gif
// Charmander: https://projectpokemon.org/images/normal-sprite/charmander.gif
// Charmeleon: https://projectpokemon.org/images/normal-sprite/charmeleon.gif
// Charizard: https://projectpokemon.org/images/normal-sprite/charizard.gif
// squirtle: https://projectpokemon.org/images/normal-sprite/squirtle.gif
// Wartortle: https://projectpokemon.org/images/normal-sprite/wartortle.gif
// Blastoise: https://projectpokemon.org/images/normal-sprite/blastoise.gif