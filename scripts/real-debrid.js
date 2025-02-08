const urlParams = new URLSearchParams(window.location.search);
const link = urlParams.get("link");

if (link !== null) {
    jQuery("#links").val(link);
    jQuery("#sub_links").click();
    setTimeout(() => {
        window.location.href = jQuery(".link-generated a").first().attr("href");
    }, "3000");
}
