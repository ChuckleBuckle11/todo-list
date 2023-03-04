/* eslint-disable */

class ProjectList{
    constructor(){
        this.projectList = [];
    }

    addProject(project){this.projectList.push(project)};
    getProjectList(){return this.projectList};
    getProject(str){
        for (let project of this.projectList){
            if (project.title == str){
                return project;
            }
        }
        return null;
    }
}

class Task{
    constructor(title,dueDate){
        this.title = title;
        this.dueDate = dueDate;
    }
}

class Project{
    constructor(title, desc, dueDate=null, priority=null, notes=null, checklist=null){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.taskList = [];
    }

    setTitle(title){this.title = title};
    getTitle(){return this.title};
    setDesc(desc){this.desc = desc};
    getDesc(){return this.desc};
    getTasks(){return this.taskList};
    addTask(task){taskList.push(task)};

}

export {ProjectList, Task, Project}