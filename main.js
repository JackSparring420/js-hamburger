let list = document.querySelector(".header-right")
let hamburger = document.querySelector(".hamburger-menu")
let cross = document.querySelector(".close")
const mediaQuery = window.matchMedia('(max-width: 1000px)')

list.addEventListener("click",
    function(){
        if(mediaQuery.matches){
            hamburger.style.display = "block";
        } else{
            hamburger.style.display = "none";
        }    
    }
)

cross.addEventListener("click",
    function(){
        hamburger.style.display = "none";
    }
)

