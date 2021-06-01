"use strict";




// console.log("1");



// let number = 5; //изменяемая информация
// const leftBorderWidth = 1; //константа

// number = 10;
// console.log(number);

// leftBorderWidth = 10;

// const obj ={
//     a: 50
// };

// obj.a = 10;

// console.log(obj); // прямых констант не бывает 

// console.log(name);

// var name = 'ivan';


// {
//     let result = 50;
// }

// console.log(result)


// let number = 4.6;

// console.log(4/0) //infunity
// console.log(-4/0)
// console.log('string'*9); //null


//stroke

// const person = "Alex";

// //bool

// const bool = true;


//null

// console.log(something)


//underfind

// let und;
// console.log(und);

// //object

// const obj = {
//     name: "John",
//     age:'25',
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj['name']);


// let arr = ['plum.png','orange.jpg'];
// console.log(arr[1]);


//alert('Hello');
 
// const result =confirm( 'Are you here?')
// console.log(result);

// const answer = +prompt("Are you have 18 years old?", '');
// console.log(answer+5);

// const answers =[];

// answers[0]=prompt('what is here name?')
// answers[1]=prompt('what is here female?')
// answers[2]=prompt('how are you years old?')

// document.write(answers);

// const category ="toys";
// console.log(`https://someurl.com/${category}/5`);

// const user="ivan"

// alert(`hi, ${user}`)

// console.log('arr' +'- object')
// console.log(4 + +'5')

// let incr = 10,
//     decr =10;
    
// // incr++;
// // decr--;

// console.log(incr++);
// console.log(decr--);


// console.log(2+2*2 === '6');

// const isChecked= true,
//       isClose = true;
      
// console.log(isChecked || isClose);

// if (1){
//     console.log('ok!');
    
// } else {
//    console.log('Errotr'); 
// }

// const num = 51;

// if (num < 49)
// {
//     console.log('error');
    
// }else if (num > 100){
//     console.log('more');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('в точку');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// let num = 50;

// while (num < 55){
//     console.log(num);
//     num++; 
// }

// do {
//     console.log(num);
//     num++; 
// }
// while (num < 55);


// for (let i = 1; i < 10 ; i++){
//     if (i===6){
//         // break;
//         continue;
//     }
// }

// let num = 10;

// function showFirsrMessage(text) {
//     console.log(text);
//     // let num=20;
//     console.log(num);
// }

// showFirsrMessage('hello');
// console.log(num);


// function calc(a,b){
//     return(a+b);
// }

// console.log(calc(4,3));
// console.log(calc(8,3));

// function ret(){
//     let num=50;
    
    
//     return num;
// }

// const anoterNum=ret();
// console.log(anoterNum);

// const logger = function() {
//    console.log('hello');
// };
// logger();


// const calc = (a,b) =>{ return a+b } ;

const str ="test"
const arr = [1,2,4];


console.log(arr.length);
console.log(str[2]);
console.log(str.toUpperCase());


const fruit ='SOme fruit';
console.log(fruit.indexOf('q'));


const logg ="hello world";

console.log(logg.slice(6));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test ="12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));