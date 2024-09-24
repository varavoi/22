let blockNews = document.querySelector('.blockNews')
let allign = document.querySelector('.allign')
let p;
let delButNews = document.querySelectorAll(".delButNews")
//alert(p)
for(let i = 0;i<6;i++){
    p = blockNews.cloneNode(true)
    allign.appendChild(p)
}
function delNews(e){
    if(e.target.className == "delButNews"){
        e.target.closest(".blockNews").remove()
    }
}
document.addEventListener("click",delNews)

/*document.addEventListener("DOMContentLoaded",function(e){
    for(let i = 0;i<7;i++){
        allign.appendChild(p)
    }
})*/