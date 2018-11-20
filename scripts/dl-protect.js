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

// autoclick when the link is available
if (localStorage.getItem("url") === window.location.hostname) {
    jQuery("input").click();
    let link = jQuery(".lienet a").attr("href");
    if (link !== undefined) {
        window.location.href = jQuery(".lienet a").attr("href");
    }
}
