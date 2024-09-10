
const stickyNav = document.getElementById('sticky-main-nav');
const biggerNav = document.getElementById('bigger-screen-nav');
const smallerNav = document.getElementById('smaller-screen-nav');

// Function to check if the element is out of view
function checkVisibility() {


    const rect = biggerNav.getBoundingClientRect();
    const rect2 = smallerNav.getBoundingClientRect();

    // Element is out of view when its bottom is above the viewport or its top is below the viewport
    if (rect.bottom < 0 || rect.top > window.innerHeight || rect2.bottom < 0 || rect2.top > window.innerHeight) {
        stickyNav.classList.remove('non-active-nav');

    } else {
        stickyNav.classList.add('non-active-nav');
    }

}

// Add scroll event listener to check visibility when scrolling
window.addEventListener('scroll', checkVisibility);









let menuBtns = document.querySelectorAll('.ri-menu-line.menu-btn');



let slideMenu = document.getElementById('slide-menu');

let slideClose = document.getElementById('slide-close');


menuBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        slideMenu.classList.remove('menu-non-active');
    })
})

slideClose.addEventListener('click',()=>{
    slideMenu.classList.add('menu-non-active');
})



