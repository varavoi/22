let bodyEl = document.querySelector("body")

class Input{
    constructor(type,id=null,name=null){
        this.input=document.createElement('input')
        this.input.type = type
        this.input.id=id
        this.input.name=name
        this.input.value = null
    }
    setClassName(className){
        this.input.classList.add(className)
    }
    setValue(value){
        this.input.value = value
    }
    setId(id){
        this.input.id=id
    }
    setId(name){
        this.input.name=name
    }
    getValue(){
        return this.input.value
    }
    getClassName(){
        return this.input.className
    }
    getNode(){
        return this.input
    }
}

let radio = new Input("radio","baskDeliveryId","baskDeliveryRest")
radio.setClassName("contactCheckbox")
radio.setValue("baskDeliveryVal")

let baskDelivery_Input = document.createElement('input')
baskDelivery_Input.type = "radio"
baskDelivery_Input.classList.add("contactCheckbox")
baskDelivery_Input.id = "baskDeliveryId"
baskDelivery_Input.name = "baskDeliveryRest"
baskDelivery_Input.value = "baskDeliveryVal"
let baskDelivery_Span =document.createElement('span')
baskDelivery_Span.classList.add("customCheckbox")
let baskDelivery_label = document.createElement('label')
baskDelivery_label.for = "baskDeliveryId"
baskDelivery_label.classList.add("baskDeliveryRest_label")
baskDelivery_label.classList.add("basketContBlock_labelStyle")
baskDelivery_label.classList.add("align_bask")
baskDelivery_label.appendChild(baskDelivery_Input)
baskDelivery_label.appendChild(baskDelivery_Span)
baskDelivery_label_textNode = document.createTextNode("ДОСТАВКА")
baskDelivery_label.appendChild(baskDelivery_label_textNode) 

let baskGetRest_Input = document.createElement('input')
baskGetRest_Input.type = "radio"
baskGetRest_Input.classList.add("contactCheckbox")
baskGetRest_Input.id = "baskGetRestId"
baskGetRest_Input.name = "baskDeliveryRest"
baskGetRest_Input.value = "baskGetRestVal"
let baskGetRest_Span =document.createElement('span')
baskGetRest_Span.classList.add("customCheckbox")
let baskGetRest_label = document.createElement('label')
baskGetRest_label.for = "baskGetRestId"
baskGetRest_label.classList.add("baskDeliveryRest_label")
baskGetRest_label.classList.add("basketContBlock_labelStyle")
baskGetRest_label.classList.add("align_bask")
baskGetRest_label.appendChild(baskGetRest_Input)
baskGetRest_label.appendChild(baskGetRest_Span)
baskGetRest_label_textNode = document.createTextNode("ЗАБРАТЬ ИЗ РЕСТОРАНА")
baskGetRest_label.appendChild(baskGetRest_label_textNode) 
let basketContBlock_row = document.createElement('div')
basketContBlock_row.classList.add("basketContBlock_row")
basketContBlock_row.appendChild(baskDelivery_label)
basketContBlock_row.appendChild(baskGetRest_label)
bodyEl.appendChild(basketContBlock_row)

document.addEventListener('click',function(e){
    e.stopPropagation()

    if(e.target.name=="baskDeliveryRest"){
        
        if(bodyEl.contains(document.querySelector(".basketContBlock"))){
            bodyEl.removeChild(document.querySelector(".basketContBlock"))
        }
        if(!bodyEl.contains(document.querySelector(".basketContBlock"))){
                bodyEl.appendChild(makeCheckout_Delivery(e))
        }
    }
})


