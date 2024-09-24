let bodyEl = document.querySelector('body');
let header_menuButton = document.querySelector('.header_menuButton');

function makeBurgerMenu(){
    let burgerMenu = document.createElement('div');
    burgerMenu.classList.add('burgerMenu');
    let header_menuButton_Mobile = document.querySelector('.header_menuButton_Mobile');
    
    let burgerMenu_colBlock = document.createElement('div');
    burgerMenu_colBlock.classList.add('burgerMenu_colBlock');
    let burgerMenu_upRowBlock = document.createElement('div');
    burgerMenu_upRowBlock.classList.add('burgerMenu_upRowBlock');
    
    let burgerMenu_upInnerButton_names = ["НОВОЕ","ХИТЫ","ОСТРОЕ","СКИДКИ"];
    let burgerMenu_upInnerButton_imgs=["IMG/burgerMenuItems/newICO.png","IMG/burgerMenuItems/hitsICO.png","IMG/burgerMenuItems/sharpICO.png","IMG/burgerMenuItems/hotSaleICO.png"]
    for(let i=0;i<4;i++){
        let burgerMenu_upInnerButton = document.createElement('button');
        burgerMenu_upInnerButton.classList.add('burgerMenu_upInnerButton');
        let burgerMenu_upInnerButton_img = document.createElement('img');
        burgerMenu_upInnerButton_img.classList.add('burgerMenu_upInnerButton_img');
        burgerMenu_upInnerButton_img.src = burgerMenu_upInnerButton_imgs[i];
        let burgerMenu_upInnerButton_name = document.createElement('p');
        burgerMenu_upInnerButton_name.classList.add('burgerMenu_upInnerButton_name');
        burgerMenu_upInnerButton_name.innerHTML = burgerMenu_upInnerButton_names[i];
        burgerMenu_upInnerButton.appendChild(burgerMenu_upInnerButton_img);
        burgerMenu_upInnerButton.appendChild(burgerMenu_upInnerButton_name);
        burgerMenu_upRowBlock.appendChild(burgerMenu_upInnerButton);
    }
    burgerMenu_colBlock.appendChild(burgerMenu_upRowBlock);
    
    let burgerMenu_downRowBlock = document.createElement('div');
    burgerMenu_downRowBlock.classList.add('burgerMenu_downRowBlock');
    
    burgerMenu_downInnerButton_imgs = [["IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png"],["IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png"],
    ["IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png","IMG/burgerMenuItems/allMenuICO.png"]];
    
    burgerMenu_downInnerButton_names = [["Все меню","Новинки","Акции месяца","Пицца","Горячие блюда","Поке и боулы","Детское меню"],["Роллы и суши","Yami Case","Пицца большая","WOK","Напитки","Блины","Топпинги"],["Наборы и сеты","Супы","Салаты и закуски","Завтраки","Десерты","Гарниры","Мороженое"]];
    
    for(let i=0;i<3;i++){
        let burgerMenu_downInnerColBlock = document.createElement('div');
        burgerMenu_downInnerColBlock.classList.add('burgerMenu_downInnerColBlock');
        for(let j=0;j<7;j++){
            let burgerMenu_downInnerButton = document.createElement('button');
            burgerMenu_downInnerButton.classList.add('burgerMenu_downInnerButton');
            let burgerMenu_downInnerButton_img = document.createElement('img');
            burgerMenu_downInnerButton_img.classList.add('burgerMenu_downInnerButton_img');
            burgerMenu_downInnerButton_img.src = burgerMenu_downInnerButton_imgs[i][j];
            let burgerMenu_downInnerButton_name = document.createElement('p');
            burgerMenu_downInnerButton_name.classList.add('burgerMenu_downInnerButton_name');
            burgerMenu_downInnerButton_name.innerHTML = burgerMenu_downInnerButton_names[i][j];
            burgerMenu_downInnerButton.appendChild(burgerMenu_downInnerButton_name);
            burgerMenu_downInnerButton.appendChild(burgerMenu_downInnerButton_img);
            burgerMenu_downInnerColBlock.appendChild(burgerMenu_downInnerButton);
        }
        burgerMenu_downRowBlock.appendChild(burgerMenu_downInnerColBlock);
    }
    burgerMenu_colBlock.appendChild(burgerMenu_downRowBlock);
    burgerMenu.appendChild(burgerMenu_colBlock)
    return burgerMenu;
}



