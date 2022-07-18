// let box = document.querySelector("div");
// console.log(box.getAttribute("id"));


// let create  = document.createElement('div');
// create.setAttribute('class' , 'block');
// console.log(create.textContent = "Hola");
// console.log(create);

// let h1 = document.createElement('H1');
// console.log(h1.innerHTML ='Hello world');
// console.log(h1);

// let h2 = document.querySelector('.h2');
// console.log(h2.innerHTML  = "im not title");

// let ul = document.querySelector('.ul');
// ul.remove();
// let li = document.createElement('li');
// let li2 = document.createElement('li');

// li.textContent = 5;
// li2.textContent = 0;

// ul.append(li);
// ul.prepend(li2);
// console.log(ul);


//classList
//add/remove
// let div = document.querySelector('div');
// div.classList.add('div');
// div.classList.remove('div');
// console.log(div);

//toggle- смена стилей при нажатии
// let div = document.querySelector('.box');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click',() =>{
//     div.classList.toggle('black')
// })

//contains
// console.log(div.classList.contains('box'));



//Задачи
//1
// let inp = document.querySelector('.input');
// let btn = document.querySelector('.btn');
// let input = document.createElement('input')

// btn.addEventListener('click',() =>{
//     console.log(input);
// }) 

//2
let btn2 = document.querySelector('button');
btn2.addEventListener('click', ()=>{
    btn2.classList.remove("button");
    // console.log(btn2);
})
//3
// let a = -1;
//    let clicks = 0;

//     function clickME() {

//         clicks += 1;
//         document.getElementById("clicks").innerHTML = clicks;}

// let btn2 = document.querySelector('.button');
// btn2.addEventListener('click', ()=>{
//     if{

//     }
// }
// )

//4
let bc = prompt("Введите цвет ");
let hd  = document.querySelector("header");

if (bc == "черный"){
    hd.style.background = "black"
}



