function makeBasketPayChoiseBlock_Delivery(){
        let basketBlock_CheckBlock_arr=[]
        for(let i=0;i<4;i++){
            let basketBlock_CheckBlock = document.createElement('div')
            basketBlock_CheckBlock.classList.add("basketBlock_CheckBlock")
            let basketContBlock_label =document.createElement("label")
            basketContBlock_label.classList.add("basketContBlock_labelStyle")
            basketContBlock_label.for = "chPayId"+(i+1)
            let contactCheckbox = document.createElement('input')
            contactCheckbox.classList.add("contactCheckbox")
            contactCheckbox.type = 'radio'
            contactCheckbox.id = "chPayId"+(i+1)
            contactCheckbox.name = "paymentMethod"
            let customCheckbox_span = document.createElement('span')
            customCheckbox_span.classList.add("customCheckbox")
            
            basketContBlock_label.appendChild(contactCheckbox)
            basketContBlock_label.appendChild(customCheckbox_span)
            basketBlock_CheckBlock.appendChild(basketContBlock_label)
            basketBlock_CheckBlock_arr.push(basketBlock_CheckBlock)
        }
            basketBlock_CheckBlock_arr[0].querySelector(".basketContBlock_labelStyle").querySelector(".contactCheckbox").value = "payByCard"
            let baskBl_txt0 = document.createTextNode("ОПЛАТА КАРТОЙ НА САЙТЕ")
            basketBlock_CheckBlock_arr[0].querySelector(".basketContBlock_labelStyle").appendChild(baskBl_txt0)

            basketBlock_CheckBlock_arr[1].querySelector(".basketContBlock_labelStyle").querySelector(".contactCheckbox").value = "payByCardCurier"
            let baskBl_txt1 = document.createTextNode("ОПЛАТА КАРТОЙ КУРЬЕРУ")
            basketBlock_CheckBlock_arr[1].querySelector(".basketContBlock_labelStyle").appendChild(baskBl_txt1)

            basketBlock_CheckBlock_arr[2].querySelector(".basketContBlock_labelStyle").querySelector(".contactCheckbox").value = "payByCount"
            let baskBl_txt2 = document.createTextNode("ОПЛАТА ПО СЧЁТУ ДЛЯ ОРГАНИЗАЦИЙ И ИП")
            basketBlock_CheckBlock_arr[2].querySelector(".basketContBlock_labelStyle").appendChild(baskBl_txt2)

            basketBlock_CheckBlock_arr[3].querySelector(".basketContBlock_labelStyle").querySelector(".contactCheckbox").value = "payByCashCurier"
            let baskBl_txt3 = document.createTextNode("НАЛИЧНЫМИ КУРЬЕРУ")
            basketBlock_CheckBlock_arr[3].querySelector(".basketContBlock_labelStyle").appendChild(baskBl_txt3)

            return basketBlock_CheckBlock_arr;
}

function makeBasketPayChoiseBlock_GetRest(){
        let basketBlock_CheckBlock_arr=[]
            for(let i=0;i<1;i++){
                let basketBlock_CheckBlock = document.createElement('div')
                basketBlock_CheckBlock.classList.add("basketBlock_CheckBlock")
                let basketContBlock_label =document.createElement("label")
                basketContBlock_label.classList.add("basketContBlock_labelStyle")
                basketContBlock_label.for = "chPayId"+(i+1)
                let contactCheckbox = document.createElement('input')
                contactCheckbox.classList.add("contactCheckbox")
                contactCheckbox.type = 'checkbox'
                contactCheckbox.id = "chPayId"+(i+1)
                contactCheckbox.name = "paymentMethod"
                let customCheckbox_span = document.createElement('span')
                customCheckbox_span.classList.add("customCheckbox")
                
                basketContBlock_label.appendChild(contactCheckbox)
                basketContBlock_label.appendChild(customCheckbox_span)
                basketBlock_CheckBlock.appendChild(basketContBlock_label)
                basketBlock_CheckBlock_arr.push(basketBlock_CheckBlock)
            }
                basketBlock_CheckBlock_arr[0].querySelector(".basketContBlock_labelStyle").querySelector(".contactCheckbox").value = "payByCard"
                let baskBl_txt0 = document.createTextNode("ОПЛАТА КАРТОЙ НА САЙТЕ")
                basketBlock_CheckBlock_arr[0].querySelector(".basketContBlock_labelStyle").appendChild(baskBl_txt0)
        return basketBlock_CheckBlock_arr;
}

