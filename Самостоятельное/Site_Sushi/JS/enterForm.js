//let bodyEl = document.querySelector('body');
let LoginIco =document.querySelector(".LoginIco")
       let enterForm = document.createElement("form");
       enterForm.classList.add("loginWindow_ColsElemsForm");

       let enterForm_topElems = document.createElement('div');
       enterForm_topElems.classList.add("loginWindow_Row");
       enterForm_topElems.classList.add("jc_spaceBetween");
       enterForm_topElems.classList.add("marginVert10px");

       let enterForm_header = document.createElement('p');
       enterForm_header.classList.add('loginWindow_name');
       enterForm_header.innerHTML = "Авторизация";


       let closeButton = document.createElement('button');
       closeButton.classList.add("closeButton");
       let closeButton_img = document.createElement('img');
       closeButton_img.src = "IMG/logWindow/closeWindowIco.png";
       closeButton_img.classList.add("loginWindow_CloseIco");

    closeButton.appendChild(closeButton_img);
    enterForm_topElems.appendChild(enterForm_header);
    enterForm_topElems.appendChild(closeButton);
    enterForm.appendChild(enterForm_topElems);

    let input_Email = document.createElement("input");
    input_Email.type = "email"
    input_Email.placeholder = "Эл. почта или телефон"
    input_Email.id = "email"
    input_Email.classList.add("loginWindow_inputStyle")
    input_Email.classList.add("marginVert10px")

    let input_Password = document.createElement("input");
    input_Password.type = "password"
    input_Password.placeholder = "Пароль"
    input_Password.id = "password"
    input_Password.classList.add("loginWindow_inputStyle")
    input_Password.classList.add("marginVert10px")

    enterForm.appendChild(input_Email);
    enterForm.appendChild(input_Password);
    
    let help_Block  =document.createElement('div');
    help_Block.classList.add("loginWindow_Row");
    help_Block.classList.add("jc_spaceBetween");
    help_Block.classList.add("marginVert10px");
    let forgetPassLink = document.createElement('a');
    forgetPassLink.classList.add('loginWindow_link');
    forgetPassLink.innerHTML = "Не помню пароль"

    let enterByCodLink = document.createElement("a");
    enterByCodLink.classList.add('loginWindow_link')
    enterByCodLink.innerHTML="Вход по коду"

    help_Block.appendChild(forgetPassLink);
    help_Block.appendChild(enterByCodLink);
    enterForm.appendChild(help_Block);

    let submit_Button = document.createElement("input");
    submit_Button.type = "submit";
    submit_Button.placeholder = "Войти"
    submit_Button.id="submit_Enter"
    submit_Button.classList.add("loginWindow_Button")
    submit_Button.classList.add("marginVert10px")
    submit_Button.value="Войти"

    enterForm.appendChild(submit_Button);

    let socialNetwButt_block = document.createElement("div")
    socialNetwButt_block.classList.add("loginWindow_Row")
    socialNetwButt_block.classList.add("jc_center")
    socialNetwButt_block.classList.add("marginVert10px")

    let socialNetwButt_Images = [
        "IMG/logWindow/gmailICO.png",
        "IMG/logWindow/VKiCO.png",
        "IMG/logWindow/fbICO.png",
        "IMG/logWindow/instICO.png"
       ]
    
    for(let i=0;i<socialNetwButt_Images.length;i++){
        let socialNetwButton = document.createElement("button");
        socialNetwButton.classList.add("loginWindow_socNetButt");
        let socialNetwButton_img = document.createElement("img")
        socialNetwButton_img.classList.add("loginWindow_socNetICO")
        socialNetwButton_img.src =socialNetwButt_Images[i];
        socialNetwButton.appendChild(socialNetwButton_img);
        socialNetwButt_block.appendChild(socialNetwButton);
    }
    enterForm.appendChild(socialNetwButt_block);
    /*<button class="loginWindow_registButt marginVert10px">Зарегистрироваться</button>*/
    let registButton = document.createElement("button")
    registButton.classList.add("loginWindow_registButt");
    registButton.classList.add("marginVert10px");
    registButton.innerHTML="Зарегистрироваться"

    enterForm.appendChild(registButton)

    let parentElem_forEmterForm = document.createElement("div");
    parentElem_forEmterForm.classList.add("loginWindow")
    parentElem_forEmterForm.appendChild(enterForm)
    
let accountButton= document.querySelector(".accountButton");
let isOpened =false

let LoginIcoBut_Mobile= document.querySelector(".LoginIcoBut_Mobile")

accountButton.addEventListener("click",function(e){
    var rect = this.getBoundingClientRect();
    parentElem_forEmterForm.style.top = rect.top;
    parentElem_forEmterForm.style.right = rect.left
    if(bodyEl.contains(parentElem_forEmterForm)){
        bodyEl.removeChild(parentElem_forEmterForm)
    }
    else{
        bodyEl.appendChild(parentElem_forEmterForm)
    }
})
LoginIcoBut_Mobile.addEventListener("click",function(e){
    var rect = this.getBoundingClientRect();
    parentElem_forEmterForm.style.top = rect.top;
    parentElem_forEmterForm.style.right = rect.left
    if(bodyEl.contains(parentElem_forEmterForm)){
        bodyEl.removeChild(parentElem_forEmterForm)
    }
    else{
        bodyEl.appendChild(parentElem_forEmterForm)
    }
})

closeButton.addEventListener("click",function(e){
    bodyEl.removeChild(parentElem_forEmterForm)
    
})

document.addEventListener("click",function(e){
    if(!accountButton.contains(e.target) && !parentElem_forEmterForm.contains(e.target)){
        bodyEl.removeChild(parentElem_forEmterForm)
    }
})
