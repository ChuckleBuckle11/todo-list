/* eslint-disable */
import {showProjectView, hideProjectView, hideTaskView} from "./UI"
function initDOMEvents(){
    // handles Add Project Button onclick functions
    const addProjectButton = document.querySelector(`.add-project-button`);
    addProjectButton.addEventListener('click', showProjectView);
    
    const cancelAddProjectButton = document.querySelector(`#add-project-cancel-button`);
    console.log(cancelAddProjectButton)
    cancelAddProjectButton.addEventListener('click',hideProjectView);

    // handles hiding Add Task View onclick functions    
    const cancelAddTaskButton = document.querySelector(`#add-task-cancel-button`);
    console.log(cancelAddTaskButton)
    cancelAddTaskButton.addEventListener('click',hideTaskView);
}

export {initDOMEvents};