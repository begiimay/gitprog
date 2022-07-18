//localStorage
// const arr = [1,2,3,4,55,666];
// function add(){
//     localStorage.setItem(1, arr)
// }
// function get(){
//     let output = localStorage.getItem(1);
//     console.log(output);
//     let getOut = document.getElementById('output');
//     getOut.innerHTML = output;
// }
// function dlt(){
//     localStorage.removeItem(1)
// }
// function clr(){
//     localStorage.clear()
// }

//map
// const array = [1,2,3,4,4,55,66]
// const newArray = array.map(item =>{
//     return item * 2 + 2
// })
// console.log(newArray);

const people = [18,22,11,8,17,25];
const people2 = people.filter(item =>{
    return item >= 18
 })
console.log(people2);