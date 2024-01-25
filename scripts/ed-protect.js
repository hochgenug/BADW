// Check if the feature is enable
let promise = new Promise(function (resolve) {
    /*global chrome */
    chrome.storage.sync.get({
        isEdEnable: true
    }, function (items) {
        if (items.isEdEnable === true) {
            resolve();
        }
    });
});

promise.then(function () {
    $("#ads_top").remove();
    $(".non_printable").remove();
    $(".contenu_captcha").next(2).remove();
    $(".contenu_captcha").next(2).remove();

    let linkElement = $(".lien a");
    if (linkElement.length === 1) {
        window.location.href = $(".affichier_lien a").attr("href");
    }

    let continueButton = $(".continuer");
    let submitButton = $("#submit_button");

    if (continueButton.length === 1) {
        continueButton.click();
    }

    if (submitButton.length === 1) {
        submitButton.click();
    }

    function managePackLinks() {
        if (linkElement.length >= 1) {
            $("h2").append("<p id='downloadAll' style='color:red;cursor: pointer'>Download all</p>");
        }
        $("#downloadAll").click(function () {
            linkElement.each(function (index) {
                window.open($(this).attr("href"), "_blank");
            });
        });
    }
    managePackLinks();
});
