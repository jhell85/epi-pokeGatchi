export class pokeGatchiService {
  async getPokemon(name) {
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

export class pokeGatchi {
  constructor(type){
    this.level = 1;
    this.type = type;
    this.life = 100;
    this.hunger = 0;
  }
  async makeHunger() {
    while (this.hunger < 100) {
        let end = Math.ceil(Math.random() * 10000);
        setTimeout(() => { this.hunger += (5 + this.level*.5);}, end);
        await new Promise(resolve => setTimeout(resolve, end));
        console.log(this.hunger)
        this.level += 1;
    }
  }

}




