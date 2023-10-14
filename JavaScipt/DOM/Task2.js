function switchOn(){
    var on=document.getElementById("bulbOn");
    on.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    var onc=document.getElementById("catOn");
    onc.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("textOnOff").innerHTML="Switched On"; 
}
function switchOff(){
    var off=document.getElementById("bulbOn");
    off.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    var offc=document.getElementById("catOn");
    offc.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png" 
    document.getElementById("textOnOff").innerHTML="Switched Off";
}
