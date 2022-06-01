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
    for(i= 0; i < arr.length; i++){
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
function worker(arr) {
  
     for(let i= 0; i<arr.length; i++){
       sum+=arr[i];
     }
     
     return sum;
  }
   
function makeWork(arrOfArr,worker){
 let sums = arrOfArr[0];
 for(i = 0; i< arrOfArr.length; i++){
 
 if(sums > arrOfArr[i]){
   sums = worker(arrOfArr[i]);
   }
 }
  return max;
}

// Задание 3
function worker(arr){
  sum = 0;
   for(let i= 0; i<arr.length; i++){
     sum+=arr[i];
   }
   
   console.log(sum);
 }
 

function worker2(arr) {
console.log(worker([4,5,6]));
}
worker2()
