/*Задание 2
Задание 3
Создать html-страницу с текстом и палитрой цветов.
При клике на цвет палитры, должен изменяться цвет текста на
выбранный. Для указания, какой ячейке какой цвет соответствует,
можно использовать атрибут data-color в каждой ячейке, а потом
с помощью JS получать необходимый цвет из этого атрибута.*/



let colorBlock = document.getElementsByClassName('colorBlock')[0]
let cubs = document.querySelectorAll('.cub')
let text = document.querySelector('.text')

let newCub;
let colors=['pink','yellow','red','orange','green','lime','white','purple','blue','skyblue']

document.addEventListener('DOMContentLoaded',function(){
    for(let i =0;i<cubs.length;i++){
        cubs[i].style.backgroundColor=colors[i]
    }
})


colorBlock.addEventListener('click',function(e){
    let bl;
    if(e.target.className=="cub"){
        bl = e.target
        text.style.color = bl.style.backgroundColor
    }
})

