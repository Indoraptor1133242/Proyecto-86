canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="cumple.png";


function uploadfondo(){
    
ctx.drawImage(background_imgTag,0,0,canvas.height,canvas.width);}

function enviar(){

    var futuro_texto=document.getElementById("nombre_del_boton").value;
    document.getElementById("comenzar").innerHTML=futuro_texto;
}
function realizar(){

    document.getElementById("musica").play();
    background_imgTag=new Image();
    background_imgTag.onload= uploadfondo;
    background_imgTag.src= background_image;
    document.getElementById("pausa").style.visibility="visible";
}
function quitar(){

document.getElementById("musica").pause();


}