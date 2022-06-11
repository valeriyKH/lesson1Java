// Task1

function parseCount(Parsing) {
    let number = Number.parseInt(Parsing);
  
    if (isNaN(number) === true) {
  
      const Pars = new Error("Невалидное значение");
      throw Pars;
        
    } else {
      return number;
    }
         
  }
  
  function validateCount(Parsing) {
  
    try {
      return parseCount(Parsing);
    } catch (error) {
      return error;
    }  
  }
  
  
  //Task2
  
  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует!");
          }
      }
      getPerimeter() {
          return this.a + this.b + this.c;
      }
  
      getArea() {
          let Perimeter = this.getPerimeter() / 2;
          return Number(Math.sqrt(Perimeter * (Perimeter - this.a) * (Perimeter - this.b) * (Perimeter - this.c)).toFixed(3));
      }
  }
  
  function getTriangle(aLength, bLength, cLength) {
      
      
      try {
          return new Triangle(lengthA, lengthB, lengthC);
      } catch (error) {
          return  new Object({
              getPerimeter() {
                  return "Ошибка! Такой треугольник не существует";
              },
  
              getArea() {
                  return "Ошибка! Такой треугольник не существует";
              }
          });
      }
  }
  
  console.log(getTriangle(1, 15, 4));