function genNumb(){
    let numb = Math.floor(Math.random()*100);
    return numb;
}

//alert(genNumb());

let number = document.getElementsByClassName("numberText")[0]
let button = document.getElementsByClassName("numberButt")[0]

button.addEventListener("click",function(e){
    number.innerHTML=`${genNumb()}`;
})