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
function worker(arrOfArr){
  let total = 0;
  for(i= 0; i < arrOfArr.length; i++){
    total += arrOfArr[i];
  }
  return total;
}
let arrOfArr = [[1,2,3,4], [10,20,-10,-20]];

function makeWork(arrOfArr, worker){
let sum = arrOfArr[0];
for(let i=0; i< arrOfArr.length; i++){
  sum = worker(arrOfArr[i])
  }
  if(sum < arrOfArr[i]){
    let max = arrOfArr[i];
  }
  return max;
}


// Задание 3
function worker2(arr){
  this.arr = arr
    min = arr[0];
    max = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(min > arr[i]){
        min = arr[i];
      } else if(max < arr[i]){
        max = arr[i];
      }
      function difference (max, min){
          console.log(Math.abs(max - min));   
      }
    }
}

console.log(worker2([1,2,3,4]))
