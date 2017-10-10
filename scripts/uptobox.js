autoDownload();
autoLogin();

function autoDownload() {
    var btn_download = $('#btn_download');
    if (btn_download.val() === "Générer le lien de téléchargement ") {
        btn_download.click();
    }

    if ($('.button_upload font').first().text() === "Cliquez-ici pour lancer votre téléchargement") {
        location.href = $('.button_upload').first().parent('a').attr('href');
    }
}

function autoLogin() {
    var loginPage = "https://login.uptobox.com/";
    if (location.href !== loginPage) {
        if ($('#inscription').length === 1) {
            location.href = loginPage;
        }
    } else {
        $('login-form').submit();
        $('#login-form .button_upload').click()
    }
}