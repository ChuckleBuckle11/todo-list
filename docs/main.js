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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n/* eslint-disable quotes */\n\n\n/* eslint-disable */\n// To-do list app by Chucklebuckle\n\n// Brainstorm:\n// 1. to-do items should have:\n    // -title\n    // -description\n    // -dueDate\n    // -priority\n    // -notes\n    // -checklist\n// 2. Projects should be classes that to-dos get put into\n    // - users should be able to move to-dos between projects\n\ndocument.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init)\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/Project */ \"./src/modules/projects/Project.js\");\n/* harmony import */ var _main_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-view */ \"./src/modules/main-view.js\");\n/* eslint-disable */\n\n\n\n\nconst projectList = new _projects_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList();\nconst defaultProject = new _projects_Project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Default Project\", \"Default Description\",\"\",\"\",\"\",\"\");\nconst project2 = new _projects_Project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Project 2\", \"Default Description\",\"\",\"\",\"\",\"\");\nconst projectsListContainer = document.querySelector(\"#projects-list\");\n\n\n\n\nfunction init(){\n    projectList.addProject(defaultProject);\n    projectList.addProject(project2);\n    updateProjectsList();\n    (0,_main_view__WEBPACK_IMPORTED_MODULE_1__.selectProject)(defaultProject);\n\n    console.log(projectList.getProject('Project 2'))\n    \n}\n\nfunction updateProjectsList(){\n    const listofProjects = projectList.getProjectList();\n    projectsListContainer.textContent = \"\"\n\n    listofProjects.forEach((project)=>{\n        const projectContainer = document.createElement('p');\n        projectContainer.classList.add(\"project\");\n        projectContainer.id = project.getTitle();\n        projectContainer.textContent = project.getTitle();\n\n        // onClick switch to Project\n        projectContainer.addEventListener('click',(e) => {\n            (0,_main_view__WEBPACK_IMPORTED_MODULE_1__.selectProject)(projectList.getProject(e.target.id))\n        });\n\n        projectsListContainer.appendChild(projectContainer);\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({init});\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/main-view.js":
/*!**********************************!*\
  !*** ./src/modules/main-view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectProject\": () => (/* binding */ selectProject)\n/* harmony export */ });\n/* eslint-disable */\nconst mainContent = document.querySelector(`#main-content`);\n\nfunction selectProject(project){\n    mainContent.textContent = \"\"; //flushes #main-content\n    const projectTitle = document.createElement('h1');\n    projectTitle.classList.add('title');\n    projectTitle.id = \"project-title\"\n    projectTitle.textContent = project.getTitle();\n\n    const toDoContainer = document.createElement('div')\n    toDoContainer.textContent = \"TODOS GO HERE\"\n\n    mainContent.appendChild(projectTitle);\n    mainContent.appendChild(toDoContainer);\n    \n    const projectinList = document.getElementById(project.getTitle());\n    projectinList.classList.add('active');\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/main-view.js?");

/***/ }),

/***/ "./src/modules/projects/Project.js":
/*!*****************************************!*\
  !*** ./src/modules/projects/Project.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* eslint-disable */\n\nclass ProjectList{\n    constructor(){\n        this.projectList = [];\n    }\n\n    addProject(project){this.projectList.push(project)};\n    getProjectList(){return this.projectList};\n    getProject(str){\n        for (let project of this.projectList){\n            if (project.title == str){\n                return project;\n            }\n        }\n        return null;\n    }\n}\n\nclass Task{\n    constructor(title,dueDate){\n        this.title = title;\n        this.dueDate = dueDate;\n    }\n}\n\nclass Project{\n    constructor(title, desc, dueDate=null, priority=null, notes=null, checklist=null){\n        this.title = title;\n        this.desc = desc;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.checklist = checklist;\n        this.taskList = [];\n    }\n\n    setTitle(title){this.title = title};\n    getTitle(){return this.title};\n    setDesc(desc){this.desc = desc};\n    getDesc(){return this.desc};\n    getTasks(){return this.taskList};\n    addTask(task){taskList.push(task)};\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projects/Project.js?");

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