// Functions to manage the links
function getSearchUrl(provider, serie) {
    serie = serie.replace(/\s/g, "+").replace(/\"/g, "+");
    var searchLink = null;
    switch (provider) {
        case "ZT":
            searchLink = "http://www.zone-telechargement1.com/index.php?search=";
            break;
        case "ED":
            searchLink = "https://www.extreme-down.im/index.php?do=search&badw=";
            break;
        case "T411":
            searchLink = "http://torrent411.xyz/torrents/search/?q=";
            break;
    }
    return searchLink + serie;
}

function generaHtmlLink(link, name) {
    return "<a href=" + link + " target='_blank' style='text-decoration: none;font-weight: bold;' class='generated-links'>" + name + "</a>";
}

function getLinks(linkZT, linkED, linkT411) {
    var html = "<div class='badw-feature' style ='position:absolute; right:130px;width:100px;'>";
    html += generaHtmlLink(linkZT, "ZT") + " - " + generaHtmlLink(linkED, "ED") + " - " + generaHtmlLink(linkT411, "T411");
    html += "</div>";
    return html;
}

// Add the providers links and the check button for each line
var checkImage = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjU2LjAwMDAwMHB0IiBoZWlnaHQ9IjI1Ni4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDI1Ni4wMDAwMDAgMjU2LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE0LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwyNTYuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTYzNSAxODAyIGMtMjcgLTEwIC03MiAtMzMgLTEwMCAtNTEgLTkwIC02MSAtMjg1IC0yNjggLTQwOCAtNDMzCi02NSAtODYgLTEyMiAtMTYwIC0xMjcgLTE2MyAtNSAtMyAtMTYgOSAtMjQgMjcgLTggMTggLTI2IDU5IC00MCA5MSAtMjQgNTQKLTI3IDU3IC02MCA1NyAtNTAgMCAtMTQ2IC0zOCAtMTgwIC03MiAtMjcgLTI4IC0yOCAtMzIgLTIyIC05MyA5IC04NyA0OSAtMjIyCjk2IC0zMjIgNDUgLTk3IDYwIC0xMDYgMTY1IC0xMDcgMTA0IC0xIDE0NSAyMCAxOTcgMTAzIDg3IDEzOSAzMDYgNDE1IDU5Ngo3NTEgMTU0IDE3OCAxNzMgMjEyIDEzMCAyMjQgLTQ2IDEyIC0xNzMgNSAtMjIzIC0xMnoiLz4KPC9nPgo8L3N2Zz4=";
$("#member_shows > .showItem").each(function () {
    var serieName = $(this).children(".showItem__col--1").children(".title").children("strong").text();
    $(this).children(".showItem__col--3").children(".actions").append(getLinks(getSearchUrl("ZT", serieName), getSearchUrl("ED", serieName), getSearchUrl("T411", serieName)) + "<div class='actionButton' onclick='checkAll(this)' style='position: absolute;left: 96px;color: black;height: 20px;'><img style='height:20px;' src='" + checkImage + "'></div>");
});

// Only display the series in progress and not started.
$("#ongoing").trigger("click");
$("#empty").trigger("click");

// Check all the episodes for the current season
function checkAll(elt) {
    var event = $(elt).parent().find(".fastforward a").attr("onclick");
    eval(event);
    setTimeout(function () {
        $(".episodes_list .unseen").each(function () {
            $(this).find(".actions a").click();

        });
    }, 1000);
    setTimeout(function () {
        eval(event);
    }, 1000);
}