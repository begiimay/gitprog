//Работа с HTML через JS


//По тегу
// let a = document.querySelector('div');
// console.log(a);

//По классу
// let a = document.querySelector('#box')
// console.log(a);

//По всем селекторам тега
// let a = document.querySelectorAll('div');
// console.log(a);

//По всем селекторам класса
// let a = document.querySelectorAll('#box');
// console.log(a);

//По ID
// let a = document.getElementById('box');
// console.log(a);

//По имени тега
// let a = document.getElementsByTagName('div');
// console.log(a);

//По атрибуту
// let a = document.querySelector('div');
// console.log(a.getAttribute('class'));

// let create = document.createElement("ul");
// console.log(create);

//Создание новых элементов:
//append- добавляет элемент в конец
// let b = document.querySelector(".boxes");
// let creAte = document.createElement("h1");

// b.append(creAte)
// console.log(b);

//prepend- добавляет элемент в начало
// let ul = document.querySelector(".ul");
// let li2 = document.createElement('li');

// ul.prepend(li2);
// console.log(ul);

// for(let i = 0; i <= 10; i++){
//     ul.innerHTML = i;
//     ul.prepend(li2);
// }

//innerHTML(можно использовать textContent) - показывает содержимое документа
// let i = document.querySelector('.li');
// console.log(i.innerHTML = '2');

// let div = document.querySelector("div");
// div.setAttribute('class' , 'box');
// div.setAttribute('id' , 'box');
// console.log(div);

// //удаление элемента
// let div = document.querySelector("div");
// div.setAttribute('class' , 'box');
// div.setAttribute('id' , 'box');
// console.log(div.remove());

//абота с Css черех JS
// let b = document.querySelector('.block')
// b.setAttribute('class' , 'block')
// console.log(b);
// b.style.background = "green";
// b.style.width = "500px";
// b.style.height = "700px";

// let btn = document.querySelector(".btn")

// console.log(btn);


// btn.addEventListener('click',() =>{
//     b.style.background = 'black';
//     b.style.width = "300px";
//     b.textContent = "Я поменялся";
//     b.style.color = "white";
// })


//Задачи
//1
let i = document.querySelector('.li');
console.log(i.innerHTML);

//2
let b = document.querySelector(".box");
let creAte = document.createElement("div");

b.append(creAte)
console.log(b);

//3
let a = document.querySelectorAll('.li2');
console.log(a);

//4
let c = document.querySelector(".div");
c.setAttribute('class' , 'div')
console.log(b);
c.style.background = "blue";
c.style.width = "500px";
c.style.height = "500px";


























