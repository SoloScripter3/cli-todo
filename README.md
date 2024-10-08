# CLI Todo App

This is a simple Command Line Interface (CLI) Todo app built with JavaScript using the `commander` package. The app allows users to manage their tasks directly from the terminal.

## Features

- Add a new task to your todo list.
- Mark tasks as complete.
- Remove tasks from your list.
- List all tasks, with an indication of which ones are completed.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SoloScripter3/cli-todo.git
   ```

2. Navigate into the project directory:

   ```bash
   cd cli-todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app:
   ```bash
   node index.js
   ```

## Usage

Below are the available commands for managing your todos.

### Add a task

To add a new task to your todo list, use the following command:

```bash
node index.js add "Your task description"
```

### Update a task

To update an existing task, use the update command along with the task index:

```bash
node index.js update <index> <task>
```

#### Example:

```bash
node index.js update 2 "Finish writing documentation"
```

### Delete a Task

To remove a task from the list, use the remove command along with the task index:

```bash
node index.js remove <task_index>
```

#### Example:

```bash
node index.js remove 1
```

### Display all Tasks

To list all tasks, including completed and pending ones, use the show command:

```bash
node index.js show
```
