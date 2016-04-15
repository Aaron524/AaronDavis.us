var cows = 7;
var chickens = 11;
var targetFarm = cows + chickens;

printFarmInventory(cows, chickens);
console.log(findSolution(targetFarm));

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}



function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 16, 3);

function count_rabbits() {
    for(var i=1; i<=3; i++) {
        // operator + concatenates strings
        alert("Rabbit "+i+" out of the hat!")
    }
}
 
 
function range(start, end, step) {
  if (!step && start > end) {return "impossible"};
  if (!step) { step = 1; }
  var r = [];
  for (var i = start; start <= end ? i <= end : i >= end; i += step) { r.push(i); } /** the ? is a shorthand if and then the : is a or**/
  return r;
}
 
 
function sum(arr) {
  var s = 0;
  for (var i = 0; i < arr.length; i++) { s += arr[i];}
  return s;
}
 
/**console.log(range(1, 10,2));**/
 
function reverseArray(array) {
                newArray = [];
                for( var i = 0; i < array.length; i++) {
                                newArray.unshift(array[i]);
                }
 
                return newArray;
}
 
/**console.log(reverseArray(["A", "B", "C"]));
 
                                                                                                                                                                                                                                                                                                                           chapter 4 question 2
**/
 
function reverseArrayInPlace(array) {
                arrayLength = array.length;
 
                for( var i=0; i < (arrayLength/2); i++) {
                                dummy = array[i];
                                array[i] = array[arrayLength-i];
                                array[arrayLength-i] = dummy;
                }
}
 
/**
var arrayValue = [1, 2, 3, 4, 5,];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
 
                                                                                                                                                                                                                                                                                                                           chapter 4 question 2
**/