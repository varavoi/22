/*Создать html-страницу с меню, которое имеет выпадающие
списки. Список с элементами подменю должен появляться по
щелчку на соответствующий элемент меню.*/

let wrapp = document.querySelector(".wrapper")
let block = document.querySelector(".block")
let block2 = document.querySelector(".block2")
let categ = document.getElementsByClassName("razm")[1]
let razm = document.querySelector(".razm")
let buttBlock = document.querySelector('.buttBlock')
let spisokCat = document.createElement('div')
let butt1 = document.createElement('button')
let butt2 = document.createElement('button')
let butt3 = document.createElement('button')
let butt4 = document.createElement('button')

butt1.classList.add("razm")
butt2.classList.add("razm")
butt3.classList.add("razm")
butt4.classList.add("razm")
butt1.innerHTML="Dresses"
butt2.innerHTML="Shirts"
butt3.innerHTML="Jeans"
butt4.innerHTML="Shoes"

let categButt = block.childNodes[3]
let widthPar = categButt.offsetWidth
let heightPar = categButt.offsetHeight
let leftPar = categButt.left
let bottomPar = categButt.bottom

buttBlock.style.width = widthPar+'px'
buttBlock.style.height = heightPar+'px'
spisokCat.style.width = widthPar+'px'
spisokCat.style.left = leftPar+'px'
spisokCat.style.top = bottomPar+'px'
spisokCat.style.marginTop = "2px"
butt1.style.width = widthPar+'px'
butt2.style.width = widthPar+'px'
butt3.style.width = widthPar+'px'
butt4.style.width = widthPar+'px'
spisokCat.appendChild(butt1)
spisokCat.appendChild(butt2)
spisokCat.appendChild(butt3)
spisokCat.appendChild(butt4)
//block2.appendChild(spisokCat)
//spisokCat.style.display="none"

let isOpen =false
buttBlock.style.position="relative"
categ.addEventListener("click",function(){

if(isOpen==false){
    isOpen =true
    buttBlock.appendChild(spisokCat)
   
}
else if(isOpen==true){
    isOpen =false
    buttBlock.removeChild(spisokCat)
   
}

})