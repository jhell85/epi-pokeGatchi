import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { pokeGatchiService, pokeGatchi } from "./pokeGatchi.js";


$(document).ready(function () {
 
  $("#pokemon-selection img").click(function () {
    let pokeName = this.id;
    $("#pokemon-selection img").animate({ width: "0", height: "0" }, 1000);
    (async () => {
      let pokemonData = new pokeGatchiService();
      console.log(pokeName);
      const response = await pokemonData.getPokemon(pokeName);
      console.log(response);
    })();
    let pokegatchi = new pokeGatchi(pokeName);
    pokegatchi.makeHunger();
    pokegatchi.startLevel();
    showEvolution(pokegatchi);
  });
});

function showEvolution(pokegatchi) {
  let currentName = "";
  setInterval(() => {
    if (pokegatchi.name != currentName) {
      switch (pokegatchi.name) {
        case "charmander":
            $("#ourgif").attr(
              "src",
              "https://projectpokemon.org/images/normal-sprite/charmander.gif"
            );
            $("#ourgif").fadeIn();
          currentName = pokegatchi.name;
          break;
        case "charmeleon":
          $("#ourgif").animate({ opacity: "0" }, 2000);
          $("#ourgif").attr(
            "src",
            "https://projectpokemon.org/images/normal-sprite/charmeleon.gif"
          );
          $("#ourgif").animate({ opacity: "1" }, 2000);
          currentName = pokegatchi.name;
          break;
        case "charizard":
          $("#ourgif").animate({ opacity: "0" }, 2000);
          $("#ourgif").attr(
            "src",
            "https://projectpokemon.org/images/normal-sprite/charizard.gif"
          );
          $("#ourgif").animate({ opacity: "1" }, 2000);
          currentName = pokegatchi.name;
          break;
        case "bulbasaur":
          $("#ourgif").animate({ opacity: "0" }, 2000);
          $("#ourgif").attr(
            "src",
            "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif"
          );
          $("#ourgif").animate({ opacity: "1" }, 2000);
          currentName = pokegatchi.name;
          break;
        case "ivysaur":
          $("#ourgif").animate({ opacity: "0" }, 2000);
          $("#ourgif").attr(
            "src",
            "https://projectpokemon.org/images/normal-sprite/ivysaur.gif"
          );
          $("#ourgif").animate({ opacity: "1" }, 2000);
          currentName = pokegatchi.name;
          break;
        case "venusaur":
          $("#ourgif").animate({ opacity: "0" }, 2000);
          $("#ourgif").attr(
            "src",
            "https://projectpokemon.org/images/normal-sprite/venusaur.gif"
          );
          $("#ourgif").animate({ opacity: "1" }, 2000);
          currentName = pokegatchi.name;
          break;
        case "squirtle":
          $("#ourgif").animate({ opacity: "0" }, 2000);
          $("#ourgif").attr(
            "src",
            "https://projectpokemon.org/images/normal-sprite/squirtle.gif"
          );
          $("#ourgif").animate({ opacity: "1" }, 2000);
          currentName = pokegatchi.name;
          break;
        case "wartortle":
          $("#ourgif").animate({ opacity: "0" }, 2000);
          $("#ourgif").attr(
            "src",
            "https://projectpokemon.org/images/normal-sprite/wartortle.gif"
          );
          $("#ourgif").animate({ opacity: "1" }, 2000);
          currentName = pokegatchi.name;
          break;
        case "blastoise":
          $("#ourgif").animate({ opacity: "0" }, 2000);
          $("#ourgif").attr(
            "src",
            "https://projectpokemon.org/images/normal-sprite/blastoise.gif"
          );
          $("#ourgif").animate({ opacity: "1" }, 2000);
          currentName = pokegatchi.name;
          break;
      }
    }
  }, 3000);
}


