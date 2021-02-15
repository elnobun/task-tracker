"use strict"

// Declare an array of tasks objects
import { getTasks, renderTasksDOM } from './task-functions.js'

const tasks = getTasks()
const filters = {
    searchText: '',
}

// Initialize the application
renderTasksDOM(tasks, filters)



// Search Tasks
const searchTasks = document.querySelector("#search-task")
searchTasks.addEventListener("input", (e) => {
    filters.searchText = e.target.value
    renderTasksDOM(tasks, filters)
})
