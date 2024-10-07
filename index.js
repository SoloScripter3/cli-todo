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

program.parse(process.argv);
