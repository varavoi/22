let login = document.querySelector('#login')
let password = document.querySelector('#password')
let remCheck = document.querySelector('#remCheck')
let signButt = document.querySelector('.signButt')
let inputBlock = document.getElementsByClassName("inputBlock")
let info = document.createElement('p')
let form1 = document.querySelector('#form1')
let email = document.querySelector('#email')
info.style.color = 'red'
info.style.fontSize = '16px'
info.setAttribute('class','infoCl')
let logEmptyText = 'Необходимо заполнить поле login'
let passEmptyText= 'Необходимо заполнить поле password'
let emailEmptyText = 'Необходимо заполнить поле email'

function emptyText(input){
    let res
    if(input==email) res=emailEmptyText
    if(input==login) res=logEmptyText
    if(input==password) res=passEmptyText
    return res
}
function checkEmpty(input){
    let res
    if(input==email) res=inputBlock[0]
    if(input==login) res=inputBlock[1]
    if(input==password) res=inputBlock[2]
    del(input)
    if(input.value.length<=0){
        let info1= info.cloneNode(true)
        info1.innerHTML = emptyText(input)
        res.appendChild(info1)
    }
}
function del(input){
    let par
    if(input==email) par=inputBlock[0]
    if(input==login) par=inputBlock[1]
    if(input==password) par=inputBlock[2]
    for(let item of par.children){
        if(item.className=="infoCl"){
            item.remove()
        }
    }
}

function checkPass(){
    let par = inputBlock[2]
    let info3= info.cloneNode(true)
    if(password.value.length>0){
        del(password)
        if(password.value.length<6){
            del(password)
            info3.innerHTML = 'Пароль должен состоять не менее из 6-ти символов'
            par.appendChild(info3)
        }
        if(!/\d/.test(password.value)){
            del(password)
            info3.innerHTML = 'В пароле должны быть цифры'
            par.appendChild(info3)
        }
        if(!/[A-Z]/.test(password.value)){
            del(password)
            info3.innerHTML = 'В пароле должны заглавные буквы'
            par.appendChild(info3)
        }
    }   
}
function checkLogin(){
    let par = inputBlock[1]
    let info3= info.cloneNode(true)
    if(login.value.length>0){
        del(login)
        if(!/[A-Za-z]{2,}([0-9_+!-]*[A-Za-z]+)\@/.test(login.value)){
            del(login)
            info3.innerHTML = 'В пароле должны быть цифры'
            par.appendChild(info3)
        }
    }
}

login.addEventListener('input',function(e){
    checkLogin()
})

password.addEventListener('input',function(e){
    checkPass()
})

signButt.addEventListener('click',function(e){
    e.preventDefault()
    checkEmpty(email)
    checkEmpty(login)
    checkEmpty(password)
    let res=false
    if(login.value.length>0 && password.value.length>0 && remCheck.checked){
        alert(`Привет ${login.value}\nЯ тебя запомнил`)
        res = true
    }
    if(login.value.length>0 && password.value.length>0) {
        res =true;
    }
    if(res){form1.submit()}
})