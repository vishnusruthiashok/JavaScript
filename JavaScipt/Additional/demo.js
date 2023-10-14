function msg(){
    var message=document.getElementById("displayinput").value
    document.getElementById("displaydata").innerHTML=message
    document.getElementById("displayinput1").value=message
    alert(message)
}
function stylebtn(){
    var button1=document.getElementById("displaydata").style.color="red";
}
function imageFun(){
    var image2=document.getElementById("imageId").style.width="1080px";
    image2.src="https://images.unsplash.com/photo-1587381419691-1593e4a122fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FuYWRpYW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
}