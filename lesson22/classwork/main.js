async function f1(){ 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    return  res.json(); 
} 
async function f2(){ 
   const res = await fetch('https://jsonplaceholder.typicode.com/comments'); 
   return  res.json(); 
} 
async function f3(){ 
    const res = await fetch('https://jsonplaceholder.typicode.com/albums'); 
    return  res.json(); 
}      

async function go(){ 
   let a = await f1(); 
   console.log(a) 

   let b =await f2(); 
   console.log(b) 


   let c =await f3(); 
   console.log(c) 
} 
go();
