
let numberOfFilm= +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMoviesDB = {
    count : numberOfFilm,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

// if(personalMoviesDB.count < 10){
//     alert('Просмотрено довольно мало фильмов');
// }
// else if(personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30 ){
//     alert('Вы классичейский зритель');
// }
// else {
//     alert('Вы киноман');
// }

(personalMoviesDB.count < 10) ?  alert('Просмотрено довольно мало фильмов') :
(personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30) ? alert('Вы классичейский зритель') : alert('Вы киноман');



for( let i=0 ; i<=2 ; i++){
    const film=prompt('Один из последних просмотренных фильмов?');
    const rating = prompt('На сколько оцените его?');
    
    if(film !=null && rating !=null && film !='' && rating !='' && film.length<50){
        personalMoviesDB.movies[film]=rating;
        console.log('Yes');
    } 
    else{
        console.log('error');
        i--;
    }
}




// personalMoviesDB.movies[a]=b;


console.log(personalMoviesDB);