/*Задание 2
Реализовать класс, описывающий новость (заголовок, текст,
массив тегов, дата публикации). В классе необходимо реализовать
один метод print, который выводит всю информацию в таком
виде, как на рисунке 1.
Обратите внимание на то, как выводится дата:
■ если с даты публикации прошло менее дня, то выводится
«сегодня»;
2
■ если с даты публикации прошло менее недели, то выво-
дится «N дней назад»;
■ в остальных случаях, полная дата в формате «дд.мм.гггг».*/

class NewsDescribe{
    #capture;#text;#arrTags;#date;
    set capture(capture){
        this.#capture=capture;
    }
    set text(text){
        this.#text=text;
    }
    set arrTags(arrTags){
        this.#arrTags=arrTags;
    }
    set date(date){
        let dayStr = Number(date.substr(0,2))
        let monthStr=0;
        if(date.substr(3,1)=="0"){
            monthStr=Number(date.substr(4,1))-1
        }
        else{
            monthStr = Number(date.substr(3,2))-1
        }
        let yearStr = Number(date.substr(6,4))
        this.#date =new Date(yearStr,monthStr,dayStr);
    }
    get date(){
        let toDay = new Date()
        let res =""
        let setDate = this.#date;
        let day = this.#date.getDate();
        let month = String(this.#date.getMonth()+1).length>1?String(this.#date.getMonth()+1):"0" + String(this.#date.getMonth()+1)
        let year = this.#date.getFullYear()
        let diffDay = toDay.getDate()-setDate.getDate();
       let diffYear = toDay.getFullYear()-setDate.getFullYear();
        let diffMonth = toDay.getMonth()-setDate.getMonth();
        if(diffDay==0 && diffMonth==0 && diffYear==0){
            res="Сегодня"
        }
        else if(diffDay>0 && diffMonth==0 && diffYear==0){
            res = `${diffDay} дней назад`
        }
        else if(diffMonth>0 || diffYear>0){
            res = `${day}.${month}.${year}`
        }
        return res;
    }

    get capture(){
        return this.#capture;
    }
    get text(){
        return this.#text;
    }
    get arrTagsStr(){
        let str = "#"
        let temp = this.#arrTags.join("#")
        let res = str+ temp;
        return res;
    }
    print(){
        let captureStyle=`style="color:green"`
        let dateStyle=`style="color:blue;font-size:16px"`
        let textStyle=`style="color:black;font-size:25px"`
        let tagStyle=`style="color:red;font-size:20px"`
        let divBlockStyle = `style="margin:auto; width:60%;border:1px solid black;padding:20px;text-align:center"`
        let captureStr = `<h1 ${captureStyle}>${this.capture}</h1>`
        let dateStr = `<p ${dateStyle}>${this.date}</p>`
        let textStr = `<p ${textStyle}>${this.text}</p>`
        let tagsStr = `<p ${tagStyle}>${this.arrTagsStr}</p>`
        
        let br = "<br>"
        let temp = captureStr+dateStr+textStr+br+tagsStr
        let res = `<div ${divBlockStyle}>${temp}</div>`
        document.write(res)
    }

}

let d=new NewsDescribe();
d.capture="Как стать программистом?"
d.text =`Как стать программистом и с чего начать, если нет практического опыта, а представление о программировании весьма размытое? Подробно рассказываем, как стать востребованным программистом с нуля и на что обращать внимание в ходе обучения.

Кто такой программист
Почему вы хотите начать программировать
Что нужно знать, чтобы стать программистом
Какое направление в программировании выбрать в 2023 году
Десктопная разработка
Data Science
Как стать разработчиком на Андроид
План развития iOS разработчика
Как стать разработчиком игр
Как стать Python разработчиком
План развития Java-программиста
Бэкенд разработка — с чего начать?
Как стать фронтенд разработчиком
Full Stack разработка
Какой язык программирования выбрать в 2023 году
Где выучиться на программиста
Классификация разработчиков
Как стать Junior-разработчиком
Где работают программисты
Как найти первую работу в IT
Что спрашивают у Джунов на собеседовании
Что делать, если вам не хватает знаний до вакансии Джуниор-программиста
Заключение`
d.arrTags=["Жить","Красивая жизнь"]
d.date="11.11.2023"
d.print()
