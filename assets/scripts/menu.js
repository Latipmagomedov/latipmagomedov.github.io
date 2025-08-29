const burgerBtn = document.querySelector('#open-menu')
const closeBtn = document.querySelector('#close-menu')
const headerMenu = document.querySelector('.header-mobile__menu')
const menu = document.querySelector('.menu-mobile')
const menuLink = document.querySelectorAll('.menu-mobile__link')
burgerBtn.addEventListener('click', () => {
    headerMenu.classList.add('header-mobile__menu_active')
    menu.classList.add('menu-mobile_open')
})

closeBtn.addEventListener('click', () => {
    headerMenu.classList.remove('header-mobile__menu_active')
    menu.classList.remove('menu-mobile_open')
})

menuLink.forEach((btn) => {
    btn.addEventListener('click', () => {
        headerMenu.classList.remove('header-mobile__menu_active')
        menu.classList.remove('menu-mobile_open')
    })
})


