/*https://codepen.io/Alice-Levi/pen/ExJPaGb?editors=0012
https://codepen.io/Alice-Levi/pen/MWRKWvx?editors=0011

1. Преобразуйте объект в JSON, а затем обратно в обычный объект

*2. Убедитесь, что lastLogIn при десериализации снова объект Date.

*3. При сериализации исключите disciplines
*/

function excludeDisciplines(key, value){
  if(key=='disciplines'){
    return undefined
  }
  return value
}
function checkIsDate(key,value){
  if(key=="lastLogIn"){
    value=new Date(value);
    return value;
  }
  return value
}

let user = {
  name: "Василий Иванович",
  age: 35,
  lastLogIn: new Date(),
  сontactInfo: {
            "phone": "098-556-33-41",
            "email": "AndreyIvanov@gmail.com"
  },
  disciplines: [
            "HTML", 
            "CSS",
            "JavaScript"
  ]
};

console.log('Преобразуйте объект в JSON\n')
let jsonUser = JSON.stringify(user)
console.log(jsonUser)

console.log('\n\nПреобразуйте затем обратно в обычный объект\n')
let userParse = JSON.parse(jsonUser)
console.log(userParse)

console.log('\n\nПри сериализации исключите disciplines\n')
jsonUser = JSON.stringify(user,excludeDisciplines)
console.log(jsonUser)

console.log('\n\nУбедитесь, что lastLogIn при десериализации снова объект Date\n')
userParse = JSON.parse(jsonUser, checkIsDate)
console.log(userParse)