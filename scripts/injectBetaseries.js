// Functions to manage the links
function getSearchUrl(provider, serie) {
    if(serie === "Attack on Titan"){serie = "Shingeki+no+Kyojin";}
    serie = serie.replace(/\s/g, "+").replace(/\"/g, "+");

    function manageProviders() {
        let searchLink = null;
        switch (provider) {
            case "ZTZA":
                searchLink = "https://www.zone-telechargement.city/?p=series&search=";
                break;
            case "ED":
                searchLink = "https://www.extreme-down.moe/?p=series&search=";
                break;
        }
        return searchLink;
    }

    return manageProviders() + serie.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function generaHtmlLink(link, name) {
    return "<a href=" + link + " target='_blank' style='text-decoration: none;font-weight: bold;' class='generated-links'>" + name + "</a>";
}

function getLinks(linkZTZA, linkED) {
    let html = "<div class='badw-feature' style ='position:absolute; right:180px; top:17px;'>";
    html += generaHtmlLink(linkZTZA, "ZT") + " - "
         +  generaHtmlLink(linkED, "ED");
    html += "</div>";
    return html;
}

// Add the providers links and the check button for each line
let checkImage = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjU2LjAwMDAwMHB0IiBoZWlnaHQ9IjI1Ni4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDI1Ni4wMDAwMDAgMjU2LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE0LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwyNTYuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTYzNSAxODAyIGMtMjcgLTEwIC03MiAtMzMgLTEwMCAtNTEgLTkwIC02MSAtMjg1IC0yNjggLTQwOCAtNDMzCi02NSAtODYgLTEyMiAtMTYwIC0xMjcgLTE2MyAtNSAtMyAtMTYgOSAtMjQgMjcgLTggMTggLTI2IDU5IC00MCA5MSAtMjQgNTQKLTI3IDU3IC02MCA1NyAtNTAgMCAtMTQ2IC0zOCAtMTgwIC03MiAtMjcgLTI4IC0yOCAtMzIgLTIyIC05MyA5IC04NyA0OSAtMjIyCjk2IC0zMjIgNDUgLTk3IDYwIC0xMDYgMTY1IC0xMDcgMTA0IC0xIDE0NSAyMCAxOTcgMTAzIDg3IDEzOSAzMDYgNDE1IDU5Ngo3NTEgMTU0IDE3OCAxNzMgMjEyIDEzMCAyMjQgLTQ2IDEyIC0xNzMgNSAtMjIzIC0xMnoiLz4KPC9nPgo8L3N2Zz4=";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

sleep(3000).then(() => {
    $("h3.text-sm").each(function () {
        let serieName = $(this).children("a").text();
        serieName = serieName.replace(/'/g, " ");
        $(this).children().append(getLinks(
            getSearchUrl("ZTZA", serieName),
            getSearchUrl("ED", serieName))
        );
    });
});

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