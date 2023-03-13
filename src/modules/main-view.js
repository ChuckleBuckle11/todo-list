/* eslint-disable */
import { showTaskView, hideTaskView, getProjectList } from "./UI";
const mainContent = document.querySelector(`#main-content`);

function selectProject(project){
    mainContent.textContent = ""; //flushes #main-content

    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('title');
    projectTitle.id = "project-title"
    projectTitle.textContent = project.getTitle();

    

    mainContent.appendChild(projectTitle);
    

    // Load to-dos on the main page
    
    loadToDos(project);
    addAddTaskButton();
    selectSideBarActive(project);

    
    
}


function selectSideBarActive(project){
//flushes any active projects
const projectList = document.querySelectorAll('.list-project');
projectList.forEach((item) => {
    item.classList.remove("active-project");
})
//Sets active class to current projects
const projectinList = document.getElementById(project.getTitle());
projectinList.classList.add('active-project');
}

// Loads the to-dos in the main page

function loadToDos(project){
    // creates table header first
    createToDoHeader();


    const toDoContainer = document.createElement('div')
    toDoContainer.id = `to-do-container`;
    mainContent.appendChild(toDoContainer);

    let i = 0;
    for (let task of project.getTasks()){
        // toDo container
        const toDo = document.createElement(`div`);
        toDo.classList.add('to-do');
        toDo.id = `to-do-${i};`

        //completeButton
        const completeButton = document.createElement('i');
        completeButton.classList.add(`fa-regular`,`fa-circle`, `task-complete-button`);
        completeButton.addEventListener('click', markTaskComplete);
        completeButton.setAttribute('data-index',i);
        // toDO text
        const toDoTitle = document.createElement('span');
        toDoTitle.classList.add('to-do-title');
        toDoTitle.id = `to-do-title-${i}`
        toDoTitle.textContent = task.getTitle();
      
        toDo.appendChild(completeButton);
        toDo.appendChild(toDoTitle);
        toDoContainer.appendChild(toDo);

        i++;
    }
}

function createToDoHeader(){
    const toDoHeader = document.createElement(`div`);
    toDoHeader.id = "to-do-header";
    mainContent.appendChild(toDoHeader);

    const toDoHeaderTitle = document.createElement(`span`);
    toDoHeaderTitle.id = "to-do-header-title";
    toDoHeaderTitle.textContent = "Title";

    const toDoHeaderDueDate = document.createElement(`span`);
    toDoHeaderDueDate.id = "to-do-header-duedate";
    toDoHeaderDueDate.textContent = "Due Date";

    const toDoHeaderPriority = document.createElement(`span`);
    toDoHeaderPriority.id = "to-do-header-priority";
    toDoHeaderPriority.textContent = "Priority";

    toDoHeader.appendChild(toDoHeaderTitle);
    toDoHeader.appendChild(toDoHeaderDueDate);
    toDoHeader.appendChild(toDoHeaderPriority);

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
    addTaskContainer.addEventListener('click', showTaskView)
}

function markTaskComplete(event){
    const button = event.target;

    const buttonDataIndex = button.getAttribute("data-index");
    const toDoTitle = document.querySelector(`#to-do-title-${buttonDataIndex}`);
    toDoTitle.classList.add('complete')
    
    button.classList.remove('fa-circle');
    button.classList.add('fa-circle-check')
}
export {selectProject}

