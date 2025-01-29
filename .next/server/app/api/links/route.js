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
exports.id = "app/api/links/route";
exports.ids = ["app/api/links/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flinks%2Froute&page=%2Fapi%2Flinks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flinks%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flinks%2Froute&page=%2Fapi%2Flinks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flinks%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_verdy_candidate_data_prototype_src_app_api_links_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/links/route.ts */ \"(rsc)/./src/app/api/links/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/links/route\",\n        pathname: \"/api/links\",\n        filename: \"route\",\n        bundlePath: \"app/api/links/route\"\n    },\n    resolvedPagePath: \"/home/verdy/candidate-data-prototype/src/app/api/links/route.ts\",\n    nextConfigOutput,\n    userland: _home_verdy_candidate_data_prototype_src_app_api_links_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/links/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaW5rcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbGlua3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsaW5rcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGdmVyZHklMkZjYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZ2ZXJkeSUyRmNhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZS8/ZTdjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS92ZXJkeS9jYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUvc3JjL2FwcC9hcGkvbGlua3Mvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xpbmtzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbGlua3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2xpbmtzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvdmVyZHkvY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlL3NyYy9hcHAvYXBpL2xpbmtzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9saW5rcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flinks%2Froute&page=%2Fapi%2Flinks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flinks%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/links/route.ts":
/*!************************************!*\
  !*** ./src/app/api/links/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/jwt */ \"(rsc)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ \"(rsc)/./node_modules/nanoid/index.js\");\n/* harmony import */ var _models_ShareableLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/ShareableLink */ \"(rsc)/./src/models/ShareableLink.ts\");\n// src/app/api/links/route.ts\n\n\n\n\n\nasync function GET(req) {\n    try {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__.getToken)({\n            req\n        });\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n        // Get links directly from ShareableLink model\n        const links = await _models_ShareableLink__WEBPACK_IMPORTED_MODULE_3__.ShareableLink.find({\n            userId: token.id,\n            isActive: true\n        });\n        console.log(\"Found links for user:\", links); // Debug log\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            links\n        });\n    } catch (error) {\n        console.error(\"Error fetching links:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch links\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__.getToken)({\n            req\n        });\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n        const newLink = new _models_ShareableLink__WEBPACK_IMPORTED_MODULE_3__.ShareableLink({\n            id: (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)(10),\n            userId: token.id,\n            isActive: true,\n            dailyStats: [\n                {\n                    date: new Date(),\n                    chatsInitiated: 0,\n                    messagesCount: 0\n                }\n            ]\n        });\n        console.log(\"Creating new link:\", newLink); // Debug log\n        await newLink.save();\n        console.log(\"Saved link to database:\", await _models_ShareableLink__WEBPACK_IMPORTED_MODULE_3__.ShareableLink.findOne({\n            id: newLink.id\n        })); // Verify save\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            link: {\n                id: newLink.id,\n                createdAt: newLink.createdAt,\n                dailyStats: newLink.dailyStats\n            }\n        });\n    } catch (error) {\n        console.error(\"Error creating link:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create link\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9saW5rcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZCQUE2QjtBQUMyQjtBQUNmO0FBQ0o7QUFFTDtBQUN1QjtBQUVoRCxlQUFlSyxJQUFJQyxHQUFnQjtJQUN4QyxJQUFJO1FBQ0YsTUFBTUMsUUFBUSxNQUFNTix1REFBUUEsQ0FBQztZQUFFSztRQUFJO1FBQ25DLElBQUksQ0FBQ0MsT0FBTztZQUNWLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEU7UUFFQSxNQUFNUixrREFBU0E7UUFFZiw4Q0FBOEM7UUFDOUMsTUFBTVMsUUFBUSxNQUFNUCxnRUFBYUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3JDQyxRQUFRTixNQUFNTyxFQUFFO1lBQ2hCQyxVQUFVO1FBQ1o7UUFFQUMsUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qk4sUUFBUSxZQUFZO1FBRXpELE9BQU9YLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUc7UUFBTTtJQUNuQyxFQUFFLE9BQU9GLE9BQU87UUFDZE8sUUFBUVAsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT1QscURBQVlBLENBQUNRLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRjtBQUVPLGVBQWVRLEtBQUtaLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxRQUFRLE1BQU1OLHVEQUFRQSxDQUFDO1lBQUVLO1FBQUk7UUFDbkMsSUFBSSxDQUFDQyxPQUFPO1lBQ1YsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFlLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRTtRQUVBLE1BQU1SLGtEQUFTQTtRQUVmLE1BQU1pQixVQUFVLElBQUlmLGdFQUFhQSxDQUFDO1lBQ2hDVSxJQUFJWCw4Q0FBTUEsQ0FBQztZQUNYVSxRQUFRTixNQUFNTyxFQUFFO1lBQ2hCQyxVQUFVO1lBQ1ZLLFlBQVk7Z0JBQUM7b0JBQ1hDLE1BQU0sSUFBSUM7b0JBQ1ZDLGdCQUFnQjtvQkFDaEJDLGVBQWU7Z0JBQ2pCO2FBQUU7UUFDSjtRQUVBUixRQUFRQyxHQUFHLENBQUMsc0JBQXNCRSxVQUFVLFlBQVk7UUFFeEQsTUFBTUEsUUFBUU0sSUFBSTtRQUVsQlQsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQixNQUFNYixnRUFBYUEsQ0FBQ3NCLE9BQU8sQ0FBQztZQUFFWixJQUFJSyxRQUFRTCxFQUFFO1FBQUMsS0FBSyxjQUFjO1FBRXZHLE9BQU9kLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFDdkJtQixTQUFTO1lBQ1RDLE1BQU07Z0JBQ0pkLElBQUlLLFFBQVFMLEVBQUU7Z0JBQ2RlLFdBQVdWLFFBQVFVLFNBQVM7Z0JBQzVCVCxZQUFZRCxRQUFRQyxVQUFVO1lBQ2hDO1FBQ0Y7SUFDRixFQUFFLE9BQU9YLE9BQU87UUFDZE8sUUFBUVAsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsT0FBT1QscURBQVlBLENBQUNRLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZS8uL3NyYy9hcHAvYXBpL2xpbmtzL3JvdXRlLnRzPzYwYzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvbGlua3Mvcm91dGUudHNcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJ25leHQtYXV0aC9qd3QnO1xuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSAnQC9saWIvZGInO1xuaW1wb3J0IHsgQ2hhdCB9IGZyb20gJ0AvbW9kZWxzL2NoYXQnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcbmltcG9ydCB7IFNoYXJlYWJsZUxpbmsgfSBmcm9tICdAL21vZGVscy9TaGFyZWFibGVMaW5rJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHJlcSB9KTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCBjb25uZWN0REIoKTtcbiAgICBcbiAgICAvLyBHZXQgbGlua3MgZGlyZWN0bHkgZnJvbSBTaGFyZWFibGVMaW5rIG1vZGVsXG4gICAgY29uc3QgbGlua3MgPSBhd2FpdCBTaGFyZWFibGVMaW5rLmZpbmQoeyBcbiAgICAgIHVzZXJJZDogdG9rZW4uaWQsXG4gICAgICBpc0FjdGl2ZTogdHJ1ZSBcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdGb3VuZCBsaW5rcyBmb3IgdXNlcjonLCBsaW5rcyk7IC8vIERlYnVnIGxvZ1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbGlua3MgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbGlua3M6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggbGlua3MnIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgcmVxIH0pO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xuICAgIFxuICAgIGNvbnN0IG5ld0xpbmsgPSBuZXcgU2hhcmVhYmxlTGluayh7XG4gICAgICBpZDogbmFub2lkKDEwKSxcbiAgICAgIHVzZXJJZDogdG9rZW4uaWQsXG4gICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICAgIGRhaWx5U3RhdHM6IFt7XG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIGNoYXRzSW5pdGlhdGVkOiAwLFxuICAgICAgICBtZXNzYWdlc0NvdW50OiAwXG4gICAgICB9XVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG5ldyBsaW5rOicsIG5ld0xpbmspOyAvLyBEZWJ1ZyBsb2dcblxuICAgIGF3YWl0IG5ld0xpbmsuc2F2ZSgpO1xuXG4gICAgY29uc29sZS5sb2coJ1NhdmVkIGxpbmsgdG8gZGF0YWJhc2U6JywgYXdhaXQgU2hhcmVhYmxlTGluay5maW5kT25lKHsgaWQ6IG5ld0xpbmsuaWQgfSkpOyAvLyBWZXJpZnkgc2F2ZVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBsaW5rOiB7XG4gICAgICAgIGlkOiBuZXdMaW5rLmlkLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ld0xpbmsuY3JlYXRlZEF0LFxuICAgICAgICBkYWlseVN0YXRzOiBuZXdMaW5rLmRhaWx5U3RhdHNcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBsaW5rOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBsaW5rJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRUb2tlbiIsImNvbm5lY3REQiIsIm5hbm9pZCIsIlNoYXJlYWJsZUxpbmsiLCJHRVQiLCJyZXEiLCJ0b2tlbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImxpbmtzIiwiZmluZCIsInVzZXJJZCIsImlkIiwiaXNBY3RpdmUiLCJjb25zb2xlIiwibG9nIiwiUE9TVCIsIm5ld0xpbmsiLCJkYWlseVN0YXRzIiwiZGF0ZSIsIkRhdGUiLCJjaGF0c0luaXRpYXRlZCIsIm1lc3NhZ2VzQ291bnQiLCJzYXZlIiwiZmluZE9uZSIsInN1Y2Nlc3MiLCJsaW5rIiwiY3JlYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/links/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"mongodb://localhost:27017/candidate-db\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nconst options = {\n    serverSelectionTimeoutMS: 5000,\n    socketTimeoutMS: 45000\n};\nasync function connectDB() {\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n            console.log(\"Using existing MongoDB connection\");\n            return (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, options);\n        console.log(\"Connected to MongoDB Docker container\");\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on(\"error\", (err)=>{\n            console.error(\"MongoDB connection error:\", err);\n        });\n        return (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n}\n// Handle graceful shutdown\nprocess.on(\"SIGINT\", async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.close();\n        console.log(\"MongoDB connection closed through app termination\");\n        process.exit(0);\n    } catch (error) {\n        console.error(\"Error during MongoDB shutdown:\", error);\n        process.exit(1);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVcsSUFBSTtBQUUvQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsVUFBVTtJQUNkQywwQkFBMEI7SUFDMUJDLGlCQUFpQjtBQUNuQjtBQUVPLGVBQWVDO0lBQ3BCLElBQUk7UUFDRixJQUFJUiw0REFBbUIsQ0FBQ1UsVUFBVSxLQUFLLEdBQUc7WUFDeENDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU9aLDREQUFtQjtRQUM1QjtRQUVBLE1BQU1BLHVEQUFnQixDQUFDQyxhQUFhSTtRQUNwQ00sUUFBUUMsR0FBRyxDQUFDO1FBRVpaLDBEQUFtQixDQUFDYyxFQUFFLENBQUMsU0FBU0MsQ0FBQUE7WUFDOUJKLFFBQVFLLEtBQUssQ0FBQyw2QkFBNkJEO1FBQzdDO1FBRUEsT0FBT2YsNERBQW1CO0lBQzVCLEVBQUUsT0FBT2dCLE9BQU87UUFDZEwsUUFBUUssS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsTUFBTUE7SUFDUjtBQUNGO0FBRUEsMkJBQTJCO0FBQzNCZCxRQUFRWSxFQUFFLENBQUMsVUFBVTtJQUNuQixJQUFJO1FBQ0YsTUFBTWQsMERBQW1CLENBQUNpQixLQUFLO1FBQy9CTixRQUFRQyxHQUFHLENBQUM7UUFDWlYsUUFBUWdCLElBQUksQ0FBQztJQUNmLEVBQUUsT0FBT0YsT0FBTztRQUNkTCxRQUFRSyxLQUFLLENBQUMsa0NBQWtDQTtRQUNoRGQsUUFBUWdCLElBQUksQ0FBQztJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUvLi9zcmMvbGliL2RiLnRzPzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jYW5kaWRhdGUtZGInO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUnKTtcbn1cblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgc2VydmVyU2VsZWN0aW9uVGltZW91dE1TOiA1MDAwLFxuICBzb2NrZXRUaW1lb3V0TVM6IDQ1MDAwLFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgdHJ5IHtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNpbmcgZXhpc3RpbmcgTW9uZ29EQiBjb25uZWN0aW9uJyk7XG4gICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICB9XG5cbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREIgRG9ja2VyIGNvbnRhaW5lcicpO1xuICAgIFxuICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyBIYW5kbGUgZ3JhY2VmdWwgc2h1dGRvd25cbnByb2Nlc3Mub24oJ1NJR0lOVCcsIGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGlvbiBjbG9zZWQgdGhyb3VnaCBhcHAgdGVybWluYXRpb24nKTtcbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIE1vbmdvREIgc2h1dGRvd246JywgZXJyb3IpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxufSk7ICJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwib3B0aW9ucyIsInNlcnZlclNlbGVjdGlvblRpbWVvdXRNUyIsInNvY2tldFRpbWVvdXRNUyIsImNvbm5lY3REQiIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJvbiIsImVyciIsImVycm9yIiwiY2xvc2UiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/ShareableLink.ts":
/*!*************************************!*\
  !*** ./src/models/ShareableLink.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShareableLink: () => (/* binding */ ShareableLink)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dailyStatSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    date: {\n        type: Date,\n        required: true\n    },\n    chatsInitiated: {\n        type: Number,\n        default: 0\n    },\n    messagesCount: {\n        type: Number,\n        default: 0\n    }\n});\nconst shareableLinkSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    userId: {\n        type: String,\n        required: true\n    },\n    id: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    isActive: {\n        type: Boolean,\n        default: true\n    },\n    dailyStats: [\n        dailyStatSchema\n    ]\n});\n// Add index for faster lookups\nshareableLinkSchema.index({\n    id: 1,\n    userId: 1\n});\nconst ShareableLink = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).ShareableLink || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"ShareableLink\", shareableLinkSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1NoYXJlYWJsZUxpbmsudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBZ0J0RCxNQUFNRSxrQkFBa0IsSUFBSUQsNENBQU1BLENBQWE7SUFDN0NFLE1BQU07UUFBRUMsTUFBTUM7UUFBTUMsVUFBVTtJQUFLO0lBQ25DQyxnQkFBZ0I7UUFBRUgsTUFBTUk7UUFBUUMsU0FBUztJQUFFO0lBQzNDQyxlQUFlO1FBQUVOLE1BQU1JO1FBQVFDLFNBQVM7SUFBRTtBQUM1QztBQUVBLE1BQU1FLHNCQUFzQixJQUFJViw0Q0FBTUEsQ0FBaUI7SUFDckRXLFFBQVE7UUFBRVIsTUFBTVM7UUFBUVAsVUFBVTtJQUFLO0lBQ3ZDUSxJQUFJO1FBQUVWLE1BQU1TO1FBQVFQLFVBQVU7UUFBTVMsUUFBUTtJQUFLO0lBQ2pEQyxXQUFXO1FBQUVaLE1BQU1DO1FBQU1JLFNBQVNKLEtBQUtZLEdBQUc7SUFBQztJQUMzQ0MsVUFBVTtRQUFFZCxNQUFNZTtRQUFTVixTQUFTO0lBQUs7SUFDekNXLFlBQVk7UUFBQ2xCO0tBQWdCO0FBQy9CO0FBRUEsK0JBQStCO0FBQy9CUyxvQkFBb0JVLEtBQUssQ0FBQztJQUFFUCxJQUFJO0lBQUdGLFFBQVE7QUFBRTtBQUV0QyxNQUFNVSxnQkFBZ0J0Qix3REFBZSxDQUFDc0IsYUFBYSxJQUFJdEIscURBQWMsQ0FBaUIsaUJBQWlCVyxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUvLi9zcmMvbW9kZWxzL1NoYXJlYWJsZUxpbmsudHM/OTIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGFpbHlTdGF0IHtcbiAgZGF0ZTogRGF0ZTtcbiAgY2hhdHNJbml0aWF0ZWQ6IG51bWJlcjtcbiAgbWVzc2FnZXNDb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTaGFyZWFibGVMaW5rIGV4dGVuZHMgRG9jdW1lbnQge1xuICB1c2VySWQ6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgZGFpbHlTdGF0czogSURhaWx5U3RhdFtdO1xufVxuXG5jb25zdCBkYWlseVN0YXRTY2hlbWEgPSBuZXcgU2NoZW1hPElEYWlseVN0YXQ+KHtcbiAgZGF0ZTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBjaGF0c0luaXRpYXRlZDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcbiAgbWVzc2FnZXNDb3VudDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcbn0pO1xuXG5jb25zdCBzaGFyZWFibGVMaW5rU2NoZW1hID0gbmV3IFNjaGVtYTxJU2hhcmVhYmxlTGluaz4oe1xuICB1c2VySWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBpZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXG4gIGlzQWN0aXZlOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgZGFpbHlTdGF0czogW2RhaWx5U3RhdFNjaGVtYV0sXG59KTtcblxuLy8gQWRkIGluZGV4IGZvciBmYXN0ZXIgbG9va3Vwc1xuc2hhcmVhYmxlTGlua1NjaGVtYS5pbmRleCh7IGlkOiAxLCB1c2VySWQ6IDEgfSk7XG5cbmV4cG9ydCBjb25zdCBTaGFyZWFibGVMaW5rID0gbW9uZ29vc2UubW9kZWxzLlNoYXJlYWJsZUxpbmsgfHwgbW9uZ29vc2UubW9kZWw8SVNoYXJlYWJsZUxpbms+KCdTaGFyZWFibGVMaW5rJywgc2hhcmVhYmxlTGlua1NjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJkYWlseVN0YXRTY2hlbWEiLCJkYXRlIiwidHlwZSIsIkRhdGUiLCJyZXF1aXJlZCIsImNoYXRzSW5pdGlhdGVkIiwiTnVtYmVyIiwiZGVmYXVsdCIsIm1lc3NhZ2VzQ291bnQiLCJzaGFyZWFibGVMaW5rU2NoZW1hIiwidXNlcklkIiwiU3RyaW5nIiwiaWQiLCJ1bmlxdWUiLCJjcmVhdGVkQXQiLCJub3ciLCJpc0FjdGl2ZSIsIkJvb2xlYW4iLCJkYWlseVN0YXRzIiwiaW5kZXgiLCJTaGFyZWFibGVMaW5rIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/ShareableLink.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva","vendor-chunks/nanoid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flinks%2Froute&page=%2Fapi%2Flinks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flinks%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();