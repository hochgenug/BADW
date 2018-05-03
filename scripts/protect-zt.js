/*global chrome */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        localStorage.setItem("url", request.greeting);
    });

//set default value
if (localStorage.getItem("url") === null) {
    if (document.referrer.includes("zone-telechargement")) {
        localStorage.setItem("url", "www.dl-protect1.com");
    }
}

if (localStorage.getItem("url") === window.location.hostname) {
    window.location.href = jQuery(".lienet a").attr("href");
    $(".continuer").click();
}
