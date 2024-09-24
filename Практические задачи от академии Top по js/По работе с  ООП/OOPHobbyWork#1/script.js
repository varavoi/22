/*Задание 1
Реализовать класс Button, который содержит ширину, высоту,
текст кнопки и метод showBtn(), который выводит кнопку на экран
с помощью тега button и функции document.write().
Реализовать класс BootstrapButton, унаследовав его от класса
Button. Добавить поле color и переопределить метод showBtn()
так, чтобы кнопка выводилась со стилями и указанным цветом.*/

class Button{
    style="";
    constructor(text,width,height){
        this.width=width;
        this.height=height;
        this.text=text;
        this.style = `height:${this.height}px;width:${this.width}px`;
    }
    setInfo(style){
        this.style =this.style + ";" + style;
    }
    
    showBtn(){
        document.write(`<button style="${this.style}">${this.text}</button>`)
    }
}

class BootstrapButton extends Button{
    constructor(text,width,height,color){
        super(text,width,height);
        this.color=color;
    }
    showBtn(){
        let style = `background-color:${this.color}`;
        super.setInfo(style)
        super.showBtn()
    }
}
let btn1 = new Button("Нажми",400,200)
let btn2= new BootstrapButton("Отправить",400,200,"yellow")
btn1.showBtn()
btn2.showBtn()
