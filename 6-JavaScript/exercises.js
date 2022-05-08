// Madlib

// function madlib(firstName, subject) {
//   console.log(firstName + "favorite subject is" + subject);
// }

// madlib("Chase", "Math");

// tip calculator

// function tipAmount(billTotal, serviceRating) {
//   if (serviceRating === "good") {
//     console.log(billTotal * 0.2);
//   }
//   if (serviceRating === "fair") {
//     console.log(billTotal * 0.15);
//   }
//   if (serviceRating === "bad") {
//     console.log(billTotal * 0.1);
//   }
// }

// tipAmount(100, "good");

// total calculator

// function totalAmount(billTotal, serviceRating) {
//   if (serviceRating === "good") {
//     console.log(billTotal * 0.2 + billTotal);
//   }
//   if (serviceRating === "fair") {
//     console.log(billTotal * 0.15 + billTotal);
//   }
//   if (serviceRating === "bad") {
//     console.log(billTotal * 0.1 + billTotal);
//   }
// }

// totalAmount(100, "good");

// function dayOfTheWeek(day) {
//   if (day == "Monday") {
//     console.log("Go to work!");
//   }
//   if (day == "Tuesday") {
//     console.log("Go to work!");
//   }
//   if (day == "Wednesday") {
//     console.log("Go to work!");
//   }
//   if (day == "Thursday") {
//     console.log("Go to work!");
//   }
//   if (day == "Friday") {
//     console.log("Go to work!");
//   }
//   if (day == "Saturday") {
//     console.log("Go to sleep");
//   }
//   if (day == "Sunday") {
//     console.log("Go to sleep");
//   }
// }

// dayOfTheWeek("Monday");

// function password(password) {
//   if (password == "chasechldrs") {
//     console.log("Welcome");
//   }
//   if (password != "chasechldrs") {
//     console.log("Try again")
//   }
// }

// function dayOfWeek(number) {
//   if (number == 1) {
//     console.log("Monday");
//   }
//   if (number == 2) {
//     console.log("Tuesday");
//   }
//   if (number == 3) {
//     console.log("Wednesday")
//   }
//   if (number == 4) {
//     console.log("Thursday");
//   }
//   if (number == 5) {
//     console.log("Friday");
//   }
//   if (number == 6) {
//     console.log("Saturday")
//   }
//   if (number == 7) {
//     console.log("Sunday")
//   }
// }

// function letterGrade(number) {
//   if (number < 60) {
//     console.log("F");
//   }
//   if (number < 70) {
//     console.log("D");
//   }
//   if (number < 80) {
//     console.log("C");
//   }
//   if (number < 90) {
//     console.log("B");
//   }
// }

// function picnicGame(name, food) {
//   if (name[0] == food[0]) {
//     console.log("You can come to the party");
//   }
//   if (name[0] != food[0]) {
//     console.log("Try again");
//   }
// }

// picnicGame("Chase", "Fandy");

// function username(username) {
//   if (username.length > 3 && username.length <= 18) {
//     console.log("Valid");
//   }
// }

// function numberDivide(number) {
//   if (number % 3 == 0 && number % 2 == 1) {
//     console.log("Valid");
//   }
// }

// print numbers

// let count = 1;

// while (count <= 10);
// console.log(count);
// count++;

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// print a square

// function printBox(number) {
//   for (let i = 0; i <= number; i++) {
//     let row = " ";
//     for (let y = 0; y <= number; y++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }
// printBox(5);

// function printHollowBox(number1, number2) {
//   for (let i = 0; i <= number1; i + 2) {
//     let row = " ";
//     for (let y = 0; i <= number2; y++) {
//       row = "*";
//     }
//     console.log(row);
//   }
// }

// printHollowBox(6, 4);

// function printBanner(word) {
//   wordLength = word.length;
//   console.log("-" + "-" * wordLength + "-");
//   console.log("${word}");
//   console.log("-" + "-" * wordLength + "-");
// }

// printBanner("Happy");

// function printBanner(word) {
//   wordLength = word.length;
//   for (i = 0; i <= word.length; i++) {
//     console.log("-");
//   }
// }

// count to 10
// let count = 1;
// while (count <= 10) {
//   console.log(count);
//   count++;
// }

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// print numbers between two parameters
// function printNumbers(start, end) {
//   for (let count = start; count <= end; count++) {
//     console.log(count);
//   }
// }

// printNumbers(1, 20);

// function printNumbers(start, end) {
//   let count = start;
//   while (count <= end) {
//     console.log(count);
//     count++;
//   }
// }

// printNumbers(1, 20);

// print square

// function printSquare(size) {
//   for (let i = 0; i < size; i++) {
//     let row = "";
//     for (let j = 0; i < size; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// function printBox(width, height) {
//   for (let i = 0; i < height; i++) {
//     let row = "";
//     for (let j = 0; j < width; j++) {
//       if (i == 0 || i == height - 1) {
//         row += "*";
//       } else {
//         if (j == 0 || j == width - 1) {
//           row += "*";
//         } else {
//           row += " ";
//         }
//       }
//     }
//     console.log(row);
//   }
// }

// printBox(5, 5);

// function printBanner(text) {
//   const dashes = "-".repeat(text.length + 2);
//   console.log("/" + dashes + "\\");
//   console.log("| " + text + " |");
//   console.log("\\" + dashes + "/");
// }

// printBanner("Welcome to Digital Crafts");

// function leetSpeak(text) {
//   for (let i = 0; i < text.length; i++) {
//     const char = text[i]
//     if(char == 'A' ) {
//       console.log('4')
//       else if (char == 'E') {
//       console.log('3')
//       }
//     }
//   }
// }

// LOOP PRACTICE

// function myInteger(number1, number2) {
//   if (number1 > number2) {
//     console.log(number1);
//   } else {
//     console.log(number2);
//   }
// }

// myInteger(10, 20);

// FIZZBUZZ

// function fizzBuzz() {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3) {
//       console.log("fizzbuzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz();

// function numbers() {
//   for (i = 1; i <= 20; i++) {
//     console.log(i);
//   }
// }

// numbers();

// function numbers() {
//   for (i = 3; i <= 29; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
// }

// numbers();

// function countNumbers() {
//   for (i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// countNumbers();
