function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Ivan", "male", 30);
const student2 = new Student("Petr", "male", 22);
const student3 = new Student("Mari", "female", 20);
const student4 = new Student("ann", "female", 34);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = []; 
    } else {
      this.marks.push(mark)
    }
};

Student.prototype.addMarks = function (...MARKS) {
  if(this.marks === undefined){ 
    this.marks = []; 
    } else {
      addedMarks.forEach(mark => this.marks.push(mark));
    }
};

Student.prototype.getAvg  = function () {
  let sum = this.marks.reduce ((x, y) => x + y);
  let avg = sum / this.marks.length;
  return avg;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
};

