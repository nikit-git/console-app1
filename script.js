let numberOfFilms,
    counter = 0,
    movieName,
    movieScore;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function questioningLoop() {
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
}

questioningLoop();

function response() {
    if (personalMovieDB.count < 10) {
        console.log('Ты посмотрел недостаточно фильмов');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
        console.log('Неплохо');
    } else if (personalMovieDB.count > 30) {
        console.log('Ты очень часто смотришь фильмы, у тебя что других дел нет?');
    } else {
        console.log('error')
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Какой ваш любимый жанр под номером ${i + 1}`)
    }
}
writeYourGenres();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}
showMyDB();

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