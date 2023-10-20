var onButton = document.getElementById("on");
var offButton= document.getElementById("off");
var catImg = document.getElementById("catImg");
var switchDiv = document.getElementById("switchDivId");
var lightoffImg = document.getElementById("lightoffImg");
function switchedOff(){
    onButton.className="switchedOffOn rounded";
    offButton.className="switchedOffOff rounded";
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    catImg.className="catImg";
    lightoffImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    lightoffImg.className="lightoffImg";
    switchDiv.className="switchDivOff rounded";
}
function switchedOn(){
    onButton.className="switchedOnOn rounded";
    offButton.className="switchedOnOff rounded";
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    catImg.className="catImg";
    lightoffImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    lightoffImg.className="lightoffImg";
    switchDiv.className="switchDivOff rounded";
}