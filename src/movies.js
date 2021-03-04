// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(someArr) {
    var directorArray = someArr.map(function (movie) {
        return movie.director;
    });
    return directorArray;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(someArr) {


    let steven = someArr.filter(function (el) {
        return el.director === "Steven Spielberg" && el.genre.includes("Drama");

    });

    console.log(steven.length);

    return steven.length;

}

howManyMovies(movies);






// On parcourt l'array et on filtre de steven spielberg
// On filtre dans les films de Steven Spielberg, on filtre DRAMA
// Retourne uniquement les films drama de Steven Spielberg 








// Si lors de la boucle, steven spielbierg -> 
// If steven spielbierg 







// Iteration 3: All rates average - Get the average of all rates with 2 decimals


//1. Il faut aller chercher tous les rates des films dans une boucle 
//2. il faut toutes les additionner (les rates)
//3. Puis diviser le resultat par le nombre de films





function ratesAverage(someArr) {


    let rates = someArr.reduce(function (acc, el) {


        return acc + Number(el.rate) / someArr.length;


    }, 0)


    return Number(rates.toFixed(2));


}

ratesAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(someArr) {
    let rateDrama = someArr.filter(function (el) {

        return el.genre.includes("Drama");

    });

    return ratesAverage(rateDrama);

}

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(someArr) {

    let ordered = someArr.sort(function (a, b) {

        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.year === b.year) {
            a.title < b.title
        }

        return -1;
    })
    console.log(ordered);
    return ordered;

}
orderByYear(movies);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArr) {
    let newArr = someArr.map(function (el) {
        return el.title;

    })

    return newArr.sort().slice(0, 20);

}

console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average