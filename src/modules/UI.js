/* eslint-disable */
import { ProjectList, Project } from "./projects/Project";
import { selectProject } from "./main-view";


const projectList = new ProjectList();
const defaultProject = new Project("Default Project", "Default Description","","","","");
const project2 = new Project("Project 2", "Default Description","","","","");
const projectsListContainer = document.querySelector("#projects-list");




function init(){
    projectList.addProject(defaultProject);
    projectList.addProject(project2);
    updateProjectsList();
    selectProject(defaultProject);

    console.log(projectList.getProject('Project 2'))
    
}

function updateProjectsList(){
    const listofProjects = projectList.getProjectList();
    projectsListContainer.textContent = ""

    listofProjects.forEach((project)=>{
        const projectContainer = document.createElement('p');
        projectContainer.classList.add("project");
        projectContainer.id = project.getTitle();
        projectContainer.textContent = project.getTitle();

        // onClick switch to Project
        projectContainer.addEventListener('click',(e) => {
            selectProject(projectList.getProject(e.target.id))
        });

        projectsListContainer.appendChild(projectContainer);
    })
}
export default {init}