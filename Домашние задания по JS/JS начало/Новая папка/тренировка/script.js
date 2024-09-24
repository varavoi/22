/*9. Викторина. В этой задаче по программированию следует создать простую викторину для двух игроков. Программа будет работать следующим образом.
• Начиная с игрока 1, каждый игрок по очереди отвечает на 5 вопросов викторины. (Должно быть в общей сложности 10 вопросов.) При выводе вопроса на экран также выводятся 4 возможных ответа. Только один из этих ответов является правильным, и если игрок выбирает правильный ответ, то он зарабатывает очко.
• После того как были выбраны ответы на все вопросы, программа показывает количество очков, заработанное каждым игроком, и объявляет игрока с наибольшим количеством очков победителем.
Для создания этой программы напишите класс Question (Вопрос), который будет содержать данные о вопросе викторины. Класс Question должен иметь атрибуты для приведенных ниже данных:
• вопрос викторины;
• возможный ответ 1;
• возможный ответ 2;
• возможный ответ 3;
• возможный ответ 4;
• номер правильного ответа ( 1, 2, 3 или 4 ).
Класс Question также должен иметь соответствующий метод получатели и методы-модифи-каторы.
ini t () , методы
Программа должна содержать список или словарь с 10 объектами Question, один для каждого вопроса викторины. Составьте для объектов собственные вопросы викторины по теме или темам по вашему выбору.*/

class Question{
    #question="";#probablyAnswers=[];#TrueAnswer=""; strQuestion="";
    constructor(question){
      this.#question=question;
    }
    set probablyAnswers(answers){
      for(let i=0;i<answers.length;i++){
        this.#probablyAnswers.push(answers[i])
        }
      }
    get probablyAnswers(){
      return this.#probablyAnswers;
    }
    set trueAnswer(trueAnswer){
      this.#TrueAnswer=trueAnswer;
    }
    get #trueAnswer(){
      return this.#TrueAnswer;
    }
    checkAnswer(answer){
      if(this.#TrueAnswer===answer){
        return true;
      }
      else{
        return false;
      }
    }
    showQuestion(){
      this.strQuestion = `${this.#question}\nВарианты ответа\n0)${this.probablyAnswers[0]}  1)${this.probablyAnswers[1]}\n2)${this.probablyAnswers[2]}  3)${this.probablyAnswers[3]}`
      return this.strQuestion;
    }
  }
  
  class Gamer{
    #name="";#ball=0;#answer=0
    constructor(name){
      this.#name=name;
    }
    get name(){
      return this.#name;
    }
    set answer(answer){
      this.#answer=answer;
    }
    get answer(){
      return this.#answer;
    }
    increaseBall(){
      this.#ball++;
    }
    get ball(){
      return this.#ball;
    }  
  }
  
  class Game{
     #arrAnsw=[]; res = ""; #arrAnsw1=[];#arrAnsw2=[];
    constructor(user1,user2){
      this.user1=user1;
      this.user2=user2;
    }
    set answerList(arrAnsw){
      this.#arrAnsw = arrAnsw
      for(let i=0;i<this.#arrAnsw.length/2;i++){
        this.#arrAnsw1.push(this.arrAnsw[i])
      }
      for(let j=this.#arrAnsw.length/2;j<this.#arrAnsw.length;j++){
        this.#arrAnsw2.push(this.arrAnsw[j])
      }
    }
    get answerList(){
      return this.#arrAnsw;
    }
    start(){
      for(let i=0;i<this.#arrAnsw1.length;i++){
        let answ1 = this.user1.answer;
        let ansListFirst = this.#arrAnsw1[i];
        answ1 = Number(prompt(`Игрок ${this.user1.name}:\n${i+1} вопрос\n${ansListFirst.showQuestion()}`))
        if(ansListFirst.checkAnswer(ansListFirst.probablyAnswers[answ1])){
          this.user1.increaseBall()
          }
      }
      for(let j=0;j<this.#arrAnsw1.length;j++){
        let answ2 = this.user2.answer;
        let ansListSecond = this.#arrAnsw1[j];
        answ2 = Number(prompt(`Игрок ${this.user2.name}:\n${j+1} вопрос\n${ansListSecond.showQuestion()}`))
        if(ansListSecond.checkAnswer(ansListSecond.probablyAnswers[answ2])){
          this.user2.increaseBall()
          }
      }
    }
    getResult(){
      if(this.user1.ball>this.user2.ball){
        this.res = `Очки игроков\n${this.user1.name} = ${this.user1.ball} баллов\n${this.user2.name} = ${this.user2.ball} баллов\nПобедитель ${this.user1.name} с ${this.user1.ball} баллами`;
      }
      else if(this.user1.ball<this.user2.ball){
              this.res = `Очки игроков\n${this.user1.name} = ${this.user1.ball} баллов\n${this.user2.name} = ${this.user2.ball} баллов\nПобедитель ${this.user2.name} с ${this.user2.ball} баллами`;
      }
      return this.res
    }
  }
  
  let q1 = new Question("Самая длинная река?")
  q1.probablyAnswers = ["Нил","Амазонка","Днестр","Волга"]
  q1.trueAnswer = "Нил"
  let q2 = new Question("Самая большая планета в Солнечной системе?")
  q2.probablyAnswers = ["Земля","Марс","Юпитер","Венера"]
  q2.trueAnswer = "Юпитер"
  let q3 = new Question("Самое большое млекопитающее?")
  q3.probablyAnswers = ["Слон","Тигр","Кит","Бегемот"]
  q3.trueAnswer = "Кит"
  let q4 = new Question("Столица России?")
  q4.probablyAnswers = ["Санкт-Петербург","Москва","Омск","Екатеринбург"]
  q4.trueAnswer = "Москва"
  let q5 = new Question("Когда началась 2-я мировая война?")
  q5.probablyAnswers = ["1939г. 1-ое сентября","1845г. 25-го августа","1963г. 13-го июля","1941г. 22-го июня"]
  q5.trueAnswer = "1939г. 1-ое сентября"
  let q6 = new Question("Самый большой континент?")
  q6.probablyAnswers = ["Африка","Северная Америка","Евразия","Антарктида"]
  q6.trueAnswer = "Евразия"
  let q7 = new Question("Самый глубокий океан?")
  q7.probablyAnswers = ["Атлантический","Тихий","Северно-Ледовитый","Индийский"]
  q7.trueAnswer = "Атлантический"
  let q8 = new Question("Самая большая страна по площади территории?")
  q8.probablyAnswers = ["Россия","Китай","Индия","США"]
  q8.trueAnswer = "Россия"
  let q9 = new Question("В каком году утонул Титаник?")
  q9.probablyAnswers = ["1912г.","1907г.","1895г.","1933г."]
  q9.trueAnswer = "1912г."
  let q10 = new Question("Первый президент США?")
  q10.probablyAnswers = ["Томас Джеферсон","Уильям Гаррисон","Авраам Линкольн","Джордж Вашингтон"]
  q10.trueAnswer = "1912г."
  
  let jack = new Gamer("Jack")
  let alice=new Gamer("Alice")
  let arrAnswers = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]
  console.log(jack.name)
  let game = new Game(jack,alice)
  game.answerList = arrAnswers;
  game.start();
  alert(game.getResult());
  /*let arrAnswers = [q1,q2,q3]
  let jack=new Gamer("Jack")
  jack.answer = Number(prompt(`${arrAnswers[0].showQuestion()}`))
  let ans = arrAnswers[0].probablyAnswers[jack.answer]
  if(arrAnswers[0].checkAnswer(ans)){
    jack.increaseBall()
  }
  console.log(jack.ball)*/
  
  