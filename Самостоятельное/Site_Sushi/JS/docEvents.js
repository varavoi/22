



document.addEventListener("click",function(e){
   
    // if(!burgerMenu.contains(e.target)){
    //     burgerMenu.style.display ="none";
    //  }
    //alert(e.target.parentNode.querySelector(".searchButton").className)
    if((e.target.tagName == "IMG"||e.target.tagName == "BUTTON") && (e.target.className == "searchButton"||e.target.className == "searchIco")){
        searchButtonClick(e)
    }
    if((e.target.tagName == "IMG"||e.target.parentNode.tagName == "BUTTON") && (e.target.className == "exitImg"||e.target.parentNode.className == "innerSearchExitButt")){
        innerSearchExitButtClick(e)
    }
     if(e.target.tagName == "BUTTON" && e.target.className == "gallery__btn_right"){   
        turnSliderRight(e)
      }
      if(e.target.tagName == "BUTTON" && e.target.className == "gallery__btn_left"){
        turnSliderLeft(e)
        }
    if((e.target.tagName == "BUTTON" && e.target.className == "header_menuButton")||(e.target.tagName == "IMG" && e.target.className == "menuButIco")||(e.target.tagName == "P" && e.target.className == "menuButText")){
        header_menuButtonClick(e)
    }
    if((e.target.tagName == "BUTTON" && e.target.className == "header_menuButton_Mobile")||(e.target.tagName == "IMG" && e.target.className == "menuButIco_Mobile")){
        header_menuButton_MobileClick(e)
    }
        searchButtonHide(e)
    if(document.documentElement.clientWidth>768){
        burgerMenuHide(e)   
    }
    if(document.documentElement.clientWidth<768){
        burgerMenuMobileHide(e)  
    }   
        
        
        //burgerMenuMobileHide(e)
})