// header_menuButton.addEventListener('click',function(e){
//     let thisButt = this.getBoundingClientRect()
//     burgerMenu.style.top = thisButt.bottom + '10px'
//     burgerMenu.style.left = thisButt.left +"40px"
//     if(bodyEl.contains(burgerMenu)){
//         bodyEl.removeChild(burgerMenu)
//     }
//     else{
//         bodyEl.appendChild(burgerMenu)
//     }
  
// })

function header_menuButtonClick(e){
    let header_menuButton;
    let bodyEl = document.querySelector('body');
    
     if(e.target.className =="header_menuButton"){
        header_menuButton = e.target;
     }
     else if(e.target.className !="header_menuButton"){
        header_menuButton = e.target.parentNode;
     }
    let cord = header_menuButton.getBoundingClientRect();
    //let thisButt = this.getBoundingClientRect()
    let burgerMenu;
    
    if(bodyEl.querySelector(".burgerMenu")==null){
        let burgerMenu = makeBurgerMenu();
        burgerMenu.style.top = (cord.top + cord.height+5)+"px"
        burgerMenu.style.left = (cord.left)+"px"
        bodyEl.appendChild(burgerMenu)
    }
    else if(bodyEl.querySelector(".burgerMenu") != null){
        //alert(bodyEl.querySelector(".burgerMenu") != null)
        // burgerMenu
        burgerMenu = bodyEl.querySelector(".burgerMenu")
        bodyEl.removeChild(burgerMenu)
    }
}

// header_menuButton_Mobile.addEventListener('click',function(e){
//     let thisButt = this.getBoundingClientRect()
//     burgerMenu.style.top = thisButt.bottom 
//     burgerMenu.style.left = thisButt.left 
//     if(bodyEl.contains(burgerMenu)){
//         bodyEl.removeChild(burgerMenu)
//     }
//     else{
//         bodyEl.appendChild(burgerMenu)
//     }
  
// })

function header_menuButton_MobileClick(e){
    let header_menuButton_Mobile;
    let bodyEl = document.querySelector('body');
     if(e.target.className =="header_menuButton_Mobile"){
        header_menuButton_Mobile = e.target;
     }
     else if(e.target.className !="header_menuButton_Mobile"){
        header_menuButton_Mobile = e.target.parentNode;
     }
     
    let cord = header_menuButton_Mobile.getBoundingClientRect();
    //let thisButt = this.getBoundingClientRect()
    let burgerMenu;
   
    if(bodyEl.querySelector(".burgerMenu")==null){
        let burgerMenu = makeBurgerMenu();
        burgerMenu.style.top = (cord.top + cord.height/2)+"px"
        burgerMenu.style.left = (document.pageX)+"px"
        burgerMenu.style.width  =(document.documentElement.clientWidth)+"px"
        bodyEl.appendChild(burgerMenu)
    }
    else if(bodyEl.querySelector(".burgerMenu") != null){
        burgerMenu = bodyEl.querySelector(".burgerMenu")
        bodyEl.removeChild(burgerMenu)
    }
}

// document.addEventListener("click",function(e){
//     if(!header_menuButton.contains(e.target)){
//         bodyEl.removeChild(burgerMenu)
//     }
// })

function burgerMenuHide(e){
    let header_menuButton=document.querySelector(".header_menuButton")
    let bodyEl = document.querySelector('body');
    if(!header_menuButton.contains(e.target)){
        let burgerMenu = bodyEl.querySelector(".burgerMenu")
        bodyEl.removeChild(burgerMenu)
    }
}
function burgerMenuMobileHide(e){
    let header_menuButton_Mobile=document.querySelector(".header_menuButton_Mobile")
    let bodyEl = document.querySelector('body');
    if(!header_menuButton_Mobile.contains(e.target)){
        let burgerMenu = bodyEl.querySelector(".burgerMenu")
        bodyEl.removeChild(burgerMenu)
    }
}