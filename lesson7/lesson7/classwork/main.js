//Методы перебора массива:

//1)map-перебирает и создает новый массив:
// let arrnum = [1,2,3,4,5];
// arrnum.map(function(item,idx,arr){
//     console.log(item + 2);
// })

//2)filter-фильтрует массив и выдает один элнмент из массива:
// let arrnum = [1,2,3,4,5];

// arrnum.filter(function(item,idx,arr){
//     console.log(idx)
// })

//3)reduse-перебирает массив и выдает массив в измельченном виде:
// let arrnum = [1,2,3,4,5];

// arrnum.reduse(function(prev,number){
//     console.log(prev);
// })

//4)includes-выдает буллево значение
// let arrnum = [1,2,3,4,5];

// console.log(arrnum.includes(5))

//5)reverse-меняет местами элементы массива:
// let arrnum = [1,2,3,4,5];

// console.log(arrnum.reverse())

//6)splice -он принимает в себя элементы массива
// let arrnum = [1,2,3,4,5];

// console.log(arrnum.splice(0,2,"третий","четвертый"));

// console.log(arrnum);

//7)forEach-пребирает массив ,но ничего не выдает.В основном его не используют
// let arrnum = [1,2,3,4,5];

// arrnum.forEach(function(idx,item,arr){
//     return console.log(item);
// })



//Функции
// let name = "John";

 //1)Function expression:
// function first(x,y){  
//     console.log(x + y)
// }

// first(5,10)

//2)Function declaration:
// let Func = function (c,b){
//     console.log(c * b);
// }

// Func(5, 35)

//Стрелочные функции:
// const func = (a,b) => {
//     console.log(a * b);
// }

// func(10,10);



//Задачи:

//1
// let arrnum = [1,2,3];

// let arrnum2 = [4,1,1,1,4];

// let arrnum3 = [2,2,2,2,2,];

// arrnum.map(function(item,idx,arr){
//      console.log(item * 2);
// })
// arrnum2.map(function(item,idx,arr){
//     console.log(item * 2);
// })
// arrnum3.map(function(item,idx,arr){
//     console.log(item * 2);
// })

//2
let arrnum4 =  ['Привет', 'Пока', 'Снова привет'];
let arrnum5 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrnum6 =  ['Пока', {'Цвет': 'Синий'}];

arrnum4.splice(1,1)
alert(arrnum4)

 arrnum5.splise(1,3,6,10)
alert(arrnum5)
//3
let arrnum7 = [4, 6, 'Ivan', 5, 'Denis '] ;

arrnum7.splice(2,0,null)
alert(arrnum7)


























