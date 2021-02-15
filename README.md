# Task Tracker App

This application is variant of the popular todo application,
but with some extra features that makes it more interesting.

## Tech Stack
- HTML
- CSS (SCSS Preprocessor)
- Vanilla Javascript
- Moment.js

## Product Requirement
- Application can render tasks
- Application can add tasks.
- Application can edit tasks.
- Application can delete tasks.
- Application can display the moment tasks were added and edited.
- Application can sort tasks alphabetically and by last edited.
- Application can filter tasks by searching for tasks, and 
hiding completed tasks.
  
## User Requirement
- User can add tasks
- User can edit task.
- User can delete task.
- User can filter tasks.
- User can toggle task as completed

## Milestones
- [x] Environment Setup.

> HTML Markup
- [x] Header.
- [x] Filters Section.
    - [x] search tasks.
    - [x] sort tasks.
    - [x] toggle tasks.
- [x] Task List Section.
    - [x] add tasks.
    - [ ] edit tasks.
    - [ ] delete tasks.

> Styling
- [x] SCSS base setup.

> Javascript
- [x] Declare an array variable for tasks objects.
- [x] All tasks object should be unique with a `text`, `note` and `completed` property.
- [x] Render the tasks to the DOM.
    - [x] Loop through the array to see if there are tasks.
    - [x] If tasks are available, show the tasks. Otherwise, display the message: "No task available."
    - [x] Wire up the search functionality for searching tasks.
    - [x] Dynamically Show the incomplete tasks left with message: "You have ? tasks left"
    - [ ] Hide completed tasks by toggling "Hide Completed" checkbox 
