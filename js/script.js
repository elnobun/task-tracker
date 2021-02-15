// Declare an array of tasks objects
const tasks = [
    {
        id: 1,
        text: 'Food Shopping',
        completed: false,
    },
    {
        id: 2,
        text: 'Meeting at school',
        completed: true,
    },
    {
        id: 3,
        text: 'Doctors Appointment',
        completed: false,
    },
    {
        id: 4,
        text: 'Go to gym',
        completed: true,
    },
]


// Generate Task DOM
const generateTaskDOM = (task) => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const buttonEl = document.createElement("button")

    // add class: "task__list" to li element
    li.classList.add("task__list")

    // create span tag
    span.textContent = task.text
    span.setAttribute("id", "task__list--text")
    li.appendChild(span)

    //create button tag
    buttonEl.textContent = "delete"
    buttonEl.classList.add("button", "button--text")
    li.appendChild(buttonEl)

    // Event Listeners
    buttonEl.addEventListener("click", () => {
        console.log(task.id)
    })

    return li
}

// Render Tasks
const renderTasksDOM = (tasks) => {
    // Make a copy of original array, to avoid mutating original array
    const taskArray = [...tasks]

    // get the tasks DOM element
    const tasksEl = document.querySelector('#tasks')

    // Clear innerHTML
    tasksEl.innerHTML = ""

    // check if the array is empty
    if (taskArray.length > 0) {
        // if array is not empty, show the list of tasks
        taskArray.forEach(task => {
            // Task list
            tasksEl.appendChild(generateTaskDOM(task))
        })
    } else {
        // else, display a message; "No task available"
        const message = document.createElement("p")
        message.textContent = "No task available"
        tasksEl.appendChild(message)
    }
}

renderTasksDOM(tasks)
