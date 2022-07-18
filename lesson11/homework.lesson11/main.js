//1
// let c = querySelector(".ul");
// let li2 = document.createElement('li');;

// for (let i = 2; i <= 10; i++) {
//     ul.innerHTML = i;
//     ul.prepend(li2);
//   }
let ul = document.querySelector(".ul");
let li2 = document.createElement('li');

// console.log(ul);

for(let i = 0; i % 2 == 1; i++){
    ul.innerHTML = i;
}
console.log(ul);
//2
let btn = document.querySelector(".btn")

console.log(btn);

btn.addEventListener('click',() =>{
    btn.style.width = "100px";
    btn.style.height = "50px"
    btn.textContent = "Hello world";
    btn.style.color = "white";
})

//3
let a = document.querySelectorAll(".list-item");
console.log(a);

//4
let b = document.querySelectorAll('.list-item');
console.log(b.innerHTML = "1 green")