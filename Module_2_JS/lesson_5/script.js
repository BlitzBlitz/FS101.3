const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 32,
    department: "Engineering",
    salary: 75000,
    yearsOfExperience: 5,
    remote: true,
    fullTime: true,
    certifications: ["AWS", "Scrum Master"],
    lastPromotionYear: 2022,
  },
  {
    id: 2,
    name: "Mark Smith",
    age: 45,
    department: "HR",
    salary: 60000,
    yearsOfExperience: 15,
    remote: false,
    fullTime: true,
    certifications: [],
    lastPromotionYear: 2018,
  },
  {
    id: 3,
    name: "Jane Davis",
    age: 28,
    department: "Marketing",
    salary: 58000,
    yearsOfExperience: 4,
    remote: true,
    fullTime: false,
    certifications: ["Google Ads"],
    lastPromotionYear: 2023,
  },
  {
    id: 4,
    name: "Tom Lee",
    age: 39,
    department: "Engineering",
    salary: 82000,
    yearsOfExperience: 10,
    remote: false,
    fullTime: true,
    certifications: ["Azure", "PMP"],
    lastPromotionYear: 2021,
  },
  {
    id: 5,
    name: "Emma Brown",
    age: 35,
    department: "Sales",
    salary: 69000,
    yearsOfExperience: 8,
    remote: true,
    fullTime: true,
    certifications: ["Salesforce", "Negotiation"],
    lastPromotionYear: 2024,
  },
  {
    id: 6,
    name: "Noah Wilson",
    age: 41,
    department: "Finance",
    salary: 78000,
    yearsOfExperience: 12,
    remote: false,
    fullTime: true,
    certifications: ["CPA"],
    lastPromotionYear: 2020,
  },
  {
    id: 7,
    name: "Olivia Taylor",
    age: 30,
    department: "Engineering",
    salary: 73000,
    yearsOfExperience: 6,
    remote: true,
    fullTime: true,
    certifications: ["Kubernetes", "Docker"],
    lastPromotionYear: 2024,
  },
  {
    id: 8,
    name: "Liam Harris",
    age: 26,
    department: "Customer Support",
    salary: 50000,
    yearsOfExperience: 3,
    remote: true,
    fullTime: false,
    certifications: [],
    lastPromotionYear: 2023,
  },
  {
    id: 9,
    name: "Sophia Martinez",
    age: 38,
    department: "Marketing",
    salary: 71000,
    yearsOfExperience: 9,
    remote: false,
    fullTime: true,
    certifications: ["SEO", "Content Strategy"],
    lastPromotionYear: 2021,
  },
  {
    id: 10,
    name: "James Clark",
    age: 50,
    department: "Finance",
    salary: 88000,
    yearsOfExperience: 20,
    remote: false,
    fullTime: true,
    certifications: ["CFA", "Risk Management"],
    lastPromotionYear: 2019,
  },
];

//write a program that will read the name of the user
//and print "Found" if the employee with that name exists

//in  searched name
//cal read all the elements
//    for each element -> read the name current_employee.name
//                      -> check if the name == searched name
//                      -> print "found"
//    print "not found"
//out found / not found

// let found = false;
// let searched_name = prompt("Enter the employee name: ");
// for (let index = 0; index < employees.length; index++) {
//   const current_employee = employees[index];
//   if (current_employee.name === searched_name) {
//     found = true;
//   }
// }

// if (found == true) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }

//write a program that will save all the remote employees
//in an array an then print the array

//in    N/A
//cal   declare remote_employees_array
//      read the data of each employee
//      for each employee check if he is remote
//      if it is => save the employee data into the array
//out   remote employees array

// let remote_employees_array = [];
// for (let index = 0; index < employees.length; index++) {
//   const current_employee = employees[index];
//   if (current_employee.remote) {
//     remote_employees_array.push(current_employee);
//   }
// }
// console.log(remote_employees_array);

//find the avg salary in the company

//in  N/A
//cal   declare sum
//      read the employees array
//      for each employee => add the salary to the sum
//      divide the sum by the amount of employees
//out avg salary

// let sum = 0;
// for (let index = 0; index < employees.length; index++) {
//   const current_employee = employees[index];
//   sum += current_employee.salary;
// }

// let avg = sum / employees.length;
// console.log("The avg salary is: $" + avg);

//write a program that will check if all the employees
//work remotly. print "remote" if so, and "live" otherwise

//in  N/A
//cal declare a flag variable are_remote = true
//    read all the data
//    if current_employee.remote === false
//            -> are_remote = false
//out Remote/Live

// let are_remote = true;
// for (let index = 0; index < employees.length; index++) {
//   const current_employee = employees[index];
//   if (current_employee.remote === false) {
//     are_remote = false;
//   }
// }
// if (are_remote) {
//   console.log("All the employees are remote");
// } else {
//   console.log("Not all of the employees are remote");
// }

//write a program that will print an array of
//the department's names. There should be no duplicates.

//in N/A
//cal
//    declare an empty array
//    read all the data
//    if the department is not in the array, add it
//    print out the array
//print out the department's names

// let departments_names = [];
// for (let index = 0; index < employees.length; index++) {
//   const current_employee = employees[index];
//   let departments_exists = false;
//   for (let index = 0; index < departments_names.length; index++) {
//     const current_departments_names = departments_names[index];
//     if (current_employee.department == current_departments_names)
//       departments_exists = true;
//   }
//   if (departments_exists == false) {
//     departments_names.push(current_employee.department);
//   }
// }

//write a program that will print the employee which is paid the most

//in N/A
//cal
//    declare variable max (set equal to first element)
//    make a loop to read all the of employees data
//    compare the salary
//out name of employee which is paid the most

// let max = employees[0];
// for (let index = 0; index < employees.length; index++) {
//   const current_employee = employees[index];
//   if (current_employee.salary > max.salary) {
//     max = current_employee;
//   }
// }
// console.log(max);

//write a program that will print the total_salary for each department

//in N/A
//cal
//    declare a variable for total_salary for each department
//    loop to read all the data
//    add salary to the assigned department
//out printed total_salary for each department

// let departments_total_salaries = {};

// for (let index = 0; index < employees.length; index++) {
//   const current_employee = employees[index];
//   if (departments_total_salaries[current_employee.department] == undefined) {
//     departments_total_salaries[current_employee.department] = 0;
//   }
//   departments_total_salaries[current_employee.department] +=
//     current_employee.salary;
// }

// console.log(departments_total_salaries);

//build a funtion that will take the data for 1 employee
//and give him a 5% raise if he has not been promoted for
//more than 3 years

//in  employee data
//cal check if  2025 - c_e.lastPromotionYear >= 3
//        c_e.salary +=  c_e.salary * 0.05
//out employee_changed

function promote_employee(employee_data) {
  if (2025 - employee_data.lastPromotionYear >= 2) {
    employee_data.salary += employee_data.salary * 0.05;
  }
  return employee_data;
}

console.log(employees);

for (let index = 0; index < employees.length; index++) {
  employees[index] = promote_employee(employees[index]);
}

console.log(employees);
