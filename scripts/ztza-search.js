// Check if the feature is enable
let promise = new Promise(function (resolve) {
    /*global chrome */
    chrome.storage.sync.get({
        isZtZaEnable: true
    }, function (items) {
        if (items.isZtZaEnable === true) {
            resolve();
        }
    });
});

promise.then(function () {
    scrollTo(".headBar", ".headBar");
    // Auto search when the param search is set
    if ($("#searchinputfull").val() === "" && getUrlParam("search") !== 0) {
        /*global getUrlParam */
        let serie = getUrlParam("search").replace(/\+/g, " ").replace(/\:/g, " ");
        $("#searchinput").val(serie);
        $("#dofullsearch").trigger("click");
    }
    scrollTo(".corps", ".corps");

    // Auto click to get the protected link
    let displayLink = $("center .content-ful form .continuer");
    if($(displayLink).length > 0){
        $(displayLink).click();
    }

    // Auto click on the link
    setTimeout(function () {
        if ($(".lienet a").length > 0) {
            window.location = $(".lienet a").attr("href");
        }
    }, 1000);
});