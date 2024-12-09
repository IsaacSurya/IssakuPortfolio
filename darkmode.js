
let darkmode = localStorage.getItem('darkmode')

const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {

document.body.classList.add('darkmode') 
localStorage.setItem('darkmode', 'active')

}

const disableDarkmode = () => {

document.body.classList.remove('darkmode') 
localStorage.setItem('darkmode', null)

}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {

darkmode = localStorage.getItem('darkmode')

darkmode !== "active" ? enableDarkmode(): disableDarkmode()

})
/*----------------text----------------*/
var typed = new Typed(".text", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*----------------text----------------*/




document.addEventListener('scroll', function() {
    const projectsBoxes = document.querySelectorAll('.projects-box');
    
    projectsBoxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Adjust these values based on where you want the effect to start
        if (scrollPosition > boxPosition + 100) { // Adjust the offset as needed
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
});

/*=================================menu-icon=======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


};
/*=================================remove menu-icon navbar when click on navbar link (scroll)=======================*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');