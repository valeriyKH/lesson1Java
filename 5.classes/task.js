// Task1

class PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state =100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  fix() {
    this.state = this.state * 1.5;
  }
  set state(newState){
    if(newState< 0){
      this._state = 0;
    } else if(newState > 100){
      this._state = 100;
    } else {
      this._state = newState
    }
  }

  get state() {
    return this._state;
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state =100, type) {
    super(name, releaseDate, pagesCount, state =100, type);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount, state =100, type) {
    super(name, releaseDate, pagesCount, state =100, type);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state =100, type){
    super(author, name, releaseDate, pagesCount, state =100, type);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state =100, type){
  super(author, name, releaseDate, pagesCount, state =100, type);
  this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state =100, type){
 super(author, name, releaseDate, pagesCount, state =100, type)
  this.type = "detective";
  }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15
  
  // task2 

  class Library {
    constructor(name, books) {
    this.name = name;
    this.books = [];
  }
}  
  class addBook {
    constructor(book){ 
      if (this.state > 30) {
      this.books += books;
       }
    }   
  }
    class findBookBy {
    constructor(type, value){ 
      this.type = type[0][0];
      this.value = value[1][1];
       }
    }  

      class giveBookByName {
    constructor(bookName){ 
      if(this.bookName === undefined){
        this.bookName = null;
      } else {
        delete bookName.books
        return bookName;
      }
       }
    }


    const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

    // Task3 


Student.prototype.addMark = function (mark) {
    if(this.marks == undefined) {
      this.marks = [];
    }
    this.marks.push(mark);
  }
  
  
  Student.prototype.addMarks = function (... addedMarks) {
    if(this.marks == undefined) {
      this.marks = [];
    }
    addedMarks.forEach(mark => this.marks.push(mark));
  } 
  
  Student.prototype.getAvg  = function () {
    let sum = this.marks.reduce ((x, y) => x + y);
    let avg = sum / this.marks.length;
    return avg;
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.exclude = reason;
  }
  
  
  
  
  const student = new Student("Олег Никифоров");
  student.addMark(5, "algebra");
  student.addMark(5, "algebra");
  student.addMark(5, "geometry");
  student.addMark(4, "geometry");
  student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
  student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
  student.getAverageBySubject("biology"); // Несуществующий предмет
  student.getAverage(); // Средний балл по всем предметам 4.75
  student.exclude("Исключен за попытку подделать оценки");