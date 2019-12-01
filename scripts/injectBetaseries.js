// Functions to manage the links
function getSearchUrl(provider, serie) {
    serie = serie.replace(/\s/g, "+").replace(/\"/g, "+");
    let searchLink = null;
    switch (provider) {
        case "ZT":
            searchLink = "https://www.zone-telechargements.net/?search=";
            break;
        case "ZTN":
            searchLink = "https://www.zone-telechargement.network/index.php?do=search&search=";
            break;
        case "ED":
            searchLink = "https://www.extreme-down.xyz/home.html?do=search&subaction=search&story=";
            break;
        case "ST":
            searchLink = "https://www.seriestream.co/recherche?q=";
            break;
    }
    return searchLink + serie;
}

function generaHtmlLink(link, name) {
    return "<a href=" + link + " target='_blank' style='text-decoration: none;font-weight: bold;' class='generated-links'>" + name + "</a>";
}

function getLinks(linkZT, linkZTN, linkED, linkST) {
    let html = "<div class='badw-feature' style ='position:absolute; right:130px;width:130px;'>";
    html += generaHtmlLink(linkZT, "ZT") + " - "  + generaHtmlLink(linkZTN, "ZTN")
         + " - " + generaHtmlLink(linkED, "ED") + " - " + generaHtmlLink(linkST, "ST");
    html += "</div>";
    return html;
}

// Add the providers links and the check button for each line
let checkImage = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjU2LjAwMDAwMHB0IiBoZWlnaHQ9IjI1Ni4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDI1Ni4wMDAwMDAgMjU2LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE0LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwyNTYuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTYzNSAxODAyIGMtMjcgLTEwIC03MiAtMzMgLTEwMCAtNTEgLTkwIC02MSAtMjg1IC0yNjggLTQwOCAtNDMzCi02NSAtODYgLTEyMiAtMTYwIC0xMjcgLTE2MyAtNSAtMyAtMTYgOSAtMjQgMjcgLTggMTggLTI2IDU5IC00MCA5MSAtMjQgNTQKLTI3IDU3IC02MCA1NyAtNTAgMCAtMTQ2IC0zOCAtMTgwIC03MiAtMjcgLTI4IC0yOCAtMzIgLTIyIC05MyA5IC04NyA0OSAtMjIyCjk2IC0zMjIgNDUgLTk3IDYwIC0xMDYgMTY1IC0xMDcgMTA0IC0xIDE0NSAyMCAxOTcgMTAzIDg3IDEzOSAzMDYgNDE1IDU5Ngo3NTEgMTU0IDE3OCAxNzMgMjEyIDEzMCAyMjQgLTQ2IDEyIC0xNzMgNSAtMjIzIC0xMnoiLz4KPC9nPgo8L3N2Zz4=";
$("#member_shows > .showItem").each(function () {
    let serieName = $(this).children(".showItem__col--1").children(".title").children("strong").text();
    serieName = serieName.replace(/'/g, " ");
    $(this).children(".showItem__col--3").children(".actions").append(getLinks(
            getSearchUrl("ZT", serieName),
            getSearchUrl("ZTN", serieName),
            getSearchUrl("ED", serieName),
            getSearchUrl("ST", serieName))
            + "<div class='actionButton' onclick='checkAll(this)' style='position: absolute;left: 96px;color: black;height: 20px;'><img style='height:20px;' src='" + checkImage + "'></div>");
});

// Only display the series in progress and not started.
$("#ongoing").trigger("click");
$("#empty").trigger("click");

// Check all the episodes for the current season
function checkAll(elt) {
    let fastforward = $(elt).parent().find(".fastforward a").attr("onclick");
    eval(fastforward);

    function markAllAsSeen() {
        let unseens = $(".episodes_list .unseen");
        if (unseens.length > 0) {
            clearInterval(intervalID);
            unseens.each(function () {
                $(this).find(".actions a").click();
            });
            setTimeout(function () {
                eval(fastforward);
            }, 1000);
        }
    }

    let intervalID = window.setInterval(markAllAsSeen, 500);
}