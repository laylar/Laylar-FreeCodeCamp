var wikiBaseLink = "https://en.wikipedia.org/wiki/";
var wikiQuery = "";

function relocate() {
	//aquire submitted value and modify it
  	wikiQuery = document.getElementById('wikiQueryValue').value.split(' ').join('_');
  	url = wikiBaseLink + wikiQuery;
  	alert("You\'re about to check out: " + url);
	//navigate browser to related wiki link
	location.href = url;
	return false;
}
