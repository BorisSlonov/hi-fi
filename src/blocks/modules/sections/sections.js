
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









