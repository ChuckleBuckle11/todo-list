/* eslint-disable */

function initDOMEvents(){
    // handles Add Project Button onclick functions
    const addProjectButton = document.querySelector(`.add-project-button`);
    addProjectButton.addEventListener('click', showProjectView);
    
    const cancelAddProjectButton = document.querySelector(`#add-project-cancel-button`);
    console.log(cancelAddProjectButton)
    cancelAddProjectButton.addEventListener('click',hideProjectView);
}


function showProjectView() {
    const addProjectViewContainer = document.querySelector(`#add-project-view-container`);
    addProjectViewContainer.classList.add('active');
}

function hideProjectView() {
    const addProjectViewContainer = document.querySelector(`#add-project-view-container`);
    addProjectViewContainer.classList.remove('active');
}

export {initDOMEvents};