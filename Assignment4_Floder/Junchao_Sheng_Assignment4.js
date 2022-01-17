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
      todoContext.style.color = "black";
    } else {
      todoContext.style.color = "red";
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
  const text = document.getElementById("todoInput").value;
  const newTodos = { content: text, isCompleted: false };
  // async call to mocked api
  await todoApi.addTodo(newTodos);
  // if success, append to UI
  appendTodoInUI(newTodos, todoCount);
  todoCount++;
};

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", onClickAddTodos);
