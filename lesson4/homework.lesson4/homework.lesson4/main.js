//1
let time = prompt("Введите число");

if (time >= 0 && time <= 15){
    console.log("время относится к четверти часа");
}else if(time > 15 && time <= 30){
    console.log("время относится к половине часа");
}else if (time > 30 && time <= 45){
    console.log("время относится к 3/4 часа");
}else if(time > 45 && time <= 60){
    console.log("время относится к целому часу");
}else{
    console.log("неизвестный диапазон");
}

//2
let a = 3;
let b = 7;

if(a > 2 && a < 11 || b >= 6 && b < 14){
    console.log("Верно");
}else {
    console.log("Неверно");
}

//3
 let a2 = 1;
 let b2 = 3;

// let a2 = 0;
// let b2 = 6;

// let a2 = 3;
// let b2 = 5;

const result = a2 + b2;
const result2 = a2 - b2;

if(a <= 1 || b >= 3){
    console.log(result);
}else{
    console.log(result2);
}

//4
let Vasya = prompt("Сколько км пробежал Вася?")

if (Vasya > 3 || Vasya == 5 ){
    alert("3 место");
}else if (Vasya > 6 || Vasya == 9){
    alert("2 место");
}else if (Vasya > 10 || Vasya == 13){
    alert("1 место");
}


















