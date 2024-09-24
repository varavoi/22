/*Создать html-страницу «Калькулятор». Реализовать его функ-
циональность.*/
let numBut = document.querySelectorAll('.numBut')
let text = document.querySelector('.text')
let numbBlock = document.querySelector('.numbBlock')

numbBlock.addEventListener('click',function(e){
    e.stopPropagation()
    if(e.target.className == "numBut"){
        if(e.target.innerHTML=="C"){
            text.value=""
        }
        else if(e.target.innerHTML=="="){
            text.value=eval(text.value)
        }
        else{
            text.value += e.target.innerHTML
        }
        
    }
})