function makeAdressBlock_Delivery(){
        let sectionCaptH3_first = document.createElement("h3")
        sectionCaptH3_first.classList.add("sectionCaptH3")
        sectionCaptH3_first.innerHTML = "АДРЕС ДОСТАВКИ:"
        
        let basketContBlock_leftInputBlock = document.createElement('div')
        basketContBlock_leftInputBlock.classList.add("basketContBlock_leftInputBlock")
        let basketBlock_label = document.createElement('p')
        basketBlock_label.classList.add("basketBlock_labelStyle")
        basketBlock_label.innerHTML = "Улица"
        let basketBlock_input_street = document.createElement('input')
        basketBlock_input_street.type = "text"
        basketBlock_input_street.classList.add("basketBlock_inputStyle")
        basketBlock_input_street.classList.add("basketContBlock_name")
        basketBlock_input_street.name = "basketBlock_input_street"
        basketBlock_input_street.placeholder = "Укажите улицу..."
        basketContBlock_leftInputBlock.appendChild(basketBlock_label)
        basketContBlock_leftInputBlock.appendChild(basketBlock_input_street)

        let little_Row_first= document.createElement('div')
        little_Row_first.classList.add("little_Row")
        let basketContBlock_leftInputBlock_little_arr = []
        for(let i=0;i<3;i++){
            let basketContBlock_leftInputBlock_little = document.createElement('div')
            basketContBlock_leftInputBlock_little.classList.add("basketContBlock_leftInputBlock_little")
            let basketBlock_label_little = document.createElement('p')
            basketBlock_label_little.classList.add("basketBlock_labelStyle_little")
            let basketBlock_input_little = document.createElement('input')
            basketBlock_input_little.type ="text"
            basketBlock_input_little.classList.add("basketBlock_inputStyle_little")
            basketBlock_input_little.classList.add("basketContBlock_name")
            basketContBlock_leftInputBlock_little.appendChild(basketBlock_label_little)
            basketContBlock_leftInputBlock_little.appendChild(basketBlock_input_little)
            basketContBlock_leftInputBlock_little_arr.push(basketContBlock_leftInputBlock_little)
        }
        basketContBlock_leftInputBlock_little_arr[0].querySelector(".basketBlock_labelStyle_little").innerHTML = "Квартира"
        basketContBlock_leftInputBlock_little_arr[1].querySelector(".basketBlock_labelStyle_little").innerHTML = "Этаж"
        basketContBlock_leftInputBlock_little_arr[2].querySelector(".basketBlock_labelStyle_little").innerHTML = "Подъезд"
        basketContBlock_leftInputBlock_little_arr[0].querySelector(".basketBlock_inputStyle_little").name = "basketBlock_input_appartment"
        basketContBlock_leftInputBlock_little_arr[1].querySelector(".basketBlock_inputStyle_little").name = "basketBlock_input_floor"
        basketContBlock_leftInputBlock_little_arr[2].querySelector(".basketBlock_inputStyle_little").name = "basketBlock_input_entrance"
        little_Row_first.appendChild(basketContBlock_leftInputBlock_little_arr[0])
        little_Row_first.appendChild(basketContBlock_leftInputBlock_little_arr[1])
        little_Row_first.appendChild(basketContBlock_leftInputBlock_little_arr[2])

        let little_Row_second= document.createElement('div')
        little_Row_second.classList.add("little_Row")

        let basketContBlock_leftInputBlock_little = document.createElement('div')
        basketContBlock_leftInputBlock_little.classList.add("basketContBlock_leftInputBlock_little")
        let basketBlock_label_little = document.createElement('p')
        basketBlock_label_little.classList.add("basketBlock_labelStyle_little")
        basketBlock_label_little.innerHTML = "Домофон"
        let basketSelectSt = document.createElement('select')
        basketSelectSt.classList.add("basketSelectSt")
        let basketOptionSt_presence = document.createElement('option')
        basketOptionSt_presence.classList.add("basketOptionSt")
        basketOptionSt_presence.name = "basketOptionSt_presence"
        basketOptionSt_presence.value = "basketOptionSt_presence_val"
        basketOptionSt_presence.innerHTML = "Есть"
        let basketOptionSt_absence = document.createElement('option')
        basketOptionSt_absence.classList.add("basketOptionSt")
        basketOptionSt_absence.name = "basketOptionSt_absence"
        basketOptionSt_absence.value = "basketOptionSt_absence_val"
        basketOptionSt_absence.innerHTML = "Отсутствует"
        basketSelectSt.appendChild(basketOptionSt_presence)
        basketSelectSt.appendChild(basketOptionSt_absence)
        basketContBlock_leftInputBlock_little.appendChild(basketBlock_label_little)
        basketContBlock_leftInputBlock_little.appendChild(basketSelectSt)

        let basketBlock_CheckBlock = document.createElement('div')
        basketBlock_CheckBlock.classList.add("basketBlock_CheckBlock")
        let notRingDoor_label = document.createElement('label')
        notRingDoor_label.for = "notRingDoorID"
        notRingDoor_label.classList.add("basketContBlock_labelStyle")
        notRingDoor_label.classList.add("align_bask")
        let notRingDoor_input = document.createElement('input')
        notRingDoor_input.type = "checkbox"
        notRingDoor_input.classList.add("contactCheckbox")
        notRingDoor_input.id = "notRingDoor_inputID"
        notRingDoor_input.name = "notRingDoor_input"
        notRingDoor_input.value = "notRingDoor_val"
        let notRingDoor_span = document.createElement('span')
        notRingDoor_span.classList.add("customCheckbox")
        let notRingDoor_textNode = document.createTextNode("Не звонить в домофон")

        notRingDoor_label.appendChild(notRingDoor_input)
        notRingDoor_label.appendChild(notRingDoor_span)
        notRingDoor_label.appendChild(notRingDoor_textNode)
        basketBlock_CheckBlock.appendChild(notRingDoor_label)

        let little_Row_second_arr =[]
        little_Row_second.appendChild(basketContBlock_leftInputBlock_little)
        little_Row_second.appendChild(basketBlock_CheckBlock)
        little_Row_second_arr[0] =sectionCaptH3_first
        little_Row_second_arr[1] = basketContBlock_leftInputBlock
        little_Row_second_arr[2] = little_Row_first
        little_Row_second_arr[3] = little_Row_second
        return little_Row_second_arr;
}

