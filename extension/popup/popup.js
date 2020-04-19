const sending = browser.runtime.sendMessage({content: "penis"});
sending.then(handleResponse, handleError);
function handleResponse(message){
    console.log(message);
    urls = message.response.split("|");
    //Object.keys(message).forEach(streamFound);
    urls.forEach(streamFound);
}
function myFunctiona(item, index) {
    console.log(item);
  }

function handleError(error){
    console.log(error);
}

function streamFound(url) {
    console.log(url);
    var ul = document.getElementById("lina");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(url));
    ul.appendChild(li);
}