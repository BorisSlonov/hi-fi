


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


