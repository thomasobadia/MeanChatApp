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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtcGFnZS9jaGF0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/chat-page/chat-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/chat-page/chat-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"disconnect()\"> Disconnect</button>\n\n<h1>Liste des utilisateurs</h1>\n<ul *ngIf=\"usersArray\">\n  <li *ngFor=\"let user of usersArray.users\">\n    <button (click)=\"createConversation( user._id )\">{{ user.name }}</button>\n  </li>\n</ul>\n\n<h1>Liste des Conversations</h1>\n\n<ul *ngIf=\"conversationsArray\">\n  <li *ngFor=\"let conversation of conversationsArray.conversations\">\n    <a [routerLink]=\"['/conversation',  conversation._id]\">{{ conversation.name }}</a>\n  </li>\n</ul>\n<ul *ngIf=\"conversationsArray == undefined\">\n  <p>No conversations yet</p>\n</ul>\n"

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
                _this.router.navigate(['/login']);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnZlcnNhdGlvbi1wYWdlL2NvbnZlcnNhdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/conversation-page/conversation-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/conversation-page/conversation-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/chat']\" >Back</a>\n\n\n  <div *ngIf=\"messagesArray\">\n\n    <div *ngFor=\"let message of messagesArray.messages\">\n      <div style=\"text-align: left\" *ngIf=\"message.from !== this.myId\" >\n          <p>{{message.date }}</p>\n          <p>{{message.content }}</p>\n      </div>\n      <div style=\"text-align: right\" *ngIf=\"message.from == this.myId\" >\n          <p>{{message.date }}</p>\n          <p>{{message.content }}</p>\n      </div>\n\n    </div>\n  </div>\n\n\n<form (submit)=\"createMessage() \" action=\"\">\n\n  <!-- Data binding VUE <=> CTRL : [(...)] -->\n    <input\n    [(ngModel)]=\"messageFormData\"\n     type=\"text\"\n     name =\"content\"\n    >\n\n    <button type=\"submit\">Send</button>\n  </form>\n"

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

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 [textContent]=\"myTitle\"> </h1>\n\n\n\n<form (submit)=\"loginUser()\" action=\"\">\n\n  <input\n  [(ngModel)]=\"loginData.email\"\n   type=\"text\"\n   name =\"email\"\n  >\n  <input\n  [(ngModel)]=\"loginData.password\"\n   type=\"text\"\n   name =\"password\"\n  >\n\n  <button type=\"submit\">Login</button>\n</form>\n\n<p>You can also  <a [routerLink]=\"'/register'\">Register</a></p>\n\n"

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
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Data binding VUE => CTRL : (...) -->\n\n<form (submit)=\"formSubmit() \" action=\"\">\n\n  <!-- Data binding VUE <=> CTRL : [(...)] -->\n    <input\n    [(ngModel)]=\"formData.name\"\n     type=\"text\"\n     name =\"name\"\n    >\n    <input\n    [(ngModel)]=\"formData.email\"\n     type=\"text\"\n     name =\"email\"\n    >\n    <input\n    [(ngModel)]=\"formData.password\"\n     type=\"text\"\n     name =\"password\"\n    >\n\n    <button type=\"submit\">Register</button>\n  </form>\n"

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
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
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

module.exports = __webpack_require__(/*! C:\Users\thoma\Documents\GitHub\MeanChatApp\ANGclient\src\main.ts */"./src/main.ts");


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