function makeAdressBlock_GetRest(){
    
        let sectionCaptH3_first = document.createElement("h3")
        sectionCaptH3_first.classList.add("sectionCaptH3")
        sectionCaptH3_first.innerHTML = "АДРЕС РЕСТОРАНА:"

        let basketContBlock_leftInputBlock_little = document.createElement('div')
        basketContBlock_leftInputBlock_little.classList.add("basketContBlock_leftInputBlock")
        let basketBlock_label_little = document.createElement('p')
        basketBlock_label_little.classList.add("basketBlock_labelStyle")
        basketBlock_label_little.innerHTML = "Список адресов"
        let basketSelectSt = document.createElement('select')
        basketSelectSt.classList.add("basketSelectSt")
        /*
        <option selected disabled>Выберите город</option>
        */
        let basketOptionSt_default = document.createElement('option')
        basketOptionSt_default.classList.add("basketOptionSt")
        basketOptionSt_default.innerHTML = "Выберите город"
        basketOptionSt_default.selected = true
        basketOptionSt_default.disabled = true
        // basketOptionSt_default.setAttribute("selected", "");
        // basketOptionSt_default.setAttribute("disabled", "");

        let basketOptionSt_presence = document.createElement('option')
        basketOptionSt_presence.classList.add("basketOptionSt")
        basketOptionSt_presence.name = "basketOptionSt_presence"
        basketOptionSt_presence.value = "basketOptionSt_presence_val"
        basketOptionSt_presence.innerHTML = "Есть"
        let basketOptionSt_absence = document.createElement('option')
        basketOptionSt_absence.classList.add("basketOptionSt")
        basketOptionSt_absence.name = "basketOptionSt_absence"
        basketOptionSt_absence.value = "basketOptionSt_absence_val"
        basketOptionSt_absence.innerHTML = "Отсутствует"
        basketSelectSt.appendChild(basketOptionSt_default)
        basketSelectSt.appendChild(basketOptionSt_presence)
        basketSelectSt.appendChild(basketOptionSt_absence)
        basketContBlock_leftInputBlock_little.appendChild(basketBlock_label_little)
        basketContBlock_leftInputBlock_little.appendChild(basketSelectSt)
        let little_Row_second_arr =[]
        little_Row_second_arr[0] =sectionCaptH3_first
        little_Row_second_arr[1] = basketContBlock_leftInputBlock_little
        return little_Row_second_arr;
}

