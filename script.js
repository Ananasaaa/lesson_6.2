const arr = [null, 0, undefined, 8, 'abc', 5, 32, true, 4, 12, 2, 19];

function allNumbers(array) {
    return array.filter((elem) => typeof elem === 'number');
}
let filteredArr = allNumbers(arr);

function calculateSum(filtArr) {
   let sum = 0;
   for(let i = 0; i < filtArr.length; i++){
    sum += filtArr[i]
   }
   let average = sum / filtArr.length;
   return average;
}
 let result = calculateSum(filteredArr);
 console.log(result);












