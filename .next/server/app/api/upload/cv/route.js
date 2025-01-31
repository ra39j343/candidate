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
exports.id = "app/api/upload/cv/route";
exports.ids = ["app/api/upload/cv/route"];
exports.modules = {

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("canvas");

/***/ }),

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Fcv%2Froute&page=%2Fapi%2Fupload%2Fcv%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Fcv%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Fcv%2Froute&page=%2Fapi%2Fupload%2Fcv%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Fcv%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_verdy_candidate_data_prototype_src_app_api_upload_cv_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/upload/cv/route.ts */ \"(rsc)/./src/app/api/upload/cv/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/upload/cv/route\",\n        pathname: \"/api/upload/cv\",\n        filename: \"route\",\n        bundlePath: \"app/api/upload/cv/route\"\n    },\n    resolvedPagePath: \"/home/verdy/candidate-data-prototype/src/app/api/upload/cv/route.ts\",\n    nextConfigOutput,\n    userland: _home_verdy_candidate_data_prototype_src_app_api_upload_cv_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/upload/cv/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWQlMkZjdiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXBsb2FkJTJGY3YlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1cGxvYWQlMkZjdiUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGdmVyZHklMkZjYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZ2ZXJkeSUyRmNhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21CO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlLz83MzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL3ZlcmR5L2NhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZS9zcmMvYXBwL2FwaS91cGxvYWQvY3Yvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwic3RhbmRhbG9uZVwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91cGxvYWQvY3Yvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91cGxvYWQvY3ZcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VwbG9hZC9jdi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3ZlcmR5L2NhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZS9zcmMvYXBwL2FwaS91cGxvYWQvY3Yvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VwbG9hZC9jdi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Fcv%2Froute&page=%2Fapi%2Fupload%2Fcv%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Fcv%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/upload/cv/route.ts":
/*!****************************************!*\
  !*** ./src/app/api/upload/cv/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/jwt */ \"(rsc)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/content */ \"(rsc)/./src/models/content.ts\");\n/* harmony import */ var _validation_schemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/validation/schemas */ \"(rsc)/./src/validation/schemas.ts\");\n/* harmony import */ var pdfjs_dist_legacy_build_pdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfjs-dist/legacy/build/pdf */ \"(rsc)/./node_modules/pdfjs-dist/legacy/build/pdf.js\");\n/* harmony import */ var pdfjs_dist_legacy_build_pdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_legacy_build_pdf__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n// Import the legacy build specifically\n\n// Configure worker\nconst pdfjsWorker = __webpack_require__(/*! pdfjs-dist/legacy/build/pdf.worker.entry */ \"(rsc)/./node_modules/pdfjs-dist/legacy/build/pdf.worker.entry.js\");\npdfjs_dist_legacy_build_pdf__WEBPACK_IMPORTED_MODULE_5__.GlobalWorkerOptions.workerSrc = pdfjsWorker;\nasync function POST(req) {\n    try {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__.getToken)({\n            req,\n            secret: process.env.NEXTAUTH_SECRET\n        });\n        if (!token?.sub) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const formData = await req.formData();\n        const file = formData.get(\"file\");\n        console.log(\"Upload received file:\", {\n            name: file.name,\n            type: file.type\n        });\n        _validation_schemas__WEBPACK_IMPORTED_MODULE_4__.cvUploadSchema.parse({\n            file\n        });\n        let content;\n        if (file.type === \"application/pdf\") {\n            console.log(\"Processing PDF file...\");\n            const arrayBuffer = await file.arrayBuffer();\n            const uint8Array = new Uint8Array(arrayBuffer);\n            const loadingTask = pdfjs_dist_legacy_build_pdf__WEBPACK_IMPORTED_MODULE_5__.getDocument(uint8Array);\n            const pdf = await loadingTask.promise;\n            console.log(\"PDF loaded, pages:\", pdf.numPages);\n            const textContent = [];\n            for(let i = 1; i <= pdf.numPages; i++){\n                const page = await pdf.getPage(i);\n                const text = await page.getTextContent();\n                textContent.push(text.items.map((item)=>item.str).join(\" \"));\n            }\n            content = textContent.join(\"\\n\\n\");\n            console.log(\"PDF content extracted, length:\", content.length);\n        } else {\n            content = await file.text();\n        }\n        const newContent = new _models_content__WEBPACK_IMPORTED_MODULE_3__.Content({\n            userId: token.sub,\n            type: \"file\",\n            content: content,\n            fileName: file.name,\n            fileSize: file.size,\n            mimeType: file.type\n        });\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n        await newContent.save();\n        console.log(\"Content saved to database:\", {\n            id: newContent._id,\n            filename: newContent.fileName\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            redirectUrl: `/preview?${new URLSearchParams({\n                id: newContent._id,\n                filename: file.name\n            }).toString()}`\n        });\n    } catch (error) {\n        console.error(\"Error processing file:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error processing file\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUvLi9zcmMvYXBwL2FwaS91cGxvYWQvY3Yvcm91dGUudHM/NmQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJ25leHQtYXV0aC9qd3QnXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tICdAL2xpYi9kYidcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICdAL21vZGVscy9jb250ZW50J1xuaW1wb3J0IHsgY3ZVcGxvYWRTY2hlbWEgfSBmcm9tICdAL3ZhbGlkYXRpb24vc2NoZW1hcydcbmltcG9ydCB7IGhhbmRsZUVycm9yIH0gZnJvbSAnQC91dGlscy9oYW5kbGVFcnJvcnMnXG5pbXBvcnQgeyBFbmNyeXB0aW9uIH0gZnJvbSAnQC91dGlscy9lbmNyeXB0aW9uJ1xuLy8gSW1wb3J0IHRoZSBsZWdhY3kgYnVpbGQgc3BlY2lmaWNhbGx5XG5pbXBvcnQgKiBhcyBwZGZqcyBmcm9tICdwZGZqcy1kaXN0L2xlZ2FjeS9idWlsZC9wZGYnXG5cbi8vIENvbmZpZ3VyZSB3b3JrZXJcbmNvbnN0IHBkZmpzV29ya2VyID0gcmVxdWlyZSgncGRmanMtZGlzdC9sZWdhY3kvYnVpbGQvcGRmLndvcmtlci5lbnRyeScpXG5wZGZqcy5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9IHBkZmpzV29ya2VyXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgcmVxLCBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB9KVxuICAgIGlmICghdG9rZW4/LnN1Yikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpXG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGVcbiAgICBjb25zb2xlLmxvZygnVXBsb2FkIHJlY2VpdmVkIGZpbGU6JywgeyBuYW1lOiBmaWxlLm5hbWUsIHR5cGU6IGZpbGUudHlwZSB9KVxuICAgIFxuICAgIGN2VXBsb2FkU2NoZW1hLnBhcnNlKHsgZmlsZSB9KVxuXG4gICAgbGV0IGNvbnRlbnQ6IHN0cmluZ1xuXG4gICAgaWYgKGZpbGUudHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIFBERiBmaWxlLi4uJylcbiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpXG4gICAgICBjb25zdCB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpXG4gICAgICBcbiAgICAgIGNvbnN0IGxvYWRpbmdUYXNrID0gcGRmanMuZ2V0RG9jdW1lbnQodWludDhBcnJheSlcbiAgICAgIGNvbnN0IHBkZiA9IGF3YWl0IGxvYWRpbmdUYXNrLnByb21pc2VcbiAgICAgIGNvbnNvbGUubG9nKCdQREYgbG9hZGVkLCBwYWdlczonLCBwZGYubnVtUGFnZXMpXG4gICAgICBcbiAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBkZi5udW1QYWdlczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBwZGYuZ2V0UGFnZShpKVxuICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcGFnZS5nZXRUZXh0Q29udGVudCgpXG4gICAgICAgIHRleHRDb250ZW50LnB1c2godGV4dC5pdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS5zdHIpLmpvaW4oJyAnKSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29udGVudCA9IHRleHRDb250ZW50LmpvaW4oJ1xcblxcbicpXG4gICAgICBjb25zb2xlLmxvZygnUERGIGNvbnRlbnQgZXh0cmFjdGVkLCBsZW5ndGg6JywgY29udGVudC5sZW5ndGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSBhd2FpdCBmaWxlLnRleHQoKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBuZXcgQ29udGVudCh7XG4gICAgICB1c2VySWQ6IHRva2VuLnN1YixcbiAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBmaWxlTmFtZTogZmlsZS5uYW1lLFxuICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIG1pbWVUeXBlOiBmaWxlLnR5cGVcbiAgICB9KVxuXG4gICAgYXdhaXQgY29ubmVjdERCKClcbiAgICBhd2FpdCBuZXdDb250ZW50LnNhdmUoKVxuICAgIGNvbnNvbGUubG9nKCdDb250ZW50IHNhdmVkIHRvIGRhdGFiYXNlOicsIHsgaWQ6IG5ld0NvbnRlbnQuX2lkLCBmaWxlbmFtZTogbmV3Q29udGVudC5maWxlTmFtZSB9KVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICByZWRpcmVjdFVybDogYC9wcmV2aWV3PyR7bmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGlkOiBuZXdDb250ZW50Ll9pZCxcbiAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgIH0pLnRvU3RyaW5nKCl9YCxcbiAgICB9KVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBmaWxlOicsIGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRXJyb3IgcHJvY2Vzc2luZyBmaWxlJyB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFRva2VuIiwiY29ubmVjdERCIiwiQ29udGVudCIsImN2VXBsb2FkU2NoZW1hIiwicGRmanMiLCJwZGZqc1dvcmtlciIsInJlcXVpcmUiLCJHbG9iYWxXb3JrZXJPcHRpb25zIiwid29ya2VyU3JjIiwiUE9TVCIsInJlcSIsInRva2VuIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInN1YiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImZvcm1EYXRhIiwiZmlsZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwidHlwZSIsInBhcnNlIiwiY29udGVudCIsImFycmF5QnVmZmVyIiwidWludDhBcnJheSIsIlVpbnQ4QXJyYXkiLCJsb2FkaW5nVGFzayIsImdldERvY3VtZW50IiwicGRmIiwicHJvbWlzZSIsIm51bVBhZ2VzIiwidGV4dENvbnRlbnQiLCJpIiwicGFnZSIsImdldFBhZ2UiLCJ0ZXh0IiwiZ2V0VGV4dENvbnRlbnQiLCJwdXNoIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwic3RyIiwiam9pbiIsImxlbmd0aCIsIm5ld0NvbnRlbnQiLCJ1c2VySWQiLCJmaWxlTmFtZSIsImZpbGVTaXplIiwic2l6ZSIsIm1pbWVUeXBlIiwic2F2ZSIsImlkIiwiX2lkIiwiZmlsZW5hbWUiLCJzdWNjZXNzIiwicmVkaXJlY3RVcmwiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/upload/cv/route.ts\n");

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

