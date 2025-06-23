// let age;
// age = 20;
// let name = "Jack";
// console.log(age);
// console.log(name);
// console.log(typeof age);
// console.log(typeof name);

//Me video streaming

//in    the video
//cal   encoded, compressed, streamed, decompressed, decoded
//out   the video

//Twitting
//in    text
//cal   broadcast
//out   text

//write a program that will take the age of the user
// and will display the year he/she was born

//in    age
//cal   current_year - age
//out   year born

// let age = prompt("Enter You age");
// let year_born = 2025 - age;
// console.log("You have been born in " + year_born);

//A father has left a home for his child to be covered with carpet
// The price of the carpet is 10$/m^2. Get the total area of
// the house from the user and print the total price of the carpet

//in    the total area
//cal   total area * 10$
//out   total price

// let total_area = prompt("Enter the total area of the house");
// let total_price = total_area * 10;
// console.log("The price for the carpet is $" + total_price);

//write a program that will take a number from the user
// and print true if the number is even, and false otherwise

//in    user_number
//cal   find the reminder %
//      compare the reminder to 0
//out   true/false

let user_number = prompt("Enter a number");
let reminder = user_number % 2;
let result = reminder == 0;
console.log(result);
