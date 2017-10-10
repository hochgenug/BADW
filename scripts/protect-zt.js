var link = jQuery('.lienet a').attr('href');

if (link != undefined) {
    window.location.href = link;
}

jQuery.ajax({
    type: "POST",
    url: "https://" + location.hostname + "/php/Qaptcha.jquery.php",
    data: "action=qaptcha&qaptcha_key=" + jQuery('.QapTcha  > input').attr('name'),
    success: function() {
        jQuery('.QapTcha  > input').val('');
        jQuery('form > fieldset > input[type="submit"]').click()
    }
});