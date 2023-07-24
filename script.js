let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movieName = prompt('Укажите название фильма', '');
let movieScore = prompt('Сколько баллов вы бы поставили ему?', '');
personalMovieDB.movies[movieName] = movieScore;

movieName = prompt('Укажите название фильма', '');
movieScore = prompt('Сколько баллов вы бы поставили ему?', '' );
personalMovieDB.movies[movieName] = movieScore;

console.log(personalMovieDB)