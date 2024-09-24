/*Задание 2
Задание 3
Создать html-страницу с текстом и палитрой цветов.
При клике на цвет палитры, должен изменяться цвет текста на
выбранный. Для указания, какой ячейке какой цвет соответствует,
можно использовать атрибут data-color в каждой ячейке, а потом
с помощью JS получать необходимый цвет из этого атрибута.*/



let block = document.querySelector(".block")
let textInput = document.querySelector(".textInput")
let commentInput = document.querySelector(".commentInput")
let buttonAdd = document.querySelector(".buttonAdd")



buttonAdd.addEventListener("click",function(){
    let bl = document.createElement('div')
    let nameEl = document.createElement('p')
    let comEl = document.createElement('p')
    let dateEl = document.createElement('p')
    let date = new Date()
    

    date = `${String(date.getDate()).length==1?'0'+date.getDate():date.getDate()}.${String(date.getMonth()).length==1?'0'+date.getMonth():date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        dateEl.classList.add('labName')
        dateEl.style.marginTop ="5px"
        dateEl.style.fontSize ="16px"
        dateEl.style.color ="green"
        dateEl.innerHTML=date
        bl.style.display = "flex"
        bl.style.flexDirection = "column"
        bl.style.justifyContent = "space-between"
        nameEl.classList.add('zag2')
        nameEl.style.fontSize = '22px'
        comEl.classList.add('labName')
        comEl.style.marginTop="5px"
        comEl.style.wordWrap = 'break-word'
        nameEl.innerHTML=textInput.value
        comEl.innerHTML=commentInput.value
        bl.style.marginTop='10px'
        bl.style.marginBottom='10px'
        bl.style.width='85%'
        bl.appendChild(nameEl)
        bl.appendChild(dateEl)
        bl.appendChild(comEl)
        block.appendChild(bl)
    })