/***/ }),

/***/ "(rsc)/./src/validation/schemas.ts":
/*!***********************************!*\
  !*** ./src/validation/schemas.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chatMessageSchema: () => (/* binding */ chatMessageSchema),\n/* harmony export */   cvUploadSchema: () => (/* binding */ cvUploadSchema),\n/* harmony export */   shareableLinkSchema: () => (/* binding */ shareableLinkSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\nconst cvUploadSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    file: zod__WEBPACK_IMPORTED_MODULE_0__.z.instanceof(File).refine((file)=>[\n            \"text/plain\",\n            \"application/pdf\",\n            \"application/msword\",\n            \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\n        ].includes(file.type), {\n        message: \"Unsupported file type\"\n    })\n});\nconst chatMessageSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    message: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Message cannot be empty\").max(1000, \"Message is too long\")\n});\nconst shareableLinkSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    chatId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Chat ID is required\")\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdmFsaWRhdGlvbi9zY2hlbWFzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0I7QUFFakIsTUFBTUMsaUJBQWlCRCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ3JDQyxNQUFNSCxrQ0FBQ0EsQ0FBQ0ksVUFBVSxDQUFDQyxNQUFNQyxNQUFNLENBQUMsQ0FBQ0gsT0FDL0I7WUFBQztZQUFjO1lBQW1CO1lBQXNCO1NBQTBFLENBQUNJLFFBQVEsQ0FBQ0osS0FBS0ssSUFBSSxHQUFHO1FBQ3hKQyxTQUFTO0lBQ1g7QUFDRixHQUFHO0FBRUksTUFBTUMsb0JBQW9CVixrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ3hDTyxTQUFTVCxrQ0FBQ0EsQ0FBQ1csTUFBTSxHQUNkQyxHQUFHLENBQUMsR0FBRywyQkFDUEMsR0FBRyxDQUFDLE1BQU07QUFDZixHQUFHO0FBRUksTUFBTUMsc0JBQXNCZCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQzFDYSxRQUFRZixrQ0FBQ0EsQ0FBQ1csTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztBQUM1QixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlLy4vc3JjL3ZhbGlkYXRpb24vc2NoZW1hcy50cz9iNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG5leHBvcnQgY29uc3QgY3ZVcGxvYWRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGZpbGU6IHouaW5zdGFuY2VvZihGaWxlKS5yZWZpbmUoKGZpbGUpID0+IFxuICAgIFsndGV4dC9wbGFpbicsICdhcHBsaWNhdGlvbi9wZGYnLCAnYXBwbGljYXRpb24vbXN3b3JkJywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50J10uaW5jbHVkZXMoZmlsZS50eXBlKSwge1xuICAgIG1lc3NhZ2U6ICdVbnN1cHBvcnRlZCBmaWxlIHR5cGUnLFxuICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2hhdE1lc3NhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG1lc3NhZ2U6IHouc3RyaW5nKClcbiAgICAubWluKDEsICdNZXNzYWdlIGNhbm5vdCBiZSBlbXB0eScpXG4gICAgLm1heCgxMDAwLCAnTWVzc2FnZSBpcyB0b28gbG9uZycpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaGFyZWFibGVMaW5rU2NoZW1hID0gei5vYmplY3Qoe1xuICBjaGF0SWQ6IHouc3RyaW5nKCkubWluKDEsICdDaGF0IElEIGlzIHJlcXVpcmVkJyksXG59KTtcbiJdLCJuYW1lcyI6WyJ6IiwiY3ZVcGxvYWRTY2hlbWEiLCJvYmplY3QiLCJmaWxlIiwiaW5zdGFuY2VvZiIsIkZpbGUiLCJyZWZpbmUiLCJpbmNsdWRlcyIsInR5cGUiLCJtZXNzYWdlIiwiY2hhdE1lc3NhZ2VTY2hlbWEiLCJzdHJpbmciLCJtaW4iLCJtYXgiLCJzaGFyZWFibGVMaW5rU2NoZW1hIiwiY2hhdElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/validation/schemas.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva","vendor-chunks/pdfjs-dist","vendor-chunks/zod","vendor-chunks/path2d-polyfill"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Fcv%2Froute&page=%2Fapi%2Fupload%2Fcv%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Fcv%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();