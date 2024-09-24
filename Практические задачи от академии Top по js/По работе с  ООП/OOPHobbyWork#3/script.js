/*Задание 3
Реализуйте класс ExtentedArray, унаследовав его от стандарт-
ного класса Array и добавив следующие методы:
■ метод getString(separator) – для получения строки со
всеми элементами массива, перечисленными через ука-
занный разделитель: запятая, тире, пробел и т. д.;
■ метод getHtml(tagName) – для получения строки с html
кодом, где каждый элемент массива будет обернут в ука-
занный тег (учтите, если указывается тег li, то все эле-
менты дополнительно необходимо обернуть в ul).
Создайте объект класса ExtentedArray, заполните его данны-
ми и выведите на экран результаты работы методов getString()
и getHtml().*/

class ExtentedArray extends Array{
    getString(sep){
        let str=""
        for(let i=0;i<this.length;i++){
         str += str+this[i]+sep
        }
        return str;
    }
    getHTML(tagName){
        let str=""; let res=""
        for(let i=0;i<this.length;i++){
         str += `<${tagName}>${this[i]}</${tagName}>`
        }
        if(tagName==="li"){
            res = "<ul>" + str +"</ul>"
        }
        else{
            res=str;
        }
        return res;
    }
}
let arr = new ExtentedArray(1, 2, 3, 4, 5)
alert(arr.getString("-"))
alert(arr.getHTML("li"))