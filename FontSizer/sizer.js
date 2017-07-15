chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  var a = document.body.getElementsByTagName("*");
  for (var i = a.length - 1; i >= 0; i--) {
  	a[i].style.fontSize = parseInt(message)+"px"
  }
});