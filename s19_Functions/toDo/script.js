let input = console.log("What would you like to do?");

const todos = ["Collect Eggs", "Clean house"];

while (input !== "quit" && input !== "q") {
  input = prompt("What would you like to do?");
  if (input === "list") {
    console.log("*************************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*************************");
  } else if (input === "new") {
    const newTodo = prompt("Enter a new todo item.");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    const delTodo = prompt("What are you trying to delete?");
  }
}

console.log("You quit the app.");
