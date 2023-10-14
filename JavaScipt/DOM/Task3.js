function stop(){
    var redCol=document.getElementById("stopLight")
    redCol.style.backgroundColor="red";
    var yellowCol=document.getElementById("readyLight")
    yellowCol.style.backgroundColor="gray";
    var greenCol=document.getElementById("goLight")
    greenCol.style.backgroundColor="gray";
    var redCol=document.getElementById("stopBtn")
    redCol.style.backgroundColor="red";
    var yellowCol=document.getElementById("readyBtn")
    yellowCol.style.backgroundColor="rgb(0, 0, 79)";
    var greenCol=document.getElementById("goBtn")
    greenCol.style.backgroundColor="rgb(0, 0, 79)";
}
function ready(){
    var redCol=document.getElementById("stopLight")
    redCol.style.backgroundColor="gray";
    var yellowCol=document.getElementById("readyLight")
    yellowCol.style.backgroundColor="yellow";
    var greenCol=document.getElementById("goLight")
    greenCol.style.backgroundColor="gray";
    var redCol=document.getElementById("stopBtn")
    redCol.style.backgroundColor="rgb(0, 0, 79)";
    var yellowCol=document.getElementById("readyBtn")
    yellowCol.style.backgroundColor="yellow";
    var greenCol=document.getElementById("goBtn")
    greenCol.style.backgroundColor="rgb(0, 0, 79)";
}
function go(){
    var redCol=document.getElementById("stopLight")
    redCol.style.backgroundColor="gray";
    var yellowCol=document.getElementById("readyLight")
    yellowCol.style.backgroundColor="gray";
    var greenCol=document.getElementById("goLight")
    greenCol.style.backgroundColor="green";
    var redCol=document.getElementById("stopBtn")
    redCol.style.backgroundColor="rgb(0, 0, 79)";
    var yellowCol=document.getElementById("readyBtn")
    yellowCol.style.backgroundColor="rgb(0, 0, 79)";
    var greenCol=document.getElementById("goBtn")
    greenCol.style.backgroundColor="green";
}