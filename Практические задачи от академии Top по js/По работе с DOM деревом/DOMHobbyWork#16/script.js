let arrDict =str.split("\n")


let searchField = document.querySelector('.searchArea')
//let helpT1 = document.querySelectorAll('.helpText')[0]
let searchBlock = document.querySelector('.searchBlock')
let block = document.createElement('div')
block.classList.add('mBlock')
for(let i=0;i<5;i++){
    let elem = document.createElement('p')
    elem.classList.add('helpText')
    block.appendChild(elem)
}



searchField.addEventListener('input',function(e){
   
    // for(let i=0;i<searchBlock.children.length;i++){
    //     if(searchBlock.children[i].className=='helpText'){
    //         searchBlock.removeChild(searchBlock.children[i]) 
    //     }
    // }
    console.log(e.value)
    
    let len = e.target.value.length;
    let result = arrDict.filter((val) => val.slice(0,e.target.value.length)==e.target.value);
    for(let i=0;i<5;i++){
        if(len>0){
            block.children[i].innerHTML=result[Math.floor(Math.random()*result.length)]
        }
    }
    searchBlock.appendChild(block)
    
})

block.addEventListener('click',function(e){
    if(e.target.className=="helpText"){
        searchField.value = e.target.innerHTML
    }
})