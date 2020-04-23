

export function filterDinos(period, diet, dinosList) {
  let resultsArray = [];
  for (let i = 0; i < dinosList.length; i++) {
    if (dinosList[i].period == period && dinosList[i].diet == diet) {
      resultsArray.push(dinosList[i]);
    }
  }
  return resultsArray;
}

export function findPopularDinos(dinosList){
  let popularDinos = dinosList.popularity.sort().reverse()
  return popularDinos
}
