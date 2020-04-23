import { filterDinos, findPopularDinos } from "./../src/dino"

describe("Dino WhiteBoard Tests", () => {
  let dino1 = { 
    "name": "Tyrannosaurus rex",
    "period": "Mesozoic",
    "diet": "carnivore",
    "walksOnForLegs": false,
    "yearDiscovered": 1902,
    "popularity": 999
  }
  
  let dino2 = { 
    "name": "Brachiosaurus",
    "period": "Jurassic",
    "diet": "herbivore",
    "walksOnForLegs": true,
    "yearDiscovered": 1900,
    "popularity": 959
  }
  
  let dino3 = { 
    "name": "Parasaurolophus",
    "period": "Cretaceous",
    "diet": "herbivore",
    "walksOnForLegs": true,
    "yearDiscovered": 1922,
    "popularity": 500
  }
  
  let dino4 = { 
    "name": "Stegosaurus",
    "period": "Jurassic",
    "diet": "herbivore",
    "walksOnForLegs": true,
    "yearDiscovered": 1876,
    "popularity": 903
  }

  let dinoList = [dino1, dino2, dino3, dino4]
  describe("first prompt", () => {

    let results = filterDinos("Jurassic", "herbivore", dinoList)
    expect(results).toContain(dino2, dino4)
  })
})