let bodyEl = document.querySelector("body")

function makeLineHoriz(){
    let lineHoriz = document.createElement('div')
    lineHoriz.classList.add("lineHoriz")
    let arr = []
    arr.push(lineHoriz)
    return(arr)
}
bodyEl.appendChild(makeLineHoriz()[0])

class CartInfo{
    #title;#img;#price;#count;#href;
    constructor(title="",img="",price=1,count=1,href=""){
        this.#title = title;
        this.#img=img;
        this.#price=price;
        this.#count=count;
        this.#href=href
    }
   
    set_title(title){
        this.#title = title;
    }
    set_img(img){
        this.#img = img;
    }
    set_price(price){
        this.#price = price;
    }
    set_count(count){
        this.#count = count;
    }
    set_href(href){
        this.#href = href;
    }
    get_title(){
        return this.#title;
    }
    get_img(){
        return this.#img;
    }
    get_price(){
        return this.#price;
    }
    get_count(){
        return this.#count;
    }
    get_href(){
        return this.#href;
    }
    get_total(){
        return this.#price*this.#count;
    }
}
let cartArr = [
    ["САКЕ МАКИ","IMG/SiteSushi_IMGs/img1.png",260,4],
    ["Суши","IMG/SiteSushi_IMGs/img2.png",500,3],
]

function make_basketCart(arr){
    let cartInfo = new CartInfo(arr[0],arr[1],arr[2],arr[3])
    let GoodsInfoItem = document.createElement('div')
    GoodsInfoItem.classList.add("GoodsInfoItem")
    let GoodsInfoItem_imgLink= document.createElement('a')
    GoodsInfoItem_imgLink.classList.add("GoodsInfoItem_imgLink")
    GoodsInfoItem_imgLink.href=cartInfo.get_href()
    let GoodsInfoItem_img= document.createElement('img')
    GoodsInfoItem_img.classList.add("GoodsInfoItem_img")
    GoodsInfoItem_img.src = cartInfo.get_img()
    GoodsInfoItem_img.alt=""
    GoodsInfoItem_imgLink.appendChild(GoodsInfoItem_img)
    GoodsInfoItem.appendChild(GoodsInfoItem_imgLink)
    let GoodsInfoItem_titleLink = document.createElement('a')
    GoodsInfoItem_titleLink.classList.add("GoodsInfoItem_titleLink")
    GoodsInfoItem_titleLink.href = cartInfo.get_href()
    GoodsInfoItem_titleLink.innerHTML = cartInfo.get_title()
    GoodsInfoItem.appendChild(GoodsInfoItem_titleLink)
    let workTextBasket_block = document.createElement('div')
    workTextBasket_block.classList.add("workTextBasket_block")
    let firstAmount_Item = document.createElement('p')
    firstAmount_Item.classList.add("firstAmount_Item")
    firstAmount_Item.classList.add("workTextBasket")
    firstAmount_Item.innerHTML = cartInfo.get_price()
    let workTextBasket_span = document.createElement('span')
    workTextBasket_span.classList.add("workTextBasket_span")
    workTextBasket_span.innerHTML="руб."
    workTextBasket_block.appendChild(firstAmount_Item)
    workTextBasket_block.appendChild(workTextBasket_span)
    GoodsInfoItem.appendChild(workTextBasket_block)
    let countBlock= document.createElement('div')
    countBlock.classList.add("countBlock")
    let countText = document.createElement('p')
    countText.classList.add("countText")
    countText.innerHTML = cartInfo.get_count()
    countBlock.appendChild(countText)

    let increaseCountButt = document.createElement('button')
    increaseCountButt.classList.add("increaseCount")
    let increaseCount_img = document.createElement('img')
    increaseCount_img.classList.add("countButtImg")
    increaseCount_img.src="IMG/Novinki_section/addTovar.png"
    increaseCount_img.alt =""
    increaseCountButt.appendChild(increaseCount_img)

    let decreaseCountButt = document.createElement('button')
    decreaseCountButt.classList.add("decreaseCount")
    let decreaseCount_img = document.createElement('img')
    decreaseCount_img.classList.add("countButtImg")
    decreaseCount_img.src="IMG/Novinki_section/deleteTovar.png"
    decreaseCount_img.alt =""
    decreaseCountButt.appendChild(decreaseCount_img)
    countBlock.appendChild(increaseCountButt)
    countBlock.appendChild(decreaseCountButt)
    GoodsInfoItem.appendChild(countBlock)

    let workTextBasket_block_total = document.createElement('div')
    workTextBasket_block_total.classList.add("workTextBasket_block")

    let totalAmount_Item = document.createElement('p')
    totalAmount_Item.classList.add("totalAmount_Item")
    totalAmount_Item.classList.add("workTextBasket")
    totalAmount_Item.innerHTML = cartInfo.get_total()
    workTextBasket_block_total.appendChild(totalAmount_Item)
    workTextBasket_block_total.appendChild(workTextBasket_span)
    GoodsInfoItem.appendChild(workTextBasket_block_total)

    let removeItemBasket = document.createElement('button')
    removeItemBasket.classList.add("removeItemBasket")
    let removeButtIMG = document.createElement('img')
    removeButtIMG.classList.add("removeButtIMG")
    removeButtIMG.alt=""
    removeButtIMG.src = "IMG/logWindow/closeWindowIco.png"
    removeItemBasket.appendChild(removeButtIMG)
    GoodsInfoItem.appendChild(removeItemBasket)
    let arr2 = []
    arr2.push(GoodsInfoItem)
    return arr2

}

