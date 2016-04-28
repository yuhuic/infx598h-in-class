// alert("Hello");

var n = 5;
var s = "Hello World!";
var b = true; 
var u//underfined;

// four types variale in js

n = 10;
n = n * 2;
n = n / 2;
n++; //add one, same as n+1

s = "Hello";
s = s + " World"

b = false;
b = !b; //reverse the result

function sayHello(name) {
    console.log("Hello "+ name);
}
// the name always begin with lower case

sayHello("Raina");

function square(n) {
    return n * n;
}

console.log(square(2)); //先执行小括号里的

function areaCircle(radius) {
    return Math.PI * square(radius);
}

console.log(areaCircle(50));


function isEven(n) {
    return (n % 2) == 0; 
}

n = 7;
if (isEven(n)) {
    console.log ("number is even!");    
}
else {
    console.log("numver is odd.");
}


 function iterate () {
     console.log("starting loop")
     // for 
     for (var i=0; i < 10; i++) {
         console.log("iteration " + i);
     }
     console.log ("loop done");
 };

iterate();
//start from 0 to loop done

//ARRAY - square bracket - array, each element is string. You can embed a array in another array


function dumpArray(ar) {
    for (var i=0; i < ar.length; i++) {
    console.log ("The " + i + " element is " + ar[i]);
   }
}


var ar = ["G", "PG", "PG-13", "R"];

console.log("array is "+ ar.length + " element long");

ar.push ("NC-17"); 
//push - method. differentiate from function
//ar.push - add new element in an array (in the end of the array)

console.log(ar[0]);
//first element in the array

console.log("array is "+ ar.length + " element long");

dumpArray(ar);

// function dumpRating(rating) {
//     console.log(rating);
// }
// //once for each element in an array
// ar.forEach(dumpRating);

ar.forEach(function (rating) {
    console.log(rating);
});

//
ar.forEach(console.log.bind(console));

ar.forEach(function(rating,index) {
    console.log(rating,index);
});

var m = {"red": "#F00", "green": "#0F0", "blue": "#00F"};
console.log[m];
console.log(m.red);
console.log(m.yellow);
m.yellow = "#FF0";
console.log(m.yellow);
