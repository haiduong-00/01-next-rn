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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvalidLoginError: () => (/* binding */ InvalidLoginError),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(middleware)/./node_modules/next-auth/providers/credentials.js\");\n\n\nclass InvalidLoginError extends CredentialsSignin {\n    constructor(...args){\n        super(...args);\n        this.code = \"invalid_credentials\";\n    }\n}\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            // You can specify which fields should be submitted, by adding keys to the `credentials` object.\n            // e.g. domain, username, password, 2FA token, etc.\n            credentials: {\n                email: {},\n                password: {}\n            },\n            authorize: async (credentials)=>{\n                console.log(\">>> check credentials: \", credentials);\n                let user = null;\n                // logic to salt and hash password\n                // call backend\n                user = {\n                    _id: \"123\",\n                    username: \"123\",\n                    email: \"123\",\n                    isVerify: \"123\",\n                    type: \"123\",\n                    role: \"123\"\n                };\n                if (!user) {\n                    // No user found, so this is their first attempt to login\n                    // meaning this is also the place you could do registration\n                    return Promise.reject(new Error(\" CUSTOMER MESSAGE \"));\n                // throw new Error(\"User not found.\")\n                }\n                // return user object with their profile data\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth/login\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUN5QjtBQUVsRCxNQUFNRSwwQkFBMEJDOzs7YUFDckNDLE9BQU87O0FBQ1Q7QUFFTyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFHUixxREFBUUEsQ0FBQztJQUMxRFMsV0FBVztRQUNUUiwyRUFBV0EsQ0FBQztZQUNWLGdHQUFnRztZQUNoRyxtREFBbUQ7WUFDbkRTLGFBQWE7Z0JBQ1hDLE9BQU8sQ0FBQztnQkFDUkMsVUFBVSxDQUFDO1lBQ2I7WUFDQUMsV0FBVyxPQUFPSDtnQkFDaEJJLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJMO2dCQUV2QyxJQUFJTSxPQUFPO2dCQUVYLGtDQUFrQztnQkFDbEMsZUFBZTtnQkFDZkEsT0FBTztvQkFDTEMsS0FBSztvQkFDTEMsVUFBVTtvQkFDVlAsT0FBTztvQkFDUFEsVUFBVTtvQkFDVkMsTUFBTTtvQkFDTkMsTUFBTTtnQkFDUjtnQkFHQSxJQUFJLENBQUNMLE1BQU07b0JBQ1QseURBQXlEO29CQUN6RCwyREFBMkQ7b0JBQzNELE9BQU9NLFFBQVFDLE1BQU0sQ0FBQyxJQUFJQyxNQUFNO2dCQUNoQyxxQ0FBcUM7Z0JBQ3ZDO2dCQUVBLDZDQUE2QztnQkFDN0MsT0FBT1I7WUFDVDtRQUNGO0tBQ0Q7SUFDRFMsT0FBTztRQUNMbkIsUUFBUTtJQUNWO0FBQ0YsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXV0aC50cz82MmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBDcmVkZW50aWFscyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkTG9naW5FcnJvciBleHRlbmRzIENyZWRlbnRpYWxzU2lnbmluIHtcbiAgY29kZSA9ICdpbnZhbGlkX2NyZWRlbnRpYWxzJ1xufVxuXG5leHBvcnQgY29uc3QgeyBoYW5kbGVycywgc2lnbkluLCBzaWduT3V0LCBhdXRoIH0gPSBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzKHtcbiAgICAgIC8vIFlvdSBjYW4gc3BlY2lmeSB3aGljaCBmaWVsZHMgc2hvdWxkIGJlIHN1Ym1pdHRlZCwgYnkgYWRkaW5nIGtleXMgdG8gdGhlIGBjcmVkZW50aWFsc2Agb2JqZWN0LlxuICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgIH0sXG4gICAgICBhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFscykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIj4+PiBjaGVjayBjcmVkZW50aWFsczogXCIsIGNyZWRlbnRpYWxzKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB1c2VyID0gbnVsbFxuICAgICAgICBcbiAgICAgICAgLy8gbG9naWMgdG8gc2FsdCBhbmQgaGFzaCBwYXNzd29yZFxuICAgICAgICAvLyBjYWxsIGJhY2tlbmRcbiAgICAgICAgdXNlciA9IHtcbiAgICAgICAgICBfaWQ6IFwiMTIzXCIsXG4gICAgICAgICAgdXNlcm5hbWU6IFwiMTIzXCIsXG4gICAgICAgICAgZW1haWw6IFwiMTIzXCIsXG4gICAgICAgICAgaXNWZXJpZnk6IFwiMTIzXCIsXG4gICAgICAgICAgdHlwZTogXCIxMjNcIixcbiAgICAgICAgICByb2xlOiBcIjEyM1wiLFxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAvLyBObyB1c2VyIGZvdW5kLCBzbyB0aGlzIGlzIHRoZWlyIGZpcnN0IGF0dGVtcHQgdG8gbG9naW5cbiAgICAgICAgICAvLyBtZWFuaW5nIHRoaXMgaXMgYWxzbyB0aGUgcGxhY2UgeW91IGNvdWxkIGRvIHJlZ2lzdHJhdGlvblxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCIgQ1VTVE9NRVIgTUVTU0FHRSBcIikpXG4gICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmQuXCIpXG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXR1cm4gdXNlciBvYmplY3Qgd2l0aCB0aGVpciBwcm9maWxlIGRhdGFcbiAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9hdXRoL2xvZ2luXCIsXG4gIH0sXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzIiwiSW52YWxpZExvZ2luRXJyb3IiLCJDcmVkZW50aWFsc1NpZ25pbiIsImNvZGUiLCJoYW5kbGVycyIsInNpZ25JbiIsInNpZ25PdXQiLCJhdXRoIiwicHJvdmlkZXJzIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJfaWQiLCJ1c2VybmFtZSIsImlzVmVyaWZ5IiwidHlwZSIsInJvbGUiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJwYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/auth.ts\n");

/***/ })

});