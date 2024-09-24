//let template = new RegExp("шаблон","флаги") создание через конструктор
//let template = /шаблон/флаги создание через литерал

//new  это через конструктор
//литерал что-то сокращенное

//Шаблон
//шаблон.test("строка для проверки")
function checking(template,string){
    console.log(template.test(string))
}


// console.log(template.test("dgfegegre")) //проверка подстроки в строке
// console.log(template.test("dgegere"))
let template = /f/ //ищет вхождение символа f. принимает любой символ
let template2 = /feel/ // ищет вхождение всей строки
//строка регистрозависимая
console.log("Первые шаги")


checking(template2,"Feelings")
checking(template2,"fe lings  ffff")
checking(template,"dswfcfw455")
checking(template,"dswcw455")

//ФЛАГИ
       /*i С этим флагом поиск не зависит от регистра: нет разницы между A и a (см. пример ниже).
         g С этим флагом поиск ищет все совпадения, без него – только первое.*/
console.log('\nфлаги')
    template2 = /feel/i; //feel с флагом i

checking(template2,"Feelings")
checking(template2,"fe lings  ffff")

// Диапазоны
        // [...] перечисление всех символов
         /* 
         [fsad] - символы f,s,a,d
        [1-4] символы (цифры) от «1» до «4»
        [0-9] символы (цифры) от «0» до «9»
        [a-z] символы (буквы) от «a» до «z» (маленькие)
        [A-Z] символы (буквы) от «A» до «Z» (большие)
        [г-ж] символы (буквы) от «г» до «ж»
        [а-яё] — любая буква кириллицы в нижнем регистре;
        [а-яёА-ЯЁ] — любая буква кириллицы в нижнем и верхнем регистре;
        [0-9A-F] шестнадцатеричные цифры 0123456789ABCDEF
        [^] отрицание
        */
        console.log('\nДиапазоны')
    template = /[0-9]/;
    checking(template, "rfgergre")
    checking(template, "rfg5e54rgre")

    template=/[^5]/ //не 5  // хоть один раз 5 то false
    template2=/[1-46-9]/ // ПОЧТИ ЭКВИВАЛЕНТНО не 5 // хоть одно из них есть, тогда true
    checking(template, "5555")
    checking(template, "5F") // false, а при [^5] true

    console.log('\n\n')
    template2 = /[0-9a-zA-Z]/;
    template = /[0-9a-zA-Z+-]/;
    checking(template2, "fgdfg55")
    checking(template2, "+*-_")

     // якоря
        /*
         ^ — началостроки, 
         $ — конец строки*/
         console.log('\n\nЯкоря')
    template=/^n/
    template2=/n$/

    checking(template,"efge77")
    checking(template,"n7896efge77")
    checking(template2,"efge77n")
    checking(template2,"7896efge77")

    console.log('\n\n')

    checking(/^[^0-9]/,"23rfege") //НЕ ЦИФРЫ В НАЧАЛЕ
    checking(/^[^A-Z][0-9]/,"а5А9fege")// не начинается с заглавной буквы и второй символ должен быть цифра
    template = /^оса$/
    checking(template,'осапка') // оса только один раз, если больше одного оса - то false
    checking(/^[о][с][а]$/,"осапка")// здесь должен быть только слова оса

    //Специальные символы
    /*
        \d Любая цифра
        \s Пробельный символ (пробел, табуляция, разрыв строки)
        \w Символ, допустимый в слове (англ. word–symbol):
            большая или маленькая буква, а также цифры или
            подчеркивание
        . (точка) Любой символ (кроме разрыва строки)
        \D Не цифра [^0-9]
        \S Не пробельный символ
        \W Символ, не являющийся \w
        \х He x-цифра (цифры и буквы ABCDEF)
        */

        console.log('\n\nСпециальные символы')

        checking(/^\D/,"23rfege") //строка начинается не с цифры
        checking(/^\D/,"r23fege")
        checking(/^[^A-Z]\d/i,"r4b5А9fege")//первый символ с маленькими буквами тоже непройдет из-за i, потому что [^A-Z] - не от A ДО Z, и не зависимости от регистра, то есть если будут маленькие(прописные) тоже будет false => тоже самое что и [^A-Za-z]
        checking(/^\S/," r4b5А9fege")//первый символ не пробел

        //символы повторения  символов
         /* //КВАНТИФИКАТОРЫ
       ? - 0 или 1 раз
       + - 1 и более раз
       * - 0 и более раз
       {2} - ровно 2 повтора (число произвольное)
       {2,} - 2 и более повторов подряд (число произвольное)
       {2,7} - от 2 до 7 повторов подряд (числа произвольные)
       {MIN, MAX}
       */
    //    checking(/https?/i, "http")
    //    checking(/https?/i, "https")
    //    checking(/^[^A-Z][0-9]/i, "gfh")
    //квантификатор относится только к концу строки
    //checking(/https?/i, "http")
    console.log('\n\nПОВТОРЕНИЕ СИМВОЛОВ')
    checking(/v{2,5}/ig,"23rfvvvvvvvegvegfewrve") // СИМВОЛ v встречается от 2х до 5 раз
    console.log('\n\n')
    checking(/https?/i, "http") //true
    checking(/https?/i, "https") //true
    checking(/http[0-9]+/i, "https9") //true
    checking(/^\+7\d{11}/, "+798175868691getg")
    checking(/^\+7\d{11}$/, "+798175868691getg")

    //+xxxxxxxxxxxx

    //XXX-XXX-XXX
    console.log("XXX-XXX-XXXX")
    checking(/^\d{3}\-\d{3}\-\d{4}$/, "333-444-5555")