function makeMapBlock(){
        let sectionCaptH3_first = document.createElement("h3")
        sectionCaptH3_first.classList.add("sectionCaptH3")
        sectionCaptH3_first.innerHTML = "УКАЖИТЕ АДРЕС НА КАРТЕ:"
        let mapBlock = document.createElement('div')
        mapBlock.classList.add("basketMap")
        mapBlock.style.position = "relative"
        mapBlock.style.overflow = "hidden"
        let map_textLink_city = document.createElement('a')
        map_textLink_city.href = "https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
        map_textLink_city.style.color = "#eee"
        map_textLink_city.style.fontSize = "12px"
        map_textLink_city.style.position = "absolute"
        map_textLink_city.style.top = "0px"
        map_textLink_city.innerHTML = "Санкт‑Петербург"
        let map_textLink_title = document.createElement('a')
        map_textLink_title.href = "https://yandex.ru/maps/profile?ll=30.314997%2C59.938784&utm_medium=mapframe&utm_source=maps&z=11"
        map_textLink_title.style.color = "#eee"
        map_textLink_title.style.fontSize = "12px"
        map_textLink_title.style.position = "absolute"
        map_textLink_title.style.top = "14px"
        map_textLink_title.innerHTML = "Яндекс Карты"

        let map = document.createElement('iframe')
        map.src = "https://yandex.ru/map-widget/v1/profile?ll=30.314997%2C59.938784&z=11"
        map.width = "560"
        map.height = "400"
        map.frameBorder = "1"
        map.allowfullscreen = "true"
        map.style.position = "relative"
        mapBlock.appendChild(map_textLink_city)
        mapBlock.appendChild(map_textLink_title)
        mapBlock.appendChild(map)
        let mapArr = []
        mapArr[0] = mapBlock
        return mapArr
}

function makeChoiseDateBlock(){
    let little_Row_three= document.createElement('div')
    little_Row_three.classList.add("little_Row")
    basketBlock_CheckBlock_second = document.createElement('div')
    basketBlock_CheckBlock_second.classList.add("basketBlock_CheckBlock")
    let closeDate_label = document.createElement('label')
    closeDate_label.classList.add("basketContBlock_labelStyle")
    closeDate_label.classList.add("align_bask")
    closeDate_label.for= "closeDate_input_ID"
    let closeDate_input = document.createElement('input')
    closeDate_input.classList.add("contactCheckbox")
    closeDate_input.type = "radio"
    closeDate_input.name ="Date_input"
    closeDate_input.value ="closeDate_input_val"
    closeDate_input.id ="closeDate_input_ID"
    let closeDate_span = document.createElement('span')
    closeDate_span.classList.add("customCheckbox")
    let closeDate_textNode = document.createTextNode("НА БЛИЖАЙШЕЕ ВРЕМЯ")
    closeDate_label.appendChild(closeDate_input)
    closeDate_label.appendChild(closeDate_span)
    closeDate_label.appendChild(closeDate_textNode)
    basketBlock_CheckBlock_second.appendChild(closeDate_label)
    little_Row_three.appendChild(basketBlock_CheckBlock_second)

    let little_Row_four= document.createElement('div')
    little_Row_four.classList.add("little_Row")
    basketBlock_CheckBlock_three = document.createElement('div')
    basketBlock_CheckBlock_three.classList.add("basketBlock_CheckBlock")
    let checkDate_label = document.createElement('label')
    checkDate_label.classList.add("basketContBlock_labelStyle")
    checkDate_label.classList.add("align_bask")
    checkDate_label.for= "checkDate_input_ID"
    let checkDate_input = document.createElement('input')
    checkDate_input.classList.add("contactCheckbox")
    checkDate_input.type = "radio"
    checkDate_input.name ="Date_input"
    checkDate_input.value ="checkDate_input_val"
    checkDate_input.id ="checkDate_input_ID"
    let checkDate_span = document.createElement('span')
    checkDate_span.classList.add("customCheckbox")
    let checkDate_textNode = document.createTextNode("Выберите дату")
    checkDate_label.appendChild(checkDate_input)
    checkDate_label.appendChild(checkDate_span)
    checkDate_label.appendChild(checkDate_textNode)
    basketBlock_CheckBlock_three.appendChild(checkDate_label)
    let checkDate_dateform = document.createElement('input')
    checkDate_dateform.type = "date"
    checkDate_dateform.classList.add("basketBlock_inputStyle")
    checkDate_dateform.classList.add("basketDateSt")
    checkDate_dateform.placeholder = "Выберите дату..."
    checkDate_dateform.id = "checkDate_dateform_id"
    checkDate_dateform.name = "checkDate_dateform"
    checkDate_dateform.value = "checkDate_dateform_val"
    little_Row_four.appendChild(basketBlock_CheckBlock_three)
    little_Row_four.appendChild(checkDate_dateform)
    let dateBlockArr = []
    dateBlockArr[0]= little_Row_three
    dateBlockArr[1]= little_Row_four
    return dateBlockArr
}

