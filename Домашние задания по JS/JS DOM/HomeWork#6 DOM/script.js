let buttonReg = document.querySelector(".buttonReg")
let wrapp = document.querySelector(".wrapper")
let bodyEl =document.querySelector("body")

let closeButton = makeCloseButt()
let upperBlock = document.createElement('div')
let textBlock = document.createElement('p')
textBlock.innerHTML = "Регистрация " 
textBlock.style.fontSize = "30px";
textBlock.style.fontWeight = "600";
upperBlock.appendChild(textBlock)
upperBlock.appendChild(closeButton)
upperBlock.style.display="flex"
upperBlock.style.flexDirection="row"
upperBlock.style.justifyContent="space-between"
upperBlock.style.textAlign = "center"
upperBlock.marginBottom = "10px"

let nameInput = makeInput('text','nameId')
let surnameInput = makeInput('text','surnameId')
let dateInput = makeInput('date','dateId')
let emailInput = makeInput('email','emailId')
let passwordInput = makeInput('password','passId')
let passwordVerifyInput = makeInput('password','passVerId')
let submitButton = makeInput('submit','submitId')
submitButton.style.margin = "10px 0px"


let blockName = createInputBlock(nameInput,"Имя")
let blockSurname = createInputBlock(surnameInput,"Фамилия")
let blockDate = createInputBlock(dateInput,"День рождения")
let blockEmail = createInputBlock(emailInput,"Эл. почта")
let blockPass = createInputBlock(passwordInput, 'Пароль')
let blockPassVerify = createInputBlock(passwordVerifyInput, 'Подтвердите пароль')
let form = makeForm('formId')

form.appendChild(blockName)
form.appendChild(blockSurname)
form.appendChild(blockDate)
form.appendChild(blockEmail)
form.appendChild(blockPass)
form.appendChild(blockPassVerify)
form.appendChild(submitButton)
form.insertBefore(upperBlock,blockName)

function makeCloseButt(){
  let a = document.createElement('a')
  a.href="#"
  a.id = "closeButtId"
  let img = document.createElement('img')
  img.src="closeIco.png"
  img.id = "closeIcoId"
  img.style.width="30px"
  img.style.height="30px"
  a.style.width ="30px"
  a.style.height="30px"
  a.style.textAlign="right"
  a.appendChild(img)
  return a;
}

function makeInput(type,id){
  let elem = document.createElement('input')
  elem.type=type
  elem.name=`${type}Name`
  elem.id=id
  elem.style.height = "35px"
  elem.style.fontSize="20px"
  return elem
}

function makeLable(id, text){
  let label = document.createElement('label')
  label.for = id
  label.innerHTML = text
  label.style.color="black";
  label.style.fontSize="25px";
  label.style.padding="5px 0px";
  return label;
}
function makeBlock(){
  let block = document.createElement('div')
  block.className = ".block"
  block.style.display = "flex"
  block.style.flexDirection="column"
  block.style.justifyContent="left"
  block.style.textAlign="left"
  block.style.padding="0px"
  block.style.marginBottom="10px"
  return block;
}

function changeWrappStyle(){
  wrapp.style.display="flex"
  wrapp.style.textAlign="center"
  wrapp.style.alignItems="center"
  wrapp.style.justifyContent = "center"
  wrapp.style.width = "95%"
}
function createInputBlock(input,text){
 let block =makeBlock()
 let label = makeLable(input.id, text)
 block.appendChild(label)
 block.appendChild(input)
 return block;
}

function makeForm(id){
  let form = document.createElement('form')
  form.id=id
  form.action=""
  form.method="get"
  form.style.display="flex"
  form.style.flexDirection="column"
  form.style.backgroundColor="white"
  form.style.padding="20px"
  return form;
}

buttonReg.addEventListener("click",function(e){
  buttonReg.style.display = "none"
  bodyEl.style.background = "black"
  wrapp.appendChild(form)
})



function removeErrText() {
  let secondPassBlock = form.lastChild.previousSibling
  let infP = secondPassBlock.querySelectorAll("p")
 for(let i =0;i<infP.length;i++){
  if(infP[i].tagName=="P"){
      infP[i].remove()
  }
 }
}

function setErrText(){
  let infText = document.createElement("p")
  let secondPassBlock = form.lastChild.previousSibling
      infText.style.color="red"
      infText.style.fontSize="20px"
      infText.style.zIndex="25"
      infText.innerHTML="Пароли не совпадают"    
      secondPassBlock.appendChild(infText)
}

function checkPass(){
  let res;
  let firstPass = form.childNodes[5].childNodes[1];
  let secondPass= form.childNodes[6].childNodes[1];
    if(firstPass.value!=secondPass.value){
    removeErrText()
    setErrText()
     res=false
      }
  else if(firstPass.value==secondPass.value){
    removeErrText()
    res=true
  }
  return res
}

submitButton.addEventListener("click",function(e){
  e.preventDefault()
   let res = checkPass()
  if(res){
    form.submit()
    alert("Вам отправлено сообщение на почту!!!")
  }
  
})

closeButton.addEventListener('click',function(){
  bodyEl.style.background = "white"
  wrapp.removeChild(form)
  buttonReg.style.display = "block"
})