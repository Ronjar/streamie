//browser.runtime.onMessage.addListener(streamFound);

//css = ".tooltip {   position: relative;   display: inline-block;   border-bottom: 1px dotted black; }  .tooltip .tooltiptext {   visibility: hidden;   width: 120px;   background-color: #555;   color: #fff;   text-align: center;   border-radius: 6px;   padding: 5px 0;   position: absolute;   z-index: 1;   bottom: 125%;   left: 50%;   margin-left: -60px;   opacity: 0;   transition: opacity 0.5s; }  .tooltip:hover .tooltiptext {   visibility: visible;   opacity: 1; }";

//browser.tabs.insertCSS({code: css});


function streamFound(url)
{
	//html = "<div class=\"tooltip\">Link<span class=\"tooltiptext\">"+url+"</span></div>"
	html = "<button onclick=\"alert(url)\">Copy text</button>"
	var x = document.getElementsByClassName("stream-header");
    x[0].innerHTML = html;
  //console.log("Message from the background script:");
  //console.log(request.greeting);
  //return Promise.resolve({response: "Hi from content script"});
}

function showData(text)
{
	alert(text)
}