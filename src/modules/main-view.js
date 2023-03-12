/* eslint-disable */
import { showTaskView, hideTaskView } from "./UI";
const mainContent = document.querySelector(`#main-content`);

function selectProject(project){
    mainContent.textContent = ""; //flushes #main-content

    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('title');
    projectTitle.id = "project-title"
    projectTitle.textContent = project.getTitle();

    const toDoContainer = document.createElement('div')
    toDoContainer.id = `to-do-container`;

    mainContent.appendChild(projectTitle);
    mainContent.appendChild(toDoContainer);

    // Load to-dos on the main page
    loadToDos(project);
    addAddTaskButton();
    selectSideBarActive(project);

    
    
}


function selectSideBarActive(project){
//flushes any active projects
const projectList = document.querySelectorAll('.list-project');
projectList.forEach((item) => {
    item.classList.remove("active");
})
//Sets active class to current projects
const projectinList = document.getElementById(project.getTitle());
projectinList.classList.add('active');
}

// Loads the to-dos in the main page
function loadToDos(project){
    const toDoContainer = document.querySelector(`#to-do-container`);
    let i = 0;
    for (let task of project.getTasks()){
        // toDo container
        const toDo = document.createElement(`div`);
        toDo.classList.add('to-do');
        toDo.id = `to-do-${i};`

        //completeButton
        const completeButton = document.createElement('i');
        completeButton.classList.add(`fa-regular`,`fa-circle-check`, `task-complete-button`);

        // toDO text
        const toDoTitle = document.createElement('span');
        toDoTitle.classList.add('to-do-title');
        toDoTitle.textContent = task.getTitle();
      
        toDo.appendChild(completeButton);
        toDo.appendChild(toDoTitle);
        toDoContainer.appendChild(toDo);

        i++;
    }
}


function addAddTaskButton(){
    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-task-container');
   

    const icon = document.createElement('i');
    icon.classList.add('fa-solid','fa-plus','add-task-icon');

    const addTaskText = document.createElement('span');
    addTaskText.id = 'add-task-text';
    addTaskText.textContent = "Add Task"

    addTaskContainer.appendChild(icon);
    addTaskContainer.appendChild(addTaskText);
    mainContent.appendChild(addTaskContainer);

    // If container is clicked, open the Add Task Viewbox
    console.log('asdf')
    addTaskContainer.addEventListener('click', showTaskView)
}
export {selectProject}

