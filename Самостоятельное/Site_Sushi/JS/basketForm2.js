let baskFormDelivery = document.createElement('form');
let bodyEl = document.querySelector("body")
baskFormDelivery.method = 'get'
baskFormDelivery.action ='#'
baskFormDelivery.classList.add("basketContBlock");
let basketContBlock_row_arr  =[]
for(let i=0;i<4;i++){
    let basketContBlock_row = document.createElement('div')
    basketContBlock_row.classList.add("basketContBlock_row")
    basketContBlock_row_arr.push(basketContBlock_row)
}
let baskDelivery_Input = document.createElement('input')
baskDelivery_Input.type = "checkbox"
baskDelivery_Input.classList.add("contactCheckbox")
baskDelivery_Input.id = "baskDeliveryId"
baskDelivery_Input.name = "baskDelivery"
baskDelivery_Input.value = "baskDeliveryVal"
let baskDelivery_Span =document.createElement('span')
baskDelivery_Span.classList.add("customCheckbox")
let baskDelivery_label = document.createElement('label')
baskDelivery_label.for = "baskDeliveryId"
baskDelivery_label.classList.add("basketContBlock_labelStyle")
baskDelivery_label.classList.add("align_bask")
baskDelivery_label.appendChild(baskDelivery_Input)
baskDelivery_label.appendChild(baskDelivery_Span)
baskDelivery_label_textNode = document.createTextNode("ДОСТАВКА")
baskDelivery_label.appendChild(baskDelivery_label_textNode) 

let baskGetRest_Input = document.createElement('input')
baskGetRest_Input.type = "checkbox"
baskGetRest_Input.classList.add("contactCheckbox")
baskGetRest_Input.id = "baskGetRestId"
baskGetRest_Input.name = "baskGetRest"
baskGetRest_Input.value = "baskGetRestVal"
let baskGetRest_Span =document.createElement('span')
baskGetRest_Span.classList.add("customCheckbox")
let baskGetRest_label = document.createElement('label')
baskGetRest_label.for = "baskGetRestId"
baskGetRest_label.classList.add("basketContBlock_labelStyle")
baskGetRest_label.classList.add("align_bask")
baskGetRest_label.appendChild(baskGetRest_Input)
baskGetRest_label.appendChild(baskGetRest_Span)
baskGetRest_label_textNode = document.createTextNode("ЗАБРАТЬ ИЗ РЕСТОРАНА")
baskGetRest_label.appendChild(baskGetRest_label_textNode) 


