// Store tasks

let tasks = [];


// Add a new task

function addTask() {

    const input = document.getElementById("taskInput");

    const taskText = input.value.trim();


    if (taskText === "") {

        alert("Please enter a task");

        return;
    }


    tasks.push(taskText);

    input.value = "";

    displayTasks();
}


// Display tasks

function displayTasks() {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";


    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        li.textContent = "☐ " + task;


        li.onclick = function() {

            li.textContent = "✅ " + task;

            li.style.textDecoration = "line-through";

            updateTaskCount();

        };


        taskList.appendChild(li);

    });


    updateTaskCount();
}


// Update completed task count

function updateTaskCount() {

    const completedTasks =
        document.querySelectorAll(
            '#taskList li[style*="line-through"]'
        ).length;


    document.getElementById("taskCount").textContent =
        completedTasks;
}


// Dark mode

const themeButton =
    document.getElementById("themeBtn");


themeButton.onclick = function() {

    document.body.classList.toggle("dark");

};