//Object

// let obj = {
//     name:"John",
//     age:21,
//     country:"USA",
//     bool:true,
// }

// console.log(obj.age );
// console.log(obj.name);
// console.log(obj.bool);



//Операторы обьекта:
// const obj2 = {
//     name:"Jacob",
//     age:23,
//     country:"USA",
//     bool:true,
//     arr:[1,2,3,4,5]
// }
// console.log(obj2.arr);

//For:
//for(let key in obj2){
 //   console.log(obj2);
//}

//In-Проверяет есть ли этот ключ в обьекте ,если есть ,то он выводит true,если нет ,то выводит false
//console.log(age in obj2);



//Методы обьектов:

//1)Object.keys-показфвает только ключи:
//console.log(Object.keys(obj2));

//2)Object.values-только значения ключей:
//console.log(Object.values(obj2));

//3)Object.entries-показывет и ключи и значения в ввиде массива:
//console.log(Object.entries(obj2).length);


//Задачи:

//1
let user = {
    name: "John",
    age: 30
};

console.log(user.age)

//2
let obj3 ;
function isEmpty(){
    console.log('name' in obj3);
}


//3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

function sumSalaries(salaries){
    for (let salary of Object.values(salaries)) {
        sum += salary;
      }
    return sum;  
}
console.log(sumSalaries(salaries));

//4
 let obj2 = {
        mark: "BMW",
        country: "Germany",
        model: "M5",
     }

console.log(Object.values(obj2).length);     

//5
let nums = {
        num1: 1,
        num2: 2,
        num3: 3,
        num4: 4,
        num5: 5
}



for(let i = 2;  i <=5; i++){
    if(i % 2 == 1) continue;
    console.log(i);  
}
 





































