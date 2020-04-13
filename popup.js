function documentEvents() {
    /*global chrome */
    document.getElementById("za-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isZaEnable": element.srcElement.checked});
        });

    document.getElementById("bs-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isBsEnable": element.srcElement.checked});
        });

    document.getElementById("ed-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isEdEnable": element.srcElement.checked});
        });

    document.getElementById("utb-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isUtbEnable": element.srcElement.checked});
        });
}

let promise = new Promise(function (resolve) {
    chrome.storage.sync.get({
        isZaEnable: true,
        isBsEnable: true,
        isEdEnable: true,
        isUtbEnable: true,
    }, function (items) {
        resolve(items);
    });
});
promise.then(function (items) {
    document.getElementById("za-feature").checked = items.isZaEnable;
    document.getElementById("bs-feature").checked = items.isBsEnable;
    document.getElementById("ed-feature").checked = items.isEdEnable;
    document.getElementById("utb-feature").checked = items.isUtbEnable;
});

document.addEventListener("DOMContentLoaded", documentEvents, false);