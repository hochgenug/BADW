// Check if the feature is enable
let promise = new Promise(function (resolve) {
    /*global chrome */
    chrome.storage.sync.get({
        isAtEnable: true
    }, function (items) {
        if (items.isAtEnable === true) {
            resolve();
        }
    });
});

promise.then(function () {
    // Auto search when the param search is set
    if ($("#searchinputfull").val() === "") {
        /*global getUrlParam */
        let serie = getUrlParam("search").replace(/\+/g, " ").replace(/\:/g, " ");
        $("#story").val(serie);
        $("#searchform .submit input").trigger("click");
    }

// Display language and resolution
    $(".cover_global").each(function () {
        // Increase height in order ton add one more line with details
        $(this).css({height: "300px"});

        let serieLink = $(this).children("div").children("a").attr("href");
        // Extract data from the link
        let resolution = serieLink.match(/(\d{3,4}(?:p|i)|(?:hd)\d{3,4})/i);
        let language = serieLink.match(/(?:french|vostfr|multi)/i);

        let details = "";
        if (resolution !== null) {
            if (resolution[0].indexOf("hd") !== -1) {
                resolution[0] = resolution[0].replace("hd", "") + "p";
            }
            details += resolution[0] + " ";

            // Highlight the HD files
            if (resolution[0] === "1080p") {
                $(this).css({
                    border: "2px #ff5d00 solid",
                    padding: "0px",
                    "box-shadow": "10px 10px 5px rgba(232, 187, 23, 0.66)"
                });
            } else {
                $(this).css({border: "2px #e4a6af solid", padding: "0px", "box-shadow": "10px 10px 5px #888"});
            }
        }
        if (language !== null) {
            details += language;
        }
        if (details !== null) {
            $(this).find(".cover_infos_title").children("a").append("<div>" + details.toUpperCase() + "</div>");
        }
    });

    scrollTo(".headBar", ".headBar");
});