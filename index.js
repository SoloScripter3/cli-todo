const { Command } = require("commander");
const fs = require("fs");

const program = new Command();

const todosFile = "./todos.json";

//loading the tasks
const loadTodos = () => {
  if (!fs.existsSync(todosFile)) {
    return [];
  }
  try {
    const fileData = fs.readFileSync(todosFile, "utf-8");
    return JSON.parse(fileData);
  } catch (err) {
    console.log(err);
    return [];
  }
};

//saving the tasks into the json file
const saveTodos = (todos) => {
  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));
};

//display function
const display = (todos) => {
  todos.forEach((task) => {
    if (task.done) {
      console.log(`✔ ${task.task}`);
    } else {
      console.log(`✘ ${task.task}`);
    }
  });
};

program.version("1.0.0");

program
  .command("add <task>")
  .description("adds the task to the file")
  .action((task) => {
    const todos = loadTodos();
    todos.push({ task, done: false });
    saveTodos(todos);
    console.log(`The task is added successfully`);
  });

//Remove command
program
  .command("remove <index>")
  .description("marks the task as completed")
  .action((index) => {
    let idx = parseInt(index, 10) - 1;
    const todos = loadTodos();
    if (idx >= 0 && idx < todos.length) {
      let removedTask = todos.splice(idx, 1);
      saveTodos(todos);
      console.log(`Removed ${removedTask[0].task}`);
    } else {
      console.log("invalid index");
    }
  });

//mark as done
program
  .command("done <index>")
  .description("marks the task as completed")
  .action((index) => {
    const idx = parseInt(index, 10) - 1;
    const todos = loadTodos();
    if (idx >= 0 && idx < todos.length) {
      for (let i = 0; i < todos.length; i++) {
        if (i === idx) {
          todos[i].done = true;
        }
        saveTodos(todos);
      }
    } else {
      console.log("invalaid index");
    }
  });

//display the tasks list
program
  .command("show")
  .description("shows all the tasks in the list")
  .action(() => {
    const todos = loadTodos();
    display(todos);
  });

program.parse(process.argv);
