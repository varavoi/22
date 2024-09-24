/*Создать html-страницу с любым содержимым и запретить
пользователю выделять текст и вызывать контекстное меню кли-
ком правой кнопки.*/
let text = document.querySelector('text')
let bodyEl= document.querySelector('body')

function msdn(e){
    e.preventDefault();
        return false
}

function contextmenuMake(e){
    e.preventDefault();
        return false;
}
function ready(e){
    //bodyEl.style.userSelect="none"
    document.addEventListener("mousedown",msdn)
    document.addEventListener("contextmenu",contextmenuMake)
}

document.addEventListener("DOMContentLoaded",ready)