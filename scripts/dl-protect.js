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
    let link = jQuery(".urls a").attr("href");

    if (typeof link !== "undefined") {
        window.location.href = "https://real-debrid.com/?link=" + encodeURIComponent(link);
    }

    let verifInterval = 0;
    function verifierElement() {
        if (jQuery("#subButton").length > 0 && jQuery("#subButton").text() === "Continuer") {
            jQuery("#subButton").click();
            clearInterval(verifInterval);
        }
    }
    verifInterval = setInterval(verifierElement, 2000);
    verifierElement();
});