/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n/* eslint-disable quotes */\n\n\n/* eslint-disable */\n// To-do list app by Chucklebuckle\n\n// Brainstorm:\n// 1. to-do items should have:\n    // -title\n    // -description\n    // -dueDate\n    // -priority\n    // -notes\n    // -checklist\n// 2. Projects should be classes that to-dos get put into\n    // - users should be able to move to-dos between projects\n\ndocument.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__.init)\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideProjectView\": () => (/* binding */ hideProjectView),\n/* harmony export */   \"hideTaskView\": () => (/* binding */ hideTaskView),\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"showProjectView\": () => (/* binding */ showProjectView),\n/* harmony export */   \"showTaskView\": () => (/* binding */ showTaskView)\n/* harmony export */ });\n/* harmony import */ var _projects_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/Project */ \"./src/modules/projects/Project.js\");\n/* harmony import */ var _main_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-view */ \"./src/modules/main-view.js\");\n/* harmony import */ var _domEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domEvents */ \"./src/modules/domEvents.js\");\n/* eslint-disable */\n\n\n\n\n// Sets the default projects \nconst projectList = new _projects_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList();\nconst defaultProject = new _projects_Project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Default Project\", \"Default Description\");\nconst defaultTask1 = new _projects_Project__WEBPACK_IMPORTED_MODULE_0__.Task('Task1', '28/2/2023');\nconst defaultTask2 = new _projects_Project__WEBPACK_IMPORTED_MODULE_0__.Task('Task2', '28/2/2023');\ndefaultProject.addTask(defaultTask1);\ndefaultProject.addTask(defaultTask2);\nconst project2 = new _projects_Project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Project 2\", \"Default Description\");\nproject2.addTask(defaultProject);\nconst projectsListContainer = document.querySelector(\"#projects-list\");\n\nfunction init() {\n    projectList.addProject(defaultProject);\n    projectList.addProject(project2);\n    initProjectsList();\n    (0,_domEvents__WEBPACK_IMPORTED_MODULE_2__.initDOMEvents)();\n    (0,_main_view__WEBPACK_IMPORTED_MODULE_1__.selectProject)(defaultProject);\n    // createAddProjectView();\n\n}\n\nfunction initProjectsList() {\n    const listofProjects = projectList.getProjectList();\n    projectsListContainer.textContent = \"\"\n\n    listofProjects.forEach((project) => {\n        const projectContainer = document.createElement('p');\n        projectContainer.classList.add(\"list-project\");\n        projectContainer.id = project.getTitle();\n        projectContainer.textContent = project.getTitle();\n\n        // onClick switch to Project\n        projectContainer.addEventListener('click', (e) => {\n            (0,_main_view__WEBPACK_IMPORTED_MODULE_1__.selectProject)(projectList.getProject(e.target.id))\n        });\n\n        // creates edit and delete buttons in projects list\n        const listButtonContainer = document.createElement('div');\n        listButtonContainer.classList.add('list-buttons')\n        projectContainer.appendChild(listButtonContainer);\n\n        const editButton = document.createElement(`i`);\n        editButton.classList.add(`fa-solid`, `fa-pen-to-square`, `edit-button`);\n        const deleteButton = document.createElement(`i`);\n        deleteButton.classList.add(`fa-solid`, `fa-trash-can`, `delete-button`);\n\n        listButtonContainer.appendChild(editButton);\n        listButtonContainer.appendChild(deleteButton);\n        projectsListContainer.appendChild(projectContainer);\n    })\n    \n}\n\nfunction showProjectView() {\n    const addProjectViewContainer = document.querySelector(`#add-project-view-container`);\n    addProjectViewContainer.classList.add('active');\n}\n\nfunction hideProjectView() {\n    const addProjectViewContainer = document.querySelector(`#add-project-view-container`);\n    addProjectViewContainer.classList.remove('active');\n}\n\nfunction showTaskView() {\n    console.log('show')\n    const addTaskViewContainer = document.querySelector(`#add-task-view-container`);\n    addTaskViewContainer.classList.add('active');\n}\n\nfunction hideTaskView() {\n    const addTaskViewContainer = document.querySelector(`#add-task-view-container`);\n    addTaskViewContainer.classList.remove('active');\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/domEvents.js":
/*!**********************************!*\
  !*** ./src/modules/domEvents.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initDOMEvents\": () => (/* binding */ initDOMEvents)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/modules/UI.js\");\n/* eslint-disable */\n\nfunction initDOMEvents(){\n    // handles Add Project Button onclick functions\n    const addProjectButton = document.querySelector(`.add-project-button`);\n    addProjectButton.addEventListener('click', _UI__WEBPACK_IMPORTED_MODULE_0__.showProjectView);\n    \n    const cancelAddProjectButton = document.querySelector(`#add-project-cancel-button`);\n    console.log(cancelAddProjectButton)\n    cancelAddProjectButton.addEventListener('click',_UI__WEBPACK_IMPORTED_MODULE_0__.hideProjectView);\n\n    // handles hiding Add Task View onclick functions    \n    const cancelAddTaskButton = document.querySelector(`#add-task-cancel-button`);\n    console.log(cancelAddTaskButton)\n    cancelAddTaskButton.addEventListener('click',_UI__WEBPACK_IMPORTED_MODULE_0__.hideTaskView);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/domEvents.js?");

