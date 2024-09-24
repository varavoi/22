let block = document.getElementsByClassName("block")[0]
let bodyEl = document.querySelector('body')
let buttonEl = document.getElementsByClassName("butt")[0]
let textEl = document.getElementsByClassName("text")[0]

buttonEl.addEventListener("click",function(e){
    let isNone = (textEl.style.opacity=="0")
    if(isNone){
        textEl.style.opacity="100"
    }
    if(!isNone){
        textEl.style.opacity="0"
    }
})