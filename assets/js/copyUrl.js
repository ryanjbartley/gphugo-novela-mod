document.getElementById("copyButton").addEventListener("click", copyToClipboard);
    
let currentUrl = window.location;
let copyTextContainer = document.getElementById("copyText");
let toolTip = document.getElementById("toolTip");

function copyToClipboard(){
    copyTextContainer.text = currentUrl
    copyTextContainer.focus();
    navigator.clipboard.writeText(copyTextContainer.text)

    toolTip.style.animationName = "pan-toolbar";

    setTimeout(function(){
         toolTip.style.removeProperty('animation-name');
    }, 2000);
}