let lightSwitch = document.getElementById("linkThemes")
let image = document.getElementById("light")


const imageUrls = [
    'images/lightPhoto.png',
    'images/darkPhoto.png'
    ];

    let currentIndex = 0; 
function changeTheme(e){
    e.preventDefault();
    currentIndex = (currentIndex + 1) % imageUrls.length;
    image.src = imageUrls[currentIndex];
    if(currentIndex==0){
        document.getElementsByClassName("headerBlock")[0].style.background="#bff894"
        for(let i=0; i<document.getElementsByClassName("menuItem").length;i++){
            document.getElementsByClassName("menuItem")[i].style.color="black"
            document.getElementsByClassName("logo")[0].style.filter = "invert(0%)"
        } 
    }
    if(currentIndex==1){
        document.getElementsByClassName("headerBlock")[0].style.background="#053c6b"
        for(let i=0; i<document.getElementsByClassName("menuItem").length;i++){
            document.getElementsByClassName("menuItem")[i].style.color="white"
            document.getElementsByClassName("logo")[0].style.filter = "invert(75%)";
        }
    }
    
}

lightSwitch.addEventListener("click",changeTheme)

