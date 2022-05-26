// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  function minimal(arr){
    min = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(min > arr[i]){
        min = arr[i]
      }
    }
    console.log(min)
    }
    minimal([1,2,3]);
  
    function maximum(arr){
    max = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(max < arr[i]){
        max = arr[i]
      }
    }
    console.log(max)
    }
    maximum([1,2,3])
  
    function average(arr){
     sum = 0;
      for(let i= 0; i<arr.length; i++){
        sum+=arr[i];
      }
      avg = sum / arr.length
      console.log(avg);
    }
    average([1,2,3])
  return { min: min, max: max, avg: avg };
}


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
