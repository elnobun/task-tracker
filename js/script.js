// Create an dummy array of tasks
const tasks = [
    {
        title: 'Food shopping',
        completed: false,
    },
    {
        title: 'Meeting at School',
        completed: true,
    },
    {
        title: 'Doctors Appointment',
        completed: true,
    },
    {
        title: 'Go To Gym',
        completed: false,
    },
]

// Render Tasks
const render = (tasks) => {
    // Get the tasks  from DOM
    const taskEl = document.querySelector('#tasks')

    // Check if the array is empty
    if (tasks.length > 0) {
        // If array is not empty, show the content
        tasks.map(task => {
            const taskList = document.createElement('p')
            taskList.textContent = task.title
            taskEl.appendChild(taskList)
        })
    } else {
        // Else show a "No Task" message
        const taskMessage = document.createElement("p")
        taskMessage.textContent = "No Tasks"
        taskEl.appendChild(taskMessage)
    }
}

render(tasks)
