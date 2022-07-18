//1
let a = document.querySelector(".promo__genre");

a.innerHTML = "Драма";

//2
const b = document.querySelector(".promo__bg");

b.style.background = `url(../project/img/migi-e1444304413881.webp)`;

//3

let c = document.querySelectorAll('.promo__interactive-item')

for (let i = 0; i < c.length; i++) {
    c[i].innerHTML = (i + 1) + '.' + c[i].innerHTML;
};