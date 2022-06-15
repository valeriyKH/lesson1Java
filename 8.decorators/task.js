//Task1
  const cachingDecoratorNew = func => {
    const cache = {};
    return function (...args) {
    const hash = args.join(',');
    let result = cache[hash];
    if (result === undefined) {
    cache[hash] = result = func.call(this, ...args);
    console.log('Вычисляем: ' + result);
    } else {
    console.log('Из кэша: ' + result);
    }
    return result;
    };
   };
   const calculation = (a, b, c, d, i) => a + b + c + d + i ;
   const calculationCached = cachingDecoratorNew(calculation);
   calculationCached(2, 2, 2, 2, 2);
   calculationCached(3, 2, 3, 4, 5);
   calculationCached(2, 2, 2, 2, 2); 
   calculationCached(3, 0, 1, 4, 8); 
   calculationCached(2, 2, 2, 2, 2); 
   calculationCached(3, 2, 3, 4, 5);
   calculationCached(3, 0, 1, 4, 8); 



// Task2 
const debounceDecorator = (f, ms) => {
  let timerId;
  return function (...args) {
  clearTimeout(timerId);
  timerId = setTimeout(() => {
  f.apply(this, args);
  console.timeEnd("time"); // (2)
  }, ms);
  };
 };
 const showCoords = () => console.log("Сигнал отправлен!");
 const showCoordsDebounced = debounceDecorator(showCoords);
 
 setTimeout(showCoordsDebounced); // Сигнал отправлен
 setTimeout(showCoordsDebounced, 5000); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
 setTimeout(showCoordsDebounced, 5200); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
 setTimeout(showCoordsDebounced, 5400); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
 setTimeout(showCoordsDebounced, 5600); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
 setTimeout(showCoordsDebounced, 5800); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
 setTimeout(showCoordsDebounced, 6000);

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
