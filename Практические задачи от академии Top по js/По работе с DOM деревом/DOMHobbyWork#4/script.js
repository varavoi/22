let block = document.getElementsByClassName("block")[0]
let bodyEl = document.querySelector('body')
let butt = document.getElementsByClassName("butt")
let text = document.getElementsByClassName("text")[0]
let rightBlock =document.getElementsByClassName("rightBlock")[0]
let blockInner = document.getElementsByClassName("blockInner")[0]
let leftBlock =document.getElementsByClassName("leftBlock")[0]

function changeText(e){
    e.preventDefault();
    if(e.target == butt[0]){
        butt[0].style.backgroundColor ="purple";
        butt[1].style.backgroundColor ="blue";
        butt[2].style.backgroundColor ="blue";
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel quasi quaerat veritatis, rem accusantium sint commodi at, quae a ut amet exercitationem placeat recusandae laudantium ducimus natus ullam. Ratione."
    }
    if(e.target == butt[1]){
        butt[0].style.backgroundColor ="blue";
        butt[1].style.backgroundColor ="purple";
        butt[2].style.backgroundColor ="blue";
        text.innerHTML = "Повседневная практика показывает, что новая модель организационной деятельности обеспечивает актуальность позиций, занимаемых участниками в отношении поставленных задач? Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач? Разнообразный и богатый опыт сложившаяся структура организации позволяет оценить значение дальнейших направлений развитая системы массового участия."
    }
    if(e.target == butt[2]){
        butt[0].style.backgroundColor ="blue";
        butt[1].style.backgroundColor ="blue";
        butt[2].style.backgroundColor ="purple";
        text.innerHTML = "Значимость этих проблем настолько очевидна, что сложившаяся структура организации напрямую зависит от всесторонне сбалансированных нововведений. Таким образом, сложившаяся структура организации обеспечивает актуальность существующих финансовых и административных условий. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требует от нас анализа форм воздействия. Задача организации, в особенности же рамки и место обучения кадров требует от нас системного анализа всесторонне сбалансированных нововведений."
    }
}
//console.log(butt)
document.addEventListener("click",changeText)
