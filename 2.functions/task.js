// Задание 1
function getArrayParams(arr){
  this.arr = arr
    min = arr[0];
    max = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(min > arr[i]){
        min = arr[i];
      } else if(max < arr[i]){
        max = arr[i];
      }
    }
  
  function sum(... arr){
    let total = 0;
    for(let i= 0; i < arr.length; i++){
      total += arr[i];
    }
    return total;
  }

  let avg = (sum(...arr) / arr.length).toFixed(2);
    return {min: min, max: max, avg: + avg};
}    

console.log(getArrayParams([-99, 99, 10]));
console.log(getArrayParams([1, 2, 3, -100, 10]));


// Задание 2
function worker(arr){
  let total = 0;
  for(i= 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}


function makeWork(arrOfArr, worker) {
  let max = worker(arrOfArr[0]);
    for(let i=1; i< arrOfArr.length; i++) {
      let result = worker(arrOfArr[i]);
      if (max < result) {
      max = result;
      }
        return max;
      }
}

// Задание 3
function worker2(arr){
  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  

  return Math.abs(maximum - minimum);
      
}

