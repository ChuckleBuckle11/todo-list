/* eslint-disable */
const mainContent = document.querySelector(`#main-content`);

function selectProject(project){
    mainContent.textContent = ""; //flushes #main-content
    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('title');
    projectTitle.id = "project-title"
    projectTitle.textContent = project.getTitle();

    const toDoContainer = document.createElement('div')
    toDoContainer.id = `to-do-container`;
    toDoContainer.textContent = "TODOS GO HERE";
    
    mainContent.appendChild(projectTitle);
    mainContent.appendChild(toDoContainer);

    loadToDos(project);
    
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
    console.log('test')
    const toDoContainer = document.querySelector(`#to-do-container`);
    let i = 0;
    for (let task of project.getTasks()){
        const toDo = document.createElement(`div`);
        toDo.classList.add('to-do');
        toDo.id = `to-do-${i};`
        toDo.textContent = task.getTitle();


        i++;

        toDoContainer.appendChild(toDo);
    }
    

}
export {selectProject}

