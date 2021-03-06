'use strict'

//burger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        })
    })
})




//add class on scroll
document.addEventListener("scroll", (e) => {

    const content = document.querySelector("body");
    let scrolled = document.scrollingElement.scrollTop;
    let position = content.offsetTop;
    let header = document.querySelector("header");
   


    if (scrolled > position + 350) {
        content.classList.add('header-bgc');

    } else {
        content.classList.remove('header-bgc');
        content.classList.add('header-none-bgc');

    }


    //delay animation in 1 screen
    if (scrolled > position + 200) {


       

    }


});



$(document).ready(function () {
    let href = location.href

    if (href == 'https://borisslonov.github.io/hi-fi/dist/index.html') {
        $('.header__link_main').addClass('header__link_active');
    }

    if (href == 'https://borisslonov.github.io/hi-fi/dist/page-about.html') {
        $('.header__link_2').addClass('header__link_active');
    }



    if (href == 'https://borisslonov.github.io/hi-fi/dist/page-sectors.html') {
        $('.header__link_3').addClass('header__link_active');
    }


    if (href == 'https://borisslonov.github.io/hi-fi/dist/page-innovation.html') {
        $('.header__link_4').addClass('header__link_active');
    }


    if (href == 'https://borisslonov.github.io/hi-fi/dist/page-values.html') {
        $('.header__link_5').addClass('header__link_active');
    }


    if (href == 'https://borisslonov.github.io/hi-fi/dist/page-carriers.html') {
        $('.header__link_6').addClass('header__link_active');
    }


    if (href == 'https://borisslonov.github.io/hi-fi/dist/page-news.html') {
        $('.header__link_7').addClass('header__link_active');
    }


})





  