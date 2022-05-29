// Task1

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  }
  function fix() {
    this.state = state * 1,5;
  }
  
  const setter = {
    set Setter(state){
      const sets = new Sets;
      this.seters = sets.NewSetters - state;
      this.x = state
      if(Sets < 0) {
      state = 0;
      } else if (Sets > 100) {
      state = 100;
      }
    },
  
    get Setter() {
    return this.x;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor (type) {
      this.type = magazine;
    }
  }
  
  class Book extends PrintEditionItem {
    constructor (author, type) {
      this.author = author;
      this.type = magazine;
    }
  }
  
  class NovelBook extends Book {
    constructor (FantasticBook, DetectiveBook, type) {
      this.FantasticBook = fantastic;
      this.DetectiveBook = detective;
      this.type = novel;
    }
  }
  
  // task2 

  class Liberty {
    constructor(name, books) {
    this.name = name;
    this.books = books;
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