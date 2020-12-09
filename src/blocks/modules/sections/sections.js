
const hiddenCard = document.querySelectorAll(".commitment-hidden")

if (hiddenCard) {
    function addRemoveOnResize() {

        if (window.innerWidth <= 768) {
            hiddenCard.classList.remove('column-one-height')
        } else {
            hiddenCard.classList.add('column-one-height')
        }

    }
    document.addEventListener('resize', function () {
        addRemoveOnResize()
    })

}



function Tabs() {
    var bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = function (e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

var connectTabs = new Tabs();




function TabsPag() {
    var bindAllPag = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('activePag');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('activePag');
        }
    }

    var change = function (e) {
        clear();
        e.target.classList.add('activePag');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('activePag');
    }

    bindAllPag();
}

var connectTabs = new TabsPag();



















let tabLink = Array.from(document.querySelectorAll('.carriers-choise__link'));

const handleClick = (e) => {
    e.preventDefault();
    tabLink.forEach(node => {
        node.classList.remove('carriers-choise__link_active');
    });
    e.currentTarget.classList.add('carriers-choise__link_active');

}

tabLink.forEach(node => {
    node.addEventListener('click', handleClick)
});













// let tabLinkPagination = Array.from(document.querySelectorAll('.carriers-choise__link-pagination'));

// const handleClickPagination = (e) => {
//     e.preventDefault();
//     tabLinkPagination.forEach(node => {
//         node.classList.remove('carriers-choise__link_active-pagination');
//     });
//     e.currentTarget.classList.add('carriers-choise__link_active-pagination');

// }

// tabLinkPagination.forEach(node => {
//     node.addEventListener('click', handleClickPagination)
// });
