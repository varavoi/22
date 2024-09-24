let chosenGoodsList= document.querySelector(".chosenGoodsList")
let count = document.querySelectorAll(".GoodsInfoItem").length
 

function countTotalAmount(e){
  let totalAmount= document.querySelector(".totalAmount");
let totalAmount_Items = document.querySelectorAll(".totalAmount_Item");  
  totalAmount.innerHTML=0
  let rubText=document.createElement("span");
  rubText.innerHTML = "руб."
  rubText.classList.add("workTextBasket_span");
  for(let i=0;i<totalAmount_Items.length;i++){
    totalAmount.innerHTML = Number(totalAmount.innerHTML)+Number(totalAmount_Items[i].innerHTML);
  }
  totalAmount.appendChild(rubText);
}

function changeTotalAmount(e){
    let firstAmount_Item = e.target.parentNode.closest(".GoodsInfoItem").querySelector(".firstAmount_Item")
    let totalAmount_Item = e.target.parentNode.closest(".GoodsInfoItem").querySelector(".totalAmount_Item")
    let countText = e.target.parentNode.closest(".GoodsInfoItem").querySelector(".countText")
        totalAmount_Item.innerHTML = Number(firstAmount_Item.innerHTML) * Number(countText.innerHTML)
}

document.addEventListener("DOMContentLoaded",function(e){
    e.preventDefault()
    e.stopPropagation()
    countTotalAmount(e)
})
document.addEventListener("click",function(e){
    e.stopPropagation()
    let count=0;
 
  if(e.target.parentNode.tagName == "BUTTON" && e.target.parentNode.className == "increaseCount"){
    e.target.parentNode.parentNode.querySelector(".countText").innerHTML++;
    changeTotalAmount(e)
    countTotalAmount(e)
  }
  if(e.target.parentNode.tagName == "BUTTON" && e.target.parentNode.className == "decreaseCount"){
    if(e.target.parentNode.parentNode.querySelector(".countText").innerHTML>0){
        e.target.parentNode.parentNode.querySelector(".countText").innerHTML--;
        changeTotalAmount(e)
        countTotalAmount(e)
    }
  }   
  /*if(e.target.className=="contactCheckbox" || e.target.className=="basketContBlock_labelStyle"){
   let checkbx = e.target.querySelector(".contactCheckbox")
    if(e.target.checked=="checked"){
      alert("true")
      e.target.checked="false"
    }
    else if(e.target.checked!="checked"){
      alert("false")
      e.target.checked="checked"
      checkbx.style.backgroundColor = "blue"
    }
    
  }*/

  if(e.target.parentNode.tagName == "BUTTON" && e.target.parentNode.className == "removeItemBasket"){
    
    chosenGoodsList.removeChild(e.target.parentNode.closest(".GoodsInfoItem"))
    countTotalAmount(e)
  }

})