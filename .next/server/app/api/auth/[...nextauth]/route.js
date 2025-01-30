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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_verdy_candidate_data_prototype_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/verdy/candidate-data-prototype/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_verdy_candidate_data_prototype_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGdmVyZHklMkZjYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZ2ZXJkeSUyRmNhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlLz8zYzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL3ZlcmR5L2NhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZS9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwic3RhbmRhbG9uZVwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3ZlcmR5L2NhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZS9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/user */ \"(rsc)/./src/models/user.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    console.log(\"Connecting to DB...\");\n                    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n                    console.log(\"DB Connected\");\n                    const user = await _models_user__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                        email: credentials?.email\n                    });\n                    console.log(\"User search result:\", user ? \"Found\" : \"Not found\");\n                    if (!user) {\n                        return null;\n                    }\n                    const isValid = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials?.password || \"\", user.password);\n                    console.log(\"Password validation:\", isValid);\n                    if (!isValid) {\n                        return null;\n                    }\n                    return {\n                        id: user._id.toString(),\n                        email: user.email,\n                        name: user.name,\n                        role: user.role\n                    };\n                } catch (error) {\n                    console.error(\"Auth error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/auth/login\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session?.user) {\n                session.user.role = token.role;\n                session.user.id = token.id;\n                session.user.name = token.username;\n            }\n            return session;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ0Q7QUFDN0I7QUFDQTtBQUNUO0FBSzNCLE1BQU1LLGNBQTJCO0lBQy9CQyxXQUFXO1FBQ1RMLDJFQUFtQkEsQ0FBQztZQUNsQk0sTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUk7b0JBQ0ZNLFFBQVFDLEdBQUcsQ0FBQztvQkFDWixNQUFNYixrREFBU0E7b0JBQ2ZZLFFBQVFDLEdBQUcsQ0FBQztvQkFFWixNQUFNQyxPQUFPLE1BQU1iLDhDQUFJQSxDQUFDYyxPQUFPLENBQUM7d0JBQUVSLE9BQU9ELGFBQWFDO29CQUFNO29CQUM1REssUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkMsT0FBTyxVQUFVO29CQUVwRCxJQUFJLENBQUNBLE1BQU07d0JBQ1QsT0FBTztvQkFDVDtvQkFFQSxNQUFNRSxVQUFVLE1BQU1kLHFEQUFjLENBQ2xDSSxhQUFhSSxZQUFZLElBQ3pCSSxLQUFLSixRQUFRO29CQUVmRSxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRztvQkFFcEMsSUFBSSxDQUFDQSxTQUFTO3dCQUNaLE9BQU87b0JBQ1Q7b0JBRUEsT0FBTzt3QkFDTEUsSUFBSUosS0FBS0ssR0FBRyxDQUFDQyxRQUFRO3dCQUNyQmIsT0FBT08sS0FBS1AsS0FBSzt3QkFDakJGLE1BQU1TLEtBQUtULElBQUk7d0JBQ2ZnQixNQUFNUCxLQUFLTyxJQUFJO29CQUNqQjtnQkFDRixFQUFFLE9BQU9DLE9BQU87b0JBQ2RWLFFBQVFVLEtBQUssQ0FBQyxlQUFlQTtvQkFDN0IsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUNSQyxLQUFLLEVBQ0xmLElBQUksRUFPTDtZQUNDLElBQUlBLE1BQU07Z0JBQ1JlLE1BQU1SLElBQUksR0FBR1AsS0FBS08sSUFBSTtnQkFDdEJRLE1BQU1YLEVBQUUsR0FBR0osS0FBS0ksRUFBRTtZQUNwQjtZQUNBLE9BQU9XO1FBQ1Q7UUFDQSxNQUFNTixTQUFRLEVBQ1pBLE9BQU8sRUFDUE0sS0FBSyxFQU9OO1lBQ0MsSUFBSU4sU0FBU1QsTUFBTTtnQkFDakJTLFFBQVFULElBQUksQ0FBQ08sSUFBSSxHQUFHUSxNQUFNUixJQUFJO2dCQUM5QkUsUUFBUVQsSUFBSSxDQUFDSSxFQUFFLEdBQUdXLE1BQU1YLEVBQUU7Z0JBQzFCSyxRQUFRVCxJQUFJLENBQUNULElBQUksR0FBR3dCLE1BQU1DLFFBQVE7WUFDcEM7WUFDQSxPQUFPUDtRQUNUO0lBQ0Y7QUFDRjtBQUVBLE1BQU1RLFVBQVVqQyxnREFBUUEsQ0FBQ0s7QUFDaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kaWRhdGUtZGF0YS1wcm90b3R5cGUvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgQXV0aE9wdGlvbnMsIFNlc3Npb25TdHJhdGVneSB9IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tICdAL2xpYi9kYidcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAL21vZGVscy91c2VyJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgeyBKV1QgfSBmcm9tICduZXh0LWF1dGgvand0J1xuaW1wb3J0IHsgRGVmYXVsdFVzZXIgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJ1xuXG5jb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0aW5nIHRvIERCLi4uJylcbiAgICAgICAgICBhd2FpdCBjb25uZWN0REIoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEQiBDb25uZWN0ZWQnKVxuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHM/LmVtYWlsIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgc2VhcmNoIHJlc3VsdDonLCB1c2VyID8gJ0ZvdW5kJyA6ICdOb3QgZm91bmQnKVxuICAgICAgICAgIFxuICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXG4gICAgICAgICAgICBjcmVkZW50aWFscz8ucGFzc3dvcmQgfHwgJycsXG4gICAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZCB2YWxpZGF0aW9uOicsIGlzVmFsaWQpXG5cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VyLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGVcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignQXV0aCBlcnJvcjonLCBlcnJvcilcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiAnand0JyBhcyBTZXNzaW9uU3RyYXRlZ3lcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvYXV0aC9sb2dpbicsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IFxuICAgICAgdG9rZW4sIFxuICAgICAgdXNlciBcbiAgICB9OiB7IFxuICAgICAgdG9rZW46IEpXVDsgXG4gICAgICB1c2VyPzogRGVmYXVsdFVzZXIgJiB7IFxuICAgICAgICByb2xlPzogc3RyaW5nO1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgfVxuICAgIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGVcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBcbiAgICAgIHNlc3Npb24sIFxuICAgICAgdG9rZW4gXG4gICAgfTogeyBcbiAgICAgIHNlc3Npb246IFNlc3Npb247XG4gICAgICB0b2tlbjogSldUICYge1xuICAgICAgICByb2xlPzogc3RyaW5nO1xuICAgICAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICAgIH1cbiAgICB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbj8udXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGUgYXMgc3RyaW5nXG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkIGFzIHN0cmluZ1xuICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLnVzZXJuYW1lIGFzIHN0cmluZ1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9ICJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb25uZWN0REIiLCJVc2VyIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJmaW5kT25lIiwiaXNWYWxpZCIsImNvbXBhcmUiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwicm9sZSIsImVycm9yIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXJuYW1lIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nasync function connectDB() {\n    if (isConnected) {\n        console.log(\"Using existing database connection\");\n        return;\n    }\n    try {\n        console.log(\"MongoDB URI:\", process.env.MONGODB_URI); // Debug log\n        if (!process.env.MONGODB_URI) {\n            throw new Error(\"MONGODB_URI is not defined\");\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            retryWrites: true,\n            w: \"majority\",\n            connectTimeoutMS: 10000,\n            socketTimeoutMS: 45000\n        });\n        isConnected = true;\n        console.log(\"New database connection established\");\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n}\n// Handle graceful shutdown\nprocess.on(\"SIGINT\", async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.close();\n        console.log(\"MongoDB connection closed through app termination\");\n        process.exit(0);\n    } catch (error) {\n        console.error(\"Error during MongoDB shutdown:\", error);\n        process.exit(1);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjO0FBRVgsZUFBZUM7SUFDcEIsSUFBSUQsYUFBYTtRQUNmRSxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBRUEsSUFBSTtRQUNGRCxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsR0FBRyxZQUFZO1FBRWxFLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7WUFDNUIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBRUEsTUFBTVIsdURBQWdCLENBQUNLLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1lBQzlDRyxpQkFBaUI7WUFDakJDLG9CQUFvQjtZQUNwQkMsYUFBYTtZQUNiQyxHQUFHO1lBQ0hDLGtCQUFrQjtZQUNsQkMsaUJBQWlCO1FBQ25CO1FBRUFkLGNBQWM7UUFDZEUsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPWSxPQUFPO1FBQ2RiLFFBQVFhLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE1BQU1BO0lBQ1I7QUFDRjtBQUVBLDJCQUEyQjtBQUMzQlgsUUFBUVksRUFBRSxDQUFDLFVBQVU7SUFDbkIsSUFBSTtRQUNGLE1BQU1qQiwwREFBbUIsQ0FBQ21CLEtBQUs7UUFDL0JoQixRQUFRQyxHQUFHLENBQUM7UUFDWkMsUUFBUWUsSUFBSSxDQUFDO0lBQ2YsRUFBRSxPQUFPSixPQUFPO1FBQ2RiLFFBQVFhLEtBQUssQ0FBQyxrQ0FBa0NBO1FBQ2hEWCxRQUFRZSxJQUFJLENBQUM7SUFDZjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGlkYXRlLWRhdGEtcHJvdG90eXBlLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCkge1xuICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZygnVXNpbmcgZXhpc3RpbmcgZGF0YWJhc2UgY29ubmVjdGlvbicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgVVJJOicsIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTsgLy8gRGVidWcgbG9nXG4gICAgXG4gICAgaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNT05HT0RCX1VSSSBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHJldHJ5V3JpdGVzOiB0cnVlLFxuICAgICAgdzogJ21ham9yaXR5JyxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDEwMDAwLCAvLyAxMCBzZWNvbmRzXG4gICAgICBzb2NrZXRUaW1lb3V0TVM6IDQ1MDAwLCAgLy8gNDUgc2Vjb25kc1xuICAgIH0gYXMgbW9uZ29vc2UuQ29ubmVjdE9wdGlvbnMpO1xuXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKCdOZXcgZGF0YWJhc2UgY29ubmVjdGlvbiBlc3RhYmxpc2hlZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLy8gSGFuZGxlIGdyYWNlZnVsIHNodXRkb3duXG5wcm9jZXNzLm9uKCdTSUdJTlQnLCBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdGlvbi5jbG9zZSgpO1xuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3Rpb24gY2xvc2VkIHRocm91Z2ggYXBwIHRlcm1pbmF0aW9uJyk7XG4gICAgcHJvY2Vzcy5leGl0KDApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBNb25nb0RCIHNodXRkb3duOicsIGVycm9yKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cbn0pOyAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJpc0Nvbm5lY3RlZCIsImNvbm5lY3REQiIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJyZXRyeVdyaXRlcyIsInciLCJjb25uZWN0VGltZW91dE1TIiwic29ja2V0VGltZW91dE1TIiwiZXJyb3IiLCJvbiIsImNvbm5lY3Rpb24iLCJjbG9zZSIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        required: true\n    },\n    name: String,\n    inviteCode: String,\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nuserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\")) return next();\n    this.password = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, 10);\n    next();\n});\nuserSchema.methods.comparePassword = async function(candidatePassword) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(candidatePassword, this.password);\n};\nuserSchema.methods.generateInviteCode = function() {\n    return Math.random().toString(36).substring(2, 15);\n};\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFDbEI7QUFZNUIsTUFBTUUsYUFBYSxJQUFJRix3REFBZSxDQUFRO0lBQzVDSSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsUUFBUTtJQUFLO0lBQ3BEQyxVQUFVO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0csTUFBTTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNJLE1BQU1MO0lBQ05NLFlBQVlOO0lBQ1pPLFdBQVc7UUFBRVIsTUFBTVM7UUFBTUMsU0FBU0QsS0FBS0UsR0FBRztJQUFDO0FBQzdDO0FBRUFkLFdBQVdlLEdBQUcsQ0FBQyxRQUFRLGVBQWVDLElBQUk7SUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLGFBQWEsT0FBT0Q7SUFDekMsSUFBSSxDQUFDVCxRQUFRLEdBQUcsTUFBTVIsa0RBQVcsQ0FBQyxJQUFJLENBQUNRLFFBQVEsRUFBRTtJQUNqRFM7QUFDRjtBQUVBaEIsV0FBV21CLE9BQU8sQ0FBQ0MsZUFBZSxHQUFHLGVBQWVDLGlCQUF5QjtJQUMzRSxPQUFPdEIscURBQWMsQ0FBQ3NCLG1CQUFtQixJQUFJLENBQUNkLFFBQVE7QUFDeEQ7QUFFQVAsV0FBV21CLE9BQU8sQ0FBQ0ksa0JBQWtCLEdBQUc7SUFDdEMsT0FBT0MsS0FBS0MsTUFBTSxHQUFHQyxRQUFRLENBQUMsSUFBSUMsU0FBUyxDQUFDLEdBQUc7QUFDakQ7QUFFTyxNQUFNQyxPQUFPOUIsd0RBQWUsQ0FBQzhCLElBQUksSUFBSTlCLHFEQUFjLENBQVEsUUFBUUUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbmRpZGF0ZS1kYXRhLXByb3RvdHlwZS8uL3NyYy9tb2RlbHMvdXNlci50cz84YjY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlciBleHRlbmRzIERvY3VtZW50IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBpbnZpdGVDb2RlPzogc3RyaW5nO1xuICBjcmVhdGVkQXQ/OiBEYXRlO1xuICAvLyBhZGQgb3RoZXIgdXNlciBmaWVsZHMgYXMgbmVlZGVkXG59XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hPElVc2VyPih7XG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHJvbGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBuYW1lOiBTdHJpbmcsXG4gIGludml0ZUNvZGU6IFN0cmluZyxcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH1cbn0pO1xuXG51c2VyU2NoZW1hLnByZSgnc2F2ZScsIGFzeW5jIGZ1bmN0aW9uKG5leHQpIHtcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykpIHJldHVybiBuZXh0KCk7XG4gIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCAxMCk7XG4gIG5leHQoKTtcbn0pO1xuXG51c2VyU2NoZW1hLm1ldGhvZHMuY29tcGFyZVBhc3N3b3JkID0gYXN5bmMgZnVuY3Rpb24oY2FuZGlkYXRlUGFzc3dvcmQ6IHN0cmluZykge1xuICByZXR1cm4gYmNyeXB0LmNvbXBhcmUoY2FuZGlkYXRlUGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpO1xufTtcblxudXNlclNjaGVtYS5tZXRob2RzLmdlbmVyYXRlSW52aXRlQ29kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWw8SVVzZXI+KCdVc2VyJywgdXNlclNjaGVtYSk7ICJdLCJuYW1lcyI6WyJtb25nb29zZSIsImJjcnlwdCIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsIm5hbWUiLCJpbnZpdGVDb2RlIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJwcmUiLCJuZXh0IiwiaXNNb2RpZmllZCIsImhhc2giLCJtZXRob2RzIiwiY29tcGFyZVBhc3N3b3JkIiwiY2FuZGlkYXRlUGFzc3dvcmQiLCJjb21wYXJlIiwiZ2VuZXJhdGVJbnZpdGVDb2RlIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fverdy%2Fcandidate-data-prototype&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();