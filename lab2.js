/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob(consumed, rate) {
  this.consumed = consumed;
  this.rate = rate;
}

var Town = function(citizens) {
    this.citizens = citizens;
}

var hoursSpent = 0;

Blob.prototype.consumption = function() {
        while (blob.consumed < Dowington.citizens) {
            blob.consumed = blob.consumed + blob.rate;
            blob.rate = blob.consumed + 1;
               hoursSpent++;
        }
    return hoursSpent;
}

var blob = new Blob(0,1);
var Dowington = new Town(1000);

blob.consumption();

var hoursSpentInDowington;
                            // TODO: assign me the value of the
                           // above calculation
hoursSpentInDowington = hoursSpent;


// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.
var hours = 0;
function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
    this.population = population;
    this.peoplePerHour = peoplePerHour;
    var citizensConsumed = 0;
        while (population > citizensConsumed) {
            citizensConsumed = citizensConsumed + peoplePerHour;
            peoplePerHour = citizensConsumed + 1;
                hours++;    
        }
    return hours;
}

Blob.prototype.hourToOoze = hoursToOoze;

assert(hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (planet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
    this.planet = planet;
    this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    console.log(hello[this.language],this.language);
    return hello[sb.language];
    //TODO: put this on the SentientBeing prototype
  }

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Klingon (planet, language) {
  SentientBeing.call(this, planet, language);
  this.planet = "Qo'nos";
  this.language = "klingon";
}

function Human (planet, language)  {
  SentientBeing.call(this, planet, language);
  this.planet = "Earth";
  this.language = "federation standard";
}

function Romulan (planet, language)  {
  SentientBeing.call(this, planet, language);
  this.planet = "Romulus";
  this.language = "romulan";
}

Klingon.prototype = Object.create(SentientBeing.prototype);
Klingon.prototype.constructor = Klingon;

Human.prototype = Object.create(SentientBeing.prototype);
Human.prototype.constructor = Human;

Romulan.prototype = Object.create(SentientBeing.prototype);
Romulan.prototype.constructor = Romulan;
                        
assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Klingon()).sayHello(new Human()) === "hello",
  "the Human should hear hello");

assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");

assert((new Human()).sayHello(new Human()) === "hello",
  "the Human should hear hello");

assert((new Klingon()).sayHello(new Klingon()) === "nuqneH",
  "the Klingon should hear nuqneH");

assert((new Romulan()).sayHello(new Human()) === "hello",
  "the Human should hear hello");
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
var sum = 0;

function sumArray(numberArray) {
  // TODO: implement me using forEach
  ArrayOne.forEach(function(entry){
    sum += entry;
  }) 
}
sumArray(ArrayOne);

assert(sum === 283, "It doesn't work");

//var ArrayTwo = [[3,4,5],[26,75,43],[2,12],[34,36,43]];
//
//function sumSort(arrayOfArrays) {
//  arrayOfArrays.sort(function(a,b) {
//
//    var total = 0;
//
//      ArrayTwo[i].forEach(function(entry){
//      total += entry;
//        console.log(total)
//      }) 
//      return a - b
//  console.log(ArrayTwo);   
//  });
//}

// Working on this problem still!

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
