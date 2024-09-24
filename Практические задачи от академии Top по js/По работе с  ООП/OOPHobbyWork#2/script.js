/*Задание 2
Реализовать класс, описывающий геометрическую фигуру со
свойствами и методами:
■ get-свойство для получения названия фигуры;
■ метод для вывода информации о фигуре (стороны и их
длина);
■ метод для вычисления площади фигуры;
■ метод для вычисления периметра фигуры.
Реализуйте классы-наследники: квадрат, прямоугольник и
треугольник. Переопределите методы вывода и вычислений в
классах-наследниках.
Создайте массив с различными фигурами и выведите инфор-
мацию о каждой фигуре, включая площадь и периметр.*/

class Figure{
    #nameFigure;#sidesFigure;
    constructor(){
        this.#sidesFigure=[];
    }
    set nameFigure(nameFigure){
        this.#nameFigure=nameFigure;
    }
    get nameFigure(){
        return this.#nameFigure;
    }
    set sidesFigure(sidesFigure){
        this.#sidesFigure = sidesFigure;
    }
    get sidesFigure(){
        return this.#sidesFigure;
    }
    get lengthOfSides(){
        let str = "{";
        for(let i=0;i<this.#sidesFigure.length-1;i++){
            str =str + this.#sidesFigure[i] + "; ";
        }
        str +=this.sidesFigure[this.#sidesFigure.length-1]
        str +="}"
        return str;
    }
    info(str=""){
        let info =`Фигура ${this.nameFigure}, c количеством сторон ${this.sidesFigure.length},и с длиною сторон ${this.lengthOfSides}`
        info = info + str;
        return info;
    }
    showInfo(){
        alert(this.info())
    }
    getSquare(){
        let str = `с площадью ${this.nameFigure} = `
        return str;
    }
    getPerimetr(){
        let str = `с периметром ${this.nameFigure} = `
        return str;
    }
}

class Square extends Figure{
    constructor(){
        super()
        super.nameFigure ="квадрат"
    }
    set sidesFigure(sidesFigure){
        super.sidesFigure = sidesFigure;
    }
    get sidesFigure(){
        return super.sidesFigure;
    }
    getSquare(){
        const arr = this.sidesFigure;
        let a =arr[0];
        let sqr = a*a;
        let res = super.getSquare() + sqr.toFixed(2);
        return res;
    }
    getPerimetr(){
        const arr = this.sidesFigure;
        let a =arr[0];
        let per = a * 4;
        let res = super.getPerimetr() + per.toFixed(2);
        return res;
    }
    showInfo(){
        let str = `; ${this.getSquare()}; ${this.getPerimetr()}`
        let c = super.info(str)
        alert(c)
    }
}

class Rectangle extends Figure{
    constructor(){
        super()
        super.nameFigure ="прямоугольник"
    }
    set sidesFigure(sidesFigure){
        super.sidesFigure = sidesFigure;
    }
    get sidesFigure(){
        return super.sidesFigure;
    }
 
    getSquare(){
        const arr = this.sidesFigure;
        let a =arr[0];
        let b = arr[1];
        let c=arr[2];
        let d =arr[3]
        let min = Math.min(a,b,c,d);
        let max = Math.max(a,b,c,d);
        let sqr = min * max;
        let res = super.getSquare() + sqr.toFixed();
        return res;
    }
    getPerimetr(){
        const arr = this.sidesFigure;
        let a =arr[0];
        let b = arr[1];
        let c=arr[2];
        let d =arr[3]
        let min = Math.min(a,b,c,d);
        let max = Math.max(a,b,c,d);
        let per = (min*2) + (max*2);
        let res = super.getPerimetr() + per.toFixed(2);
        return res;
    }
    showInfo(){
        let str = `; ${this.getSquare()}; ${this.getPerimetr()}`
        let c = super.info(str)
        alert(c)
    }
}

class Triangle extends Figure{
    constructor(){
        super()
        super.nameFigure ="триугольник"
    }
    set sidesFigure(sidesFigure){
        super.sidesFigure = sidesFigure;
    }
    get sidesFigure(){
        return super.sidesFigure;
    }
    
    getSquare(){
        const arr = this.sidesFigure;
        let a =arr[0];
        let b = arr[1];
        let c=arr[2];
        let p = (a+b+c)/2;
        let sqr = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        let res = super.getSquare() + sqr.toFixed(2);
        return res;
    }
    getPerimetr(){
        const arr = this.sidesFigure;
        let a =arr[0];
        let b = arr[1];
        let c=arr[2];
        let per = a+b+c;
        let res = super.getPerimetr() + per.toFixed(2);
        return res;
    }
    showInfo(){
        let str = `; ${this.getSquare()}; ${this.getPerimetr()}`
        let c = super.info(str)
        alert(c)
    }
}



let rect1= new Rectangle();
let rect2 = new Rectangle();
let sqr1 = new Square();
let sqr2= new Square();
let tr1 = new Triangle();
let tr2 = new Triangle();
rect1.sidesFigure=[2,4,2,4];
rect2.sidesFigure=[1,8,1,8];
sqr1.sidesFigure=[2,2,2,2];
sqr2.sidesFigure=[3,3,3,3];
tr1.sidesFigure=[2,2,2];
tr2.sidesFigure=[3,3,3];
let arr = [];
arr = [rect1,rect2,sqr1,sqr2,tr1,tr2]
for(let item of arr){
    item.showInfo()
}
