// Auto search when the param search is set
if ($('#searchinput').length === 1) {
    var serie = getUrlParam('badw').replace(/\+/g, ' ').replace(/\:/g, ' ');
    $('#searchinput').val(serie);
    $('#fullsearch #dosearch').trigger('click');
}