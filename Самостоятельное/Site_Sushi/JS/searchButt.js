let searchButton = document.querySelector(".searchButton");
let searchInput = document.createElement('input');
searchButton.style.display = "flex";
searchButton.style.flexDirection = "row";
searchButton.style.justifyContent = "space-evenly";
searchButton.style.alignItems = "center";
searchInput.type ="text";
searchInput.classList.add("searchInput");
searchInput.placeholder = "Поиск...";
searchInput.style.fontSize = "18px";
searchInput.style.padding="0px 5px";
searchInput.style.height ="40px"
searchInput.style.width = "200px";
searchInput.style.borderRadius = "8px";
searchInput.style.border = "none";
let searchIco= document.querySelector(".searchIco");

let innerSearchButt = document.createElement("button");
innerSearchButt.style.display = "flex";
innerSearchButt.style.justifyContent = "center";
innerSearchButt.style.alignItems = "center";
innerSearchButt.style.height ="40px"
innerSearchButt.style.borderRadius = "50%";
innerSearchButt.style.border = "none";
innerSearchButt.style.margin = "0px 5px";

let exitImg = document.createElement("img");
exitImg.classList.add("exitImg")
exitImg.src = "IMG/logWindow/closeWindowIco.png";

let innerSearchExitButt = document.createElement("button");
innerSearchExitButt.style.display = "flex";
innerSearchExitButt.style.justifyContent = "center";
innerSearchExitButt.style.alignItems = "center";
innerSearchExitButt.style.height ="40px"
innerSearchExitButt.style.borderRadius = "50%";
innerSearchExitButt.style.border = "none";
innerSearchExitButt.classList.add("innerSearchExitButt")

innerSearchExitButt.appendChild(exitImg);
let is_searchButton_Clicked = false;

// searchButton.addEventListener("click",function(e){
//     if(!searchButton.contains(searchInput)){
//         searchButton.removeChild(searchIco);
//         searchButton.appendChild(searchInput);
//         innerSearchButt.appendChild(searchIco)
//         searchButton.appendChild(innerSearchButt);
//         searchButton.appendChild(innerSearchExitButt);
//         searchButton.style.padding ="15px 20px";
//         is_searchButton_Clicked=true;
//     }
    
// })
// innerSearchExitButt.addEventListener("click",function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     let parent = e.target.closest(".searchButton");
//     parent.removeChild(searchInput);
//     parent.removeChild(innerSearchButt);
//     parent.removeChild(innerSearchExitButt);
//     parent.appendChild(searchIco)
//     parent.style.padding = "20px"
//     is_searchButton_Clicked=false;
// })


function searchButtonClick(e){
    let searchButton;
    let searchIco;
    if(e.target.className == "searchButton"){
        searchButton = e.target
        searchIco = e.target.querySelector(".searchIco")
    }
    else if(e.target.className != "searchButton"){
        searchButton = e.target.parentNode;
        searchIco = e.target
    }
    if(!searchButton.contains(searchInput)){
                searchButton.removeChild(searchIco);
                searchButton.appendChild(searchInput);
                innerSearchButt.appendChild(searchIco)
                searchButton.appendChild(innerSearchButt);
                searchButton.appendChild(innerSearchExitButt);
                searchButton.style.padding ="15px 20px";
                is_searchButton_Clicked=true;
            }
  }

  function innerSearchExitButtClick(e){
    e.preventDefault();
        e.stopPropagation();
        let parent = e.target.closest(".searchButton");
        parent.removeChild(searchInput);
        parent.removeChild(innerSearchButt);
        parent.removeChild(innerSearchExitButt);
        parent.appendChild(searchIco)
        parent.style.padding = "20px"
        is_searchButton_Clicked=false;
  }

  function searchButtonHide(e){
        if(!searchButton.contains(e.target) && is_searchButton_Clicked){
            searchButton.removeChild(searchInput);
            searchButton.removeChild(innerSearchButt);
            searchButton.removeChild(innerSearchExitButt);
            searchButton.appendChild(searchIco)
            searchButton.style.padding = "20px"
        }
  }

// document.addEventListener("click",function(e){
//     // e.preventDefault();
//     // e.stopPropagation();
//     if(!searchButton.contains(e.target)){
//         searchButton.removeChild(searchInput);
//         searchButton.removeChild(innerSearchButt);
//         searchButton.removeChild(innerSearchExitButt);
//         searchButton.appendChild(searchIco)
//         searchButton.style.padding = "20px"
//     }
//     if(!burgerMenu.contains(e.target)){
//         burgerMenu.style.display ="none";
//      }

// })