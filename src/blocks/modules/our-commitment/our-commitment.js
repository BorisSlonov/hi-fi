


$(document).ready(function () {


    function equalHeight(group) {
        var tallest = 0;
        group.each(function () {
            thisHeight = $(this).height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);
    }

    equalHeight($(".column-one-height"));



});


function addRemoveOnResize() {

    let hiddenCard = document.querySelectorAll(".commitment-hidden")

    if (window.innerWidth <= 768) {
        hiddenCard.classList.remove('column-one-height')
    } else {
        hiddenCard.classList.add('column-one-height')
    }

}

addRemoveOnResize() 