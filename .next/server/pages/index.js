/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"thirteen\": \"Home_thirteen__cMI_k\",\n\t\"rotate\": \"Home_rotate____XsI\",\n\t\"content\": \"Home_content__Zy02X\",\n\t\"vercelLogo\": \"Home_vercelLogo__dtSk9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYV9mcm9udGVuZC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/MmZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJjZW50ZXJcIjogXCJIb21lX2NlbnRlcl9fNEJGZ0NcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiLFxuXHRcInRoaXJ0ZWVuXCI6IFwiSG9tZV90aGlydGVlbl9fY01JX2tcIixcblx0XCJyb3RhdGVcIjogXCJIb21lX3JvdGF0ZV9fX19Yc0lcIixcblx0XCJjb250ZW50XCI6IFwiSG9tZV9jb250ZW50X19aeTAyWFwiLFxuXHRcInZlcmNlbExvZ29cIjogXCJIb21lX3ZlcmNlbExvZ29fX2R0U2s5XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// pages/index.js\n\n\n\nconst ApplicationList = ()=>{\n    const [applications, setApplications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [studentId, setStudentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        const response = await fetch(\"http://127.0.0.1:8000/api/applications/\");\n        const data = await response.json();\n        setApplications(data);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"http://127.0.0.1:8000/api/applications/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name,\n                student_id: studentId,\n                email\n            })\n        });\n        if (response.ok) {\n            setName(\"\");\n            setStudentId(\"\");\n            setEmail(\"\");\n            fetchData();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"所有申请\"\n            }, void 0, false, {\n                fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"姓名\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"学号\",\n                        value: studentId,\n                        onChange: (e)=>setStudentId(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        placeholder: \"邮箱\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"提交申请\"\n                    }, void 0, false, {\n                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"姓名\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"学号\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"邮箱\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"简历\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: applications.map((application)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: application.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: application.student_id\n                                    }, void 0, false, {\n                                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: application.email\n                                    }, void 0, false, {\n                                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: application.resume_url && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: `http://127.0.0.1:8000${application.resume_url}`,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: \"查看简历\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, application.id, true, {\n                                fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/quake0day/ga_frontend/pages/index.js\",\n        lineNumber: 47,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUJBQWlCOztBQUVrQztBQUVMO0FBRTlDLE1BQU1JLGtCQUFrQixJQUFNO0lBQzVCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkNDLGdEQUFTQSxDQUFDLElBQU07UUFDZFc7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxZQUFZLFVBQVk7UUFDNUIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1FBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUNoQ1gsZ0JBQWdCVTtJQUNsQjtJQUVBLE1BQU1FLGVBQWUsT0FBT0MsUUFBVTtRQUNwQ0EsTUFBTUMsY0FBYztRQUVwQixNQUFNTixXQUFXLE1BQU1DLE1BQU0sMkNBQTJDO1lBQ3RFTSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJsQjtnQkFDQW1CLFlBQVlqQjtnQkFDWkU7WUFDRjtRQUNGO1FBRUEsSUFBSUcsU0FBU2EsRUFBRSxFQUFFO1lBQ2ZuQixRQUFRO1lBQ1JFLGFBQWE7WUFDYkUsU0FBUztZQUNUQztRQUNGLENBQUM7SUFDSDtJQUVBLHFCQUNJLDhEQUFDZTtRQUFJQyxXQUFXMUIscUVBQVc7O1lBQUU7MEJBRTdCLDhEQUFDNEI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVmOztrQ0FDZCw4REFBQ2dCO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPOUI7d0JBQ1ArQixVQUFVLENBQUNDLElBQU0vQixRQUFRK0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRXpDLDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFDVkMsYUFBWTt3QkFDWkMsT0FBTzVCO3dCQUNQNkIsVUFBVSxDQUFDQyxJQUFNN0IsYUFBYTZCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUU5Qyw4REFBQ0g7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU8xQjt3QkFDUDJCLFVBQVUsQ0FBQ0MsSUFBTTNCLFNBQVMyQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFMUMsOERBQUNJO3dCQUFPTixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRXRCLDhEQUFDTzs7a0NBQ0QsOERBQUNDO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ0M7a0NBQ0V6QyxhQUFhMEMsR0FBRyxDQUFDLENBQUNDLDRCQUNqQiw4REFBQ0o7O2tEQUNDLDhEQUFDSztrREFBSUQsWUFBWXpDLElBQUk7Ozs7OztrREFDckIsOERBQUMwQztrREFBSUQsWUFBWXRCLFVBQVU7Ozs7OztrREFDM0IsOERBQUN1QjtrREFBSUQsWUFBWXJDLEtBQUs7Ozs7OztrREFDdEIsOERBQUNzQztrREFDRUQsWUFBWUUsVUFBVSxrQkFDckIsOERBQUNDOzRDQUFFQyxNQUFNLENBQUMscUJBQXFCLEVBQUVKLFlBQVlFLFVBQVUsQ0FBQyxDQUFDOzRDQUFFVixRQUFPOzRDQUFTYSxLQUFJO3NEQUFzQjs7Ozs7Ozs7Ozs7OytCQU5sR0wsWUFBWU0sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCbkM7QUFFQSxpRUFBZWxELGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYV9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBBcHBsaWNhdGlvbkxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFthcHBsaWNhdGlvbnMsIHNldEFwcGxpY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N0dWRlbnRJZCwgc2V0U3R1ZGVudElkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FwcGxpY2F0aW9ucy8nKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldEFwcGxpY2F0aW9ucyhkYXRhKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9hcHBsaWNhdGlvbnMvJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdHVkZW50X2lkOiBzdHVkZW50SWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHNldE5hbWUoJycpO1xuICAgICAgc2V0U3R1ZGVudElkKCcnKTtcbiAgICAgIHNldEVtYWlsKCcnKTtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT4gey8qIOa3u+WKoOi/meS4qiAqL31cblxuICAgICAgPGgxPuaJgOacieeUs+ivtzwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5aeT5ZCNXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5a2m5Y+3XCJcbiAgICAgICAgICB2YWx1ZT17c3R1ZGVudElkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3R1ZGVudElkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIumCrueusVwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7mj5DkuqTnlLPor7c8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPuWnk+WQjTwvdGg+XG4gICAgICAgICAgICA8dGg+5a2m5Y+3PC90aD5cbiAgICAgICAgICAgIDx0aD7pgq7nrrE8L3RoPlxuICAgICAgICAgICAgPHRoPueugOWOhjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHthcHBsaWNhdGlvbnMubWFwKChhcHBsaWNhdGlvbikgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17YXBwbGljYXRpb24uaWR9PlxuICAgICAgICAgICAgICA8dGQ+e2FwcGxpY2F0aW9uLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnthcHBsaWNhdGlvbi5zdHVkZW50X2lkfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57YXBwbGljYXRpb24uZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIHthcHBsaWNhdGlvbi5yZXN1bWVfdXJsICYmIChcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwOi8vMTI3LjAuMC4xOjgwMDAke2FwcGxpY2F0aW9uLnJlc3VtZV91cmx9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICDmn6XnnIvnroDljoZcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbkxpc3Q7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQXBwbGljYXRpb25MaXN0IiwiYXBwbGljYXRpb25zIiwic2V0QXBwbGljYXRpb25zIiwibmFtZSIsInNldE5hbWUiLCJzdHVkZW50SWQiLCJzZXRTdHVkZW50SWQiLCJlbWFpbCIsInNldEVtYWlsIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0dWRlbnRfaWQiLCJvayIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiYXBwbGljYXRpb24iLCJ0ZCIsInJlc3VtZV91cmwiLCJhIiwiaHJlZiIsInJlbCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();