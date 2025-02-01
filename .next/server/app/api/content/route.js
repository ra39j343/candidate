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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontent%2Froute&page=%2Fapi%2Fcontent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontent%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontent%2Froute&page=%2Fapi%2Fcontent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontent%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_verdy_candidate_data_prototype_src_app_api_content_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/content/route.ts */ \"(rsc)/./src/app/api/content/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/content/route\",\n        pathname: \"/api/content\",\n        filename: \"route\",\n        bundlePath: \"app/api/content/route\"\n    },\n    resolvedPagePath: \"/home/verdy/candidate-data-prototype/src/app/api/content/route.ts\",\n    nextConfigOutput,\n    userland: _home_verdy_candidate_data_prototype_src_app_api_content_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/content/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb250ZW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250ZW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGVudCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGdmVyZHklMkZjYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZ2ZXJkeSUyRmNhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2lCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlLz80ZjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL3ZlcmR5L2NhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZS9zcmMvYXBwL2FwaS9jb250ZW50L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcInN0YW5kYWxvbmVcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29udGVudC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvbnRlbnRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvbnRlbnQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS92ZXJkeS9jYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUvc3JjL2FwcC9hcGkvY29udGVudC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY29udGVudC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontent%2Froute&page=%2Fapi%2Fcontent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontent%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/content/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/content/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/content */ \"(rsc)/./src/models/content.ts\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/jwt */ \"(rsc)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET(req) {\n    console.log(\"GET /api/content called\");\n    try {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__.getToken)({\n            req,\n            secret: process.env.NEXTAUTH_SECRET\n        });\n        console.log(\"Token:\", token?.sub ? \"exists\" : \"missing\");\n        if (!token?.sub) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        console.log(\"Database connected\");\n        const contents = await _models_content__WEBPACK_IMPORTED_MODULE_2__.Content.find({\n            userId: token.sub\n        }).sort({\n            createdAt: -1\n        });\n        console.log(\"Content items found:\", contents.length);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            cvs: contents,\n            message: \"Content retrieved successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error in GET /api/content:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error fetching content\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb250ZW50L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUQ7QUFDbkI7QUFDTTtBQUNGO0FBSWpDLE1BQU1JLFVBQVUsZ0JBQWU7QUFFL0IsZUFBZUMsSUFBSUMsR0FBZ0I7SUFDeENDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLElBQUk7UUFDRixNQUFNQyxRQUFRLE1BQU1OLHVEQUFRQSxDQUFDO1lBQUVHO1lBQUtJLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtRQUFDO1FBQ3hFTixRQUFRQyxHQUFHLENBQUMsVUFBVUMsT0FBT0ssTUFBTSxXQUFXO1FBRTlDLElBQUksQ0FBQ0wsT0FBT0ssS0FBSztZQUNmLE9BQU9kLHFEQUFZQSxDQUFDZSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEU7UUFFQSxNQUFNaEIsa0RBQVNBO1FBQ2ZNLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU1VLFdBQVcsTUFBTWhCLG9EQUFPQSxDQUFDaUIsSUFBSSxDQUFDO1lBQUVDLFFBQVFYLE1BQU1LLEdBQUc7UUFBQyxHQUNyRE8sSUFBSSxDQUFDO1lBQUVDLFdBQVcsQ0FBQztRQUFFO1FBRXhCZixRQUFRQyxHQUFHLENBQUMsd0JBQXdCVSxTQUFTSyxNQUFNO1FBRW5ELE9BQU92QixxREFBWUEsQ0FBQ2UsSUFBSSxDQUFDO1lBQ3ZCUyxLQUFLTjtZQUNMTyxTQUFTO1FBQ1g7SUFFRixFQUFFLE9BQU9ULE9BQU87UUFDZFQsUUFBUVMsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBT2hCLHFEQUFZQSxDQUFDZSxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBeUIsR0FDbEM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUvLi9zcmMvYXBwL2FwaS9jb250ZW50L3JvdXRlLnRzPzFjNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSAnQC9saWIvZGInXG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQC9tb2RlbHMvY29udGVudCdcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnbmV4dC1hdXRoL2p3dCdcbmltcG9ydCB7IGhhbmRsZUVycm9yIH0gZnJvbSAnQC91dGlscy9oYW5kbGVFcnJvcnMnXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnXG5cbmV4cG9ydCBjb25zdCBkeW5hbWljID0gJ2ZvcmNlLWR5bmFtaWMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zb2xlLmxvZygnR0VUIC9hcGkvY29udGVudCBjYWxsZWQnKVxuICB0cnkge1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEsIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUIH0pXG4gICAgY29uc29sZS5sb2coJ1Rva2VuOicsIHRva2VuPy5zdWIgPyAnZXhpc3RzJyA6ICdtaXNzaW5nJylcbiAgICBcbiAgICBpZiAoIXRva2VuPy5zdWIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pXG4gICAgfVxuXG4gICAgYXdhaXQgY29ubmVjdERCKClcbiAgICBjb25zb2xlLmxvZygnRGF0YWJhc2UgY29ubmVjdGVkJylcblxuICAgIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgQ29udGVudC5maW5kKHsgdXNlcklkOiB0b2tlbi5zdWIgfSlcbiAgICAgIC5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KVxuICAgIFxuICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGl0ZW1zIGZvdW5kOicsIGNvbnRlbnRzLmxlbmd0aClcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxuICAgICAgY3ZzOiBjb250ZW50cyxcbiAgICAgIG1lc3NhZ2U6ICdDb250ZW50IHJldHJpZXZlZCBzdWNjZXNzZnVsbHknIFxuICAgIH0pXG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBHRVQgL2FwaS9jb250ZW50OicsIGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdFcnJvciBmZXRjaGluZyBjb250ZW50JyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKVxuICB9XG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0REIiLCJDb250ZW50IiwiZ2V0VG9rZW4iLCJkeW5hbWljIiwiR0VUIiwicmVxIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInN1YiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImNvbnRlbnRzIiwiZmluZCIsInVzZXJJZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJsZW5ndGgiLCJjdnMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/content/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nasync function connectDB() {\n    if (isConnected) {\n        console.log(\"Using existing database connection\");\n        return;\n    }\n    try {\n        console.log(\"MongoDB URI:\", process.env.MONGODB_URI); // Debug log\n        if (!process.env.MONGODB_URI) {\n            throw new Error(\"MONGODB_URI is not defined\");\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            retryWrites: true,\n            w: \"majority\",\n            connectTimeoutMS: 10000,\n            socketTimeoutMS: 45000\n        });\n        isConnected = true;\n        console.log(\"New database connection established\");\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n}\n// Handle graceful shutdown\nprocess.on(\"SIGINT\", async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.close();\n        console.log(\"MongoDB connection closed through app termination\");\n        process.exit(0);\n    } catch (error) {\n        console.error(\"Error during MongoDB shutdown:\", error);\n        process.exit(1);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjO0FBRVgsZUFBZUM7SUFDcEIsSUFBSUQsYUFBYTtRQUNmRSxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBRUEsSUFBSTtRQUNGRCxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsR0FBRyxZQUFZO1FBRWxFLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7WUFDNUIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBRUEsTUFBTVIsdURBQWdCLENBQUNLLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1lBQzlDRyxpQkFBaUI7WUFDakJDLG9CQUFvQjtZQUNwQkMsYUFBYTtZQUNiQyxHQUFHO1lBQ0hDLGtCQUFrQjtZQUNsQkMsaUJBQWlCO1FBQ25CO1FBRUFkLGNBQWM7UUFDZEUsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPWSxPQUFPO1FBQ2RiLFFBQVFhLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE1BQU1BO0lBQ1I7QUFDRjtBQUVBLDJCQUEyQjtBQUMzQlgsUUFBUVksRUFBRSxDQUFDLFVBQVU7SUFDbkIsSUFBSTtRQUNGLE1BQU1qQiwwREFBbUIsQ0FBQ21CLEtBQUs7UUFDL0JoQixRQUFRQyxHQUFHLENBQUM7UUFDWkMsUUFBUWUsSUFBSSxDQUFDO0lBQ2YsRUFBRSxPQUFPSixPQUFPO1FBQ2RiLFFBQVFhLEtBQUssQ0FBQyxrQ0FBa0NBO1FBQ2hEWCxRQUFRZSxJQUFJLENBQUM7SUFDZjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCkge1xuICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZygnVXNpbmcgZXhpc3RpbmcgZGF0YWJhc2UgY29ubmVjdGlvbicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgVVJJOicsIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTsgLy8gRGVidWcgbG9nXG4gICAgXG4gICAgaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNT05HT0RCX1VSSSBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHJldHJ5V3JpdGVzOiB0cnVlLFxuICAgICAgdzogJ21ham9yaXR5JyxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDEwMDAwLCAvLyAxMCBzZWNvbmRzXG4gICAgICBzb2NrZXRUaW1lb3V0TVM6IDQ1MDAwLCAgLy8gNDUgc2Vjb25kc1xuICAgIH0gYXMgbW9uZ29vc2UuQ29ubmVjdE9wdGlvbnMpO1xuXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKCdOZXcgZGF0YWJhc2UgY29ubmVjdGlvbiBlc3RhYmxpc2hlZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLy8gSGFuZGxlIGdyYWNlZnVsIHNodXRkb3duXG5wcm9jZXNzLm9uKCdTSUdJTlQnLCBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdGlvbi5jbG9zZSgpO1xuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3Rpb24gY2xvc2VkIHRocm91Z2ggYXBwIHRlcm1pbmF0aW9uJyk7XG4gICAgcHJvY2Vzcy5leGl0KDApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBNb25nb0RCIHNodXRkb3duOicsIGVycm9yKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cbn0pOyAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJpc0Nvbm5lY3RlZCIsImNvbm5lY3REQiIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJyZXRyeVdyaXRlcyIsInciLCJjb25uZWN0VGltZW91dE1TIiwic29ja2V0VGltZW91dE1TIiwiZXJyb3IiLCJvbiIsImNvbm5lY3Rpb24iLCJjbG9zZSIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/content.ts":
/*!*******************************!*\
  !*** ./src/models/content.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Content: () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst contentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    userId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    type: {\n        type: String,\n        enum: [\n            \"file\",\n            \"text\"\n        ],\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    fileName: String,\n    fileSize: Number,\n    mimeType: String,\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst Content = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Content || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Content\", contentSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL2NvbnRlbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBWXRELE1BQU1FLGdCQUFnQixJQUFJRCw0Q0FBTUEsQ0FBVztJQUN6Q0UsUUFBUTtRQUNOQyxNQUFNSCw0Q0FBTUEsQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRO1FBQzNCQyxLQUFLO1FBQ0xDLFVBQVU7SUFDWjtJQUNBSixNQUFNO1FBQ0pBLE1BQU1LO1FBQ05DLE1BQU07WUFBQztZQUFRO1NBQU87UUFDdEJGLFVBQVU7SUFDWjtJQUNBRyxTQUFTO1FBQ1BQLE1BQU1LO1FBQ05ELFVBQVU7SUFDWjtJQUNBSSxVQUFVSDtJQUNWSSxVQUFVQztJQUNWQyxVQUFVTjtJQUNWTyxXQUFXO1FBQ1RaLE1BQU1hO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRjtBQUVPLE1BQU1DLFVBQVVwQix3REFBZSxDQUFDb0IsT0FBTyxJQUFJcEIscURBQWMsQ0FBVyxXQUFXRSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlLy4vc3JjL21vZGVscy9jb250ZW50LnRzPzYzYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRlbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHVzZXJJZDogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQ7XG4gIHR5cGU6ICdmaWxlJyB8ICd0ZXh0JztcbiAgY29udGVudDogc3RyaW5nO1xuICBmaWxlTmFtZT86IHN0cmluZztcbiAgZmlsZVNpemU/OiBudW1iZXI7XG4gIG1pbWVUeXBlPzogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IGNvbnRlbnRTY2hlbWEgPSBuZXcgU2NoZW1hPElDb250ZW50Pih7XG4gIHVzZXJJZDoge1xuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICByZWY6ICdVc2VyJyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICB0eXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGVudW06IFsnZmlsZScsICd0ZXh0J10sXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBmaWxlTmFtZTogU3RyaW5nLFxuICBmaWxlU2l6ZTogTnVtYmVyLFxuICBtaW1lVHlwZTogU3RyaW5nLFxuICBjcmVhdGVkQXQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93XG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IG1vbmdvb3NlLm1vZGVscy5Db250ZW50IHx8IG1vbmdvb3NlLm1vZGVsPElDb250ZW50PignQ29udGVudCcsIGNvbnRlbnRTY2hlbWEpOyAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJjb250ZW50U2NoZW1hIiwidXNlcklkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsIlN0cmluZyIsImVudW0iLCJjb250ZW50IiwiZmlsZU5hbWUiLCJmaWxlU2l6ZSIsIk51bWJlciIsIm1pbWVUeXBlIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJDb250ZW50IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/content.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontent%2Froute&page=%2Fapi%2Fcontent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontent%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();