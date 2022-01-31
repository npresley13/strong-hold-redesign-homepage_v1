const navs = [
    {
        text: "All Products",
        url: "#",
        class: "nav-link"
    },
    {
        text: "Government",
        url: "#",
        class: "nav-link" 
    },
    {
        text: "Custom Solutions",
        url: "#",
        class: "nav-link" 
    }
]


// Loops through array and builds the nav's list items

const createNav = navs.map(nav => `<li class="${nav.class}">
<a href="${nav.url}">${nav.text}</a></li>`).join(' ');


// Writes the list items in the navigation

document.getElementById('primary-navigation').innerHTML = createNav;

// Variables

const primaryNav = document.querySelector(".nav-bar");
const navToggle = document.querySelector(".mobile-nav-toggle");
const hamburger = document.getElementById('hamburger');

// Open & Close Mobile Menu

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        hamburger.setAttribute('class', "fas fa-times");
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        hamburger.setAttribute('class', "fas fa-bars");
    }
});



