//write a program that will take the salary of the user
//and print the total tax amount(20%)

//in    the salary
//cal   total_tax_amount = salary * 0.2
//out   total tax amount

// let salary;
// salary = prompt("Enter your salary: ");
// let total_tax_amount = salary * 0.2;
// console.log(
//   `Your salary is ${salary} and your tax amount is ${total_tax_amount}`
// );

//write a validator program, which will validate if the age of the user is correct
// after getting the age check if the user entered a negative value and give him
// error message if so.

//in    age
//cal   check if the age is negative ( < 0)
//
//out   error message / success message

// let age = prompt("Enter your age: ");

// if (age < 0) {
//   console.log("Age is not correct");
// }

// if (age >= 0) {
//   console.log("Age is correct");
// }

//write a program that will take a number and print
// EVEN/ODD based on the number

//in    a number
//cal   find the reminder when the number is divided by 2
//      check if the reminder is 0 -> EVEN
//                            is 1 -> ODD
//out   EVEN/ODD

// let number = prompt("Enter a number: ");
// let reminder = number % 2;
// if (reminder == 0) {
//   console.log("EVEN");
// }

// if (reminder != 0) {
//   console.log("ODD");
// }

//write a program that will check if the user is in the working age
//the working age is 18 to 66

//in    age
//cal   age >= 18 and age <= 66
//out   Go to work / Stay home

// let age = prompt("Enter your age");
// if (age >= 18 && age <= 66) {
//   console.log("Go to work");
// } else {
//   console.log("Stay home");
// }

//write a program that will print the grade of the user
//based on the score he got
//0-60 -> 'F'
//60-70 -> 'D'
//70-80 -> 'C'
//80-90 -> 'B'
//90-100 -> 'A'

//in    score
//cal   score < 60 -> 'F'
//      score >= 60 && score < 70  -> 'D'
//      score >= 70 && score < 80  -> 'C'
//      score >= 80 && score < 90  -> 'B'
//      score >= 90 && score < 100  -> 'A'
//out   grade

// let score = prompt("Enter your score: ");
// if (score < 60) {
//   console.log("F");
// } else if (score >= 60 && score < 70) {
//   console.log("D");
// } else if (score >= 70 && score < 80) {
//   console.log("C");
// } else if (score >= 80 && score < 90) {
//   console.log("B");
// } else if (score >= 90 && score <=  100) {
//   console.log("A");
// }

//write a program to generate a random number
//and then ask the user to guess it
//print "WIN" if the user guessed correctly

//in    user_guess
//cal   generate a random number
//      check if the numbers are equal
//out   Win/Try again

// let random_number = Math.floor(Math.random() * 5) + 1;

// let counter = 0;
// while (counter < 3) {
//   let user_guess = prompt("Guess the number 1-5: ");

//   if (user_guess == random_number) {
//     console.log("WIN");
//   } else {
//     console.log("Try again");
//   }
//   counter += 1;
// }

//write a program that will take a number and print "Hello"
//as many times as this number

//in    number
//cal
//   number of reps: user_number

//  starting_point: 0
//  ending_point:   user_number
//  step:           +1

//out   "Hello" x number

// let number = prompt("Enter a number: ");
// let counter = 0;
// while (counter < number) {
//   console.log(counter + ". Hello");
//   counter += 1;
// }

//write a program that takes the users age
//and prints the numbers from 0 to age

//in    user_age
//cal
//out   0,1,2,...user_age

// let user_age = prompt("Enter your age: ");
// let counter = 0;
// while (counter < user_age) {
//   console.log(counter);
//   counter += 1;
// }
