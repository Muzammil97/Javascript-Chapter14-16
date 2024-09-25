// // Chapter 15 (Array I)

// // 1. Declare an empty array.
// var arr = [];



// // 2. Code an array with 1 string element
// var arr = ["a"];

// // 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index
// var alphabet = ["h","i","j","k"]
// alert(alphabet[2]);


// // 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
// var alphabet=["h","i","j","k", "l","m", "n", "o"];
// alert(alphabet.length);


// // 5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.

// var arr = ["a"];
// arr[1] = "b";
// alert(arr[1]);



// // Chapter 16 (Array II)


// // 1. Code an array with 1 string element.
// // Add an additional element to the array using push.
// // Create an alert whose message is the last element.

// var arr = ["a"];
// arr.push("b");
// alert(arr[arr.length-1]);

// // 2. var Alphabet=["h","i","j","k"]
// // Remove the last element from the array Alphabet.

// var Alphabet=["h","i","j","k"];
// Alphabet.pop();




// // 3. var Alphabet=["h","i","j","k"]
// // Add a new element, a number, to the end of an array.
// var Alphabet=["h","i","j","k"];
// Alphabet.push(999)



// // Chapter 16 (Array III)


// // 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// // Remove the first element of an array.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();

// // 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// // Add three number elements to the beginning of an array.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.unshift(1,2,3);

// // 3. Declare an array with one element.
// // Add a second element to the beginning of the array.
// // Create an alert whose message is the new first element.

// var arr = ["a"];
// arr.unshift("b");
// alert(arr[0]);


// // 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Insert "L" into the array between "M" and "XL".

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// sizes.splice(2,0,"L")


// // 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Copy the first 3 sizes of the array and put them into a new array,
// // regSizes.
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// regSizes = sizes.slice(0,3)

// // 6. var pets = ["dog", "cat", "ox", "duck", "frog"]. Add 2 elements after "dog" and remove "cat", "ox", and "duck". 
// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,3,"mouse","goat");


// // 7. var pets = ["dog", "cat", "ox", "duck", "frog"]; Remove "cat" and "ox".

// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,2);


// // 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; Reduce it to "duck" and "frog" using slice.

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
// pets = pets.slice(3,5)




// // 1. Declare an empty array using JS literal notation to store student names in future.
// var students = [];


// // 2. Declare an empty array using JS object notation to store student names in future.
// var students1 = new Array;
// students1[0] = "John";


// // 3. Declare and initialize a strings array.
// var colors = ["red", "green", "yellow"];


// // 4. Declare and initialize a numbers array.
// var numbers = [1, 2, 3, 4, 5];


// // 5. Declare and initialize a boolean array.
// var bools = [true, false, true, false, true];


// // 6. Declare and initialize a mixed array.
// var mixed = ["a", 2, true, "b", false, 3];


// // 7. Declare and Initialize an array and store available education qualifications in Pakistan 

// // (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h3>Qualifications: </h3> <br>");
// for(var i = 0; i < qualifications.length; i++) {
//     document.write(`${i+1})  ${qualifications[i]} <br>`);
// }



// // Question 8
// // Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

// var studentsName = [prompt("Enter your name"), prompt("Enter your name"), prompt("Enter your name")];
// var studentsMarks = [+prompt("Enter your marks"), +prompt("Enter your marks"), +prompt("Enter your marks")];
// for(var i = 0; i < studentsName.length; i++) {
//     var result = `score of ${studentsName[i]} is ${studentsMarks[i]}. Percentage: ${studentsMarks[i] / 500 * 100}% <br>`
//     document.write(result) ;
// }

// // Q10

// var colorNames = []
// colorNames.unshift = prompt("Enter color at the beginning of the array");
// document.write(`${colorNames} <br> `);
// colorNames.push = prompt("Enter color at the ending of the array");
// document.write(`${colorNames} <br> `);
// colorNames.unshift("Yellow", "Green");
// document.write(`${colorNames} <br> `);
// colorNames.shift();
// document.write(`${colorNames} <br> `);
// colorNames.pop();
// document.write(`${colorNames} <br> `);
// colorNames.splice(+prompt("At which index you wants to add a color"),0,prompt("Which color you wants to add"))
// document.write(`${colorNames} <br> `);
// colorNames.splice(+prompt("At which index you wants to delete a color"),+prompt(" how many colors you wants to delete"),)
// document.write(`${colorNames} <br> `);


// var studentsScore = [320, 230, 480, 120, 410, 250];
// document.write(`Scores of Students: ${studentsScore} <br>`);
// document.write(`Ordered Scores of Students: ${studentsScore.sort()}`);


// var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write(`<br><br>Cities List: ${cityNames} <br>`);
// var selectedCities = cityNames.slice(2,4);
// document.write(`Selected Cities List: ${selectedCities}`);


// var arr = ["This", "is", "my", "cat"];  
// document.write(`<br><br>Array: <br> ${arr} <br>`);

// var arr = ["This", "is", "my", "cat"];  
// document.write(`<br><br>String: <br> ${arr.join(" ")} <br>`);

// Q13

// var fifo = [];
// fifo.push("First");
// fifo.push("Second");
// fifo.push("Third");
// fifo.push("Fourth");
// var fifoLength = fifo.length
// document.write(`<br><br>FIFO: <br><br> ${fifo} <br><br>`);
// for(var i = 0; i < fifoLength; i++) {
//     document.write(`Out:<br> ${fifo[0]} <br>`);
//     fifo.shift()    
// }

// Q14


// var lifo = [];
// lifo.push("First");
// lifo.push("Second");
// lifo.push("Third");
// lifo.push("Fourth");

// var lifoLength = lifo.length

// document.write(`<br><br>LIFO: <br> <br>${lifo} <br><br>`);
// for(var i = 0; i < lifoLength; i++) {
//     document.write(`Out:<br> ${lifo[lifo.length - 1]} <br>`);
//     lifo.pop()

// }

// Q15
// companies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// document.write(`<select name="" id="">
    
//     <option value="">${companies[0]}</option>
//     <option value="">${companies[1]}</option>
//     <option value="">${companies[2]}</option>
//     <option value="">${companies[3]}</option>
//     <option value="">${companies[4]}</option>
//     <option value="">${companies[5]}</option>

//   </select>`)