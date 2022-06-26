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
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks.slice();
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / this.marks.length;
}

Student.prototype.exclude = function (reson) {
  delete this.subject;
  delete this.marks;
  this.excluded = reson;
};



