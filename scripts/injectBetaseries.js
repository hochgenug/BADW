function getSearchUrl(provider, serie) {
  var regex = new RegExp(' ', 'g');
  serie = serie.replace(regex, '+');
  var regex = new RegExp("'", 'g');
  serie = serie.replace(regex, '+');
  switch (provider) {
    case 'ZT':
      searchLink = "http://www.zone-telechargement.ws/index.php?search=";
      searchLink += serie;
      break;
    case 'T411':
      searchLink = "https://t411.si/torrents/search/?search="
      searchLink += serie;
      break;
  }
  return searchLink;
}

function getLinks(linkZT, linkT411) {
  html = '<div class="maf-links" style ="position:absolute; right:130px;width:60px;">';
  html += generaHtmlLink(linkZT, 'ZT');
  html += ' - ';
  html += generaHtmlLink(linkT411, 'T411');
  html += '</div>';
  return html;
}

function generaHtmlLink(link, name) {
  return '<a href=' + link + ' target="_blank" style="text-decoration: none;font-weight: bold;" class="generated-links">' + name + '</a>';
}

function specificLink(id, link) {
  link = generaHtmlLink(link, 'VOIR');
  $('#' + id).children('.actions').find(".maf-links").remove();
  $("#" + id).children('.actions').append(link);
  $("#" + id).children('.actions').find('.generated-links').css({
    'position': 'absolute',
    'right': '140px'
  });
}

function toutvu(el){
  var event = jQuery(el).parent().find('.fastforward a').attr('onclick');
  console.log(event);
  eval(event);
  setTimeout(
  function() 
  {
    jQuery('.episodes_list .unseen').each(function () {
		console.log('clock');
      $( this ).find('.actions a').click();
     
    });
  }, 1000);
  
  setTimeout(
  function() 
   {
		console.log('ferme la liste');
	eval(event);
   }, 1000);
}

$("#member_shows > .showItem").each(function() {
  var serieName = $(this).children('.col-1').children('.title').children('strong').text();
  $(this).children('.col-3').children('.actions').append(getLinks(getSearchUrl('ZT', serieName), getSearchUrl('T411', serieName)) + '<div class="toutvu" onclick="toutvu(this)" style="position: absolute;left: 100px;">Check</div>')
});

specificLink('salut-les-geeks', 'https://www.youtube.com/user/Salutlesgeeks/videos'); specificLink('simons-cat', 'https://www.youtube.com/user/simonscat/videos'); specificLink('e-penser', 'https://www.youtube.com/user/epenser1/videos'); specificLink('what-the-cut', 'https://www.youtube.com/user/MrAntoineDaniel/videos'); specificLink('minute-papillon', 'https://www.youtube.com/user/languedepub2/videos'); specificLink('norman-fait-des-videos', 'https://www.youtube.com/user/NormanFaitDesVideos/videos'); specificLink('point-culture', 'https://www.youtube.com/user/LinksTheSun/videos'); specificLink('le-joueur-du-grenier', 'https://www.youtube.com/user/joueurdugrenier/videos'); specificLink('papy-grenier', 'https://www.youtube.com/user/joueurdugrenier/videos'); specificLink('andy-raconte', 'https://www.youtube.com/user/AndyRaconte/videos'); specificLink('axolot', 'https://www.youtube.com/user/Axolotblog/videos'); specificLink('cyprien', 'https://www.youtube.com/user/MonsieurDream/videos'); specificLink('doxa', 'https://www.youtube.com/user/Axolotblog/videos'); specificLink('les-questions-cons', 'https://www.youtube.com/channel/UCR9DNIWLeXKQh_ZJWeXAl5Q/videos');

$('#ongoing').trigger('click'); $('#empty').trigger('click');

