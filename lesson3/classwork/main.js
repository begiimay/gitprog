//Условные операторы-if,else, ?

// let num = 15;
// let str = "string";

//  if (num ==5){
//      console.log("верно");
//  }else{
//      console.log("неверно");
//  }

// if (num == 10){
//     console.log("верно");
// }else if (num >= 10){
//     console.log("тоже верно");
// }else{
//     console.log("не верно");
// }

// if (str == "string"){
//     console.log(true);
// }else {
//     console.log(false)
// }

// let age = prompt("Введите ваш возраст");
// let age2;

// if (age >= 18){
//     age2 = age;
// }else if (age < 16){
//     age2 = age;
// }

// console.log(age2);


//? - тернарный оператор
// let num = 50;

// num ==50 ? alert("Верно") : alert ("Неверно");

//Задачи

//1
let a = "test";

if (a == "test"){
   console.log("Верно");
}else{
    console.log("Неверно")
}

//2
let m = prompt("Введите число");
let n;

if (m > 50){
    n = "Большое";
}else{
    n = "Маленькое"
}

console.log(n)

//3
let m2 = prompt("Введите произвольное число");
if (m2 >= 50){
    n = "Большое";
}else{
    n = "Маленькое";
}

alert(n)

//4
let age = confirm("Есть ли вам 18?")

if (age == true){
   console.log("Есть");
}else{
    console.log("Нет");
}

//5
let age2 = prompt ("Введите ваш возраст");

if (age <= 17){
   alert("Вы пока ребенок");
}else if (age >= 18){
    alert("Вы уже взрослый");
}

console.log(age)

//6
let num = prompt("Введите число");

if (num > 0){
    alert(1);
}else if (num < 0){
    alert(-1);
}else if(num == 0){
    alert(0);
}