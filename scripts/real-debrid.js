const urlParams = new URLSearchParams(window.location.search);
const link = urlParams.get("link");
let decodedLink = decodeURIComponent(link);

if (link !== null) {
    jQuery("#links").val(decodedLink);
    jQuery("#sub_links").click();
    setTimeout(() => {
        window.location.href = jQuery(".link-generated a").first().attr("href");
    }, "3000");
}
