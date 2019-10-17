// Check if the feature is enable
let promise = new Promise(function (resolve) {
    /*global chrome */
    chrome.storage.sync.get({
        isEdEnable: true
    }, function (items) {
        if (items.isEdEnable === true) {
            resolve();
        }
    });
});

promise.then(function () {
    $(".blockcontent table").remove();
    removeIfExist(".blockheader");
    removeIfExist(".blockcontent .upload-infos");
    removeIfExist(".blockfooter");
});