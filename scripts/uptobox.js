if (jQuery('#btn_download').val() == "Générer le lien de téléchargement ") {
    jQuery("#btn_download").click();
  }

  if (jQuery('.button_upload font').first().text() == "Cliquez-ici pour lancer votre téléchargement") {
    var link = jQuery('.button_upload').first().parent('a').attr('href')
    location.href = link;
  }

  var loginPage = "https://login.uptobox.com/";
  if (location.href != loginPage) {
    if (jQuery("#inscription").length == 1) {
      location.href = loginPage;
    }
  } else {  
	jQuery('login-form').submit();
	jQuery("#login-form .button_upload").click()
  }