bodyEl.appendChild(make_basketCart(cartArr[0])[0])
/*
<div class="lineHoriz"></div>
<div class="GoodsInfoItem">
<a href="" class="GoodsInfoItem_imgLink">
    <img src="IMG/SiteSushi_IMGs/img1.png" alt="" class="GoodsInfoItem_img">
</a>
<a href="" class="GoodsInfoItem_titleLink">
САКЕ МАКИ
</a>
<div class="workTextBasket_block">
    <p class="firstAmount_Item workTextBasket">260</p><span class="workTextBasket_span">руб.</span>
</div>
    
    <div class="countBlock">
        <p class="countText">1</p>
        <button class="increaseCount">
            <img src="IMG/Novinki_section/addTovar.png" alt="" class="countButtImg">
        </button>
        <button class="decreaseCount">
            <img src="IMG/Novinki_section/deleteTovar.png" alt="" class="countButtImg">
        </button>
    </div>
    <div class="workTextBasket_block">
         <p class="totalAmount_Item workTextBasket">260</p><span class="workTextBasket_span">руб.</span>
    </div>
    <button class="removeItemBasket">
        <img src="IMG/logWindow/closeWindowIco.png" alt="" class="removeButtIMG">
    </button>
</div>
<div class="GoodsInfoItem">
<a href="" class="GoodsInfoItem_imgLink">
    <img src="IMG/SiteSushi_IMGs/img1.png" alt="" class="GoodsInfoItem_img">
</a>
<a href="" class="GoodsInfoItem_titleLink">
САКЕ МАКИ
</a>
<div class="workTextBasket_block">
    <p class="firstAmount_Item workTextBasket">260</p><span class="workTextBasket_span">руб.</span>
</div>
    
    <div class="countBlock">
        <p class="countText">1</p>
        <button class="increaseCount">
            <img src="IMG/Novinki_section/addTovar.png" alt="" class="countButtImg">
        </button>
        <button class="decreaseCount">
            <img src="IMG/Novinki_section/deleteTovar.png" alt="" class="countButtImg">
        </button>
    </div>
    <div class="workTextBasket_block">
         <p class="totalAmount_Item workTextBasket">260</p><span class="workTextBasket_span">руб.</span>
    </div>
    <button class="removeItemBasket">
        <img src="IMG/logWindow/closeWindowIco.png" alt="" class="removeButtIMG">
    </button>
</div>
<div class="lineHoriz"></div>
*/