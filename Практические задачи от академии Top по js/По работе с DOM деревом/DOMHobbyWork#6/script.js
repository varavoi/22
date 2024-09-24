let prog = document.getElementById("progress")
let btn=document.getElementsByClassName("btn")[0]
function addValue(e){
    prog.value +=5
}
btn.addEventListener("click",addValue)