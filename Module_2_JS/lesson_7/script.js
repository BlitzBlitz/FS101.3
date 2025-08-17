const todos_data = [
  {
    id: 1,
    title: "Complete the HW",
    priority: 1,
    desc: "Math, Coding and Science",
    isDone: true,
  },
  {
    id: 2,
    title: "Learn how to jump rope",
    priority: 3,
    desc: "Do 4 sets of 2 min jump",
    isDone: false,
  },
  {
    id: 3,
    title: "Read a book",
    priority: 3,
    desc: 'Read the book: "Principles of Beautiful Web Design"',
    isDone: true,
  },
];

//in    todo
//cal   create a div
//      create elements for each field of the todo
//          add each element to the div
//out   the todo div
// function createTodoElements(todo) {
//   const todo_card = document.createElement("div");
//   todo_card.id = todo.id;
//   todo_card.classList.add("col");
//   todo_card.classList.add("border");
//   todo_card.classList.add("border-4");
//   todo_card.classList.add("border-success");
//   if (todo.priority == 1) {
//     todo_card.classList.add("bg-primary");
//   }
//   if (todo.priority == 2) {
//     todo_card.classList.add("bg-secondary");
//   }
//   if (todo.priority == 3) {
//     todo_card.classList.add("bg-info");
//   }
//   const todo_title = document.createElement("h1");
//   todo_title.innerText = todo.title;
//   todo_card.appendChild(todo_title);
//   todo_desc = document.createElement("p");
//   todo_desc.innerText = todo.desc;
//   todo_card.appendChild(todo_desc);
//   return todo_card;
// }

function createTodoElements(todo) {
  const todo_card = document.createElement("div");
  todo_card.classList.add("border");
  todo_card.classList.add("border-5");
  todo_card.classList.add("col-4");
  if (todo.priority == 1) {
    todo_card.classList.add("bg-primary");
  } else if (todo.priority == 2) {
    todo_card.classList.add("bg-info");
  } else {
    todo_card.classList.add("bg-secondary");
  }
  if (todo.isDone) {
    todo_card.classList.add("border-success");
  } else {
    todo_card.classList.add("border-warning");
  }
  todo_card.innerHTML = `
        <h2 class="text-bold ${
          todo.isDone == true ? "text-decoration-line-through" : ""
        }">${todo.title}</h2>
        <p>
          ${todo.desc}
        </p>
  `;
  return todo_card;
}

//in    todos_data
//cal   select the todos container
//      read the data for each todo
//          create the HTML elements for the current todo
//          add the created elements to the container
//out   add elements to the UI
function displayTodos(todos_data) {
  const todos_container = document.querySelector("#todos-container");
  todos_container.innerHTML = "";
  for (let i = 0; i < todos_data.length; i++) {
    const current_todo = todos_data[i];
    const todo_card = createTodoElements(current_todo);
    todos_container.appendChild(todo_card);
  }
}
displayTodos(todos_data);

//Searching

function searchAndDisplay(keyword, todos_data) {
  let results_array = [];
  for (let i = 0; i < todos_data.length; i++) {
    const current_todo_title = todos_data[i].title.toLowerCase();
    if (current_todo_title.includes(keyword.toLowerCase())) {
      results_array.push(todos_data[i]);
    }
  }
  displayTodos(results_array);
}
const formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const searchInputElement = document.querySelector("#search-keyword");
  const keyword = searchInputElement.value;
  console.log(keyword);
  searchAndDisplay(keyword, todos_data);
}
//in    todos_data
//cal   declare filtred_todos
//      read all the data
//      for each todo: check if isDone
//          add it to filtred_todos
//out   show the done todos(filtred_todos)
function filter_by_isDone(todos_data) {
  let filtred_todos = [];
  for (let i = 0; i < todos_data.length; i++) {
    const current_todo = todos_data[i];
    if (current_todo.isDone) {
      filtred_todos.push(current_todo);
    }
  }
  displayTodos(filtred_todos);
}
const show_done_btn = document.querySelector("#show-done-todos");
show_done_btn.addEventListener("click", () => filter_by_isDone(todos_data));
