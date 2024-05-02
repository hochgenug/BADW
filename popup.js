function documentEvents() {
    /*global chrome */
    document.getElementById("ztza-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isZtZaEnable": element.srcElement.checked});
        });

    document.getElementById("bs-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isBsEnable": element.srcElement.checked});
        });

    document.getElementById("ed-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isEdEnable": element.srcElement.checked});
        });
}

let promise = new Promise(function (resolve) {
    chrome.storage.sync.get({
        isZtZaEnable: true,
        isBsEnable: true,
        isEdEnable: true
    }, function (items) {
        resolve(items);
    });
});
promise.then(function (items) {
    document.getElementById("ztza-feature").checked = items.isZtZaEnable;
    document.getElementById("bs-feature").checked = items.isBsEnable;
    document.getElementById("ed-feature").checked = items.isEdEnable;
});

document.addEventListener("DOMContentLoaded", documentEvents, false);