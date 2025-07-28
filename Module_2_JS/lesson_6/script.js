// const employees = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     age: 32,
//     department: "Engineering",
//     salary: 75000,
//     yearsOfExperience: 5,
//     remote: true,
//     fullTime: true,
//     certifications: ["AWS", "Scrum Master"],
//     lastPromotionYear: 2022,
//   },
//   {
//     id: 2,
//     name: "Mark Smith",
//     age: 45,
//     department: "HR",
//     salary: 60000,
//     yearsOfExperience: 15,
//     remote: false,
//     fullTime: true,
//     certifications: [],
//     lastPromotionYear: 2018,
//   },
//   {
//     id: 3,
//     name: "Jane Davis",
//     age: 28,
//     department: "Marketing",
//     salary: 58000,
//     yearsOfExperience: 4,
//     remote: true,
//     fullTime: false,
//     certifications: ["Google Ads"],
//     lastPromotionYear: 2023,
//   },
//   {
//     id: 4,
//     name: "Tom Lee",
//     age: 39,
//     department: "Engineering",
//     salary: 82000,
//     yearsOfExperience: 10,
//     remote: false,
//     fullTime: true,
//     certifications: ["Azure", "PMP"],
//     lastPromotionYear: 2021,
//   },
//   {
//     id: 5,
//     name: "Emma Brown",
//     age: 35,
//     department: "Sales",
//     salary: 69000,
//     yearsOfExperience: 8,
//     remote: true,
//     fullTime: true,
//     certifications: ["Salesforce", "Negotiation"],
//     lastPromotionYear: 2024,
//   },
//   {
//     id: 6,
//     name: "Noah Wilson",
//     age: 41,
//     department: "Finance",
//     salary: 78000,
//     yearsOfExperience: 12,
//     remote: false,
//     fullTime: true,
//     certifications: ["CPA"],
//     lastPromotionYear: 2020,
//   },
//   {
//     id: 7,
//     name: "Olivia Taylor",
//     age: 30,
//     department: "Engineering",
//     salary: 73000,
//     yearsOfExperience: 6,
//     remote: true,
//     fullTime: true,
//     certifications: ["Kubernetes", "Docker"],
//     lastPromotionYear: 2024,
//   },
//   {
//     id: 8,
//     name: "Liam Harris",
//     age: 26,
//     department: "Customer Support",
//     salary: 50000,
//     yearsOfExperience: 3,
//     remote: true,
//     fullTime: false,
//     certifications: [],
//     lastPromotionYear: 2023,
//   },
//   {
//     id: 9,
//     name: "Sophia Martinez",
//     age: 38,
//     department: "Marketing",
//     salary: 71000,
//     yearsOfExperience: 9,
//     remote: false,
//     fullTime: true,
//     certifications: ["SEO", "Content Strategy"],
//     lastPromotionYear: 2021,
//   },
//   {
//     id: 10,
//     name: "James Clark",
//     age: 50,
//     department: "Finance",
//     salary: 88000,
//     yearsOfExperience: 20,
//     remote: false,
//     fullTime: true,
//     certifications: ["CFA", "Risk Management"],
//     lastPromotionYear: 2019,
//   },
// ];

// //write a function that will take the array of the employees
// //and return the amount of employees over 40

// //in    employees data
// //cal   read each employee
// //      for each empl check age
// //          if age > 40 => add 1 to the amount
// //out   amount_over_40

// function get_amount_over_40(employee_data) {
//   let amount = 0;
//   for (let i = 0; i < employee_data.length; i++) {
//     const current_employee = employee_data[i];
//     if (current_employee.age > 40) {
//       amount++;
//     }
//   }
//   return amount;
// }

// function get_emopyees_over_80k(employee_data) {
//   let emopyees_over_80k = [];
//   for (let i = 0; i < employee_data.length; i++) {
//     const current_employee = employee_data[i];
//     if (current_employee.salary > 80000) {
//       emopyees_over_80k.push(current_employee);
//     }
//   }
//   return emopyees_over_80k;
// }

// let empl_over_80k = get_emopyees_over_80k(employees);

// let amount_all_over_40 = get_amount_over_40(employees);

// let amount_80k_over_40 = get_amount_over_40(empl_over_80k);

// h1_element = document.querySelector("h1");
// change_btn = document.querySelector("#change_btn");

// change_btn.addEventListener("click", change_title);

// function change_title() {
//   console.log("Button Clicked");

//   h1_element.innerText = "Changed By JS";
//   h1_element.style.backgroundColor = "red";
// }

// Event: User clicks the dark mode btn
// Target:    Dark mode btn
// Type:      click
// Handler:   go_dark_mode()

dark_mode_btn = document.querySelector("#dark_mode_btn");
dark_mode_btn.addEventListener("click", go_dark_mode);

function go_dark_mode() {
  body_element = document.querySelector("body");
  // body_element.style.backgroundColor = "#262526ff";
  // body_element.style.color = "#ffffff";
  body_element.classList.add("dark");
  body_element.classList.remove("light");
}

light_mode_btn = document.querySelector("#light_mode_btn");
light_mode_btn.addEventListener("click", go_light_mode);
function go_light_mode() {
  body_element = document.querySelector("body");
  // body_element.style.backgroundColor = "#ffffff";
  // body_element.style.color = "#262526ff";
  body_element.classList.remove("dark");
  body_element.classList.add("light");
}

toggle_theme_btn = document.querySelector("#toggle_theme");
toggle_theme_btn.addEventListener("click", change_theme);

function change_theme() {
  body_element = document.querySelector("body");

  body_element.classList.toggle("dark");
  if (body_element.classList.contains("dark")) {
    toggle_theme_btn.innerText = "Go Light";
  } else {
    toggle_theme_btn.innerText = "Go Dark";
  }
}
