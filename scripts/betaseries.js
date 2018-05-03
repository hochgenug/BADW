var script = document.createElement("script");
/*global chrome */
script.src = chrome.extension.getURL("scripts/injectBetaseries.js");
script.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(script);

/*global removeAllIfExist */
removeAllIfExist($(".tagsList "));
removeAllIfExist($(".etags "));