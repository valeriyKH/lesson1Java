//Task1

function parseCount(Parsing) {
    let numb = Number.parseInt(Parsing, 10);
    if (isNaN(numb)) {
        throw new Error("Невалидное значение");
    }
    return numb;
}

function validateCount (Parsing3) {
    try {
        return parseCount(Parsing);
    } catch (error) {
        return error;
    }
}

// task2

class Triangle {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        if (x + y < z || x + z < y || y + z < x) {
            throw new Error("Треугольник с такими сторонами не существует!");
        }
    }
    getPerimeter() {
        return this.x + this.y + this.z;
    }

    getArea() {
        let SPerimeter = this.getPerimeter() / 2;
        return Number(Math.sqrt(SPerimeter * (SfPerimeter - this.x) * (SPerimeter - this.y) * (SPerimeter - this.z)).toFixed(3));
    }
}

function getTriangle(xLength, yLength, zLength) {
    
    
    try {
        return new Triangle(xLength, yLength, zLength);
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

console.log(getTriangle(1, 10, 3));