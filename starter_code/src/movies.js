/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let copiedMoviesArray = moviesArray.slice()
    let sortedArray = copiedMoviesArray.sort(function (a, b) {
        if (a.year === b.year) {
            if (a.title > b.title) {
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
    moviesArray.filter(function (movie) {
        if (movie.genre === "Drama" && movie.director === "Steven Spielberg") {
            result++;
        } else {
            return 0
        }
    })
    return result;
}

howManyMovies(movies)

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

    let copiedMoviesArray = moviesArray.slice()
    let alphabeticalArray = copiedMoviesArray.sort(function (a, b) {
        if (a.title > b.title) {
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
    if (!moviesArray) {
        return 0
    } else {
        //Map array to return array with only rates
        let mappedRatesArray = moviesArray.map(movie => movie.rate)
        //console.log(mappedRatesArray)

        //Sum all rates
        const sum = mappedRatesArray.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);

        //Returns Average
        const average = Number(Math.round(sum / mappedRatesArray.length + 'e2') + 'e-2');

        console.log(average);
    }
}
ratesAverage(movies)




// Iteration 5: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(moviesArray) {

    if (!moviesArray) {
        return 0
    } else {


        //Filter array to return array with only drama movies
        let dramaArray = movies.filter(movie => movie.genre.includes('Drama'))
        //console.log(dramaArray)

        //Maps array to return only rates
        let dramaRatesArray = dramaArray.map(movie => movie.rate)
        //console.log(dramaRatesArray)


        //Sum all rates
        const sum = dramaRatesArray.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);

        //Returns Average
        const average = Number(Math.round(sum / dramaRatesArray.length + 'e2') + 'e-2');

        return average

    }

}

dramaMoviesRate(movies)



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


 
//Zero-filling function for 2 digits
function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }
  
   function turnHoursToMinutes(moviesArray) {
      let movieDurationMinutes = moviesArray.map(function (movie) {
        let durationNumeric = 0
        durationNumeric = movie.duration.match(/\d+/g).map(Number) 
        if (durationNumeric[1] < 10) {
           durationNumeric[1] = minTwoDigits(durationNumeric[1])
        } else if (!durationNumeric[1]) {
          durationNumeric[1] = '00'
        }
        console.log(durationNumeric)
        //return movie
  
      })
  //extract the numbers from movie.duration
  
  //if only 2 numbers, add a 0 in the middle
  
  //Then convert into minutes
  //movie.duration * 60 / 100
  
  } 
  
   turnHoursToMinutes(movies)


   

// BONUS Iteration: Best yearly rate average - Best yearly rate average