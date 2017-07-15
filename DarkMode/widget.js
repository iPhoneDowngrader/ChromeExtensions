window.$ = document.querySelector.bind(document);
function checkbox(){
	$("body").style.background = !$("#dm").checked?"white":"black";
	$("body").style.color = $("#dm").checked?"white":"black";
	window.darkmodeenabled = $("#dm").checked;
	document.cookie="checked="+window.darkmodeenabled+";expires=2114402400000;"
	chrome.tabs.query({}, function(tabs) {
    for (var i=0; i<tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, "darkmode is "+($("input").checked?"en":"dis")+"abled");
    }
});
}

$("input[type=checkbox]").onclick = checkbox
if(document.cookie.includes("checked=true")) $("input").checked = true;
checkbox();
