export class pokeGatchiService {
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
    } catch (error) {
      return false;
    }
  }
}

export class pokeGatchi {
  constructor(name) {
    this.name = name;
    this.levelTimer = 9000;
    this.level = 1;
    this.type = 0;
    this.life = 100;
    this.hunger = 0;
    this.hungerLevelDelay = 0;
  }
  async startLevel() {
    while (this.level < 99) {
      this.levelTimer = 1000 + (this.level * 500) + (this.hungerLevelDelay * 500);
      this.hungerLevelDelay = 0;
      setTimeout(() => {
        this.level += 1;
      }, this.levelTimer);

      await new Promise((resolve) => setTimeout(resolve, this.levelTimer));
      console.log(`levelTimer: ${this.levelTimer} level: ${this.level}`);
      if (this.level == 10) {

        switch(this.name) {
          case "charmander":
            this.name = "charmeleon";
            break;
          case "bulbasaur":
            this.name = "ivysaur";
            break;
          case "squirtle":
            this.name = "wartortle";
            break;
        }
      }
      if (this.level == 36) {
        switch(this.name) {
          case "charmeleon":
            this.name = "charizard";
            break;
          case "ivysaur":
            this.name = "venusaur";
            break;
          case "wartortle":
            this.name = "blastoise";
            break;
        }
      }
    }
  }
  async makeHunger() {
    while (this.hunger < 100) {
      let end = Math.ceil(Math.random() * 10000);
      setTimeout(() => {
        this.hunger += 5 + this.level * 0.5;
      }, end);
      await new Promise((resolve) => setTimeout(resolve, end));

      if (this.hunger >= 100) {
        this.life -= 10;
        this.hungerLevelDelay += 1;
        this.checkIfDead();
        this.hunger = 99;
      }
    }
  }

  checkIfDead() {
    if (this.life === 0) {
      // make all buttons unclickable and display to the user the game over screen what level they made it to ect...
      console.log("You died")
    }
  }
}
