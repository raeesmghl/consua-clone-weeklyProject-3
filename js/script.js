
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










// copied from chatgpt (clean code)
let menuBtns = document.querySelectorAll('.ri-menu-line.menu-btn');
let slideMenu = document.getElementById('slide-menu');
let slideClose = document.getElementById('slide-close');
let sliderItems = document.querySelectorAll('#slide-main-nav-items a'); // Get all slider items

// Show the slider
function showSideMenu() {
    slideMenu.classList.remove('menu-non-active');
}

// Hide the slider
function hideSideMenu() {
    slideMenu.classList.add('menu-non-active');
}

// Hide the slider when clicking outside
function hideOnClickOutside(event) {
    // Check if the clicked element is outside the menu or not the menu buttons
    if (!slideMenu.contains(event.target) && !Array.from(menuBtns).some(btn => btn.contains(event.target))) { // read  the Array.from and Array.some
        hideSideMenu(); // Hide the slider if clicked outside
    }
}

// Add event listeners for the menu buttons to show the slider
menuBtns.forEach((btn) => {
    btn.addEventListener('click', showSideMenu);
});

// Add event listener for the close button to hide the slider
slideClose.addEventListener('click', hideSideMenu);

// Add event listener for the whole document to hide the slider when clicking outside
document.addEventListener('click', hideOnClickOutside);

// Add event listeners to each slider item to hide the slider when clicked
sliderItems.forEach(item => {
    item.addEventListener('click', hideSideMenu);
});






















  const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    slidesPerView: 2,  // Show a maximum of 2 slides at a time
    // spaceBetween: 30,  // Optional: space between slides (in pixels)

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    fadeEffect: {
      crossFade: true,
    },
    speed: 1500,  // Control the fade effect duration (1000ms = 1 second)

    loop: true,

  });






  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

  });
