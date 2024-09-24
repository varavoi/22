/*Разместите на странице 3 блока. Напишите инструкции, меняющие цвет этих блоков. 
Первый по клику (* клик ПКМ и отключение контекстного меню)
Второй по клавише Пробел
Третий по сочетанию клавиш Ctrl+K
* По нажатию на эскейп всё возвращается в начальное состояние
*/


 function changeColor(e){
        switch(e.type){
            case "contextmenu":
                e.preventDefault()
                document.getElementsByClassName("block")[0].style.backgroundColor="lime"
                break;
            case "keydown":
                e.preventDefault()
                if(e.code=="Space"){
                    document.getElementsByClassName("block")[1].style.backgroundColor="blue"
                }
                else if(e.ctrlKey && e.code=="KeyK"){
                    document.getElementsByClassName("block")[2].style.backgroundColor="yellow"
                }
                else if(e.code=="Escape"){
                     for(let i=0;i<document.getElementsByClassName("block").length;i++){
                        document.getElementsByClassName("block")[i].style.backgroundColor = "brown"
                     }
                }
                break;
        }
    }



document.addEventListener("contextmenu",changeColor)
document.addEventListener("keydown",changeColor)
document.addEventListener("keydown",changeColor)