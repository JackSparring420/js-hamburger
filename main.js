const openButton = document.querySelector(".header-right > a")
const closeButton = document.querySelector(".close")
const hamburgerMenu = document.querySelector('.hamburger-menu');

openButton.addEventListener("click",
    function(){
        hamburgerMenu.classList.add('active');
    }        
)

closeButton.addEventListener("click",
    function(){
        hamburgerMenu.classList.remove('active');
    }
)


// const mediaQuery = window.matchMedia('(max-width: 1000px)')
// const mediaQueryB = window.matchMedia('(min-width: 1001px)')
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
