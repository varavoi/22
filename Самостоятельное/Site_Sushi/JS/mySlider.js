
let gallery__btn_left = document.querySelector(".gallery__btn_left");
let gallery__btn_right = document.querySelector(".gallery__btn_right");

let my_slider_container = document.querySelector(".my_slider_container");
let leftS = 0;
let timeout=0;
// function turnSliderRight(e){
//   if((my_slider_container.lastChild.previousSibling.offsetLeft)>967){
//       my_slider_container.firstChild.nextSibling.style.marginLeft = leftS+"px"
//       //alert(my_slider_container.lastChild.previousSibling.offsetLeft)
//  }
//  if(my_slider_container.lastChild.previousSibling.offsetLeft!=967){
//   leftS -=294; 
//   }
// }

// function turnSliderLeft(e){
//   //alert(my_slider_container.firstChild.nextSibling.offsetLeft-leftS)
//   if(my_slider_container.firstChild.nextSibling.offsetLeft<0){
//       my_slider_container.firstChild.nextSibling.style.marginLeft = leftS+"px"
//       // alert(my_slider_container.firstChild.nextSibling.style.marginLeft) 
//  }
//  if(my_slider_container.firstChild.nextSibling.offsetLeft!=0){
//   leftS +=294; 
// }
// }

function turnSliderRight(e){
  let my_slider_container =  e.target.parentNode.querySelector(".my_slider_container");
    if((my_slider_container.lastChild.previousSibling.offsetLeft)>967){
          my_slider_container.firstChild.nextSibling.style.marginLeft = leftS+"px"
          //alert(my_slider_container.lastChild.previousSibling.offsetLeft)
     }
     if(my_slider_container.lastChild.previousSibling.offsetLeft!=967){
      leftS -=294; 
      }
}

function turnSliderLeft(e){
  let my_slider_container =  e.target.parentNode.querySelector(".my_slider_container");
  if(my_slider_container.firstChild.nextSibling.offsetLeft<0){
          my_slider_container.firstChild.nextSibling.style.marginLeft = leftS+"px"
          // alert(my_slider_container.firstChild.nextSibling.style.marginLeft) 
     }
     if(my_slider_container.firstChild.nextSibling.offsetLeft!=0){
      leftS +=294; 
    }
}

// document.addEventListener("click",function(e){
//     if(e.target.tagName == "BUTTON" && e.target.className == "gallery__btn_right"){
//       var cor = this.getBoundingClientRect()
//       turnSliderRight(e)
//     }
//     if(e.target.tagName == "BUTTON" && e.target.className == "gallery__btn_left"){
//       var cor = this.getBoundingClientRect()
//     turnSliderLeft(e)
//       }
// })

// gallery__btn_right.addEventListener("mousedown", function(e){
 
    
// })

// gallery__btn_left.addEventListener("mousedown", function(e){
  
// })


/*
gallery__btn_right.addEventListener("mousedown", function(e){
    
    var cor = this.getBoundingClientRect()
    if((my_slider_container.lastChild.previousSibling.offsetLeft)>967){
        my_slider_container.firstChild.nextSibling.style.marginLeft = leftS+"px"
        //alert(my_slider_container.lastChild.previousSibling.offsetLeft)
   }
   if(my_slider_container.lastChild.previousSibling.offsetLeft!=967){
    leftS -=294; 
    }
})

gallery__btn_left.addEventListener("mousedown", function(e){
    
    var cor = this.getBoundingClientRect()
    //alert(my_slider_container.firstChild.nextSibling.offsetLeft-leftS)
    if(my_slider_container.firstChild.nextSibling.offsetLeft<0){
        my_slider_container.firstChild.nextSibling.style.marginLeft = leftS+"px"
        // alert(my_slider_container.firstChild.nextSibling.style.marginLeft) 
   }
   if(my_slider_container.firstChild.nextSibling.offsetLeft!=0){
    leftS +=294; 
}
})
*/