/***/ }),

/***/ "./src/modules/main-view.js":
/*!**********************************!*\
  !*** ./src/modules/main-view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectProject\": () => (/* binding */ selectProject)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/modules/UI.js\");\n/* eslint-disable */\n\nconst mainContent = document.querySelector(`#main-content`);\n\nfunction selectProject(project){\n    mainContent.textContent = \"\"; //flushes #main-content\n\n    const projectTitle = document.createElement('h1');\n    projectTitle.classList.add('title');\n    projectTitle.id = \"project-title\"\n    projectTitle.textContent = project.getTitle();\n\n    const toDoContainer = document.createElement('div')\n    toDoContainer.id = `to-do-container`;\n\n    mainContent.appendChild(projectTitle);\n    mainContent.appendChild(toDoContainer);\n\n    // Load to-dos on the main page\n    loadToDos(project);\n    addAddTaskButton();\n    selectSideBarActive(project);\n\n    \n    \n}\n\n\nfunction selectSideBarActive(project){\n//flushes any active projects\nconst projectList = document.querySelectorAll('.list-project');\nprojectList.forEach((item) => {\n    item.classList.remove(\"active\");\n})\n//Sets active class to current projects\nconst projectinList = document.getElementById(project.getTitle());\nprojectinList.classList.add('active');\n}\n\n// Loads the to-dos in the main page\nfunction loadToDos(project){\n    const toDoContainer = document.querySelector(`#to-do-container`);\n    let i = 0;\n    for (let task of project.getTasks()){\n        // toDo container\n        const toDo = document.createElement(`div`);\n        toDo.classList.add('to-do');\n        toDo.id = `to-do-${i};`\n\n        //completeButton\n        const completeButton = document.createElement('i');\n        completeButton.classList.add(`fa-regular`,`fa-circle-check`, `task-complete-button`);\n\n        // toDO text\n        const toDoTitle = document.createElement('span');\n        toDoTitle.classList.add('to-do-title');\n        toDoTitle.textContent = task.getTitle();\n      \n        toDo.appendChild(completeButton);\n        toDo.appendChild(toDoTitle);\n        toDoContainer.appendChild(toDo);\n\n        i++;\n    }\n}\n\n\nfunction addAddTaskButton(){\n    const addTaskContainer = document.createElement('div');\n    addTaskContainer.classList.add('add-task-container');\n   \n\n    const icon = document.createElement('i');\n    icon.classList.add('fa-solid','fa-plus','add-task-icon');\n\n    const addTaskText = document.createElement('span');\n    addTaskText.id = 'add-task-text';\n    addTaskText.textContent = \"Add Task\"\n\n    addTaskContainer.appendChild(icon);\n    addTaskContainer.appendChild(addTaskText);\n    mainContent.appendChild(addTaskContainer);\n\n    // If container is clicked, open the Add Task Viewbox\n    console.log('asdf')\n    addTaskContainer.addEventListener('click', _UI__WEBPACK_IMPORTED_MODULE_0__.showTaskView)\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/main-view.js?");

/***/ }),

/***/ "./src/modules/projects/Project.js":
/*!*****************************************!*\
  !*** ./src/modules/projects/Project.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* eslint-disable */\n\nclass ProjectList{\n    constructor(){\n        this.projectList = [];\n    }\n\n    addProject(project){this.projectList.push(project)};\n    getProjectList(){return this.projectList};\n    getProject(str){\n        for (let project of this.projectList){\n            if (project.title == str){\n                return project;\n            }\n        }\n        return null;\n    }\n}\n\nclass Task{\n    constructor(title,dueDate,priority=null, notes=null, checklist=null){\n        this.title = title;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.checklist = checklist;\n    }\n    setTitle(title){this.title = title};\n    getTitle(){return this.title};\n}\n\nclass Project{\n    constructor(title, desc, dueDate=null, priority=null, notes=null, checklist=null){\n        this.title = title;\n        this.desc = desc;\n        this.taskList = [];\n    }\n\n    setTitle(title){this.title = title};\n    getTitle(){return this.title};\n    setDesc(desc){this.desc = desc};\n    getDesc(){return this.desc};\n    getTasks(){return this.taskList};\n    addTask(task){this.taskList.push(task)};\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projects/Project.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;