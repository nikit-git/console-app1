let counter = 0,
    movieName,
    movieScore;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function start() {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "")
        }
    },
    questioningLoop: function() {
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
    },
    response: function() {
        if (personalMovieDB.count < 10) {
            console.log('Ты посмотрел недостаточно фильмов');
        } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
            console.log('Неплохо');
        } else if (personalMovieDB.count > 30) {
            console.log('Ты очень часто смотришь фильмы, у тебя что других дел нет?');
        } else {
            console.log('error')
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Какой ваш любимый жанр под номером ${i + 1}`);
            if(personalMovieDB.genres[i] === null || personalMovieDB.genres[i] === '') {
                i--;
                continue;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${++i} - это ${item}`);
        });
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.questioningLoop();
personalMovieDB.response();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

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