// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directorsRaw = arr.map(function (el) {
    return el.director
  })
  const directorsFiltered = directorsRaw.filter((element, index) => {
    return directorsRaw.indexOf(element) === index;
  });
  return directorsFiltered;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenMovies = arr.filter(function (el) {
    return el.director === 'Steven Spielberg'
  })
  const onlyDrama = stevenMovies.filter(function (el) {
    return el.genre.includes('Drama')
  })

  return onlyDrama
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const allScores = arr.map((el) => el.score);
  const scoresSum = allScores.reduce((acc, val) => acc + val);
  const averageScore = scoresSum / arr.length;
  return averageScore.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter(function (el) {
    return el.genre.includes('Drama')
  })
  const dramaScores = dramaMovies.map((el) => el.score)
  const dramaSum = dramaScores.reduce((acc, val) => acc + val);
  const averageDramaScore = dramaSum / dramaMovies.length
  return averageDramaScore.toFixed(2);

}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const arrCopy = JSON.parse(JSON.stringify(arr))
  const sorted = arrCopy.sort((a, b) =>
    a.year - b.year || a.title.localeCompare(b.title))

  return sorted
};


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const firstArray = arr.map(function (el) {
    return el.title
  })
  const shortened = firstArray.slice(0, 20)
  const sorted = shortened.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
  })
  return sorted
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
