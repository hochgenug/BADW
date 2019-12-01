// Check if the feature is enable
let promise = new Promise(function (resolve) {
    /*global chrome */
    chrome.storage.sync.get({
        isZtnEnable: true
    }, function (items) {
        if (items.isZtnEnable === true) {
            resolve();
        }
    });
});

promise.then(function () {
    // Auto search when the param search is set
    if ($("#searchinput").val() === "") {
        /*global getUrlParam */
        let serie = getUrlParam("search").replace(/\+/g, " ").replace(/\:/g, " ");
        $("#searchinput").val(serie);
        $("#dosearch").trigger("click");
    }

    // Display all the available link
    $(".downloadsortsonlink tr").each(function () {
        $(this).css({display: ""});
    });
    $(".btn-primary.more").each(function () {
        $(this).remove();
    });

    // Auto click to get the protected link
    $("form .continuer").click();

    // Auto click on the link
    setTimeout(function () {
        if ($(".lienet a").length > 0) {
            window.location = $(".lienet a").attr("href");
        }
    }, 1000);
});