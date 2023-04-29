const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);

function sayHello(item) {
  console.log("hello", item);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const textSpan = document.createElement("span");
  const containerSpan = document.createElement("span");
  const dateSpan = document.createElement("span")
  const button = document.createElement("button");

  li.id = newTodo.id

  textSpan.innerText = newTodo.text;
  li.appendChild(textSpan);

  // 날짜 추가
  const dateString = new Date(newTodo.id).toLocaleString()
  dateSpan.innerText = dateString

  button.innerHTML = "❌";
  button.addEventListener("click", deleteTodo);

  containerSpan.appendChild(dateSpan)
  containerSpan.appendChild(button)
  li.appendChild(containerSpan)
  toDoList.append(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  console.log((li.id));

  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
  console.log(toDos);
  saveToDos()
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: toDoInput.value
  }
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}