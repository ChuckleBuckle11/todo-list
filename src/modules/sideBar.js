/* eslint-disable */
import {Project} from "./projects/Project";
const sideBar = document.querySelector(`#sidebar`);
const projectsList = document.querySelector("#projects-menu")
//initialization for sidebar
function createSideBar(){
    const defaultProject = new Project("Default Project", "Default Description","","","","");
    addToProjectList(defaultProject);
}


function addToProjectList(project){
    console.log(project.getTitle())
    const projectContainer = document.createElement('p');
    projectContainer.classList.add("project");
    projectContainer.id = `${project.getTitle()}`;
    projectContainer.textContent = project.getTitle();
    projectsList.appendChild(projectContainer);

}


export default createSideBar;