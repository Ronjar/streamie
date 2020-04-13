function logURL(requestDetails) {
	//console.log("Loading: " + requestDetails.type + requestDetails.url);
	
	if (requestDetails.url.includes(".m3u8"))
	{
		browser.tabs.sendMessage(requestDetails.tabId, requestDetails.url);
		console.log("Loading: " + requestDetails.url);
	}
}

browser.webRequest.onBeforeRequest.addListener(
	logURL,
	{urls: ["<all_urls>"]}
);