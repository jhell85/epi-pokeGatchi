import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { pokeGatchiService, pokeGatchi } from "./pokeGatchi.js";

$(document).ready(function(){
  $("#pokemon-selection img").click(function() {
    let pokeName = this.id;
    $("#pokemon-selection img").animate({width: "0", height: "0" }, 1000);
    $(this).animate({margin:"auto", width: "10vw", height: "20vh"}, 2000);
    (async () => {
      let pokemonData = new pokeGatchiService();
      console.log(pokeName)
      const response = await pokemonData.getPokemon(pokeName);
      console.log(response)
    })();
    let pokegatchi = new pokeGatchi(pokeName) 
    pokegatchi.makeHunger()
  })
})



// bulbasaur gif : https://projectpokemon.org/images/normal-sprite/bulbasaur.gif
// ivysaur: https://projectpokemon.org/images/normal-sprite/ivysaur.gif
// Venusaur: https://projectpokemon.org/images/normal-sprite/venusaur.gif
// Charmander: https://projectpokemon.org/images/normal-sprite/charmander.gif
// Charmeleon: https://projectpokemon.org/images/normal-sprite/charmeleon.gif
// Charizard: https://projectpokemon.org/images/normal-sprite/charizard.gif
// squirtle: https://projectpokemon.org/images/normal-sprite/squirtle.gif
// Wartortle: https://projectpokemon.org/images/normal-sprite/wartortle.gif
// Blastoise: https://projectpokemon.org/images/normal-sprite/blastoise.gif