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
    // zt-protect.com protection
    jQuery("button:submit").click();
    let link = jQuery(".lienet a").attr("href");
    if (typeof link !== "undefined") {
        window.location.href = jQuery(".lienet a").attr("href");
    } else{
        jQuery(".showURL").click();
    }

    // zt-protect.net protection
    let article = jQuery("#single :submit");
    if (typeof article !== "undefined") {
        jQuery(article).click();
    }
});