var url_list = [];
function handleMessage(request, sender, sendResponse) {
	console.log("");
	var ans = url_list.join('|');
	sendResponse({response: ans});
  }
browser.runtime.onMessage.addListener(handleMessage);

function logURL(requestDetails) {
	if (requestDetails.url.includes(".m3u8"))
	{
		url_list.push(requestDetails.url);
		var count = url_list.length;
		console.log(count)
		browser.browserAction.setBadgeText({text: count.toString(), tabId:requestDetails.tabId});
		console.log("Loading: " + requestDetails.url);
	}
}

browser.webRequest.onBeforeRequest.addListener(
	logURL,
	{urls: ["<all_urls>"]}
);

