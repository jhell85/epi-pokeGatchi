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
  constructor(type) {
    this.levelTimer = 9000;
    this.level = 1;
    this.type = type;
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
