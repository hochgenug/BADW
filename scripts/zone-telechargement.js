$(document).ready(function() {
  if ($('#searchinput').length === 0) {
    $.urlParam = function(name) {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
    }
    var serie = $.urlParam('search').replace(/\+/g, ' ');
    if (serie == "TURN: Washington s Spies") {
      serie = "TURN";
    }
    $('#searchsugg').val(serie)
    $('#searchform .submit input').trigger('click')

	eval(event);
	
  }

});