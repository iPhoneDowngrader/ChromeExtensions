window.onload = function(){
	window.$ = document.querySelector;
	document.getElementById("range").onchange = function(){chrome.tabs.query({}, function(tabs) {
    for (var i=0; i<tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, document.getElementById("range").value);
    }
});}
}