import { tasks } from './data.js'

// Get Tasks
export const getTasks = () => {
    return tasks
}

// Generate Task DOM
const generateTaskDOM = (task) => {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const buttonEl = document.createElement('button')

    // add class: "task__list" to li element
    li.classList.add('task__list')

    // create span tag
    span.textContent = task.text
    span.setAttribute('id', 'task__list--text')
    li.appendChild(span)

    //create button tag
    buttonEl.textContent = 'delete'
    buttonEl.classList.add('button', 'button--text')
    li.appendChild(buttonEl)

    // Event Listeners
    buttonEl.addEventListener('click', () => {
        console.log(task.id)
    })

    return li
}

// Generate Incomplete Tasks summary message
const getSummaryDOM = (summary) => {
    // create an h3 element
    const taskSummary = document.createElement('h3')
    // set the style to "summary__message"
    taskSummary.classList.add('summary__message')
    // set vowels
    const taskChar = summary.length > 1 ? 'Tasks' : 'Task'
    // set the content to the message: "You have ? tasks left
    taskSummary.textContent = `You have ${summary.length} ${taskChar} left`
    return taskSummary
}

// Render Tasks
export const renderTasksDOM = (tasks, filters) => {
    // Make a copy of original array and filters, to avoid mutating original.
    const taskArray = [...tasks]
    const filterObj = { ...filters }

    // get the tasks DOM element
    const tasksEl = document.querySelector('#tasks')
    // get the summary DOM element
    const summaryEl = document.querySelector('#summary')

    // Filter tasks
    const filteredTasks = taskArray.filter(task => {
        // check if the searched task matches the task text, and return it
        const textMatch = task.text.toLowerCase().
            includes(filterObj.searchText.toLowerCase())
        return textMatch
    })

    // Get incomplete tasks
    const incompleteTasks = filteredTasks.filter(task => !task.completed)

    // Clear innerHTML
    tasksEl.innerHTML = ''
    summaryEl.innerHTML = ''

    // Filtered tasks summary
    summaryEl.appendChild(getSummaryDOM(incompleteTasks))

    // check if the array is empty
    if (filteredTasks.length > 0) {
        // if array is not empty, show the list of tasks
        // use filteredTask, to also show tasks filtered
        filteredTasks.forEach(task => {
            // Task list
            tasksEl.appendChild(generateTaskDOM(task))
        })
    } else {
        // else, display a message; "No task available"
        const message = document.createElement('p')
        message.textContent = 'No task available'
        tasksEl.appendChild(message)
    }
}
