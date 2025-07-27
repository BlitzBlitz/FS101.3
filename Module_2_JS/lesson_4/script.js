//write a program that will declare an empty array and
//read the scores of the students of a class up until
//the teach(the user) enters -1
//and then print the avg of the class in this exam

//in    all the scores of the students
//      declare an empty array
//      unknow loop:
// ending_point:  score == -1
//                1. take 1 score from the user
//                2. save it into the array
//cal   find sum
//      declare sum = 0
//      add each score to the sum using "+="
//      avg = sum / scores_array.length
//out   avg of the class

// let scores_array = [];
// while (true) {
//   let score = +prompt("Enter the student score: ");
//   if (score == -1) {
//     break;
//   }
//   scores_array.push(score);
// }

// let sum = 0;
// let counter = 0;
// let index = 0;
// while (counter < scores_array.length) {
//   sum += scores_array[index];
//   index++;
//   counter++;
// }

// let avg = sum / scores_array.length;
// console.log(`Avg is ${avg}`);

//write a program that given an array of names
//will print only the names longer than 5 letters

//in    array of names
//cal   read each name
//      known-loop:
// number of reps: length

//       starting_point: 0
//       ending_point:   length
//       step:           +1
//      for each name: name.length > 5
//out   names longer than 5

// let names_array = ["Mike", "Peterson", "Braid", "Klement"];
// for (let counter = 0; counter < names_array.length; counter++) {
//   let current_name = names_array[counter];
//   if (current_name.length > 5) {
//     console.log(current_name);
//   }
// }

//give an array of month balances for a business (12 months),
//print the amount of months with negative balances

//in    the array of balances
//cal   declare the amount
//      read each balance
//      for each balance
//          check if negative => add 1 to the amount
//out   amount of months with negative balances

let monthly_balances = [
  1000, 600, -79, 9000, -2000, 800, 1000, 600, -79, 9000, -2000, 800,
];

// let amount_of_negative_balances = 0;
// for (let index = 0; index < monthly_balances.length; index++) {
//   const current_balance = monthly_balances[index];
//   if (current_balance < 0) {
//     amount_of_negative_balances++;
//   }
// }
// console.log(
//   `Amount of negative balances: ${amount_of_negative_balances} months`
// );

//find  the max balance

//in  the array of balances
//cal supose that the first element is the max_balance
//    compare the max_balance to every balance
//    if current_balance > max_balance => max_balance = current_balance
//out max_balance

//write a program that will take the title, author,
// price, stock_amount of a book and save it into an object

//in    title, author, price, stock_amount
//cal
//out   book_object

// let book = {};
// book.title = prompt("Enter the title of the book: ");
// book.author = prompt("Enter the title of the author: ");
// book.price = +prompt("Enter the title of the price: ");
// book.stock_amount = +prompt("Enter the title of the stock amount: ");

// console.log(book);

// let students_data = [];

// for (let index = 0; index < 5; index++) {
//   let student = {};
//   student.name = prompt("Enter students name: ");
//   student.age = +prompt("Enter students age: ");
//   student.last_exam = +prompt("Enter students name: ");
//   students_data.push(student);
// }

// console.log(students_data);
let products_data = [
  {
    title: "Wireless Mouse",
    price: 25.99,
    stock: 120,
    discount_amount: 5.0,
    desc: "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
  },
  {
    title: "Bluetooth Headphones",
    price: 59.99,
    stock: 85,
    discount_amount: 10.0,
    desc: "Over-ear headphones with noise cancellation and 20-hour battery life.",
  },
  {
    title: "Mechanical Keyboard",
    price: 89.99,
    stock: 45,
    discount_amount: 15.0,
    desc: "RGB backlit mechanical keyboard with blue switches.",
  },
  {
    title: "1080p Webcam",
    price: 39.99,
    stock: 200,
    discount_amount: 7.0,
    desc: "High-definition webcam with built-in microphone and wide-angle lens.",
  },
  {
    title: "USB-C Charger",
    price: 29.99,
    stock: 150,
    discount_amount: 3.0,
    desc: "Fast charging USB-C wall adapter with 30W power output.",
  },
  {
    title: "Portable SSD 1TB",
    price: 109.99,
    stock: 60,
    discount_amount: 20.0,
    desc: "High-speed portable solid state drive with USB 3.2 support.",
  },
  {
    title: "Smart LED Bulb",
    price: 14.99,
    stock: 300,
    discount_amount: 2.0,
    desc: "Wi-Fi-enabled smart bulb with app and voice control.",
  },
  {
    title: "Fitness Tracker",
    price: 49.99,
    stock: 100,
    discount_amount: 8.0,
    desc: "Water-resistant fitness tracker with heart rate and sleep monitoring.",
  },
  {
    title: "Laptop Stand",
    price: 34.99,
    stock: 90,
    discount_amount: 4.0,
    desc: "Adjustable aluminum laptop stand for better posture and cooling.",
  },
  {
    title: "Noise Cancelling Earbuds",
    price: 79.99,
    stock: 75,
    discount_amount: 12.0,
    desc: "Compact wireless earbuds with active noise cancellation and fast charging.",
  },
];
let total_capital = 0;
for (let index = 0; index < products_data.length; index++) {
  const current_product = products_data[index];
  if (current_product.stock < 50) {
    console.log(current_product.title);
  }
  const current_captial = current_product.price * current_product.stock;
  total_capital += current_captial;
}

console.log(`Total capital: $${total_capital}`);
