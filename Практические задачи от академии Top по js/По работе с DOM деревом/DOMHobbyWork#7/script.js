let tableEl = document.getElementsByTagName('table')[0]
let trEl = document.getElementsByTagName('tr')
let thEl = document.getElementsByTagName('th')
let tdEl = document.getElementsByTagName('td')
let bodyEl = document.querySelector('body')
bodyEl.style.margin="0px auto"
bodyEl.style.textAlign="center"
bodyEl.style.display="flex"
bodyEl.style.justifyContent="center"
bodyEl.style.alignItems="center"
tableEl.style.border="1px solid black"
tableEl.style.backgroundColor="#01FFFF"
tableEl.style.padding = "5px"
for(let el of tdEl){
    el.style.border="1px solid black"
    el.style.padding="5px"
    el.style.textAlign="center"
    el.style.fontSize="20px"
}
for(let el of thEl){
    el.style.border="1px solid black"
    el.style.padding="5px"
    el.style.textAlign="center"
    el.style.fontSize="22px"
}

function handleHover(e){
    if(e.type=="mouseover"){
    if(e.target.tagName==='TD'){
            e.target.style.backgroundColor="orange"
            e.target.style.cursor="pointer"
        }
    }
}
function handleHoverOff(e){
    if(e.type=="mouseout"){
    if(e.target.tagName==='TD'){
            e.target.style.backgroundColor="#01FFFF"
        }
    }
}


document.addEventListener("mouseover",handleHover)
document.addEventListener("mouseout",handleHoverOff)