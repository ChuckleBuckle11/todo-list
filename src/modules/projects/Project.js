/* eslint-disable */

class ProjectList{
    constructor(){
        this.projectList = [];
    }

    getProjectList(){return this.projectList};
    getProject(str){
        for (let project of this.projectList){
            if (project.title == str){
                return project;
            }
        }
        return null;
    }
    addProject(project){this.projectList.push(project)};
    removeProject(str){
        for (let project of this.projectList){
            console.log(project.title);
            if (project.title == str){
                this.projectList.splice(this.projectList.indexOf(project),1);
            }
        }
        return null;
    }
}

class Task{
    constructor(title,dueDate,priority=null, notes=null, checklist=null, completed = false){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = completed;
    }
    setTitle(title){this.title = title};
    getTitle(){return this.title};
}

class Project{
    constructor(title, desc, dueDate=null, priority=null, notes=null, checklist=null){
        this.title = title;
        this.desc = desc;
        this.taskList = [];
    }

    setTitle(title){this.title = title};
    getTitle(){return this.title};
    setDesc(desc){this.desc = desc};
    getDesc(){return this.desc};
    getTasks(){return this.taskList};
    addTask(task){this.taskList.push(task)};

}

export {ProjectList, Task, Project}