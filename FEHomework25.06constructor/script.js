//1task////
// class Delivery{
//     constructor(name,phone){
//         this.name = name;
//         this.phone = phone;
//         this.validPhone = this.phone.startsWith('+');

//     }
// }
// let name ="Pizza";
// let phone = "81234567890";

// let deliveryName = new Delivery(name, phone);
// console.log(deliveryName.validPhone);


// User
// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. 
// Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, 
// значение которого класс принимает в качестве аргумента конструктора.



// class Permissions {
//     constructor() {
//         this.create = false
//         this.read = true
//         this.update = false
//         this.remove = false
//     }
// }
// class Users extends Permissions{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }
// let user = new Users("Ronny");
// console.log(user.name);
// console.log(user.remove);

// Все печатные издания имеют название, год издания, состоят из определенного количества страниц, а ещё могут портиться. 

// Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type. 

// Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество 
// страниц (pagesCount) в качестве аргумента. Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null. . 
// Испорченное издание можно подклеить и этим улучшить его состояние. 

// Создайте метод fix(), увеличивающий state в полтора раза. Метод не должен принимать аргументов. 
// Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное.


//  Создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного
//   издания (число). Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0. Если новое состояние больше
//    100, должно быть записано значение 100.
//     В остальных случаях в свойство state записывается переданное в «сеттер» значение. 


// Создайте «геттер», который читает значение свойства state.
//  Создайте класс Magazine, 
// который будет наследоваться от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель.
//  От базового печатного издания журнал отличается только типом. Значение свойства type равно "magazine".


// Создайте класс Book, наследующийся от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель,
//  а также имя автора книги author. Значение свойства type равно "book".

// Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов, наследующиеся от класса Book.
//  Значения свойства type равны "novel", "fantastic" и "detective" соответственно.
//task2 

 class PrintEditionItem {
    constructor(name,releaseDate,pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this. pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
fix(){
    this.state *1.5;
        
}
set state(newState){
    if(newState < 0){
        this._state = 0;
    }else if (newState > 100){
        this._state = 100;
    }else{
        this._state = newState
    }
}
get state(){
return this._state;
}
 }
class Magazine extends PrintEditionItem{
    constructor(name,releaseDate,pagesCount){
        super(name,releaseDate,pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem{
    constructor(name,releaseDate,pagesCount,author){
        super(name,releaseDate,pagesCount);
        this.type="book";
        this.author=author;
    }
}
class NovelBook extends Book{
    constructor(name,releaseDate,pagesCount,author){
super(name,releaseDate,pagesCount,author);
this.type="novel"

    }
}
class  FantasticBook extends Book{
    constructor(name,releaseDate,pagesCount,author){
        super(name,releaseDate,pagesCount,author);
        this.type="fantastiec"
    }
}
class DetectiveBook extends Book{
    constructor(name,releaseDate,pagesCount,author){
        super(name,releaseDate,pagesCount,author);
        this.type="detective"
    }
}




  let printEdition = new PrintEditionItem("Print Edition", "2022", 200);
  console.log(printEdition.state); 
  printEdition.fix();
  console.log(printEdition.state); 
  
  let magazine = new Magazine("Magazine Name", "2023", 50);
  console.log(magazine.type); 
  
  let book = new Book("Book Name", "2021", 300, "Author Name");
  console.log(book.type); 
  console.log(book.author); 
  
  let novelBook = new NovelBook("Novel Book Name", "2020", 400, "Novel Author");
  console.log(novelBook.type); 
  
  let fantasticBook = new FantasticBook("Fantastic Book Name", "2019", 500, "Fantastic Author");
  console.log(fantasticBook.type); 
  
  let detectiveBook = new DetectiveBook("Detective Book Name", "2018", 600, "Detective Author");
  console.log(detectiveBook.type); 
  
