var wikiBaseLink = "https://en.wikipedia.org/wiki/";
var wikiQuery = "";

function relocate() {
	//aquire submitted value and modify it
  wikiQuery = document.getElementById('wikiQueryValue').value.split(' ').join('_');
  //combine base url with user's query
  url = wikiBaseLink + wikiQuery;
  //let the user know that we're about to leave the page
  alert("You\'re about to check out: " + url);
	//navigate browser to related wiki link
	location.href = url;
	//stop the code from repeating, thus cancelling out the page change?
  return false;
}
