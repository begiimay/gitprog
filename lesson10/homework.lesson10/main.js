//1
let a = [true,false,true,true];

a.splice(2,2);

console.log(a);

//1.2
let a2 = [1,true,1];

a2.splice(2,1);

console.log(a2);

//2
let num = prompt("Введите число");
let num2 = prompt("Введите 2-ое число");

const result = num + num2;
const result2 = num * num2;

if (num > num2){
    alert(result);
}else if (num < num2){
    alert(result2);
}else if(num == num2){
    alert("Числа одинаковые");
}

//3
let arr = [1,2,3,4,5];

 let result3 = arr.reduce(function(a ,b){
    return a + b;
})
console.log(result3);
//3.2
let arr2 = [2,11,15];
let result4 = arr2.reduce(function(c,d){
    return c + d;
})
console.log(result4);

//4

let boolean = [true,true,true];

let result5 = boolean.reduce(function(){
    return true
    
})
console.log(result);

//4.2

let boolean2 = [true,false,true];

let result6 = boolean.reduce(function(){
    return false
    
})
console.log(result);

//5
const country = {
       Бишкек:"Кыргызстан",
       Нурсултан:"Казахстан",
       Вашингтон:"Америка",
    }
    
    for(let key in country){
       console.log(key," - это ",country[key]);    
    }
    
    const country2 = {
       Минск:"Беларусь",
       Москва:"Россия",
       Киев:"Украина",
    }
    
    for(let key in country2){
       console.log(key," - это ",country2[key]);    
    }

//6
let num3 = prompt("Введите число");

if(num3 <= 15){
   alert("Время относиться к первой четверти часа")
}else if(num3 > 15 && num3 <= 30){
    alert("Время относиться ко второй четверти часа");
}else if(num3 > 30 && num3 <= 45){
    alert("Время относиться к третей половине часа");
}else if(num3 > 45 && num3 <= 60){
    alert("Время относиться к четвертой половине часа")
}else{
    alert("Не найдено");
}

//7
function getWeekDay(date) {
    let days = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"];

    return days[date.getDay()]
}
let date = new Date(2022, 05,26);
console.log(getWeekDay(date));





















