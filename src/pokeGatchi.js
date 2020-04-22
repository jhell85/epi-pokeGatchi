export class pokeGatchi {

  async getPokemon(name) {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
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