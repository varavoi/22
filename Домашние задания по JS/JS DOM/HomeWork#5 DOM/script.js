let form = document.querySelector("#formId")
let date = document.querySelector('#dateId')
let file = document.querySelector('#fileID')
let url = document.querySelector('#urlId')
let password = document.querySelector('#passwordId')
let colorId = document.querySelector('#colorId')
let checkBirthday = document.querySelector('#checkBirthdayId')
let email = document.querySelector('#emailID')
let checkBlock = document.querySelector(".checkBlock")
let resetButton = document.querySelector('#resetId')
let submitButton = document.querySelector('#submitId')
let block = document.querySelectorAll(".block")
let pasIco = document.getElementsByClassName("passIco")[0]
file.style.color = "white"
submitButton.value="Submit"

function show_hide_password(target){
	if (password.type == 'password') {
        pasIco.src="hidePas.png"
		password.setAttribute('type', 'text');
	} else {
        pasIco.src="showPas.png"
		password.setAttribute('type', 'password');
	}
	return false;
}

resetButton.addEventListener("click",function(){
    date.value=""
    file.value=""
    email.value =""
    url.value=""
    password.value=""
    colorId.value=""
    checkBirthday.value=""
})

function checkEmptyText(input){
    let res=""
    switch(input){
        case date:
            res = "Вы не выбрали дату"
            break;
        case file:
            res = "Вы не выбрали файл"
            break;
        case email:
            res = "Вы не указали почту"
            break;
        case url:
            res = "Вы не указали url"
            break;
        case password:
            res = "Вы не указали пароль"
            break;
        case colorId:
            res = "Вы не выбрали цвет"
            break;
    }
    return res;
}
function passwordValid(input){
    let res=""
    if(input.value.length<6){
        res="Слишком короткий пароль.\nПароль должна быть не менее 6 символов"
    }
    return res;
}


function setErrText(input,parClass,func=checkEmptyText){
    let infText = document.createElement("p")
    parBlock = input.closest(parClass)
        infText.style.color="red"
        infText.style.fontSize="20px"
        infText.style.zIndex="25"
        infText.innerHTML=func(input)   
        parBlock.appendChild(infText)
}
function removeErrText(input,parClass) {
    parBlock = input.closest(parClass)
    let infP = parBlock.querySelectorAll("p")
   for(let i =0;i<infP.length;i++){
    if(infP[i].tagName=="P"){
        infP[i].remove()
    }
   }
  }
  function checkValid(input,parClass){
    let res;
    if(input.value==""){
        removeErrText(input,parClass)
        setErrText(input,parClass)
        res=false;
    }
    else if(input.value!="" && input.type=="password" && input.value.length<6){
            removeErrText(input,parClass)
            setErrText(input,parClass,passwordValid)
        res=false
    }
    else{
        removeErrText(input,parClass)
        res=true
    }
    return res;
  }
function validation(){
    let bl = ".block"
    let res;
    let dateValid = checkValid(date,bl)
    let fileValid = checkValid(file,bl)
    let EmailValid = checkValid(email,bl)
    let UrlValid = checkValid(url,bl)
    let PasswordEmpty = checkValid(password,bl)
    let ColorValid = checkValid(colorId,bl)
    if(dateValid&&fileValid&&EmailValid&&PasswordEmpty&&UrlValid&&ColorValid){
        res=true
    }
    
    else{
        res=false
    }
    return res
}

submitButton.addEventListener("click",function(e){
    e.preventDefault()
    let bl = ".block"
    let res =validation()
    if(res){
        form.submit()
        alert("Данные успешно отправлены")
    }
 
})