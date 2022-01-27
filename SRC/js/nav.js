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
<a href="${nav.url}">${nav.text}</a></li>`);


// Writes the list items in the navigation

document.getElementById('nav-left').innerHTML = createNav;

// Variables

const navLeft = document.getElementById('nav-left');



