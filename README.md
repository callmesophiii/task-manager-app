# Task Manager App

This React + TypeScript project implements a Task Management application demonstrating:

- Dynamic list rendering with proper keys
- Conditional rendering based on task status and priority
- Filtering tasks by status and priority
- Component composition and prop handling
- Type safety with TypeScript interfaces


## Components
### TaskItem
- Displays an individual task.
- Allows changing the status via a dropdown.
- Allows deleting a task with a button.
- Shows different styles based on task priority and completion status.

### TaskFilter
- Provides UI controls (dropdowns) to filter tasks by:
- Status: pending, in-progress, completed
- Priority: low, medium, high
- Calls a callback prop when filters change.

### TaskList
- Manages the filtered list of tasks.
- Uses TaskFilter to get current filter selections.
- Renders a list of TaskItem components matching the filters.
- Shows a message if no tasks match filters.

### App
- Root component.
- Maintains the full list of tasks in state.
- Implements handlers to update task status and delete tasks.
- Passes tasks and handlers down to TaskList.


## How to Use
- Filter tasks using dropdowns for status and priority.

- Change a task's status directly from the task item.

- Delete tasks using the red "Delete" button.

- The list updates dynamically based on your changes and filters.


## Project Setup

1. Clone the repository:
- git clone https://github.com/yourusername/task-manager.git
- cd task-manager

2. Install dependencies:

- npm install

3. Start the development server:

- npm run dev
