if ($(".lien a").length === 1) {
    window.location.href = $(".affichier_lien a").attr("href");
}

if ($("#submit_button").length === 1) {
    $("#submit_button").click();
}