basketContBlock_row_arr[0].appendChild(baskDelivery_label)
basketContBlock_row_arr[0].appendChild(baskGetRest_label)
baskFormDelivery.appendChild(basketContBlock_row_arr[0])
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
let basketBlock_CheckBlock_arr=[]
for(let i=0;i<4;i++){
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

basketBlock_CheckBlock_arr[1].querySelector(".basketContBlock_labelStyle").querySelector(".contactCheckbox").value = "payByCardCurier"
let baskBl_txt1 = document.createTextNode("ОПЛАТА КАРТОЙ КУРЬЕРУ")
basketBlock_CheckBlock_arr[1].querySelector(".basketContBlock_labelStyle").appendChild(baskBl_txt1)

basketBlock_CheckBlock_arr[2].querySelector(".basketContBlock_labelStyle").querySelector(".contactCheckbox").value = "payByCount"
let baskBl_txt2 = document.createTextNode("ОПЛАТА ПО СЧЁТУ ДЛЯ ОРГАНИЗАЦИЙ И ИП")
basketBlock_CheckBlock_arr[2].querySelector(".basketContBlock_labelStyle").appendChild(baskBl_txt2)

basketBlock_CheckBlock_arr[3].querySelector(".basketContBlock_labelStyle").querySelector(".contactCheckbox").value = "payByCashCurier"
let baskBl_txt3 = document.createTextNode("НАЛИЧНЫМИ КУРЬЕРУ")
basketBlock_CheckBlock_arr[3].querySelector(".basketContBlock_labelStyle").appendChild(baskBl_txt3)
basketContBlock_rowRight_first.appendChild(basketBlock_CheckBlock_arr[0])
basketContBlock_rowRight_first.appendChild(basketBlock_CheckBlock_arr[1])
basketContBlock_rowRight_first.appendChild(basketBlock_CheckBlock_arr[2])
basketContBlock_rowRight_first.appendChild(basketBlock_CheckBlock_arr[3])
basketContBlock_row_arr[1].appendChild(basketContBlock_rowLeft_first)
basketContBlock_row_arr[1].appendChild(basketContBlock_rowRight_first)
baskFormDelivery.appendChild(basketContBlock_row_arr[1])

bodyEl.appendChild(baskFormDelivery)

/*<form method="get" action="#" class="basketContBlock">
                    

                    <div class="basketContBlock_row">
                        <div class="basketContBlock_rowLeft_mini">
                            <h3 class="sectionCaptH3">АДРЕС ДОСТАВКИ:</h3>
                            <div class="basketContBlock_leftInputBlock">
                                <p class="basketBlock_labelStyle">Улица</p>
                                <input type="text" class="basketBlock_inputStyle basketContBlock_name" placeholder="Укажите улицу...">
                            </div>
                            <div class="little_Row">
                                <div class="basketContBlock_leftInputBlock_little">
                                    <p class="basketBlock_labelStyle_little">Квартира</p>
                                    <input type="text" class="basketBlock_inputStyle_little basketContBlock_name" >
                                </div>
                                <div class="basketContBlock_leftInputBlock_little">
                                    <p class="basketBlock_labelStyle_little">Этаж</p>
                                    <input type="text" class="basketBlock_inputStyle_little basketContBlock_name" >
                                </div>
                                <div class="basketContBlock_leftInputBlock_little">
                                    <p class="basketBlock_labelStyle_little">Подъезд</p>
                                    <input type="text" class="basketBlock_inputStyle_little basketContBlock_name" >
                                </div>
                            </div>

                            <div class="little_Row">
                                <div class="basketContBlock_leftInputBlock_little">
                                    <p class="basketBlock_labelStyle_little">Домофон</p>
                                    <select class="basketSelectSt">
                                        <option class="basketOptionSt">Есть</option>
                                        <option class="basketOptionSt">Отсутствует</option>
                                    </select>
                                </div>
                                <div class="basketBlock_CheckBlock">
                                    <label for="notRingDoorID" class="basketContBlock_labelStyle align_bask">
                                    <input type="checkbox" class="contactCheckbox" id="notRingDoorID" name="paymentMethod" value="notRingDoor"/>
                                    <span class="customCheckbox"></span>
                                    Не звонить в домофон</label>
                                </div>
                            </div>
                            <div class="little_Row">
                                <div class="basketBlock_CheckBlock">
                                    <label for="closeDateID" class="basketContBlock_labelStyle align_bask">
                                    <input type="checkbox" class="contactCheckbox" id="closeDateID" name="closeDate" value="notRingDoor"/>
                                    <span class="customCheckbox"></span>
                                    НА БЛИЖАЙШЕЕ ВРЕМЯ</label>
                                </div>
                            </div>
                            <div class="little_Row">
                                <div class="basketBlock_CheckBlock">
                                    <label for="dateBaskID" class="basketContBlock_labelStyle align_bask">
                                    <input type="checkbox" class="contactCheckbox" id="dateBaskID" name="dateBask" value="notRingDoor"/>
                                    <span class="customCheckbox"></span>
                                    ДАТА</label>
                                </div>
                                <input type="date" class="basketBlock_inputStyle basketDateSt" placeholder="Выберите дату...">
                            </div>
                        </div>
                        <div class="basketContBlock_rowRight">
                            <h3 class="sectionCaptH3">УКАЖИТЕ АДРЕС НА КАРТЕ:</h3>
                            <div style="position:relative;overflow:hidden;" class="basketMap">
                                <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a><a href="https://yandex.ru/maps/profile?ll=30.314997%2C59.938784&utm_medium=mapframe&utm_source=maps&z=11" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a>
                                <iframe src="https://yandex.ru/map-widget/v1/profile?ll=30.314997%2C59.938784&z=11" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
                        </div>
                    </div>
                    <div class="basketContBlock_row">
                        <div class="basketContBlock_rowLeft">
                            <h3 class="sectionCaptH3">КОММЕНТАРИЙ К ЗАКАЗУ:</h3>
                            <textarea name="basketComments" id="basketCommentsId" class="basketTxtAreaSt"></textarea>
                            <div class="basketBlock_CheckBlock">
                                <label for="agreeCheckID" class="basketContBlock_labelStyle align_bask justifyContSB">
                                <input type="checkbox" class="contactCheckbox" id="agreeCheckID" name="agreeCheck" value="notRingDoor"/>
                                <span class="customCheckbox"></span>
                                <p class="agreeCheckText">Я ознакомлен с содержанием пользовательского соглашения и принимаю условия обработки персональных данных.</p>
                                </label>
                            </div>
                        </div>
                        <div class="basketContBlock_rowRight2 ">
                            <input type="submit" value="ОФОРМИТЬ" class="basketCheckout">
                        </div>
                        
                    </div>
                    <div class="lineHoriz2"></div>
                    <p class="basketLittleText">
                        * При заказе без звонка оператора Вам придет EMAIL-подтверждение.
                    </p>
                </form>*/