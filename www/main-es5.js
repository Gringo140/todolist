(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n    <ion-router-outlet></ion-router-outlet>\r\n</ion-app>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo/todo.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo/todo.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodoTodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"!formTodo\">\r\n    <div class=\"spinner-container\">\r\n        <div class=\"spinner\" name=\"crescent\">\r\n            <span class=\"spinner-ball\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<form class=\"form\" [formGroup]=\"formTodo\" (ngSubmit)=\"save()\">\r\n    <ion-item>\r\n        <ion-label class=\"font\"><b>Title: </b></ion-label>\r\n        <ion-input type=\"text\" formControlName=\"name\"></ion-input>\r\n        <span class=\"required\" *ngIf=\"!formTodo.get('name').valid && formTodo.get('name').dirty\">\r\n            <b>Name is required</b>\r\n        </span>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"font\"><b>Description: </b></ion-label>\r\n        <ion-textarea formControlName=\"description\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-button [disabled]=\"!this.formTodo.valid || disabled\" ion-button type=\"submit\">Save</ion-button>\r\n</form>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todolist/todolist.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todolist/todolist.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodolistTodolistComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid>\n    <ion-row>\n        <ion-col>\n            <div *ngIf=\"!todolist && !error else notFound\">\n                <div class=\"spinner-container\">\n                    <div class=\"spinner\" name=\"crescent\">\n                        <span class=\"spinner-ball\"></span>\n                    </div>\n                </div>\n            </div>\n            <ng-template #notFound>\n                <ion-button class=\"retry\" *ngIf=\"error\" (click)=\"retry()\">Retry\n                    <ion-icon name=\"refresh-outline\"></ion-icon>\n                </ion-button>\n            </ng-template>\n\n            <div class=\"todo\" *ngFor=\"let value of todolist, let i=index\" #list>\n                <span size=\"6\" size-sm=\"12\">\n                    <h5 class=\"title\">Titre {{i +1}}: </h5>\n                    <p>{{value.name}}</p><br>\n                    <h5 class=\"desc\">Description: </h5>\n                    <p>{{value.description}}</p></span><br>\n                <ion-button [disabled]=\"index == i\" (click)=\"delete(value, i)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n                <ion-item class=\"divider\">\n                </ion-item>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-grid>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodosComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar color=\"tertiary\">\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button routerLink=\"\">\r\n            <ion-icon name=\"list-outline\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button (click)=\"create()\" class=\"ellipsis\">\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>TodoList</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-router-outlet></ion-router-outlet>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: "todo",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./todos/todos.module */
          "./src/app/todos/todos.module.ts")).then(function (m) {
            return m.TodosModule;
          });
        }
      }, {
        path: "**",
        redirectTo: "todo"
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  background-color: #022a31;\n  display: block;\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjJhMzE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.platform.backButton.subscribe(function () {
            navigator["app"].exitApp();
          });
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            this.platform.ready().then(function () {});
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _todos_todos_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./todos/todos.module */
      "./src/app/todos/todos.module.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _todos_todos_module__WEBPACK_IMPORTED_MODULE_8__["TodosModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/todos/shared/todo-service.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/todos/shared/todo-service.service.ts ***!
      \******************************************************/

    /*! exports provided: TodoServiceService */

    /***/
    function srcAppTodosSharedTodoServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoServiceService", function () {
        return TodoServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var TodoServiceService = /*#__PURE__*/function () {
        function TodoServiceService(Http) {
          _classCallCheck(this, TodoServiceService);

          this.Http = Http;
        }

        _createClass(TodoServiceService, [{
          key: "get",
          value: function get() {
            var _this = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "secret-key": src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jsonbin.secretKey
              })
            };
            return this.Http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jsonbin.apiURL, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (todoList) {
              _this.todoList = todoList;
            }, function () {}));
          }
        }, {
          key: "post",
          value: function post(todo) {
            var _this2 = this;

            var todoList = [];
            this.todoList.forEach(function (element) {
              todoList.push(element);
            });
            todoList.push(todo);
            return this.put(todoList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this2.todoList.push(todo);
            }, function () {}));
          }
        }, {
          key: "put",
          value: function put(todoList) {
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "secret-key": src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jsonbin.secretKey,
                "Content-Type": "application/json",
                "versioning": "false"
              })
            };
            return this.Http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jsonbin.apiURL, todoList, options);
          }
        }, {
          key: "delete",
          value: function _delete(todo) {
            var _this3 = this;

            var newTodoList = [];
            this.todoList.forEach(function (element) {
              if (element !== todo) {
                newTodoList.push(element);
              }
            });
            return this.put(newTodoList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              var index = _this3.todoList.indexOf(todo);

              _this3.todoList.splice(index, 1);
            }, function () {}));
          }
        }]);

        return TodoServiceService;
      }();

      TodoServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TodoServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TodoServiceService);
      /***/
    },

    /***/
    "./src/app/todos/todo/todo.component.scss":
    /*!************************************************!*\
      !*** ./src/app/todos/todo/todo.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodoTodoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".form {\n  margin-top: 20em;\n  text-align: center;\n}\n\n.font {\n  color: brown;\n  font-style: italic;\n  font-size: 1.2em;\n}\n\n.required {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDIwZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb250IHtcclxuICAgIGNvbG9yOiBicm93bjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/todos/todo/todo.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/todos/todo/todo.component.ts ***!
      \**********************************************/

    /*! exports provided: TodoComponent */

    /***/
    function srcAppTodosTodoTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
        return TodoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_todo_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/todo-service.service */
      "./src/app/todos/shared/todo-service.service.ts");

      var TodoComponent = /*#__PURE__*/function () {
        function TodoComponent(router, service, fb) {
          _classCallCheck(this, TodoComponent);

          this.router = router;
          this.service = service;
          this.fb = fb;
        }

        _createClass(TodoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.disabled = true;
            this.service.get().subscribe(function () {
              _this4.disabled = false;
            }, function () {
              _this4.router.navigate(['/todo']);
            });
            this.formTodo = this.fb.group({
              name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this5 = this;

            if (this.formTodo.valid) {
              this.disabled = true;
              return this.service.post({
                name: this.formTodo.get('name').value,
                description: this.formTodo.get('description').value
              }).subscribe(function () {
                _this5.router.navigate(['/todo']);
              }, function () {});
            }
          }
        }]);

        return TodoComponent;
      }();

      TodoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_todo_service_service__WEBPACK_IMPORTED_MODULE_4__["TodoServiceService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      };

      TodoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todo.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo/todo.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todo.component.scss */
        "./src/app/todos/todo/todo.component.scss"))["default"]]
      })], TodoComponent);
      /***/
    },

    /***/
    "./src/app/todos/todolist/todolist.component.scss":
    /*!********************************************************!*\
      !*** ./src/app/todos/todolist/todolist.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodolistTodolistComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  margin-top: 4em;\n  overflow: scroll;\n}\n\n.todo {\n  text-align: center;\n}\n\n.retry {\n  margin-left: 9.5em;\n  margin-top: 20em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.divider {\n  height: 0.5em;\n  background-color: red;\n}\n\n.todo:nth-child(odd) {\n  color: yellow;\n}\n\n.todo:nth-child(even) {\n  color: red;\n}\n\n/* .title {\n    color: red\n}*/\n\np {\n  color: blanchedalmond;\n}\n\n/*\n.desc {\n    color: yellow;\n} */\n\n.spinner {\n  --size: 250px;\n  --thickness: 25px;\n  width: var(--size);\n  height: var(--size);\n  position: relative;\n  border-radius: 50%;\n  background-color: #022025;\n  box-shadow: 0 0 50px #05d8fd2a;\n  -webkit-animation: spinner 2s linear infinite;\n          animation: spinner 2s linear infinite;\n}\n\n@-webkit-keyframes spinner {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n\n@keyframes spinner {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n\n.spinner::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background: linear-gradient(to bottom, #037a90, transparent);\n  background-size: 100% 80%;\n  background-repeat: no-repeat;\n  border-top-left-radius: calc(var(--size) / 2);\n  border-bottom-left-radius: calc(var(--size) / 2);\n}\n\n.spinner::after {\n  content: \"\";\n  width: calc(var(--size) - (var(--thickness) * 2));\n  height: calc(var(--size) - (var(--thickness) * 2));\n  position: absolute;\n  top: var(--thickness);\n  left: var(--thickness);\n  border-radius: 50%;\n  background-color: #022a31;\n  box-shadow: 0 0 50px inset #05d8fd2a;\n}\n\n.spinner-ball {\n  width: var(--thickness);\n  height: var(--thickness);\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #05d8fd;\n  border-radius: 50%;\n  box-shadow: 0 0 10px #05d8fd, 0 0 20px #05d8fd, 0 0 30px #05d8fd, 0 0 40px #05d8fd, 0 0 50px #05d8fd;\n}\n\n/* other */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.spinner-container {\n  margin-top: 11em;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #022a31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kb2xpc3QvdG9kb2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFHQTs7RUFBQTs7QUFJQTtFQUNJLHFCQUFBO0FBREo7O0FBS0E7OztHQUFBOztBQUtBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBQUhKOztBQU1BO0VBQ0k7SUFDSSx3QkFBQTtFQUhOO0VBS0U7SUFDSSwwQkFBQTtFQUhOO0FBQ0Y7O0FBSEE7RUFDSTtJQUNJLHdCQUFBO0VBSE47RUFLRTtJQUNJLDBCQUFBO0VBSE47QUFDRjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw0REFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdEQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQUpKOztBQU9BO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0dBQUE7QUFKSjs7QUFRQSxVQUFBOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVNBOztFQUVJLFlBQUE7QUFOSjs7QUFTQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvbGlzdC90b2RvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi50b2RvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJldHJ5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5LjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDIwZW07XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICAgIGhlaWdodDogMC41ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi50b2RvOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi50b2RvOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLyogLnRpdGxlIHtcclxuICAgIGNvbG9yOiByZWRcclxufSovXHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG5cclxuXHJcbi8qXHJcbi5kZXNjIHtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbn0gKi9cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIC0tc2l6ZTogMjUwcHg7XHJcbiAgICAtLXRoaWNrbmVzczogMjVweDtcclxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcclxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyMDI1O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggIzA1ZDhmZDJhO1xyXG4gICAgYW5pbWF0aW9uOiBzcGlubmVyIDJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLnNwaW5uZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAzN2E5MCwgdHJhbnNwYXJlbnQpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDgwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKHZhcigtLXNpemUpIC8gMik7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBjYWxjKHZhcigtLXNpemUpIC8gMik7XHJcbn1cclxuXHJcbi5zcGlubmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiBjYWxjKHZhcigtLXNpemUpIC0gKHZhcigtLXRoaWNrbmVzcykgKiAyKSk7XHJcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tc2l6ZSkgLSAodmFyKC0tdGhpY2tuZXNzKSAqIDIpKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogdmFyKC0tdGhpY2tuZXNzKTtcclxuICAgIGxlZnQ6IHZhcigtLXRoaWNrbmVzcyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyYTMxO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggaW5zZXQgIzA1ZDhmZDJhO1xyXG59XHJcblxyXG4uc3Bpbm5lci1iYWxsIHtcclxuICAgIHdpZHRoOiB2YXIoLS10aGlja25lc3MpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS10aGlja25lc3MpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWQ4ZmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMDVkOGZkLCAwIDAgMjBweCAjMDVkOGZkLCAwIDAgMzBweCAjMDVkOGZkLCAwIDAgNDBweCAjMDVkOGZkLCAwIDAgNTBweCAjMDVkOGZkO1xyXG59XHJcblxyXG5cclxuLyogb3RoZXIgKi9cclxuXHJcbioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTFlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjJhMzE7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/todos/todolist/todolist.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/todos/todolist/todolist.component.ts ***!
      \******************************************************/

    /*! exports provided: TodolistComponent */

    /***/
    function srcAppTodosTodolistTodolistComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodolistComponent", function () {
        return TodolistComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_todo_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/todo-service.service */
      "./src/app/todos/shared/todo-service.service.ts");

      var TodolistComponent = /*#__PURE__*/function () {
        function TodolistComponent(service) {
          _classCallCheck(this, TodolistComponent);

          this.service = service;
        }

        _createClass(TodolistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.retry();
            this.error = false;
          }
        }, {
          key: "retry",
          value: function retry() {
            var _this6 = this;

            this.service.get().subscribe(function (todoList) {
              _this6.error = false;
              _this6.todolist = todoList;
            }, function () {
              _this6.error = true;
            });
          }
        }, {
          key: "delete",
          value: function _delete(todo, index) {
            var _this7 = this;

            this.index = index;
            this.disabled = true;
            this.service["delete"](todo).subscribe(function () {
              _this7.index = null;
              _this7.disabled = false;
            }, function () {});
          }
        }]);

        return TodolistComponent;
      }();

      TodolistComponent.ctorParameters = function () {
        return [{
          type: _shared_todo_service_service__WEBPACK_IMPORTED_MODULE_2__["TodoServiceService"]
        }];
      };

      TodolistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todolist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todolist.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todolist/todolist.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todolist.component.scss */
        "./src/app/todos/todolist/todolist.component.scss"))["default"]]
      })], TodolistComponent);
      /***/
    },

    /***/
    "./src/app/todos/todos-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/todos/todos-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: TodosRoutingModule */

    /***/
    function srcAppTodosTodosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosRoutingModule", function () {
        return TodosRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./todo/todo.component */
      "./src/app/todos/todo/todo.component.ts");
      /* harmony import */


      var _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./todolist/todolist.component */
      "./src/app/todos/todolist/todolist.component.ts");
      /* harmony import */


      var _todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todos.component */
      "./src/app/todos/todos.component.ts");

      var routes = [{
        path: "",
        component: _todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"],
        children: [{
          path: "",
          component: _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_4__["TodolistComponent"]
        }, {
          path: "create",
          component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"]
        }]
      }];

      var TodosRoutingModule = function TodosRoutingModule() {
        _classCallCheck(this, TodosRoutingModule);
      };

      TodosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TodosRoutingModule);
      /***/
    },

    /***/
    "./src/app/todos/todos.component.scss":
    /*!********************************************!*\
      !*** ./src/app/todos/todos.component.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodosComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ellipsis {\n  color: blanchedalmond;\n  height: 2em;\n}\n\n.link {\n  left: 2em;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbGxpcHNpcyB7XHJcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gICAgbGVmdDogMmVtO1xyXG4gICAgb3BhY2l0eTogMDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/todos/todos.component.ts":
    /*!******************************************!*\
      !*** ./src/app/todos/todos.component.ts ***!
      \******************************************/

    /*! exports provided: TodosComponent */

    /***/
    function srcAppTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
        return TodosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TodosComponent = /*#__PURE__*/function () {
        function TodosComponent(router, platform) {
          _classCallCheck(this, TodosComponent);

          this.router = router;
          this.platform = platform;
        }

        _createClass(TodosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.platform.backButton.subscribeWithPriority(0, function () {
              alert("Done");
            });
          }
        }, {
          key: "create",
          value: function create() {
            this.router.navigate(['/create']);
          }
        }]);

        return TodosComponent;
      }();

      TodosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      };

      TodosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todos.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todos.component.scss */
        "./src/app/todos/todos.component.scss"))["default"]]
      })], TodosComponent);
      /***/
    },

    /***/
    "./src/app/todos/todos.module.ts":
    /*!***************************************!*\
      !*** ./src/app/todos/todos.module.ts ***!
      \***************************************/

    /*! exports provided: TodosModule */

    /***/
    function srcAppTodosTodosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosModule", function () {
        return TodosModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./todolist/todolist.component */
      "./src/app/todos/todolist/todolist.component.ts");
      /* harmony import */


      var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./todo/todo.component */
      "./src/app/todos/todo/todo.component.ts");
      /* harmony import */


      var _todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todos.component */
      "./src/app/todos/todos.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _todos_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./todos-routing.module */
      "./src/app/todos/todos-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TodosModule = function TodosModule() {
        _classCallCheck(this, TodosModule);
      };

      TodosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"], _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_3__["TodolistComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _todos_routing_module__WEBPACK_IMPORTED_MODULE_7__["TodosRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"]],
        exports: [_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"]]
      })], TodosModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        jsonbin: {
          apiURL: 'https://api.jsonbin.io/b/5fbe5ed904be4f05c92a35a4',
          secretKey: '$2b$10$WB/pn17k4OxSdsnmaK0vbuh/V0quoS//TIO2T/t5r6hzD8GWrusa2'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Gringo\Desktop\Formation CDA M2i\modules\Formation Ionic\todo-list\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map