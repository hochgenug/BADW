// Check if the feature is enable
let promise = new Promise(function (resolve) {
    /*global chrome */
    chrome.storage.sync.get({
        isUtbEnable: true
    }, function (items) {
        if (items.isUtbEnable === true) {
            resolve();
        }
    });
});

function autoDownload() {
    let btnDownload = $("#btn_download");
    let btnLaunchDownload = $(".big-button-green-flat");

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
    let loginPage = "https://login.uptobox.com/";
    if (location.href !== loginPage) {
        if ($("#inscription").length === 1) {
            location.href = loginPage;
        }
    } else {
        $("login-form").submit();
        $("#login-form .button_upload").click();
    }
}

promise.then(function () {
    autoDownload();
    autoLogin();
});
