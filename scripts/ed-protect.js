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
    if ($(".lien a").length === 1) {
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
});
