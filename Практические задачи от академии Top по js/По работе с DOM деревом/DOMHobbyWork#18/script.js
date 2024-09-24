let bodyEl = document.querySelector('body')
let headEl  = document.querySelector('head')
bodyEl.style.position = "relative"
let arrow = document.createElement('button')
let imgIn = document.createElement('img')
imgIn.src = "up-arrow.png"


arrow.style.backgroundColor = 'red'
arrow.style.position = 'fixed'
arrow.style.zIndex = '400'
// arrow.style.width ="40px"
// arrow.style.height ="40px"
arrow.style.bottom ="60px"
arrow.style.right ="60px"
arrow.style.cursor ='pointer'
arrow.style.border = 'none'
arrow.style.display = 'flex'
arrow.style.justifyContent = 'center'
// arrow.innerHTML = "&#8593"
arrow.innerHTML = `<img src ="up-arrow.png" alt = "">`
bodyEl.appendChild(arrow)
arrow.style.display = "none"

window.addEventListener('scroll',function(e){
    if(this.window.scrollY>100){
        arrow.style.display = "block"
    }
    if(this.window.scrollY<100){
        arrow.style.display = "none"
    }
})
arrow.addEventListener('click',function(e){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
})