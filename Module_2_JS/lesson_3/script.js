//write a program that will print all the odd numbers from 0 to n
//after taking n from the user

//in    n
//cal   nr of reps: n/2
//          starting_point: 0
//          ending_point:   n/2
//          step:           +1
//
//out   1,3,5,...,n

// let n = prompt("Enter a number: ");
// let counter = 0;
// let number_to_be_printed = 1;
// while (counter < n / 2) {
//   console.log(number_to_be_printed);
//   number_to_be_printed += 2;
//   counter++;
// }

//write a program that gets the age of the user and prints
//the sum of all the numbers from 1 to age

//in    age
//cal   sum = 0
//      loop from 1 to age
//      nr of reps: age
//          starting_point: 0
//          ending_point:   age
//          step:           +1
//      for each step: add the current_number to sum
//out   sum of 1...age

// let age = prompt("Enter your age: ");
// let sum = 0;
// let counter = 0;
// let current_number = 1;
// while (counter < age) {
//   sum += current_number;
//   current_number++;
//   counter++;
// }
// console.log(sum);

//write a program that takes a age from the user
//generates as many random numbers as the age of the user
//then it prints how many of these numbers were even

//in    age
//cal   amout = 0
//      nr of reps: age
//          starting_point: 0
//          ending_point:   age
//          step:           +1
//      for each step:
//          generate 1 random number
//          check if the number is even
//              if it is add 1 to the amount
//out   the amount of even random numbers

// let age = prompt("Enter your age: ");
// let counter = 0;
// let amount_even_random = 0;
// while (counter < age) {
//   let random = Math.floor(Math.random() * 100);
//   let reminder = random % 2;
//   console.log(random);

//   if (reminder == 0) {
//     amount_even_random++;
//   }
//   counter++;
// }

// console.log(`The amount of even random numbers is ${amount_even_random}`);

//write a program that will keep generating random numbers
//untill it generates a number divisible by 5

//in    N/A
//cal   make an infinite loop
//      for each step
//          generate a random number
//          check if the number is divisible by 5
//              stop the loop
//out   first random number divisible by 5

// while (true) {
//   let random = Math.floor(Math.random() * 1000);
//   console.log(random);

//   if (random % 5 == 0) {
//     console.log(random);
//     break;
//   }
// }

//write a program that asks the user for a positive number
//until he enter a positive number

//in    positive number
//cal   unknown loop: input not positive
//out   N/A

// while (true) {
//   let positive_number = +prompt("Enter a positive number");
//   if (positive_number > 0) {
//     console.log(positive_number);
//     break;
//   }
// }

//give an array of numbers print all the negative numbers

//in    array of numbers
//cal   read each number one by one
//out   the - numbers

let number = [100, -999, 1087, 89, -899, -6];
number[0];
number[1];
number[2];
number[3];
number[4];

let counter = 0;
let index = 0;
while (counter < number.length) {
  let current_number = number[index];
  if (current_number < 0) {
    console.log(current_number);
  }
  index++;
  counter++;
}
