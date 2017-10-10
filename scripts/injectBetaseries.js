// Add the providers links and the check button for each line
$('#member_shows > .showItem').each(function() {
    var serieName = $(this).children('.col-1').children('.title').children('strong').text();
    $(this).children('.col-3').children('.actions').append(getLinks(getSearchUrl('ZT', serieName), getSearchUrl('T411', serieName)) + '<div onclick="checkAll(this)" style="position: absolute;left: 100px;">Check</div>')
});

// Only display the series in progress and not started.
$('#ongoing').trigger('click');
$('#empty').trigger('click');

// Functions to manage the links
function getSearchUrl(provider, serie) {
    serie = serie.replace(/\s/g, '+').replace(/\'/g, '+');
    var searchLink = null;
    switch (provider) {
        case 'ZT':
            searchLink = "http://www.zone-telechargement.ws/index.php?search=";
            break;
        case 'T411':
            searchLink = "https://t411.si/torrents/search/?search=";
            break;
    }
    return searchLink + serie;
}

function getLinks(linkZT, linkT411) {
    var html = '<div class="badw-feature" style ="position:absolute; right:130px;width:60px;">';
    html += generaHtmlLink(linkZT, 'ZT') + ' - ' + generaHtmlLink(linkT411, 'T411');
    html += '</div>';
    return html;
}

function generaHtmlLink(link, name) {
    return '<a href=' + link + ' target="_blank" style="text-decoration: none;font-weight: bold;" class="generated-links">' + name + '</a>';
}

// Check all the episodes for the current season
function checkAll(elt) {
    var event = $(elt).parent().find('.fastforward a').attr('onclick');
    eval(event);
    setTimeout(function() {
        $('.episodes_list .unseen').each(function() {
            $(this).find('.actions a').click();

        });
    }, 1000);
    setTimeout(function() {
        eval(event);
    }, 1000);
}