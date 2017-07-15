function d(a,b){
	document.body.style.background=a;
	document.body.style.color=b;
}
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (!message.includes('enabled')) d("white","black");
    if (!message.includes('disabled')) d("black","white");
});