/*Задание 1
Реализовать класс PrintMachine, которой состоит из:
■ размера шрифта;
■ цвета шрифта;
■ семейства шрифта;
■ метода print(), который принимает текст и печатает его
соответствующим шрифтом с помощью document.write().
Создать объект такого класса и продемонстрировать работу
метода.*/

class PrintMachine{
    #fontSize;#color;#fontFamily;
    set fontSize(fontSize){
        this.#fontSize = fontSize;
    }
    set color(color){
        this.#color=color;
    }
    set fontFamily(fontFamily){
        this.#fontFamily=fontFamily;
    }
    get fontSize(){
        return this.#fontSize;
    }
    get color(){
        return this.#color;
    }
    get fontFamily(){
        return this.#fontFamily;
    }
    print(text){
        document.write(`<p style="font-family:${this.fontFamily};font-size:${this.fontSize};color:${this.color}">${text}</p>`)
    }
}

let el = new PrintMachine();
el.fontFamily="Times New Roman"
el.color="blue"
el.fontSize="35px"
el.print("Я люблю программирование")