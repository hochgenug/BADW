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
}

document.addEventListener("DOMContentLoaded", documentEvents, false);
