/* eslint-disable */
const mainContent = document.querySelector(`#main-content`);

function selectProject(project){
    mainContent.textContent = ""; //flushes #main-content
    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('title');
    projectTitle.id = "project-title"
    projectTitle.textContent = project.getTitle();

    const toDoContainer = document.createElement('div')
    toDoContainer.textContent = "TODOS GO HERE"

    mainContent.appendChild(projectTitle);
    mainContent.appendChild(toDoContainer);
    
    //flushes any active projects
    const projectList = document.querySelectorAll('.list-project');
    projectList.forEach((item) => {
        console.log(item);
        item.classList.remove("active");
    })
    //Sets active class to current projects
    const projectinList = document.getElementById(project.getTitle());
    projectinList.classList.add('active');
}

export {selectProject}

