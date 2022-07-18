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

let title = document.querySelector('.box__container')

function posts(){
      document.getElementById('section-button').addEventListener('click',() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data =>{
          

            data.forEach((el) => {
                let card = el
               
                    i=title.innerHTML
                    title.innerHTML=`${i}<div class="main__card">
                                            <img class='img' src="${`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwf9T7zrHksk6kusAQEYzoOAnBeWq0rW4zlqRGGvQ_vQ1k4NK_YY5X_HyiyyTjIBxAw9A&usqp=CAU`}" alt=''>
                                            <h1 class="section-title">${card.title}</h1>
                                            <p class="section-subtitle">${card.body}</p>
                                            
                                            </div> `
            })
        })
    })
    }
