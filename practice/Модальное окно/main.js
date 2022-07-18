let cont = document.querySelector(".section");

let btn = document.querySelector(".button")

let close = document.querySelector(".close")

btn.onclick = function(){
    cont.style.display = "block";
}

close.onclick = function(){
    cont.style.display = "none";
}


window.onclick = function(event){
      if(event.target === modal){
        cont.style.display = "none";
      }
}























