"use strict";
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
exports.id = "app/api/content/route";
exports.ids = ["app/api/content/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontent%2Froute&page=%2Fapi%2Fcontent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontent%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontent%2Froute&page=%2Fapi%2Fcontent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontent%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_verdy_candidate_data_prototype_src_app_api_content_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/content/route.ts */ \"(rsc)/./src/app/api/content/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/content/route\",\n        pathname: \"/api/content\",\n        filename: \"route\",\n        bundlePath: \"app/api/content/route\"\n    },\n    resolvedPagePath: \"/home/verdy/candidate-data-prototype/src/app/api/content/route.ts\",\n    nextConfigOutput,\n    userland: _home_verdy_candidate_data_prototype_src_app_api_content_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/content/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb250ZW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250ZW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGVudCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGdmVyZHklMkZjYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZ2ZXJkeSUyRmNhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUvPzBmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvdmVyZHkvY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlL3NyYy9hcHAvYXBpL2NvbnRlbnQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvbnRlbnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb250ZW50XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb250ZW50L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvdmVyZHkvY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlL3NyYy9hcHAvYXBpL2NvbnRlbnQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NvbnRlbnQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontent%2Froute&page=%2Fapi%2Fcontent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontent%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/content/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/content/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/content */ \"(rsc)/./src/models/content.ts\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/jwt */ \"(rsc)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_handleErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/handleErrors */ \"(rsc)/./src/utils/handleErrors.ts\");\n\n\n\n\n\nasync function GET(req) {\n    try {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__.getToken)({\n            req\n        });\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        // Fetch all content for the user\n        const content = await _models_content__WEBPACK_IMPORTED_MODULE_2__.Content.find({\n            userId: token.id\n        }).sort({\n            createdAt: -1\n        }).select(\"type fileName content createdAt\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            cvs: content // For now, keeping 'cvs' name for backward compatibility\n        });\n    } catch (error) {\n        return (0,_utils_handleErrors__WEBPACK_IMPORTED_MODULE_4__.handleError)(error, \"Error fetching content\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb250ZW50L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUQ7QUFDbkI7QUFDTTtBQUNGO0FBQ1U7QUFFM0MsZUFBZUssSUFBSUMsR0FBZ0I7SUFDeEMsSUFBSTtRQUNGLE1BQU1DLFFBQVEsTUFBTUosdURBQVFBLENBQUM7WUFBRUc7UUFBSTtRQUNuQyxJQUFJLENBQUNDLE9BQU87WUFDVixPQUFPUCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BFO1FBRUEsTUFBTVQsa0RBQVNBO1FBRWYsaUNBQWlDO1FBQ2pDLE1BQU1VLFVBQVUsTUFBTVQsb0RBQU9BLENBQUNVLElBQUksQ0FBQztZQUFFQyxRQUFRTixNQUFNTyxFQUFFO1FBQUMsR0FDbkRDLElBQUksQ0FBQztZQUFFQyxXQUFXLENBQUM7UUFBRSxHQUNyQkMsTUFBTSxDQUFDO1FBRVYsT0FBT2pCLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFDdkJVLFNBQVM7WUFDVEMsS0FBS1IsUUFBUSx5REFBeUQ7UUFDeEU7SUFFRixFQUFFLE9BQU9GLE9BQU87UUFDZCxPQUFPTCxnRUFBV0EsQ0FBQ0ssT0FBTztJQUM1QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlLy4vc3JjL2FwcC9hcGkvY29udGVudC9yb3V0ZS50cz8xYzY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gJ0AvbGliL2RiJ1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ0AvbW9kZWxzL2NvbnRlbnQnXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJ25leHQtYXV0aC9qd3QnXG5pbXBvcnQgeyBoYW5kbGVFcnJvciB9IGZyb20gJ0AvdXRpbHMvaGFuZGxlRXJyb3JzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgcmVxIH0pXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcbiAgICB9XG5cbiAgICBhd2FpdCBjb25uZWN0REIoKVxuICAgIFxuICAgIC8vIEZldGNoIGFsbCBjb250ZW50IGZvciB0aGUgdXNlclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBDb250ZW50LmZpbmQoeyB1c2VySWQ6IHRva2VuLmlkIH0pXG4gICAgICAuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSlcbiAgICAgIC5zZWxlY3QoJ3R5cGUgZmlsZU5hbWUgY29udGVudCBjcmVhdGVkQXQnKVxuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGN2czogY29udGVudCAvLyBGb3Igbm93LCBrZWVwaW5nICdjdnMnIG5hbWUgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICB9KVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGhhbmRsZUVycm9yKGVycm9yLCAnRXJyb3IgZmV0Y2hpbmcgY29udGVudCcpXG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3REQiIsIkNvbnRlbnQiLCJnZXRUb2tlbiIsImhhbmRsZUVycm9yIiwiR0VUIiwicmVxIiwidG9rZW4iLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJjb250ZW50IiwiZmluZCIsInVzZXJJZCIsImlkIiwic29ydCIsImNyZWF0ZWRBdCIsInNlbGVjdCIsInN1Y2Nlc3MiLCJjdnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/content/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"mongodb://localhost:27017/candidate-db\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nconst options = {\n    serverSelectionTimeoutMS: 5000,\n    socketTimeoutMS: 45000\n};\nasync function connectDB() {\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n            console.log(\"Using existing MongoDB connection\");\n            return (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, options);\n        console.log(\"Connected to MongoDB Docker container\");\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on(\"error\", (err)=>{\n            console.error(\"MongoDB connection error:\", err);\n        });\n        return (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n}\n// Handle graceful shutdown\nprocess.on(\"SIGINT\", async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.close();\n        console.log(\"MongoDB connection closed through app termination\");\n        process.exit(0);\n    } catch (error) {\n        console.error(\"Error during MongoDB shutdown:\", error);\n        process.exit(1);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVcsSUFBSTtBQUUvQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsVUFBVTtJQUNkQywwQkFBMEI7SUFDMUJDLGlCQUFpQjtBQUNuQjtBQUVPLGVBQWVDO0lBQ3BCLElBQUk7UUFDRixJQUFJUiw0REFBbUIsQ0FBQ1UsVUFBVSxLQUFLLEdBQUc7WUFDeENDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU9aLDREQUFtQjtRQUM1QjtRQUVBLE1BQU1BLHVEQUFnQixDQUFDQyxhQUFhSTtRQUNwQ00sUUFBUUMsR0FBRyxDQUFDO1FBRVpaLDBEQUFtQixDQUFDYyxFQUFFLENBQUMsU0FBU0MsQ0FBQUE7WUFDOUJKLFFBQVFLLEtBQUssQ0FBQyw2QkFBNkJEO1FBQzdDO1FBRUEsT0FBT2YsNERBQW1CO0lBQzVCLEVBQUUsT0FBT2dCLE9BQU87UUFDZEwsUUFBUUssS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsTUFBTUE7SUFDUjtBQUNGO0FBRUEsMkJBQTJCO0FBQzNCZCxRQUFRWSxFQUFFLENBQUMsVUFBVTtJQUNuQixJQUFJO1FBQ0YsTUFBTWQsMERBQW1CLENBQUNpQixLQUFLO1FBQy9CTixRQUFRQyxHQUFHLENBQUM7UUFDWlYsUUFBUWdCLElBQUksQ0FBQztJQUNmLEVBQUUsT0FBT0YsT0FBTztRQUNkTCxRQUFRSyxLQUFLLENBQUMsa0NBQWtDQTtRQUNoRGQsUUFBUWdCLElBQUksQ0FBQztJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUvLi9zcmMvbGliL2RiLnRzPzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jYW5kaWRhdGUtZGInO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUnKTtcbn1cblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgc2VydmVyU2VsZWN0aW9uVGltZW91dE1TOiA1MDAwLFxuICBzb2NrZXRUaW1lb3V0TVM6IDQ1MDAwLFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgdHJ5IHtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNpbmcgZXhpc3RpbmcgTW9uZ29EQiBjb25uZWN0aW9uJyk7XG4gICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICB9XG5cbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREIgRG9ja2VyIGNvbnRhaW5lcicpO1xuICAgIFxuICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyBIYW5kbGUgZ3JhY2VmdWwgc2h1dGRvd25cbnByb2Nlc3Mub24oJ1NJR0lOVCcsIGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGlvbiBjbG9zZWQgdGhyb3VnaCBhcHAgdGVybWluYXRpb24nKTtcbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIE1vbmdvREIgc2h1dGRvd246JywgZXJyb3IpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxufSk7ICJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwib3B0aW9ucyIsInNlcnZlclNlbGVjdGlvblRpbWVvdXRNUyIsInNvY2tldFRpbWVvdXRNUyIsImNvbm5lY3REQiIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJvbiIsImVyciIsImVycm9yIiwiY2xvc2UiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/content.ts":
/*!*******************************!*\
  !*** ./src/models/content.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Content: () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst contentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    userId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    type: {\n        type: String,\n        enum: [\n            \"file\",\n            \"text\"\n        ],\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    fileName: String,\n    fileSize: Number,\n    mimeType: String,\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst Content = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Content || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Content\", contentSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL2NvbnRlbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBWXRELE1BQU1FLGdCQUFnQixJQUFJRCw0Q0FBTUEsQ0FBVztJQUN6Q0UsUUFBUTtRQUNOQyxNQUFNSCw0Q0FBTUEsQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRO1FBQzNCQyxLQUFLO1FBQ0xDLFVBQVU7SUFDWjtJQUNBSixNQUFNO1FBQ0pBLE1BQU1LO1FBQ05DLE1BQU07WUFBQztZQUFRO1NBQU87UUFDdEJGLFVBQVU7SUFDWjtJQUNBRyxTQUFTO1FBQ1BQLE1BQU1LO1FBQ05ELFVBQVU7SUFDWjtJQUNBSSxVQUFVSDtJQUNWSSxVQUFVQztJQUNWQyxVQUFVTjtJQUNWTyxXQUFXO1FBQ1RaLE1BQU1hO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRjtBQUVPLE1BQU1DLFVBQVVwQix3REFBZSxDQUFDb0IsT0FBTyxJQUFJcEIscURBQWMsQ0FBVyxXQUFXRSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlLy4vc3JjL21vZGVscy9jb250ZW50LnRzPzYzYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRlbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHVzZXJJZDogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQ7XG4gIHR5cGU6ICdmaWxlJyB8ICd0ZXh0JztcbiAgY29udGVudDogc3RyaW5nO1xuICBmaWxlTmFtZT86IHN0cmluZztcbiAgZmlsZVNpemU/OiBudW1iZXI7XG4gIG1pbWVUeXBlPzogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IGNvbnRlbnRTY2hlbWEgPSBuZXcgU2NoZW1hPElDb250ZW50Pih7XG4gIHVzZXJJZDoge1xuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICByZWY6ICdVc2VyJyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICB0eXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGVudW06IFsnZmlsZScsICd0ZXh0J10sXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBmaWxlTmFtZTogU3RyaW5nLFxuICBmaWxlU2l6ZTogTnVtYmVyLFxuICBtaW1lVHlwZTogU3RyaW5nLFxuICBjcmVhdGVkQXQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93XG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IG1vbmdvb3NlLm1vZGVscy5Db250ZW50IHx8IG1vbmdvb3NlLm1vZGVsPElDb250ZW50PignQ29udGVudCcsIGNvbnRlbnRTY2hlbWEpOyAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJjb250ZW50U2NoZW1hIiwidXNlcklkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsIlN0cmluZyIsImVudW0iLCJjb250ZW50IiwiZmlsZU5hbWUiLCJmaWxlU2l6ZSIsIk51bWJlciIsIm1pbWVUeXBlIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJDb250ZW50IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/content.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/handleErrors.ts":
/*!***********************************!*\
  !*** ./src/utils/handleErrors.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleError: () => (/* binding */ handleError)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n// src/utils/handleErrors.ts\n\n\nfunction handleError(error, defaultMessage = \"Internal Server Error\") {\n    console.error(\"Error:\", error);\n    if (error instanceof zod__WEBPACK_IMPORTED_MODULE_1__.ZodError) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.errors\n        }, {\n            status: 400\n        });\n    }\n    if (error instanceof Error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: defaultMessage\n    }, {\n        status: 500\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvaGFuZGxlRXJyb3JzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRCQUE0QjtBQUNjO0FBQ1o7QUFFdkIsU0FBU0UsWUFBWUMsS0FBYyxFQUFFQyxpQkFBaUIsdUJBQXVCO0lBQ2xGQyxRQUFRRixLQUFLLENBQUMsVUFBVUE7SUFFeEIsSUFBSUEsaUJBQWlCRix5Q0FBUUEsRUFBRTtRQUM3QixPQUFPRCxxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtZQUFFSCxPQUFPQSxNQUFNSSxNQUFNO1FBQUMsR0FDdEI7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0lBRUEsSUFBSUwsaUJBQWlCTSxPQUFPO1FBQzFCLE9BQU9ULHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO1lBQUVILE9BQU9BLE1BQU1PLE9BQU87UUFBQyxHQUN2QjtZQUFFRixRQUFRO1FBQUk7SUFFbEI7SUFFQSxPQUFPUixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtRQUFFSCxPQUFPQztJQUFlLEdBQ3hCO1FBQUVJLFFBQVE7SUFBSTtBQUVsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZS8uL3NyYy91dGlscy9oYW5kbGVFcnJvcnMudHM/ODIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvdXRpbHMvaGFuZGxlRXJyb3JzLnRzXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IFpvZEVycm9yIH0gZnJvbSAnem9kJ1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3I6IHVua25vd24sIGRlZmF1bHRNZXNzYWdlID0gJ0ludGVybmFsIFNlcnZlciBFcnJvcicpIHtcbiAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgWm9kRXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBlcnJvci5lcnJvcnMgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgIClcbiAgfVxuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgIHsgZXJyb3I6IGRlZmF1bHRNZXNzYWdlIH0sXG4gICAgeyBzdGF0dXM6IDUwMCB9XG4gIClcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiWm9kRXJyb3IiLCJoYW5kbGVFcnJvciIsImVycm9yIiwiZGVmYXVsdE1lc3NhZ2UiLCJjb25zb2xlIiwianNvbiIsImVycm9ycyIsInN0YXR1cyIsIkVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/handleErrors.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontent%2Froute&page=%2Fapi%2Fcontent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontent%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();