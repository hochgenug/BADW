function myAction(input) {
    localStorage.setItem("url", input.value);
    /*global chrome */
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: localStorage.getItem("url")}, function (response) {
        });
    });
}

function documentEvents() {
    document.getElementById("name_textbox").value = localStorage.getItem("url");
    document.getElementById("ok_btn").addEventListener("click",
        function () {
            myAction(document.getElementById("name_textbox"));
        });

    document.getElementById("at-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isAtEnable":element.srcElement.checked});
        });

    document.getElementById("bs-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isBsEnable":element.srcElement.checked});
        });

    document.getElementById("ed-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isEdEnable":element.srcElement.checked});
        });

    document.getElementById("utb-feature").addEventListener("click",
        function (element) {
            chrome.storage.sync.set({"isUtbEnable":element.srcElement.checked});
        });
}

let promise = new Promise(function (resolve) {
    chrome.storage.sync.get({
        isAtEnable: true,
        isBsEnable: true,
        isEdEnable: true,
        isUtbEnable: true,
    }, function (items) {
        resolve(items);
    });
});
promise.then(function (items) {
    document.getElementById("at-feature").checked = items.isAtEnable;
    document.getElementById("bs-feature").checked = items.isBsEnable;
    document.getElementById("ed-feature").checked = items.isEdEnable;
    document.getElementById("utb-feature").checked = items.isUtbEnable;
});

document.addEventListener("DOMContentLoaded", documentEvents, false);