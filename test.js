//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************

var stringArray = ["Apple", "Mango", "Banana", "Orange"];
var finnishedArray = [];

function lastLetterSort() {
    var reversedOne;
    var reversedTwo;
    var newReversed = [];
    var i = 0;
    while (i < stringArray.length) {
        reversedOne = stringArray[i].split('').reverse().join('');
        newReversed.push(reversedOne);
        i++
    }
    newReversed.sort();
    var i = 0;
    while (i < newReversed.length) {
        reversedTwo = newReversed[i].split('').reverse().join('');
        finnishedArray.push(reversedTwo);
        i++
    }
    return finnishedArray;
}
lastLetterSort()

var ArrayOne = [3,4,5,26,75,43,2,12,34,36,43];

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  ArrayOne.forEach(function(entry){
    sum += entry;
  }) 
  console.log(sum);
}
sumArray(ArrayOne);

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
