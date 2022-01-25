import { todoApi } from "./todoApis.js";

const allTodos = await todoApi.getAllTodos();
let todoCount = allTodos.todos.length;

const appendTodoInUI = (todo, index) => {
  const block = document.createElement("div");
  const todoContext = document.createElement("li");
  const deleteButton = document.createElement("button");
  todoContext.textContent = todo.content;
  todoContext.addEventListener("dblclick", async function (element) {
    // async server call first call first
    await todoApi.modTodo(index);

    const isComplete = todo.isComplete;
    if (isComplete) {
      //todoContext.style.color = "black";
      todoContext.classList.add("black");
    } else {
      //todoContext.style.color = "red";
      todoContext.classList.add("red");
    }
    todo.isComplete = !isComplete;
  });
  deleteButton.textContent = "delete todo";
  deleteButton.addEventListener("click", async function (element) {
    // async call first
    await todoApi.delTodo(index);
    block.remove();
    todoCount--;
  });
  block.append(todoContext);
  block.append(deleteButton);
  todos.append(block);
};

allTodos.todos.map((element, index) => {
  appendTodoInUI(element, index);
});

const newTodos = { content: "idiot", isCompleted: false };

const onAddTodos = async (todotask) => {
  await todoApi.addTodo(todotask);
};

const onClickAddTodos = async () => {
  const todoInputValue = document.getElementById("todoInput");
  const newTodo = { content: todoInputValue.value, isCompleted: false };
  // async call to mocked api
  await todoApi.addTodo(newTodo);
  // if success, append to UI
  appendTodoInUI(newTodo, todoCount);
  todoCount++;
  todoInputValue.value = "";
};

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", onClickAddTodos);
