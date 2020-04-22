export class pokeGatchi {
  constructor() {
    this.evolution = 1;
    this.level = 1;
  }

  async getPokemon(name) {
    console.log(`in`);
    
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } 
      else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } 
    catch (error) {
      return false;
    }
  }
}


//import getAPI from "./APIcaller.js'"

//class
//constructor() {
 // getAPI(this.name) 
//}

//https://pokeapi.co/api/v2/pokemon/5/