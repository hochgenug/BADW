function scrollTo(destination, condition) {
    if ($(condition).length === 1) {
        $("html, body").animate({
            scrollTop: $(destination).offset().top
        }, 200);
    }
}

function removeIfExist(object) {
    if ($(object).length === 1) {
        $(object).remove();
    }
}

function removeAllIfExist(object) {
    $.each($(object), function () {
        {
            removeIfExist($(this));
        }
    });
}

function getUrlParam($paramKey) {
    var results = new RegExp("[\?&]" + $paramKey + "=([^&#]*)").exec(window.location.href);
    return results[1] || 0;
}