function makeCommentBlock(){
    let sectionCaptH3_first = document.createElement("h3")
    sectionCaptH3_first.classList.add("sectionCaptH3")
    sectionCaptH3_first.innerHTML = "КОММЕНТАРИЙ К ЗАКАЗУ:"
    let basketCommentArea = document.createElement('textarea')
    basketCommentArea.classList.add("basketTxtAreaSt")
    basketCommentArea.id = "basketCommentsId"
    basketCommentArea.name = "basketComments"
    let commBlockArr = []
    commBlockArr[0]=sectionCaptH3_first
    commBlockArr[1]=basketCommentArea
    return commBlockArr
}

function makeAgreeConditionsBlock(){
    basketBlock_CheckBlock_five = document.createElement('div')
    basketBlock_CheckBlock_five.classList.add("basketBlock_CheckBlock")
    let agreeCheck_label = document.createElement('label')
    agreeCheck_label.classList.add("basketContBlock_labelStyle")
    agreeCheck_label.classList.add("align_bask")
    agreeCheck_label.classList.add("justifyContSB")
    agreeCheck_label.for= "agreeCheckID"
    let agreeCheck_input = document.createElement('input')
    agreeCheck_input.classList.add("contactCheckbox")
    agreeCheck_input.type = "checkbox"
    agreeCheck_input.name ="agreeCheck_input"
    agreeCheck_input.value ="agreeCheck_input_val"
    agreeCheck_input.id ="agreeCheck_input_ID"
    let agreeCheck_span = document.createElement('span')
    agreeCheck_span.classList.add("customCheckbox")
    let agreeCheck_p = document.createElement('p')
    agreeCheck_p.classList.add("agreeCheckText")
    agreeCheck_p.innerHTML = "Я ознакомлен с содержанием пользовательского соглашения и принимаю условия обработки персональных данных."
    agreeCheck_label.appendChild(agreeCheck_input)
    agreeCheck_label.appendChild(agreeCheck_span)
    agreeCheck_label.appendChild(agreeCheck_p)
    basketBlock_CheckBlock_five.appendChild(agreeCheck_label)
    let agreeBlockArr = []
    agreeBlockArr[0]= basketBlock_CheckBlock_five
    return agreeBlockArr
}

function makeSubmitBlock(){
    let basketContBlock_rowRight_submitBlock = document.createElement('div')
        basketContBlock_rowRight_submitBlock.classList.add("basketContBlock_rowRight2")
        let basket_submitButt = document.createElement('input')
        basket_submitButt.type = "submit"
        basket_submitButt.name = "basket_submitButt"
        basket_submitButt.name = "ОФОРМИТЬ"
        basket_submitButt.classList.add("basketCheckout")
        basketContBlock_rowRight_submitBlock.appendChild(basket_submitButt)
        let SubmitBlockArr = []
        SubmitBlockArr[0] = basketContBlock_rowRight_submitBlock
        return SubmitBlockArr
}

