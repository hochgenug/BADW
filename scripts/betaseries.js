/*global chrome */
// Check if the feature is enable
let promise = new Promise(function (resolve) {
    chrome.storage.sync.get({
        isBsEnable: true
    }, function (items) {
        if (items.isBsEnable === true) {
            resolve();
        }
    });
});

promise.then(function () {
    let script = document.createElement("script");
    script.src = chrome.runtime.getURL("scripts/injectBetaseries.js");
    script.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);

    /*global removeAllIfExist */
    removeAllIfExist($(".tagsList "));
    removeAllIfExist($(".etags "));
});