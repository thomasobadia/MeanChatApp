(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// Import



// Definition
var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.formData = {
            email: undefined,
            name: undefined,
            password: undefined
        };
        this.loginData = {
            email: undefined,
            password: undefined
        };
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
            // styleUrls: ['./app.component.css']
        })
        // Export
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/chat-page/chat-page.component */ "./src/app/pages/chat-page/chat-page.component.ts");
/* harmony import */ var _pages_conversation_page_conversation_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/conversation-page/conversation-page.component */ "./src/app/pages/conversation-page/conversation-page.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
                _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
                _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_9__["ChatPageComponent"],
                _pages_conversation_page_conversation_page_component__WEBPACK_IMPORTED_MODULE_10__["ConversationPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_router__WEBPACK_IMPORTED_MODULE_5__["AppRouter"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: AppRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouter", function() { return AppRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/chat-page/chat-page.component */ "./src/app/pages/chat-page/chat-page.component.ts");
/* harmony import */ var _pages_conversation_page_conversation_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/conversation-page/conversation-page.component */ "./src/app/pages/conversation-page/conversation-page.component.ts");





//
/*
Definition
*/
var routes = [
    {
        path: '',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]
    },
    {
        path: 'register',
        component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__["RegisterPageComponent"]
    },
    {
        path: 'chat',
        component: _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_3__["ChatPageComponent"]
    },
    {
        path: 'conversation/:id',
        component: _pages_conversation_page_conversation_page_component__WEBPACK_IMPORTED_MODULE_4__["ConversationPageComponent"]
    }
];
//
/*
Export
*/
var AppRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/pages/chat-page/chat-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/chat-page/chat-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".disconnect{\n\n    background-color: black;\n}\n\n.chat_page{\n    display: flex;\n    width: 80vw;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    border-radius: 15px;\n    color: white;\n}\n\n.chat_page>*{\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    font-weight: bold;\n    text-align: center;\n}\n\n.chat_page__list{\n    width: 40vw;\n\n}\n\nbutton{\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    font-size: 20px;\n    color: white;\n\n}\n\n.chat_page__list li{\n    display: block;\n    border-top: solid 1px;\n    font-size: 20px;\n    height: 50px;\n    margin: auto 0;\n    color: white;\n  vertical-align: middle;\n}\n\na{\n    color: white;\n    text-decoration: none;\n}\n\n.fontaine{\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    background-image: url('fountain.jpg');\n    background-size: 10%;\n    z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1wYWdlL2NoYXQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0RBQTRDO1lBQTVDLDRDQUE0QztJQUM1QyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwySEFBMkg7SUFDM0gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsTUFBTTtJQUNOLHFDQUFtRDtJQUNuRCxvQkFBb0I7SUFDcEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC1wYWdlL2NoYXQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2Nvbm5lY3R7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmNoYXRfcGFnZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hhdF9wYWdlPip7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1MaWdodFwiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hhdF9wYWdlX19saXN0e1xuICAgIHdpZHRoOiA0MHZ3O1xuXG59XG5cbmJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuLmNoYXRfcGFnZV9fbGlzdCBsaXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IGF1dG8gMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvbnRhaW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb3VudGFpbi5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAlO1xuICAgIHotaW5kZXg6IC0xO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/chat-page/chat-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/chat-page/chat-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<button (click)=\"disconnect()\" class=\"disconnect\"> &#60; Disconnect</button>\n<div class=\"fontaine\"></div>\n\n<div class=\"chat_page\">\n  <div class=\"chat_page__list\">\n    <h1>Créer une conversation</h1>\n    <ul *ngIf=\"usersArray\">\n      <li *ngFor=\"let user of usersArray.users\">\n        <button (click)=\"createConversation( user._id )\">{{ user.name }}</button>\n      </li>\n    </ul>\n</div>\n  <div class=\"chat_page__list\">\n    <h1>Liste des conversations</h1>\n\n    <ul *ngIf=\"conversationsArray\">\n      <li *ngFor=\"let conversation of conversationsArray.conversations\">\n        <a [routerLink]=\"['/conversation',  conversation._id]\">{{ conversation.name }}</a>\n      </li>\n    </ul>\n    <ul *ngIf=\"conversationsArray == undefined\">\n      <p>No conversations yet</p>\n    </ul>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/pages/chat-page/chat-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/chat-page/chat-page.component.ts ***!
  \********************************************************/
