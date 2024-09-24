/*var hiddenInformGoodsCard = $("goodsCardDeteilInformBottom");
var visibleInformGoodsCard = $("goodsCardDeteilInformBottom2");
$("goodsCard_ProductName_Trigger").hover(function(){
    hiddenInformGoodsCard.toggle(visibleInformGoodsCard);
});*/
var hiddenInformGoodsCard = document.querySelector('goodsCardDeteilInformBottom');
var visibleInformGoodsCard = document.querySelector('goodsCardDeteilInformBottom2');
var trigger = document.querySelector('goodsCard_ProductName_Trigger');
document.querySelector("goodsCard_ProductName_Trigger").addEventListener(
    'click',
    (event) => {
        document.querySelector("goodsCardDeteilInformBottom").classList.toggle("goodsCardDeteilInformBottom2")
    })