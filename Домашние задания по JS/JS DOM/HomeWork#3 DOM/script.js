let btnOp = document.getElementsByClassName("btn_Open")[0];
let btnCl = document.getElementsByClassName("btn_Close")[0];
let newWin;


function setStyle(e){
  if(e.target.className=="btn_Open" || e.target.className=="btn_Close"){
    if(e.type=="mousedown"){
        e.target.style.backgroundColor="green"
    }
    else if(e.type=="mouseup"){
        e.target.style.backgroundColor="lime"
    }
  }
}

function openWindow(e){
    newWin=window.open("https://itstep.org", "StepWin",
    "resizable");
    newWin.resizeTo(640,480);
    newWin.moveTo(900,250);
    
}
function closeWindow(e){
    newWin.close();
    
}
document.addEventListener("mousedown",setStyle)
document.addEventListener("mouseup",setStyle)
btnOp.addEventListener("click",openWindow)
btnCl.addEventListener("click",closeWindow)