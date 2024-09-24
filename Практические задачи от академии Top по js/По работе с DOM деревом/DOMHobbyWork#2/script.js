let block = document.getElementsByClassName("block")[0]
let bodyEl = document.querySelector('body')
block.addEventListener('mousemove',function(e){
    block.innerHTML=`<p style="font-size:20px;color:black">X = ${e.clientX}, Y = ${e.clientY}</p>`
})