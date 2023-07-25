'use strict'
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""),
    counter = 0,
    movieName,
    movieScore;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// while (counter < personalMovieDB.count) {
//     movieName = prompt('Укажите название фильма', '');
//     if (movieName === null || movieName.length > 15 || movieName === '') {
//         counter--
//         continue
//     }
//     movieScore = +prompt('Сколько баллов вы бы поставили ему?', '');
//     if (movieScore === null || movieScore > 10 || movieScore === 0) {
//         counter--
//         continue
//     }
//     personalMovieDB.movies[movieName] = movieScore;
//     counter++;
// }

// do {
//     movieName = prompt('Укажите название фильма', '');
//     if (movieName === null || movieName.length > 15 || movieName === '') {
//         counter--
//         continue
//     }
//     movieScore = +prompt('Сколько баллов вы бы поставили ему?', '');
//     if (movieScore === null || movieScore > 10 || movieScore === 0) {
//         counter--
//         continue
//     }
//     personalMovieDB.movies[movieName] = movieScore;
//     counter++;  
// } while (counter < personalMovieDB.count)

for (counter; counter < personalMovieDB.count; counter++) {
    movieName = prompt('Укажите название фильма', '');
    if (movieName === null || movieName.length > 15 || movieName === '') {
        counter--
        continue
    }
    movieScore = +prompt('Сколько баллов вы бы поставили ему?', '');
    if (movieScore === null || movieScore > 10 || movieScore === 0) {
        counter--
        continue
    }
    personalMovieDB.movies[movieName] = movieScore;
}

if (personalMovieDB.count < 10) {
    console.log('Ты посмотрел недостаточно фильмов');
} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
    console.log('Неплохо');
} else if (personalMovieDB.count > 30) {
    console.log('Ты очень часто смотришь фильмы, у тебя что других дел нет?');
} else {
    console.log('error')
}

console.log(personalMovieDB);