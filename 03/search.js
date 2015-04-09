
var input = document.getElementById('search');
input.addEventListener("click", function(event){

var textinput = $('textinput').value;
var searchApi = 'https://apis.daum.net/search/board?apikey=64c6393c1824617f884baa0fbf03400b&q=' + textinput + '&output=json';
var listTemplate = $('listTemplate').innerHTML;

getJSON(searchApi , function(Apidata){

var html = tmpl(listTemplate, {list: Apidata.channel.item});
 $('wrap').innerHTML = htmlSpecialChars(html, " ");

});
})
