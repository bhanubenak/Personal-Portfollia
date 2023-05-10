// menu show

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// menu show
//  validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        console.log("show menu")
    })
}

// menu hidden
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}