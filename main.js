let list = document.querySelector(".header-right")
let hamburger = document.querySelector(".hamburger-menu")
let cross = document.querySelector(".close")
const hamburgerMenu = document.querySelector('.hamburger-menu');
// const mediaQuery = window.matchMedia('(max-width: 1000px)')
// const mediaQueryB = window.matchMedia('(min-width: 1001px)')

list.addEventListener("click",
    function(){
        hamburgerMenu.classList.add('close');
    }        
)

cross.addEventListener("click",
    function(){
        hamburgerMenu.classList.remove('close');
    }
)



// list.addEventListener("click",
//     function(){
//         if(mediaQuery.matches){
//             hamburger.style.display = "block";
//         } else{
//             hamburger.style.display = "none";
//         }    
//     }
// )

// cross.addEventListener("click",
//     function(){
//         hamburger.style.display = "none";
//     }
// )
