"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/auth.ts":
/*!*********************!*\
  !*** ./src/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(middleware)/./node_modules/next-auth/providers/credentials.js\");\n\n\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            // You can specify which fields should be submitted, by adding keys to the `credentials` object.\n            // e.g. domain, username, password, 2FA token, etc.\n            credentials: {\n                email: {},\n                password: {}\n            },\n            authorize: async (credentials)=>{\n                console.log(\">>> check credentials: \", credentials);\n                let user = null;\n                // logic to salt and hash password\n                // call backend\n                user = {\n                    _id: \"123\",\n                    username: \"123\",\n                    email: \"123\",\n                    isVerify: \"123\",\n                    type: \"123\",\n                    role: \"123\"\n                };\n                if (!user) {\n                    // No user found, so this is their first attempt to login\n                    // meaning this is also the place you could do registration\n                    throw new Error(\"User not found.\");\n                }\n                // return user object with their profile data\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/dashboard\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ3lCO0FBR2xELE1BQU0sRUFBRUUsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLHFEQUFRQSxDQUFDO0lBQzFETSxXQUFXO1FBQ1RMLDJFQUFXQSxDQUFDO1lBQ1YsZ0dBQWdHO1lBQ2hHLG1EQUFtRDtZQUNuRE0sYUFBYTtnQkFDWEMsT0FBTyxDQUFDO2dCQUNSQyxVQUFVLENBQUM7WUFDYjtZQUNBQyxXQUFXLE9BQU9IO2dCQUNoQkksUUFBUUMsR0FBRyxDQUFDLDJCQUEyQkw7Z0JBRXZDLElBQUlNLE9BQU87Z0JBRVgsa0NBQWtDO2dCQUNsQyxlQUFlO2dCQUNmQSxPQUFPO29CQUNMQyxLQUFLO29CQUNMQyxVQUFVO29CQUNWUCxPQUFPO29CQUNQUSxVQUFVO29CQUNWQyxNQUFNO29CQUNOQyxNQUFNO2dCQUNSO2dCQUdBLElBQUksQ0FBQ0wsTUFBTTtvQkFDVCx5REFBeUQ7b0JBQ3pELDJEQUEyRDtvQkFDM0QsTUFBTSxJQUFJTSxNQUFNO2dCQUNsQjtnQkFFQSw2Q0FBNkM7Z0JBQzdDLE9BQU9OO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RPLE9BQU87UUFDTGpCLFFBQVE7SUFDVjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2F1dGgudHM/NjJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxuXG5cbmV4cG9ydCBjb25zdCB7IGhhbmRsZXJzLCBzaWduSW4sIHNpZ25PdXQsIGF1dGggfSA9IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHMoe1xuICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIGZpZWxkcyBzaG91bGQgYmUgc3VibWl0dGVkLCBieSBhZGRpbmcga2V5cyB0byB0aGUgYGNyZWRlbnRpYWxzYCBvYmplY3QuXG4gICAgICAvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7fSxcbiAgICAgICAgcGFzc3dvcmQ6IHt9LFxuICAgICAgfSxcbiAgICAgIGF1dGhvcml6ZTogYXN5bmMgKGNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPj4+IGNoZWNrIGNyZWRlbnRpYWxzOiBcIiwgY3JlZGVudGlhbHMpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHVzZXIgPSBudWxsXG4gICAgICAgIFxuICAgICAgICAvLyBsb2dpYyB0byBzYWx0IGFuZCBoYXNoIHBhc3N3b3JkXG4gICAgICAgIC8vIGNhbGwgYmFja2VuZFxuICAgICAgICB1c2VyID0ge1xuICAgICAgICAgIF9pZDogXCIxMjNcIixcbiAgICAgICAgICB1c2VybmFtZTogXCIxMjNcIixcbiAgICAgICAgICBlbWFpbDogXCIxMjNcIixcbiAgICAgICAgICBpc1ZlcmlmeTogXCIxMjNcIixcbiAgICAgICAgICB0eXBlOiBcIjEyM1wiLFxuICAgICAgICAgIHJvbGU6IFwiMTIzXCIsXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIC8vIE5vIHVzZXIgZm91bmQsIHNvIHRoaXMgaXMgdGhlaXIgZmlyc3QgYXR0ZW1wdCB0byBsb2dpblxuICAgICAgICAgIC8vIG1lYW5pbmcgdGhpcyBpcyBhbHNvIHRoZSBwbGFjZSB5b3UgY291bGQgZG8gcmVnaXN0cmF0aW9uXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmQuXCIpXG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXR1cm4gdXNlciBvYmplY3Qgd2l0aCB0aGVpciBwcm9maWxlIGRhdGFcbiAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9kYXNoYm9hcmRcIixcbiAgfSxcbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHMiLCJoYW5kbGVycyIsInNpZ25JbiIsInNpZ25PdXQiLCJhdXRoIiwicHJvdmlkZXJzIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJfaWQiLCJ1c2VybmFtZSIsImlzVmVyaWZ5IiwidHlwZSIsInJvbGUiLCJFcnJvciIsInBhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/auth.ts\n");

/***/ })

});