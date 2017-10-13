function scrollTo(destination, condition) {
    if ($(condition).length == 1) {
        $('html, body').animate({
            scrollTop: $(destination).offset().top
        }, 200);
    }
}

function removeIfExist(object) {
    if ($(object).length === 1) {
        $(object).remove()
    }
}