/*Задание 2
Создать html-страницу с кнопкой, по нажатию на которую
добавляются цветные блоки на страницу. По клику на сам блок,
он должен удаляться со страницы.*/



let colorBlock = document.querySelector('.colorBlock')
let cub = document.querySelector('.cub')
let butt = document.querySelector('.butt')

let newCub;
let colors=['pink','yellow','red','orange','green','lime','white','purple','blue','skyblue']
butt.addEventListener('click',function(){
    newCub = document.createElement('div')
    newCub.classList.add('cub')
    newCub.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
    colorBlock.appendChild(newCub)
})

colorBlock.addEventListener('click',function(e){
    if(e.target.className=="cub"){
        colorBlock.removeChild(e.target)
    }
})