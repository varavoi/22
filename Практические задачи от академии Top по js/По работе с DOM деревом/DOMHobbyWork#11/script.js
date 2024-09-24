/*Задание 1
Создать html-страницу с возможностью ввода числового зна-
чения через кнопки (больше, меньше).
Пользователь не должен иметь возможность печатать текст
или цифры. Число изменяется только при нажатии на кнопки.*/




let txtId=document.querySelector(".txtId")

let upButt=document.querySelector(".upButt")
let downButt=document.querySelector(".downButt")

let count = 0
txtId.value=count

txtId.addEventListener("focus",function(e){
    e.preventDefault()
    this.blur();
})

upButt.addEventListener('click',function(){
    count++
    txtId.value=count
})
downButt.addEventListener('click',function(){
    count--
    txtId.value=count
})