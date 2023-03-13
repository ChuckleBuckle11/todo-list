/* eslint-disable */
import { ProjectList, Project, Task } from "./projects/Project";
import { selectProject } from "./main-view";
import { initDOMEvents } from "./domEvents";

// Sets the default projects 
const projectList = new ProjectList();
const defaultProject = new Project("Default Project", "Default Description");
const defaultTask1 = new Task('Task1', '28/2/2023');
const defaultTask2 = new Task('Task2', '28/2/2023');
defaultProject.addTask(defaultTask1);
defaultProject.addTask(defaultTask2);
const project2 = new Project("Project 2", "Default Description");
project2.addTask(defaultProject);
const projectsListContainer = document.querySelector("#projects-list");



function init() {
    projectList.addProject(defaultProject);
    projectList.addProject(project2);
    initProjectsList();
    initDOMEvents();
    selectProject(defaultProject);
    // createAddProjectView();

}

function initProjectsList() {
    const listofProjects = projectList.getProjectList();
    projectsListContainer.textContent = ""

    listofProjects.forEach((project) => {
        const projectContainer = document.createElement('p');
        projectContainer.classList.add("list-project");
        projectContainer.id = project.getTitle();
        projectContainer.textContent = project.getTitle();

        // onClick switch to Project
        projectContainer.addEventListener('click', (e) => {
            selectProject(projectList.getProject(e.target.id))
        });

        // creates edit and delete buttons in projects list
        const listButtonContainer = document.createElement('div');
        listButtonContainer.classList.add('list-buttons')
        projectContainer.appendChild(listButtonContainer);

        const editButton = document.createElement(`i`);
        editButton.classList.add(`fa-solid`, `fa-pen-to-square`, `edit-button`);
        const deleteButton = document.createElement(`i`);
        deleteButton.classList.add(`fa-solid`, `fa-trash-can`, `delete-button`);

        listButtonContainer.appendChild(editButton);
        listButtonContainer.appendChild(deleteButton);
        projectsListContainer.appendChild(projectContainer);
    })
    
}

function showProjectView() {
    const addProjectViewContainer = document.querySelector(`#add-project-view-container`);
    addProjectViewContainer.classList.add('active');
}

function hideProjectView() {
    const addProjectViewContainer = document.querySelector(`#add-project-view-container`);
    addProjectViewContainer.classList.remove('active');
}

function showTaskView() {
    console.log('show')
    const addTaskViewContainer = document.querySelector(`#add-task-view-container`);
    addTaskViewContainer.classList.add('active');
}

function hideTaskView() {
    const addTaskViewContainer = document.querySelector(`#add-task-view-container`);
    addTaskViewContainer.classList.remove('active');
}

export { 
    init,
    showProjectView,
    hideProjectView,
    showTaskView,
    hideTaskView,
}