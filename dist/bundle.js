/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/module.2/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/module.2/index.js":
/*!*******************************!*\
  !*** ./src/module.2/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(count);\nvar count = 100; // for (let i = 0; i <= 10; i++) {\n//     setTimeout(function() { console.log(i); }, 0);\n// }\n\nvar sum = 1;\nvar sum = 2;\nconsole.log(sum);\n\nif (true) {\n  var sum = 3;\n}\n\nconsole.log(sum); // let age = 11;\n//\n// let age = 22;\n//\n// if(true){\n//     let age = 33;\n// }\n//\n// console.log(age);\n// const t = 1;\n//\n// t = 22\n//\n// console.log(t);\n//\n// const Iphone = {\n//     size: 100,\n//     color: 'black',\n// }\n//\n// Iphone = 1;\n//\n// Iphone.color = 'red';\n// for (var i = 0; i <= 10; i++) {\n//     (function (index) {\n//         setTimeout(function () {\n//             console.log(index);\n//         }, 0);\n//     })(i);\n// }\n// const option = {\n//     name: 111,\n//     width: 222,\n//     age: 333,\n// };\n//\n// render(option);\n//\n// function  render({name, age ,width }) {\n//\n//     console.log(name, age ,width);\n// }\n\nconst option = [1, 2, 3];\nrender(option);\n\nfunction render([name, age, width]) {\n  console.log(name, age, width);\n}\n\n//# sourceURL=webpack:///./src/module.2/index.js?");

/***/ })

/******/ });