let input = console.log("What would you like to do?");

const todos = ["Collect Eggs", "Clean house"];

while (input !== "quit") {
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
    // use parseInt to convert to integer '23' -> 23
    const delTodo = parseInt(prompt("What are you trying to delete?"));

    // if NOT NaN then delete
    if (!Number.isNaN(delTodo)) {
      //will delete at the provided index for 1 object (x,1)
      const deleted = todos.splice(delTodo, 1);
      console.log(`${deleted} was deleted from the list`);
    }
  }
}

console.log("You quit the app.");
