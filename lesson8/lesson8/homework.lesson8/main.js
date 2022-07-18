//1
let obj = {'Коля':1000, 
           'Вася':500, 
           'Петя':200};

console.log(obj.Коля);
console.log(obj.Петя);

//2
let obj2 = {'Вася':500,
            'Петя':200};

function multiplyNumeric() {
    for (let key in obj2) {
      
        obj[key] *= 2;
        console.log(obj2);
      }
    }
multiplyNumeric()            

//3
function ifAge (){
    let Aktan = [1,2,3,4,5]
    console.log("1" in Aktan);
}

ifAge()

//4
let arr = [1,2,3,4,5,6,7,8,9,10];

function ifNum(){
   
for (let key in arr) {
      arr[key] *= 2;
}
for (let key in arr) {
  arr[key] /= 10 ;
}

for(let e of arr) {
   if (Number.isInteger(e)) console.log(e);
}

}

ifNum()

//5


let arrnum = [1,2,3,4,5];

const initialValue = 0;
const sumWithInitial = arrnum.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);




















