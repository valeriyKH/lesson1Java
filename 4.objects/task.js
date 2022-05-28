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
}

Student.prototype.addMark = function (mark) {
  this.mark = mark;
}

if(this.marks === undefined){ 
    Student.marks += mark;// добавить первую оценку 
    } else {
     Student.marks += marks; // добавить вторую и последующие оценки в массив
    }

Student.prototype.addMarks = function (mark1, mark2, mark3) {
  this.marks = (...marks)
}

Student.prototype.getAverage = function(){
const average = marks.reduce((acc, item, idx, arr) => { if (idx === arr.length - 1) {
return (acc + item) / arr.length; } else {
    return acc + item;
  }
})
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
}

student1.setSubject("Algebra");