const select = document.querySelector(".selectall");
// todo list add functionality
function addTodoList() {
  // varial section
  const list = document.getElementById("list");
  if (list.value == "") {
    alert("please insert list");
  } else {
    //   create div ,input and label element
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    //   crate label text
    const labelText = document.createTextNode(` ${list.value}`);
    label.appendChild(labelText);
    // create div class attribute
    div.setAttribute("class", "note");
    //   create input checkbox attribute
    input.setAttribute("type", "checkbox");
    input.setAttribute("onclick", "showHide()");
    input.setAttribute("class", "remove");
    // append input element in div
    div.appendChild(input);
    // append label element in div
    div.appendChild(label);
    // insert input element before in note div
    const inbe = document.querySelector(".input");
    document.querySelector(".container").insertBefore(div, inbe);
    // clear input fleid
    list.value = "";
    showHide();
  }
}
// todo list remove functionality
function removeTodoList() {
  // select all element
  const selectElement = document.querySelectorAll(".remove");
  for (let i = 0; i < selectElement.length; i++) {
    // if todo list selected ,so delete this
    if (selectElement[i].checked) {
      selectElement[i].parentNode.remove();
    }
  }
  // hide all select or de select option
  select.style.display = "none";
}
// enter kay pass to add todo items
function enterAdd(event) {
  var key = event.keyCode;
  if (key == 13) {
    addTodoList();
  }
}
// select todo item function
function selectItem() {
  // select essention element
  const selectElement = document.querySelectorAll(".remove");
  const select = document.querySelector("#selectall");
  const stext = document.querySelector(".stext");
  // if click all select option ,then select all
  if (select.checked) {
    for (let i = 0; i < selectElement.length; i++) {
      selectElement[i].checked = true;
    }
    stext.innerHTML = `Deselect all`;
  } else {
    for (let i = 0; i < selectElement.length; i++) {
      selectElement[i].checked = false;
    }
    stext.innerHTML = `select all`;
  }
}
// show and hide todo option
function showHide() {
  const selectElement = document.querySelectorAll(".remove");
  for (let i = 0; i < selectElement.length; i++) {
    if (selectElement[i].checked) {
      select.style.display = "block";
      break;
    } else {
      select.style.display = "none";
    }
  }
}
