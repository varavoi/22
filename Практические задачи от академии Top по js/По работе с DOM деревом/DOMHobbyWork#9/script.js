/*Задание 9
Создать html-страницу с кнопкой Like, при нажатии на кото-
рую увеличивается счетчик лайков.*/


let likeButt = document.querySelector(".likeButt")
let likeIco = document.querySelector(".likeIco")
let likeTitle = document.querySelector(".likeTitle")
let likeCounter = document.querySelector(".likeCounter")
let count = 0;

likeButt.addEventListener('click',function(){
    count++
    likeCounter.innerHTML = count
})