const select = document.querySelector(".selectall");
const list = document.getElementById("list");
const allTodo = document.querySelectorAll(".remove");
const todo = document.querySelectorAll(".note");
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}
list.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
});
function addTodo(todo) {
  let todoText = list.value;
  if (todo) {
    todoText = todo.text;
  }
  if (todoText && todoText.length < 50 && todoText != "") {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const labelText = document.createTextNode(`${todoText}`);
    div.classList.toggle("note");
    label.classList.add("label");
    label.appendChild(labelText);
    div.setAttribute("onclick", "complete(this)");
    input.setAttribute("type", "checkbox");
    input.setAttribute("onclick", "showHide()");
    input.classList.toggle("remove");
    div.appendChild(input);
    div.appendChild(label);
    const inbe = document.querySelector(".input");
    document.querySelector(".container").insertBefore(div, inbe);
    list.value = "";
    showHide();
    updateTodeList();
  } else {
    alert("pleace insert valid list and smaller then 50 latter");
  }
}
function updateTodeList() {
  const todos = [];
  let label = document.querySelectorAll(".label");
  label.forEach((label) => {
    todos.push({
      text: label.innerText,
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeTodo() {
  const allTodo = document.querySelectorAll(".remove");
  for (let i = 0; i < allTodo.length; i++) {
    if (allTodo[i].checked) {
      allTodo[i].parentNode.remove();
      updateTodeList();
    }
  }
  select.style.display = "none";
}
const complete = (element) => {
  let item = element.childNodes[1];
  item.style.textDecoration = "line-through";
  item.style.color = "d95e5e";
  item.style.fontFamily = "impact";
  element.style.borderBottom = "3px solid #d95e5e";
  element.style.background = "black";
  console.log(element.childNodes[1].innerText);
};
function selectItem() {
  const allTodo = document.querySelectorAll(".remove");
  const selectBtn = document.querySelector("#selectall");
  const stext = document.querySelector(".stext");
  if (selectBtn.checked) {
    allTodo.forEach((todoItem) => {
      todoItem.checked = true;
    });
    stext.innerHTML = `Deselect all`;
  } else {
    allTodo.forEach((todoItem) => {
      todoItem.checked = false;
    });
    stext.innerHTML = `select all`;
  }
}
function showHide() {
  const allTodo = document.querySelectorAll(".remove");
  for (let i = 0; i < allTodo.length; i++) {
    if (allTodo[i].checked) {
      select.style.display = "block";
      break;
    } else {
      select.style.display = "none";
    }
  }
}
