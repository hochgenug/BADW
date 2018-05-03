function autoDownload() {
    var btnDownload = $("#btn_download");
    var btnLaunchDownload = $(".big-button-green-flat");

    if (btnDownload.text().trim() === "Générer le lien de téléchargement") {
        btnDownload.click();
    }

    if (btnLaunchDownload.text().replace(/[\t\n]+/g, " ").trim() === "Cliquez-ici pour lancer votre téléchargement") {
        location.href = btnLaunchDownload.attr("href");
        setTimeout(function () {
            window.close();
        }, 1000);
    }
}

function autoLogin() {
    var loginPage = "https://login.uptobox.com/";
    if (location.href !== loginPage) {
        if ($("#inscription").length === 1) {
            location.href = loginPage;
        }
    } else {
        $("login-form").submit();
        $("#login-form .button_upload").click();
    }
}

autoDownload();
autoLogin();
