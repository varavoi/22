/*
 <div class="goodsCard">
                            <div  class="goodsCard_Top" href="img/2.jpeg">
                                <a href="#"><img class="goodsCard__img" src="IMG/SiteSushi_IMGs/img1.png" alt="2"></a>
                                <button class="goodsCard_addKart"><img src="IMG/Novinki_section/addTovar.png" alt="" class="goodsCard_buttICO"></button>
                                <div class="goodsCard_counts">
                                    <p class="goodsCard_countsText">1</p>
                                </div>
                               <button class="goodsCard_deleteKart"> <img src="IMG/Novinki_section/deleteTovar.png" alt="" class="goodsCard_buttICO"></button>
                            </div>
                        <div class="goodsCard_Bottom">
                            <a href="#" class="goodsCard_ProductName_Trigger"><p class="goodsCard_ProductName">Суши Восточная</p></a>
                            <div class="goodsCard_PriceInf">
                                <p class="goodsCard_Price">1190</p>
                                <p class="goodsCard_MoneyChange">₽</p>  
                                <a href="#"><img src="IMG/GoodsCardItem/basketGoods.png" alt="" class="goodsBasketIco"></a>
                            </div>
                        </div>
                    </div>
*/

document.addEventListener("click",function(e){
   
    e.stopPropagation()
    let count=0;
  if(e.target.parentNode.tagName == "BUTTON" && e.target.parentNode.className == "goodsCard_addKart"){
    e.target.parentNode.parentNode.querySelector(".goodsCard_countsText").innerHTML++;
  }
  if(e.target.parentNode.tagName == "BUTTON" && e.target.parentNode.className == "goodsCard_deleteKart"){
    if(e.target.parentNode.parentNode.querySelector(".goodsCard_countsText").innerHTML>0){
        e.target.parentNode.parentNode.querySelector(".goodsCard_countsText").innerHTML--;
    }
  }   

  if(e.target.parentNode.tagName == "BUTTON" && e.target.parentNode.className == "goodsBasketButton"){
    
      e.target.parentNode.querySelector(".goodsBasketIco").src="IMG/GoodsCardItem/basketGoods_full.png"
      
    
  }

})