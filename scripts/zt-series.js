scrollTo(".otherversions h3:last", ".otherversions");

/*global removeIfExist */
// Remove useless stuff
removeIfExist("div.corps >> h2");
$.each($("#dle-content > div.base > div > div.corps > center"), function () {
    if ($(this).find(".postinfo").length === 0) {
        $(this).remove();
    }
});
