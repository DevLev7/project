
let numberOfFilm= +prompt('Сколько фильмов вы уже посмотрели?', '')

let personalMoviesDB = {
    count : numberOfFilm,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

let film=prompt('Один из последних просмотренных фильмов?')
let rating = prompt('На сколько оцените его?')
let a=prompt('Один из последних просмотренных фильмов?')
let b = prompt('На сколько оцените его?')

personalMoviesDB.movies[film]=rating
personalMoviesDB.movies[a]=b


console.log(personalMoviesDB);