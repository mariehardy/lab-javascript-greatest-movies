/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let copiedMoviesArray = moviesArray.slice()
    let sortedArray = copiedMoviesArray.sort(function(a,b) {
        if (a.year === b.year) {
            if (a.title > b.title){
                return 1;
            } else {
                return -1;
            }
        }
        return a.year - b.year

    })
    return sortedArray
}
orderByYear(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArray) {
    let result = 0
    moviesArray.filter(function(movie) {
    if (movie.genre === "Drama" && movie.director === "Steven Spielberg") {
        result ++;
    } else {
        return 0
    }
    })    
    return result;
}

howManyMovies(movies)

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray){

    let copiedMoviesArray = moviesArray.slice()
    let alphabeticalArray = copiedMoviesArray.sort(function(a,b) {
            if (a.title > b.title){
                return 1;
            } else {
                return -1;
            }
    })

    let mappedAlphabeticalArray = alphabeticalArray.map(movie => movie.title)

    if (mappedAlphabeticalArray.length > 20) {
      return mappedAlphabeticalArray.slice(0, 20)
    } else {
      return mappedAlphabeticalArray
    }
}
orderAlphabetically(movies)


// Iteration 4: All rates average - Get the average of all rates with 2 decimals



function ratesAverage(moviesArray) {


    let mappedRatesArray = moviesArray.map(movie => movie.rate)


    let averageNum = mappedRatesArray.reduce(function(sum, rate) { return sum / mappedRatesArray.length },0) 

    return averageNum

}

ratesAverage(movies)


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
