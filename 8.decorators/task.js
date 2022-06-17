//Task1
const cachingDecoratorNew = func => {
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let objectInCache = cache.findIndex((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache  !== -1 ) { // если элемент не найден
      console.log("Из кэша: " + cache[objectInCache ].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[objectInCache ].result;
    }
  
    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({hash, result});// добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
  }




// Task2 
const debounceDecorator = (f, ms) => {
  let timerId;

    function wrapper(...args) {
        if (timerId === undefined) {
            timerId = Date.now();
            f.apply(this, args);
        } else {
            let elapsedTime = Date.now() - timerId;
            if (elapsedTime >= ms) {
                timerId = Date.now();
                f.apply(this, args);
            }
        }
    }

    return wrapper;
};

const showCoords = () => console.log("Сигнал отправлен!");
const showCoordsDebounced = debounceDecorator(showCoords, 2000);


 
setTimeout(showCoordsDebounced); // Сигнал отправлен
setTimeout(showCoordsDebounced, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(showCoordsDebounced, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(showCoordsDebounced, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(showCoordsDebounced, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(showCoordsDebounced, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(showCoordsDebounced, 4500);

 // Task3
 function debounceDecorator2(func) {
  const debounceDecorator = (f, ms) => {
    let timerId;
     
    return function (...args) {
      count.history.push(args);
    clearTimeout(timerId);
      
    timerId = setTimeout(() => {
   
    f.apply(this, args);
      
    console.timeEnd("time");
    }, ms);
      
    };
   };
   const showCoords = () => console.log("Сигнал отправлен!");
   const showCoordsDebounced = debounceDecorator(showCoords);
   
   setTimeout(showCoordsDebounced.history); // Сигнал отправлен
   setTimeout(showCoordsDebounced.history, 5000); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
   setTimeout(showCoordsDebounced.history, 5200); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
   setTimeout(showCoordsDebounced.history, 5400); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
   setTimeout(showCoordsDebounced.history, 5600); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
   setTimeout(showCoordsDebounced.history, 5800); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
   setTimeout(showCoordsDebounced.history, 6000);
}