/*! exports provided: ChatPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageComponent", function() { return ChatPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_conversation_conversation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/conversation/conversation.service */ "./src/app/services/conversation/conversation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ChatPageComponent = /** @class */ (function () {
    function ChatPageComponent(authService, userService, conversationService, router) {
        this.authService = authService;
        this.userService = userService;
        this.conversationService = conversationService;
        this.router = router;
    }
    ChatPageComponent.prototype.authUser = function () {
        var _this = this;
        this.authService.auth()
            .then(function (apiResponse) {
            console.log(apiResponse);
            if (apiResponse.msg == 'user auth') {
                _this.userId = apiResponse.data._id;
                _this.showConversations(_this.userId);
                console.log(_this.userId);
                console.log('User logged');
            }
            else {
                console.log('ca a pas marché');
                _this.router.navigate(['/']);
            }
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    ChatPageComponent.prototype.disconnect = function () {
        console.log('hello');
        this.authService.disconnect();
        document.cookie = 'berners=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.router.navigate(['/']);
    };
    ChatPageComponent.prototype.showUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .then(function (apiResponse) {
            _this.usersArray = apiResponse;
            console.log(_this.usersArray);
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    ChatPageComponent.prototype.createConversation = function (id) {
        var _this = this;
        this.conversationService.createConv({ user1: this.userId, user2: id })
            .then(function (apiResponse) {
            console.log(apiResponse);
            console.log("this.conversationsArray");
            console.log(_this.conversationsArray);
            if (apiResponse.msg == "Conv created: ok") {
                _this.conversationsArray.conversations.push(apiResponse.data);
                _this.showUsernameFromId(_this.conversationsArray.conversations[_this.conversationsArray.conversations.length - 1]._id, _this.userId, _this.conversationsArray.conversations.length - 1);
            }
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
        console.log(id, 'et', this.userId);
    };
    ChatPageComponent.prototype.showConversations = function (id) {
        var _this = this;
        console.log('win');
        console.log({ id: id });
        this.conversationService.getConversations({ id: id })
            .then(function (apiResponse) {
            _this.conversationsArray = apiResponse;
            for (var i = 0; i < apiResponse.conversations.length; i++) {
                _this.showUsernameFromId(apiResponse.conversations[i]._id, _this.userId, i);
            }
            console.log(_this.conversationsArray);
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    ChatPageComponent.prototype.showUsernameFromId = function (id, myId, index) {
        // show users from conv
        var _this = this;
        this.userService.getUsernamefromId({ id: id })
            .then(function (apiResponse) {
            console.log(apiResponse);
            if (apiResponse.data.user1 == myId) {
                console.log(_this.usersArray.users.find((function (x) { return x._id === apiResponse.data.user2; })).name);
                _this.conversationsArray.conversations[index].name = _this.usersArray.users.find((function (x) { return x._id === apiResponse.data.user2; })).name;
            }
            else {
                _this.conversationsArray.conversations[index].name = _this.usersArray.users.find((function (x) { return x._id === apiResponse.data.user1; })).name;
            }
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    ChatPageComponent.prototype.showUserFromId = function (id) {
        this.userService.getUserfromId({ id: id })
            .then(function (apiResponse) {
            console.log('ton pote cest' + apiResponse.data.name);
        })
            .catch(function (apiResponse) {
            return apiResponse.data;
        });
        console.log("avant");
    };
    ChatPageComponent.prototype.ngOnInit = function () {
        this.authUser();
        this.showUsers();
    };
    ChatPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-page',
            template: __webpack_require__(/*! ./chat-page.component.html */ "./src/app/pages/chat-page/chat-page.component.html"),
            providers:  true && [_services_conversation_conversation_service__WEBPACK_IMPORTED_MODULE_4__["ConversationService"]],
            styles: [__webpack_require__(/*! ./chat-page.component.css */ "./src/app/pages/chat-page/chat-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_conversation_conversation_service__WEBPACK_IMPORTED_MODULE_4__["ConversationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ChatPageComponent);
    return ChatPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/conversation-page/conversation-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/conversation-page/conversation-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.conversation_page{\n    width: 100%;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    overflow: hidden;\n    display: flex;\n}\n\n.conversation_page__dada{\n    height: 100vh;\n    width: 30vw;\n    background-image: url('dada.png');\n}\n\n.conversation_page__back{\n    position: absolute;\n    background-color: black;\n    color: white;\n    padding: 10px;\n}\n\n.conversation_page__conversation{\n    height: 95vh;\n    width: 70vw;\n    overflow-y: scroll;\n}\n\n.conversation_page__message{\n    margin-top: 30px;\n}\n\n.conversation_page__message__date{\n    font-size: 0.8em;\n    opacity: 0;\n}\n\n.conversation_page__message__text{\n    margin: 0 10px;\n    padding: 5px 10px;\n    border-bottom-left-radius: 1.3em;\n    border-top-left-radius: 1.3em;\n    border-bottom-right-radius: 1.3em;\n    border-top-right-radius: 1.3em;\n}\n\n.conversation_page__message:hover .conversation_page__message__date{\n    opacity: 1;\n}\n\n.right_message{\n    background-color: #ffb142;\n}\n\n.left_message{\n    background-color: #f7f1e3;\n}\n\n.conversation_page__form{\n    position: fixed;\n    bottom: 0;\n    height: 4vh;\n    width: 100%;\n}\n\n.conversation_page__form input{\n    width: 95%;\n    height: 100%;\n}\n\n.conversation_page__form button{\n    height: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udmVyc2F0aW9uLXBhZ2UvY29udmVyc2F0aW9uLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJIQUEySDtJQUMzSCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUNBQStDO0FBQ25EOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udmVyc2F0aW9uLXBhZ2UvY29udmVyc2F0aW9uLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY29udmVyc2F0aW9uX3BhZ2V7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1MaWdodFwiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udmVyc2F0aW9uX3BhZ2VfX2RhZGF7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMzB2dztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2RhZGEucG5nKTtcbn1cbi5jb252ZXJzYXRpb25fcGFnZV9fYmFja3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb252ZXJzYXRpb25fcGFnZV9fY29udmVyc2F0aW9ue1xuICAgIGhlaWdodDogOTV2aDtcbiAgICB3aWR0aDogNzB2dztcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5jb252ZXJzYXRpb25fcGFnZV9fbWVzc2FnZXtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY29udmVyc2F0aW9uX3BhZ2VfX21lc3NhZ2VfX2RhdGV7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uY29udmVyc2F0aW9uX3BhZ2VfX21lc3NhZ2VfX3RleHR7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS4zZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS4zZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuM2VtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjNlbTtcbn1cblxuLmNvbnZlcnNhdGlvbl9wYWdlX19tZXNzYWdlOmhvdmVyIC5jb252ZXJzYXRpb25fcGFnZV9fbWVzc2FnZV9fZGF0ZXtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucmlnaHRfbWVzc2FnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMTQyO1xufVxuXG4ubGVmdF9tZXNzYWdle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2YxZTM7XG59XG5cbi5jb252ZXJzYXRpb25fcGFnZV9fZm9ybXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogNHZoO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udmVyc2F0aW9uX3BhZ2VfX2Zvcm0gaW5wdXR7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb252ZXJzYXRpb25fcGFnZV9fZm9ybSBidXR0b257XG4gICAgaGVpZ2h0OiAxMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/conversation-page/conversation-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/conversation-page/conversation-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conversation_page\">\n  <a class=\"conversation_page__back\" [routerLink]=\"['/chat']\" >&#60; Back</a>\n  <div class=\"conversation_page__dada\"></div>\n\n\n    <div class=\"conversation_page__conversation\" *ngIf=\"messagesArray\">\n\n      <div *ngFor=\"let message of messagesArray.messages\">\n        <div class=\"conversation_page__message\" style=\"text-align: left\" *ngIf=\"message.from !== this.myId\" >\n            <span class=\"conversation_page__message__text left_message\" >{{message.content }}</span>\n            <span class=\"conversation_page__message__date\" >{{message.date }}</span>\n        </div>\n        <div  class=\"conversation_page__message\" style=\"text-align: right\" *ngIf=\"message.from == this.myId\" >\n            <span class=\"conversation_page__message__date\" >{{message.date }}</span>\n            <span class=\"conversation_page__message__text right_message\" >{{message.content }}</span>\n        </div>\n\n      </div>\n    </div>\n\n\n  <form class=\"conversation_page__form\" (submit)=\"createMessage() \" action=\"\">\n\n    <!-- Data binding VUE <=> CTRL : [(...)] -->\n      <input id=\"myInput\"\n      [(ngModel)]=\"messageFormData\"\n      type=\"text\"\n      name =\"content\"\n      >\n\n      <button \n        onclick=\"document.getElementById('myInput').value = '';\n        var objDiv = document.querySelector('.conversation_page__conversation');\n        objDiv.scrollTop = objDiv.scrollHeight;\n        console.log('test')\n      \"   type=\"submit\">Send</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/conversation-page/conversation-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/conversation-page/conversation-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ConversationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageComponent", function() { return ConversationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);






var ConversationPageComponent = /** @class */ (function () {
    function ConversationPageComponent(authService, messageService, router, route) {
        this.authService = authService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.messageFormData = null;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__["connect"]('http://localhost:8080');
        // this.myId = TODO
        // this.otherUserId = TODO
    }
    ConversationPageComponent.prototype.authUser = function () {
        var _this = this;
        this.authService.auth()
            .then(function (apiResponse) {
            console.log(apiResponse);
            if (apiResponse.msg == 'user auth') {
                _this.myId = apiResponse.data._id;
                console.log('mon id est  ' + _this.myId);
                console.log('User logged');
                _this.showConversationFromId(_this.conversationId);
            }
            else {
                _this.router.navigate(['/login']);
            }
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    ConversationPageComponent.prototype.createMessage = function () {
        console.log('created');
        var time = new Date();
        var from = this.myId;
        var to = this.otherUserId;
        var date = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        var content = this.messageFormData;
        var message = {
            idconversation: this.conversationId,
            from: from,
            to: to,
            date: date,
            content: content
        };
        this.sendMessage(message);
        this.showMessages();
    };
    ConversationPageComponent.prototype.showConversationFromId = function (id) {
        var _this = this;
        // show users from conv
        console.log(id);
        this.messageService.getConversationfromId({ id: id })
            .then(function (apiResponse) {
            if (apiResponse.data.user1 == _this.myId) {
                console.log(apiResponse);
                _this.otherUserId = apiResponse.data.user2;
            }
            else {
                console.log(apiResponse.data + '2');
                _this.otherUserId = apiResponse.data.user1;
            }
            console.log('other user id : ' + _this.otherUserId);
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    ConversationPageComponent.prototype.sendMessage = function (message) {
        var _this = this;
        this.messageService.send(message)
            .then(function (apiResponse) {
            console.log(apiResponse);
            _this.socket.emit('refreshMessages', { msg: _this.conversationId });
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    ConversationPageComponent.prototype.showMessages = function () {
        var _this = this;
        this.messageService.getMessages({ id: this.conversationId })
            .then(function (apiResponse) {
            _this.messagesArray = apiResponse;
            console.log(_this.messagesArray);
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    ConversationPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // this callback is fired every time the parameters change
            _this.conversationId = params.id;
        });
        this.authUser();
        this.showMessages();
        this.socket.on('refresh', function (data) {
            console.log('**********************************************************');
            console.log(data.msg.msg);
            if (data.msg.msg == _this.conversationId) {
                _this.showMessages();
            }
        });
    };
    ConversationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conversation-page',
            template: __webpack_require__(/*! ./conversation-page.component.html */ "./src/app/pages/conversation-page/conversation-page.component.html"),
            providers:  true && [_services_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [__webpack_require__(/*! ./conversation-page.component.css */ "./src/app/pages/conversation-page/conversation-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ConversationPageComponent);
    return ConversationPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\n    width: 100vw;\n    height: 100vh;\n    background-color: #F7EE83;\n}\n.home_page{\n    width: 100%;\n    text-align: center;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    \n}\n.home_page__title{\n    font-size: 40px;\n    font-weight: bold;\n}\n.home_page__subtitle{\n    font-size: 20px;\n    margin-top: 20px;\n}\n.home_page__form{\n    width: 29%;\n    height: 190px;\n    margin: 0 auto;\n    position: relative;\n}\n.home_page__image{\n    width: 200px;\n    margin: 20px auto;\n}\n.home_page__form label{\n    display: block;\n    margin-top: 37px; \n    margin-bottom: 3px;\n    font-size: 1.3em;\n}\n.home_page__form input{\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px black solid;\n}\n.home_page__form input:-internal-autofill-selected{\n    background-color: transparent;\n}\n.home_page__form button{\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    border: none;\n    background-color: transparent;\n    font-size: 1.3em;\n    color: #E35B42;\n}\n.home_page__text{\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwySEFBMkg7O0FBRS9IO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdFRTgzO1xufVxuLmhvbWVfcGFnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1MaWdodFwiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gICAgXG59XG5cbi5ob21lX3BhZ2VfX3RpdGxle1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhvbWVfcGFnZV9fc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ob21lX3BhZ2VfX2Zvcm17XG4gICAgd2lkdGg6IDI5JTtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhvbWVfcGFnZV9faW1hZ2V7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmhvbWVfcGFnZV9fZm9ybSBsYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAzN3B4OyBcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmhvbWVfcGFnZV9fZm9ybSBpbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xufVxuXG4uaG9tZV9wYWdlX19mb3JtIGlucHV0Oi1pbnRlcm5hbC1hdXRvZmlsbC1zZWxlY3RlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmhvbWVfcGFnZV9fZm9ybSBidXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGNvbG9yOiAjRTM1QjQyO1xufVxuXG4uaG9tZV9wYWdlX190ZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n\n<div class=\"home_page\">\n  <img src=\"../../../assets/chat.png\" class=\"home_page__image\">\n  <div class=\"home_page__title\">Super Chat</div>\n  <div class=\"home_page__subtitle\">Bienvenue dans notre super chat veuillez vous connecter</div>\n\n<form (submit)=\"loginUser()\" action=\"\" class=\"home_page__form\">\n<label for=\"email\"> email</label>\n  <input\n  [(ngModel)]=\"loginData.email\"\n   type=\"text\"\n   name =\"email\"\n   id  =\"email\"\n  >\n  \n  <label for=\"mot_de_passe\"> mot de passe</label>\n  <input\n  [(ngModel)]=\"loginData.password\"\n   type=\"text\"\n   name =\"password\"\n   id=\"mot_de_passe\"\n  >\n\n  <button type=\"submit\">Se connecter</button>\n</form>\n\n<p class=\"home_page__text\">Tu peux aussi te <a [routerLink]=\"'/register'\">créer un compte</a></p>\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginData = {
            email: undefined,
            name: undefined,
            password: undefined
        };
    }
    LoginPageComponent.prototype.loginUser = function () {
        var _this = this;
        this.authService.login(this.loginData)
            .then(function (apiResponse) {
            console.log(apiResponse);
            if (apiResponse.msg == 'User logged') {
                _this.router.navigate(['/chat']);
            }
            else {
                console.log('pas log');
            }
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    LoginPageComponent.prototype.authUser = function () {
        var _this = this;
        this.authService.auth()
            .then(function (apiResponse) {
            console.log(apiResponse);
            if (apiResponse.msg == 'user auth') {
                _this.router.navigate(['/chat']);
            }
        })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    LoginPageComponent.prototype.ngOnInit = function () {
        this.authUser();
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/pages/login-page/login-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register_page{\n    width: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translateY(-50%) translateX(-50%);\n            transform: translateY(-50%) translateX(-50%);\n    padding: 20px 0;\n    text-align: center;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n    border-radius: 15px;\n\n}\n\n.register_page__title{\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.register_page__form label, .register_page__form button{\n    display: block;\n    margin-top: 10px;\n    margin-bottom: 2px; \n}\n\n.register_page__form button{\n    width: 100px;\n    margin: 30px auto 0 auto;\n}\n\n.register_page__form input{\n    background-color: transparent;\n    border: none;\n    border-bottom: solid white 1px;\n    color: white;\n}\n\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: white;\n    opacity: 1; \n\n  }\n\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: white;\n    opacity: 1; \n\n  }\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: white;\n    opacity: 1; \n\n  }\n\n.content{\n    width: 100vw;\n    height: 100vh;\n    background-image: url('warhol1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0RBQTRDO1lBQTVDLDRDQUE0QztJQUM1QyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDJIQUEySDtJQUMzSCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQSw4QkFBZ0IseUNBQXlDO0lBQ3JELFlBQVk7SUFDWixVQUFVOztFQUVaOztBQUpGLDBCQUFnQix5Q0FBeUM7SUFDckQsWUFBWTtJQUNaLFVBQVU7O0VBRVo7O0FBSkYsZ0JBQWdCLHlDQUF5QztJQUNyRCxZQUFZO0lBQ1osVUFBVTs7RUFFWjs7QUFFRjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQWtEO0FBQ3REIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJfcGFnZXtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLUxpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLnJlZ2lzdGVyX3BhZ2VfX3RpdGxle1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlZ2lzdGVyX3BhZ2VfX2Zvcm0gbGFiZWwsIC5yZWdpc3Rlcl9wYWdlX19mb3JtIGJ1dHRvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDsgXG59XG5cblxuLnJlZ2lzdGVyX3BhZ2VfX2Zvcm0gYnV0dG9ue1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XG59XG5cbi5yZWdpc3Rlcl9wYWdlX19mb3JtIGlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZSAxcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDE7IFxuXG4gIH1cblxuLmNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy93YXJob2wxLmpwZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Data binding VUE => CTRL : (...) -->\n<div class=\"content\">\n<div class=\"register_page\">\n  <div class=\"register_page__title\">Créez votre compte</div>\n  <form class=\"register_page__form\" (submit)=\"formSubmit() \" action=\"\">\n\n    <!-- Data binding VUE <=> CTRL : [(...)] -->\n      <label for=\"pseudo\">pseudo</label>\n      <input\n      [(ngModel)]=\"formData.name\"\n      type=\"text\"\n      name =\"name\"\n      id=\"pseudo\"\n      >\n      <label for=\"email\">email</label>\n      <input\n      [(ngModel)]=\"formData.email\"\n      type=\"text\"\n      name =\"email\"\n      id=\"email\"\n      >\n      <label for=\"mot_de_passe\">mot de passe</label>\n      <input\n      [(ngModel)]=\"formData.password\"\n      type=\"text\"\n      name =\"password\"\n      id=\"mot_de_passe\"\n      >\n\n      <button type=\"submit\">Register</button>\n  </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.formData = {
            email: undefined,
            name: undefined,
            password: undefined
        };
    }
    RegisterPageComponent.prototype.formSubmit = function () {
        var _this = this;
        this.authService.register(this.formData)
            .then(function (apiResponse) { return _this.router.navigate(['/chat']); })
            .catch(function (apiResponse) { return console.log(apiResponse); });
    };
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/register-page/register-page.component.html"),
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/pages/register-page/register-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (data) {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/user/", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (data) {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/auth/login", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    AuthService.prototype.auth = function () {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/auth/auth", { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    AuthService.prototype.disconnect = function () {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/auth/disconnect", { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    AuthService.prototype.getData = function (res) {
        return res || {};
    };
    AuthService.prototype.handleError = function (err) {
        return Promise.reject(err);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/conversation/conversation.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/conversation/conversation.service.ts ***!
  \***************************************************************/
/*! exports provided: ConversationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationService", function() { return ConversationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ConversationService = /** @class */ (function () {
    function ConversationService(http) {
        this.http = http;
    }
    ConversationService.prototype.createConv = function (data) {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/conversation/", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    ConversationService.prototype.getConversations = function (data) {
        console.log("data");
        console.log(data);
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/conversation/getall", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    ConversationService.prototype.getData = function (res) {
        return res || {};
    };
    ConversationService.prototype.handleError = function (err) {
        return Promise.reject(err);
    };
    ConversationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConversationService);
    return ConversationService;
}());



/***/ }),

/***/ "./src/app/services/message/message.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/message/message.service.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.send = function (data) {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/message/", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    MessageService.prototype.getMessages = function (data) {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/message/getFromId", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    MessageService.prototype.getConversationfromId = function (data) {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/conversation/fromId", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    MessageService.prototype.getData = function (res) {
        return res || {};
    };
    MessageService.prototype.handleError = function (err) {
        return Promise.reject(err);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.get("http://localhost:9876/api/user", { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    UserService.prototype.getUsernamefromId = function (data) {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/conversation/fromId", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    UserService.prototype.getUserfromId = function (data) {
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-type', 'application/json');
        return this.http.post("http://localhost:9876/api/user/fromId", data, { headers: myHeader })
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    };
    UserService.prototype.getData = function (res) {
        return res || {};
    };
    UserService.prototype.handleError = function (err) {
        return Promise.reject(err);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ingalou/Documents/hetic/dev/devoirs/MeanChatApp/ANGclient/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map