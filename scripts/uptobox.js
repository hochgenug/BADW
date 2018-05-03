autoDownload();
autoLogin();

function autoDownload() {
    var btn_download = $('#btn_download');
    var btn_launch_download = $('.big-button-green-flat');

    if (btn_download.text().trim() === "Générer le lien de téléchargement") {
        btn_download.click();
    }

    if (btn_launch_download.text().replace(/[\t\n]+/g, ' ').trim() == "Cliquez-ici pour lancer votre téléchargement") {
        location.href = btn_launch_download.attr('href');
        setTimeout(function () {
            window.close();
        }, 1000);
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
