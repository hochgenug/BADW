jQuery("button:submit").click();
let link = jQuery(".lienet a").attr("href");
if (typeof link !== "undefined") {
    window.location.href = jQuery(".lienet a").attr("href");
} else{
    jQuery(".showURL").click();
}
