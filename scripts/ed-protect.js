if ($(".contenu_captcha").length === 1 && $(".contenu_captcha .alert-box").length === 0) {
    $(".contenu_captcha input").click();
}

if ($(".affichier_lien a").length === 1) {
    window.location.href = $(".affichier_lien a").attr("href");
}