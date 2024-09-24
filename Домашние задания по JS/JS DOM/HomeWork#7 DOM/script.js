/*Написать регулярное выражение, которое проверяет
 - строка состоит только из слова "разрешаю"
 - первый символ не число
 - последний символ не пробел
 - строка содержит три 0 подряд
 - строка содержит телефон в формате +X(XXX)XXX-XX-XX*/


function checking(expression, string){
  let res = expression.test(string)
  return res
}

let taskText1 = "строка состоит только из слова \"разрешаю\""
let taskText2 = "первый символ не число"
let taskText3 = "последний символ не пробел"
let taskText4 = "строка содержит три 0 подряд"
let taskText5 = "строка содержит телефон в формате +X(XXX)XXX-XX-XX"

let expText1 = /^[р][а][з][р][е][ш][а][ю]$/i
checking(expText1,'Разрешаю')
let expText2 = /^[^0-9]/
checking(expText2,'d9vef')
let expText3 = /\S$/
checking(expText3,'d9vef')
let expText4 = /0{3}/
checking(expText4,'d9ve000f')
let expText5 = /^\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}/
checking(expText5,'+7(981)758-68-69')

let obj ={
  taskText:"",
  expText:"",
  check(str){
    let res = checking(this.expText,str)
    return res;
  }
}

let taskArr = [taskText1,taskText2,taskText3,taskText4,taskText5]
let expArr = [expText1,expText2,expText3,expText4,expText5]
let objArr = []
for(let i=0;i<taskArr.length;i++){
  objArr[i] = obj;
  objArr[i].taskText = taskArr[i]
  objArr[i].expText = expArr[i]
  let ans = prompt(objArr[i].taskText)
  let res = objArr[i].check(ans)
  if(res){
    alert(`Условие "${objArr[i].taskText}" выполняется.\nВсе верно`)
  }
  else if(!res){
    alert(`Условие "${objArr[i].taskText}" не выполняется.\nОшибка`)
  }
}