function makeCheckout_Delivery(e){
    let baskFormDelivery = document.createElement('form');
        baskFormDelivery.method = 'get'
        baskFormDelivery.action ='#'
        baskFormDelivery.classList.add("basketContBlock");
        let basketContBlock_row_arr  =[]
        for(let i=0;i<3;i++){
            let basketContBlock_row = document.createElement('div')
            basketContBlock_row.classList.add("basketContBlock_row")
            basketContBlock_row_arr.push(basketContBlock_row)
        }

        let basketContBlock_rowLeft_first = document.createElement('div')
        basketContBlock_rowLeft_first.classList.add("basketContBlock_rowLeft")
        let sectionCaptH3_first = document.createElement("h3")
        sectionCaptH3_first.classList.add("sectionCaptH3")
        sectionCaptH3_first.innerHTML = "КОНТАКТНЫЕ ДАННЫЕ:"
        basketContBlock_rowLeft_first.appendChild(sectionCaptH3_first)

        let basketName_div = document.createElement("div")
        basketName_div.id  ="basketNameId"
        basketName_div.classList.add("basketContBlock_leftInputBlock")
        let basketName_P = document.createElement('p')
        basketName_P.id = "basketNameId_P"
        basketName_P.classList.add("basketBlock_labelStyle")
        basketName_P.innerHTML = "Имя"
        let basketName_INPUT = document.createElement('input')
        basketName_INPUT.classList.add("basketBlock_inputStyle")
        basketName_INPUT.classList.add("basketContBlock_name")
        basketName_INPUT.type = "text"
        basketName_INPUT.id = "basketNameId_INPUT"
        basketName_INPUT.name = "basketName_INPUT"
        basketName_INPUT.placeholder = "Введите имя..."
        basketName_div.appendChild(basketName_P)
        basketName_div.appendChild(basketName_INPUT)
        basketContBlock_rowLeft_first.appendChild(basketName_div)

        let basketTel_div = document.createElement("div")
        basketTel_div.id  ="basketTelId"
        basketTel_div.classList.add("basketContBlock_leftInputBlock")
        let basketTel_P = document.createElement('p')
        basketTel_P.id = "basketTelId_P"
        basketTel_P.classList.add("basketBlock_labelStyle")
        basketTel_P.innerHTML = "Телефон"
        let basketTel_INPUT = document.createElement('input')
        basketTel_INPUT.classList.add("basketBlock_inputStyle")
        basketTel_INPUT.classList.add("basketContBlock_name")
        basketTel_INPUT.type = "tel"
        basketTel_INPUT.id = "basketTelId_INPUT"
        basketTel_INPUT.name = "basketTel_INPUT"
        basketTel_INPUT.placeholder = "+7(...) ...-..-.."
        basketTel_div.appendChild(basketTel_P)
        basketTel_div.appendChild(basketTel_INPUT)
        basketContBlock_rowLeft_first.appendChild(basketTel_div)

        let basketEmail_div = document.createElement("div")
        basketEmail_div.id  ="basketEmailId"
        basketEmail_div.classList.add("basketContBlock_leftInputBlock")
        let basketEmail_P = document.createElement('p')
        basketEmail_P.id = "basketEmailId_P"
        basketEmail_P.classList.add("basketBlock_labelStyle")
        basketEmail_P.innerHTML = "E-mail"
        let basketEmail_INPUT = document.createElement('input')
        basketEmail_INPUT.classList.add("basketBlock_inputStyle")
        basketEmail_INPUT.classList.add("basketContBlock_name")
        basketEmail_INPUT.type = "email"
        basketEmail_INPUT.id = "basketEmailId_INPUT"
        basketEmail_INPUT.name = "basketEmail_INPUT"
        basketEmail_INPUT.placeholder = "Введите e-mail..."
        basketEmail_div.appendChild(basketEmail_P)
        basketEmail_div.appendChild(basketEmail_INPUT)
        basketContBlock_rowLeft_first.appendChild(basketEmail_div)

        let basketContBlock_rowRight_first = document.createElement('div')
        basketContBlock_rowRight_first.classList.add("basketContBlock_rowRight")
        let sectionCaptH3_second = document.createElement("h3")
        sectionCaptH3_second.classList.add("sectionCaptH3")
        sectionCaptH3_second.innerHTML = "ОПЛАТА:"
        basketContBlock_rowRight_first.appendChild(sectionCaptH3_second)
        // let basketBlock_CheckBlock_arr=[]

        let basketContBlock_rowLeft_mini = document.createElement('div')
        basketContBlock_rowLeft_mini.classList.add("basketContBlock_rowLeft_mini")

        let basketContBlock_rowRight = document.createElement('div')
        basketContBlock_rowRight.classList.add("basketContBlock_rowRight")

    if(e.target.id=="baskDeliveryId"){
            let arr = makeBasketPayChoiseBlock_Delivery()
            basketContBlock_rowRight_first.appendChild(arr[0])
            basketContBlock_rowRight_first.appendChild(arr[1])
            basketContBlock_rowRight_first.appendChild(arr[2])
            basketContBlock_rowRight_first.appendChild(arr[3])
            let addressBlock = makeAdressBlock_Delivery()
            basketContBlock_rowLeft_mini.appendChild(addressBlock[0])
            basketContBlock_rowLeft_mini.appendChild(addressBlock[1])
            basketContBlock_rowLeft_mini.appendChild(addressBlock[2])
            basketContBlock_rowLeft_mini.appendChild(addressBlock[3])

            let mapBlock = makeMapBlock()
            basketContBlock_rowRight.appendChild(mapBlock[0])
    }
    if(e.target.id=="baskGetRestId"){
        let arr = makeBasketPayChoiseBlock_GetRest()
        basketContBlock_rowRight_first.appendChild(arr[0])
        let addressBlock = makeAdressBlock_GetRest()
        basketContBlock_rowLeft_mini.appendChild(addressBlock[0])
            basketContBlock_rowLeft_mini.appendChild(addressBlock[1])
        
    }

        basketContBlock_row_arr[0].classList.add("alignItems_FlexStart")
        basketContBlock_row_arr[0].appendChild(basketContBlock_rowLeft_first)
        basketContBlock_row_arr[0].appendChild(basketContBlock_rowRight_first)
        baskFormDelivery.appendChild(basketContBlock_row_arr[0])

        let dateBlockArr = makeChoiseDateBlock()
        let little_Row_three = dateBlockArr[0]
        let little_Row_four = dateBlockArr[1]
        
        basketContBlock_rowLeft_mini.appendChild(little_Row_three)
        basketContBlock_rowLeft_mini.appendChild(little_Row_four)
        basketContBlock_row_arr[1].appendChild(basketContBlock_rowLeft_mini)
        basketContBlock_row_arr[1].appendChild(basketContBlock_rowRight)
        baskFormDelivery.appendChild(basketContBlock_row_arr[1])

        let basketContBlock_rowLeft_second = document.createElement('div')
        basketContBlock_rowLeft_second.classList.add("basketContBlock_rowLeft")
        
        let commentBlock = makeCommentBlock()
        basketContBlock_rowLeft_second.appendChild(commentBlock[0])
        basketContBlock_rowLeft_second.appendChild(commentBlock[1])

    
        let agreeBlock = makeAgreeConditionsBlock()
        basketContBlock_rowLeft_second.appendChild(agreeBlock[0])
        basketContBlock_row_arr[2].appendChild(basketContBlock_rowLeft_second)
        baskFormDelivery.appendChild(basketContBlock_row_arr[2])

        let submBlock = makeSubmitBlock()
        basketContBlock_row_arr[2].appendChild(submBlock[0])
        baskFormDelivery.appendChild(basketContBlock_row_arr[2])
        let lineHoriz = document.createElement('div')
        lineHoriz.classList.add("lineHoriz2")
        baskFormDelivery.appendChild(lineHoriz)
        
        let underText  = document.createElement('p')
        underText.classList.add("basketLittleText")
        underText.innerHTML = "* При заказе без звонка оператора Вам придет EMAIL-подтверждение."
        baskFormDelivery.appendChild(underText)
        return baskFormDelivery;
}
/*Конец функции*/

