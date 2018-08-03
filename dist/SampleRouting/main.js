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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_affiliation_new_affiliation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-affiliation/new-affiliation.component */ "./src/app/new-affiliation/new-affiliation.component.ts");
/* harmony import */ var _pos_request_pos_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pos-request/pos-request.component */ "./src/app/pos-request/pos-request.component.ts");
/* harmony import */ var _pos_request_stepper_pos_request_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos-request-stepper/pos-request-stepper.component */ "./src/app/pos-request-stepper/pos-request-stepper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'na', component: _new_affiliation_new_affiliation_component__WEBPACK_IMPORTED_MODULE_2__["NewAffiliationComponent"] },
    { path: 'pos', component: _pos_request_pos_request_component__WEBPACK_IMPORTED_MODULE_3__["PosRequestComponent"] },
    { path: 'posStep', component: _pos_request_stepper_pos_request_stepper_component__WEBPACK_IMPORTED_MODULE_4__["PosRequestStepperComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-menu-item{\r\n\tcolor: #0d47a1;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.example-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 10px;\r\n\r\n  /* border: 1px solid #555; */\r\n}\r\n\r\n.mat-toolbar-row{\r\n\tpadding-top: 15px;\r\n}\r\n\r\n.mat-icon{\r\n\r\n\tcolor: white;\r\n}\r\n\r\n.mat-headline{\r\n\tcolor: #0d47a1;\r\n}\r\n\r\n/* .mat-toolbar-main  {\r\n   position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  \r\n} */\r\n\r\n/* .sidenav-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 10px;\r\n  border: 1px solid #555; \r\n} */\r\n\r\nhtml, body{\r\n\r\n height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- <mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav [mode]=\"side\">\n  \t\n  </mat-sidenav>\n  <mat-sidenav-content>\n\n <mat-toolbar color=\"primary\" class=\"mat-elevation-z5\">\n  \t  \t \n  \t<span flex>Merchant Acquiring System</span>\n\n\t\t\t<button mat-icon-button  [matMenuTriggerFor]=\"menu\"><mat-icon>description</mat-icon></button>\n\t\t\t\t<mat-menu #menu=\"matMenu\">\n\t\t\t\t  <a routerLink=\"/na\" mat-menu-item>New Affiliation</a>\n\t\t\t\t  <button mat-menu-item>Branch Affiiation</button>\n          \n          \t\t\t\t<a routerLink=\"/pos\" mat-menu-item>POS Request</a>\n\t\t\t\t  <button mat-menu-item>Additional Facility</button>\n\t\t\t\t  <button mat-menu-item>File Maintenance</button>\n\t\t\t\t</mat-menu>\n\t\t\t\t<button mat-icon-button><mat-icon>settings</mat-icon></button>\n\t\t\t\t<button mat-icon-button><mat-icon>assignment</mat-icon></button>\n\t\t<span fxFlex></span>\n  \n\t\t\t<button type=\"submit\"  mat-icon-button ><mat-icon>search</mat-icon> </button> \n  \t \t\n\n  \n\n  </mat-toolbar>\n \n\n <router-outlet></router-outlet>  \n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n -->\n \n<app-main-nav >\n<!-- <button mat-raised-button color=\"accent\"  (click)=\"drawer.toggle()\">Click Me</button> -->\n<!-- <div class=\"main-nav-container\">\n\t \n</div> -->\n    <router-outlet></router-outlet>\t\n\n\n\n</app-main-nav>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/material */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _new_affiliation_new_affiliation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./new-affiliation/new-affiliation.component */ "./src/app/new-affiliation/new-affiliation.component.ts");
/* harmony import */ var _pos_request_pos_request_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pos-request/pos-request.component */ "./src/app/pos-request/pos-request.component.ts");
/* harmony import */ var _calendar_type_calendar_type_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./calendar-type/calendar-type.component */ "./src/app/calendar-type/calendar-type.component.ts");
/* harmony import */ var _bdo_form_header_bdo_form_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bdo-form-header/bdo-form-header.component */ "./src/app/bdo-form-header/bdo-form-header.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _mid_request_mid_request_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mid-request/mid-request.component */ "./src/app/mid-request/mid-request.component.ts");
/* harmony import */ var _pos_request_stepper_pos_request_stepper_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pos-request-stepper/pos-request-stepper.component */ "./src/app/pos-request-stepper/pos-request-stepper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _new_affiliation_new_affiliation_component__WEBPACK_IMPORTED_MODULE_18__["NewAffiliationComponent"],
                _pos_request_pos_request_component__WEBPACK_IMPORTED_MODULE_19__["PosRequestComponent"],
                _calendar_type_calendar_type_component__WEBPACK_IMPORTED_MODULE_20__["CalendarTypeComponent"],
                _bdo_form_header_bdo_form_header_component__WEBPACK_IMPORTED_MODULE_21__["BdoFormHeaderComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_22__["MainNavComponent"],
                _mid_request_mid_request_component__WEBPACK_IMPORTED_MODULE_24__["MidRequestComponent"],
                _pos_request_stepper_pos_request_stepper_component__WEBPACK_IMPORTED_MODULE_25__["PosRequestStepperComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyModule"].forRoot({
                    types: [{
                            name: 'calendar',
                            component: _calendar_type_calendar_type_component__WEBPACK_IMPORTED_MODULE_20__["CalendarTypeComponent"]
                            // wrappers: ['form-field'],
                        }]
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _ngx_formly_material__WEBPACK_IMPORTED_MODULE_5__["FormlyMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bdo-form-header/bdo-form-header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/bdo-form-header/bdo-form-header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n\r\n\tdisplay: flex;\r\n\t justify-content: flex-start;  \r\n\t align-items: start;\r\n\t margin-bottom: 5px;\r\n\t  border-bottom: 2px #0d47a1 solid; \r\n\r\n}\r\n.mat-display-1{\r\n\tcolor: #0d47a1;\r\n\r\n}\r\n.request-menu-container{\r\n\r\n\tdisplay: flex;\r\n\tflex-direction:column;\r\n\tmax-width: 500px !important;\r\n}\r\n/* .mat-menu{\r\n\t\tpadding: 0 !important;\r\n\t\tmax-width: 300px;\r\n\r\n} */\r\n.request-mat-icon{\r\n\tpadding: 0;\r\n\tcolor: #0d47a1;\r\n\t/* color: whitesmoke; */\r\n\r\n}\r\n.mat-menu-item{\r\n\r\n\tfont-size: 14px !important;\r\n\tpadding-left: 3px;\r\n}\r\n.request-mat-toolbar{\r\n\r\n\t background-color:  inherit !important;\r\n}\r\n.header-logo{\r\n\r\n\tmargin-left: 2px;\r\n\tmargin-top: 2px;\r\n\theight: 65px;\r\n    width: 120px;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/bdo-form-header/bdo-form-header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bdo-form-header/bdo-form-header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" \n     >\n  <div><img src=\"assets/img/bdoLogo.png\" class=\"header-logo\" alt=\"\">  </div>\n  <div style=\"margin-left:10px;\"> <span class=\"mat-display-1\">{{text}}</span> \n  \t<br>\n  \t<span style=\"color:orange\" class=\"mat-subheading-2\">{{sub_text}}</span>\n  </div>\n  <span fxFlex ></span>\n\n  <mat-toolbar class=\"request-mat-toolbar\" fxFlex fxShow=”true” fxHide.sm=”true”>\n  \t\n  \t<div  fxLayout=\"row\"  fxLayoutGap=\"6px\" fxLayoutAlign=\"space-around center\">\n  \t\t<span fxFlex ></span>\n  \t\t<button mat-fab style=\"font-size: 12px;\" color=\"primary\" matTooltip=\"Approve Request\" >\n      <span style=\"color:white\">Approve</span>  \n      </button>\n  \t\t<button mat-fab   style=\"font-size: 12px;\" matTooltip=\"Decline request\">\n        <!-- <mat-icon  class=\"request-mat-icon\">clear</mat-icon> -->\n        <span style=\"color:white\">Decline</span>  \n        </button>\n  \t\t<button mat-mini-fab style=\"font-size: 12px;\" matTooltip=\"Return Request\"><mat-icon  class=\"request-mat-icon\">subdirectory_arrow_left</mat-icon></button>\n  \t\t<button mat-mini-fab   matTooltip=\"Submit Request\" ><mat-icon  class=\"request-mat-icon\">arrow_forward</mat-icon></button>\n\n  \t<!-- \t<button mat-button color=\"primary\" matTooltip=\"Approve Request\" ><mat-icon  class=\"request-mat-icon\">done</mat-icon>Approve</button>\n      <button mat-button color=\"primary\" matTooltip=\"Decline request\"><mat-icon  class=\"request-mat-icon\">clear</mat-icon>Decline</button>\n      <button mat-button color=\"primary\" matTooltip=\"Return Request\"><mat-icon  class=\"request-mat-icon\">subdirectory_arrow_left</mat-icon>Return </button>\n      <button mat-button  color=\"primary\" matTooltip=\"Submit Request\" ><mat-icon  class=\"request-mat-icon\">arrow_forward</mat-icon>Submit</button> -->\n  \t</div>\n  </mat-toolbar>\n\n  <div>\n  \t<button fxFlex fxShow=”true” fxHide.lg=”true” mat-mini-fab [matMenuTriggerFor]=\"requestMenu\" >\n  \t\t\t<mat-icon color=\"primary\">menu</mat-icon>\n  \t</button> \n  \t\n  \t<mat-menu class=\"request-menu-container\" #requestMenu=\"matMenu\" style=\"padding:0;\">\n  \t\n  \t<div  fxLayout=\"column\" fxLayoutAlign=\"start\">\n  \t\t\n  \t\t<button mat-menu-item color=\"primary\" matTooltip=\"Approve Request\" ><mat-icon class=\"request-mat-icon\" >done</mat-icon>Approve</button>\n  \t\t<button mat-menu-item  color=\"primary\" matTooltip=\"Decline request\"><mat-icon  class=\"request-mat-icon\" >clear</mat-icon>Decline</button>\n  \t\t<button mat-menu-item  color=\"primary\" matTooltip=\"Return Request\" matTooltip=\"Return Request\"><mat-icon  class=\"request-mat-icon\" >subdirectory_arrow_left</mat-icon>Return</button>\n  \t\t<button mat-menu-item  color=\"primary\" matTooltip=\"Submit Request\"  matTooltip=\"Submit Request\"><mat-icon  class=\"request-mat-icon\">arrow_forward</mat-icon>Submit</button>\n\n  \t\t\n  \t</div>\n  \t  \n\t</mat-menu>\n  \t\n  </div>\n  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/bdo-form-header/bdo-form-header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bdo-form-header/bdo-form-header.component.ts ***!
  \**************************************************************/
/*! exports provided: BdoFormHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BdoFormHeaderComponent", function() { return BdoFormHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BdoFormHeaderComponent = /** @class */ (function () {
    function BdoFormHeaderComponent() {
    }
    BdoFormHeaderComponent.prototype.ngOnInit = function () {
    };
    BdoFormHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bdo-form-header',
            template: __webpack_require__(/*! ./bdo-form-header.component.html */ "./src/app/bdo-form-header/bdo-form-header.component.html"),
            styles: [__webpack_require__(/*! ./bdo-form-header.component.css */ "./src/app/bdo-form-header/bdo-form-header.component.css")],
            inputs: ['text', 'sub_text'],
        }),
        __metadata("design:paramtypes", [])
    ], BdoFormHeaderComponent);
    return BdoFormHeaderComponent;
}());



/***/ }),

/***/ "./src/app/calendar-type/calendar-type.component.css":
/*!***********************************************************!*\
  !*** ./src/app/calendar-type/calendar-type.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  display: flex;\r\n}\r\n.mat-calendar-input-element {\r\n   font-family: Arial, Helvetica, sans-serif;\r\n    background: 0 0;\r\n    color: currentColor;\r\n    border: none;\r\n    outline: 0;\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    vertical-align: bottom;\r\n    text-align: inherit;\r\n}"

/***/ }),

/***/ "./src/app/calendar-type/calendar-type.component.html":
/*!************************************************************!*\
  !*** ./src/app/calendar-type/calendar-type.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field   class='{{className}} mat-body-1'>\n\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"{{to.label}}\"\n\t[formControl]=\"formControl\" \n\t      [formlyAttributes]=\"field\"\n  >\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/calendar-type/calendar-type.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/calendar-type/calendar-type.component.ts ***!
  \**********************************************************/
/*! exports provided: CalendarTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarTypeComponent", function() { return CalendarTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/material */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {MatDatepickerModule} from '@angular/material/datepicker';
var CalendarTypeComponent = /** @class */ (function (_super) {
    __extends(CalendarTypeComponent, _super);
    function CalendarTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //value: Observable<any[]>;
    // filter: Observable<any[]>;
    CalendarTypeComponent.prototype.ngOnInit = function () {
        // this.filter = this.formControl.valueChanges
        //    .pipe(
        //      startWith(''),
        //      switchMap(term => this.to.filter(term)),
        //    );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInput"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInput"])
    ], CalendarTypeComponent.prototype, "formFieldControl", void 0);
    CalendarTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar-type',
            template: __webpack_require__(/*! ./calendar-type.component.html */ "./src/app/calendar-type/calendar-type.component.html"),
            styles: [__webpack_require__(/*! ./calendar-type.component.css */ "./src/app/calendar-type/calendar-type.component.css")]
        })
    ], CalendarTypeComponent);
    return CalendarTypeComponent;
}(_ngx_formly_material__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n min-height: 671px;\n}\n\n.sidenav {\n  width: 400px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n/* @media (min-width: 900px) {\n\t.sidenav {\n\t\tdisplay: none;\n\t}\n} */\n\n.mat-toolbar.mat-primary{\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.mat-toolbar  {\n   position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  \n}\n\n/* .card-container {\n  max-width: 400px;\n  margin: 2px;\n}\n */\n\n.mat-headline{\n\n\tmargin-left: 7px;\n\tmargin-top: 7px;\n}"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container  class=\"sidenav-container\">\n  <mat-sidenav \n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"false\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"over\"\n    [opened]=\"false\"\n    position=\"end\"\n    >\n   <!--  <mat-toolbar color=\"accent\">\n          <span style=\"color:whitesmoke\">Menu</span>\n    </mat-toolbar> -->\n    <!-- <mat-nav-list>\n      <a mat-list-item href=\"#\">Submit</a>\n      <a mat-list-item href=\"#\">Return</a>\n      <a mat-list-item href=\"#\">Decline</a>\n    </mat-nav-list> -->\n    \n<!--     <mat-card class=\"card-container\">\n      <mat-card-header>\n        <mat-card-title>\n            Account Information \n        </mat-card-title>\n        \n      </mat-card-header>\n      <mat-card-content fxLayout=\"column\"  fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around start\">\n       <mat-list>\n       <mat-list-item> Name: Arnold Costamero </mat-list-item>\n       <mat-list-item> Unit: IT DEV CLG </mat-list-item>\n      </mat-list>\n \n          <button mat-flat-button color=\"accent\">Logout</button>\n      </mat-card-content>\n      <mat-card-actions>\n    \n  </mat-card-actions>\n      \n      \n    \n  </mat-card> -->\n\n   <div fxLayout=\"column\"  fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around start\">\n    <mat-toolbar color=\"accent\">\n         <span style=\"color:whitesmoke\">Menu</span>\n    </mat-toolbar>\n       <mat-list>\n       <mat-list-item><mat-icon color=\"primary\">face</mat-icon> Arnold Costamero </mat-list-item>\n       <mat-list-item> Unit: IT DEV CLG </mat-list-item>\n      </mat-list>\n     \n\n          <button mat-flat-button color=\"accent\">Logout</button>\n     \n          \n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    \n     <mat-toolbar color=\"primary\"  class=\"mat-elevation-z5\">\n          \n    <span >Merchant Acquiring System</span>\n\n      <button mat-icon-button  [matMenuTriggerFor]=\"menu\"><mat-icon>description</mat-icon></button>\n        <mat-menu #menu=\"matMenu\">\n          <a routerLink=\"/na\" mat-menu-item>New Affiliation</a>\n          <button mat-menu-item>Branch Affiiation</button>\n          \n                  <a routerLink=\"/pos\" mat-menu-item>POS Request</a>\n          <button mat-menu-item>Additional Facility</button>\n          <button mat-menu-item>File Maintenance</button>\n        </mat-menu>\n        <button mat-icon-button><mat-icon>settings</mat-icon></button>\n        <button mat-icon-button><mat-icon>assignment</mat-icon></button>\n    <span fxFlex></span>\n  \n      <button type=\"submit\"  mat-icon-button ><mat-icon>search</mat-icon> </button> \n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n       \n        >\n        <mat-icon aria-label=\"Side nav toggle icon\">face</mat-icon>\n      </button>\n\n  \n\n  </mat-toolbar>\n    <ng-content></ng-content>\n    <!-- Add Content Here -->\n     \n     \n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/mid-request/mid-request.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mid-request/mid-request.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mid-request/mid-request.component.html":
/*!********************************************************!*\
  !*** ./src/app/mid-request/mid-request.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  fxLayoutGap=\"3px\" fxLayoutAlign=\"start end\" style=\"margin-top:7px;\">\n  <mat-toolbar style=\"background-color: inherit\">\n     <span class=\"mat-headline\">MID Request List</span>\n    <span fxFlex></span>\n      <button mat-mini-fab color=\"primary\" matTooltip=\"Create New Entry\">\n    <mat-icon style=\"color:white\">add</mat-icon>\n    \n  </button>  \n  </mat-toolbar>\n  \n  \n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"currency\">\n    <th mat-header-cell *matHeaderCellDef> Currency  </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.currency}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"monitorCode\">\n    <th mat-header-cell *matHeaderCellDef> Monitor Code </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.monitorCode}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"merchantGroupCode\">\n    <th mat-header-cell *matHeaderCellDef> Merchant Group Code </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.merchantGroupCode}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"sfcc\">\n    <th mat-header-cell *matHeaderCellDef> Service Fee Rate </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.sfcc}} </td>\n  </ng-container>\n        The actual rendered columns are set as a property on the row definition\" -->\n <ng-container matColumnDef=\"controls\">\n    <th mat-header-cell *matHeaderCellDef>\n     <!--  <button mat-mini-fab> \n        <mat-icon>menu</mat-icon>\n      </button> -->\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <button mat-icon-button> \n        <mat-icon color=\"primary\">edit</mat-icon>\n      </button>\n       <button mat-icon-button> \n        <mat-icon color=\"warn\">delete_forever</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n \n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n</div>\n\n  \n"

/***/ }),

/***/ "./src/app/mid-request/mid-request.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mid-request/mid-request.component.ts ***!
  \******************************************************/
/*! exports provided: MidRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidRequestComponent", function() { return MidRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ELEMENT_DATA = [
    { currency: 'PHP', monitorCode: 'OTC', merchantGroupCode: 'MerchGrp4', sfcc: 'H' },
    { currency: 'USD', monitorCode: 'Reg Inst', merchantGroupCode: 'MerchGrp1Z', sfcc: 'He' },
    { currency: 'PHP', monitorCode: '0% Inst', merchantGroupCode: '', sfcc: 'Li' },
    { currency: 'PHP', monitorCode: 'BNPL Reg', merchantGroupCode: 'MerchGrp4', sfcc: 'Be' },
    { currency: 'PHP', monitorCode: 'BNPL 0%', merchantGroupCode: 'MerchGrp1Z', sfcc: 'B' }
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
var MidRequestComponent = /** @class */ (function () {
    function MidRequestComponent() {
        this.displayedColumns = ['currency', 'monitorCode', 'merchantGroupCode', 'sfcc', 'controls'];
        this.dataSource = ELEMENT_DATA;
    }
    MidRequestComponent.prototype.ngOnInit = function () {
    };
    MidRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mid-request',
            template: __webpack_require__(/*! ./mid-request.component.html */ "./src/app/mid-request/mid-request.component.html"),
            styles: [__webpack_require__(/*! ./mid-request.component.css */ "./src/app/mid-request/mid-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MidRequestComponent);
    return MidRequestComponent;
}());



/***/ }),

/***/ "./src/app/new-affiliation/new-affiliation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/new-affiliation/new-affiliation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-affiliation/new-affiliation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/new-affiliation/new-affiliation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"mat-card-screen\">\n  \n  <mat-card-content>\n<app-bdo-form-header [text]=\"title\" [sub_text]=\"subText\"></app-bdo-form-header>\n <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n  <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\n   <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\n          <button type=\"submit\" color=\"primary\" mat-raised-button >Save </button>\n          <button type=\"submit\" color=\"accent\" mat-raised-button>Cancel</button>\n        </div>\n  </formly-form>\n</form>\n\n\n</mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/new-affiliation/new-affiliation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/new-affiliation/new-affiliation.component.ts ***!
  \**************************************************************/
/*! exports provided: NewAffiliationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAffiliationComponent", function() { return NewAffiliationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_affiliation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-affiliation.service */ "./src/app/new-affiliation/new-affiliation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {FormlyFieldConfig} from 'ng-formly';
var NewAffiliationComponent = /** @class */ (function () {
    function NewAffiliationComponent(newAffiliationService) {
        this.newAffiliationService = newAffiliationService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {};
        this.options = {};
        this.title = 'New Affiliation';
        this.subText = 'Create';
        this.fields = newAffiliationService.getPosFields();
    }
    NewAffiliationComponent.prototype.ngOnInit = function () {
    };
    NewAffiliationComponent.prototype.submit = function (model) {
        console.log(model);
    };
    NewAffiliationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-affiliation',
            template: __webpack_require__(/*! ./new-affiliation.component.html */ "./src/app/new-affiliation/new-affiliation.component.html"),
            styles: [__webpack_require__(/*! ./new-affiliation.component.css */ "./src/app/new-affiliation/new-affiliation.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_new_affiliation_service__WEBPACK_IMPORTED_MODULE_2__["NewAffiliationService"]])
    ], NewAffiliationComponent);
    return NewAffiliationComponent;
}());



/***/ }),

/***/ "./src/app/new-affiliation/new-affiliation.service.ts":
/*!************************************************************!*\
  !*** ./src/app/new-affiliation/new-affiliation.service.ts ***!
  \************************************************************/
/*! exports provided: NewAffiliationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAffiliationService", function() { return NewAffiliationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewAffiliationService = /** @class */ (function () {
    function NewAffiliationService() {
        this.fields = [
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'firstName',
                        templateOptions: {
                            label: 'First Name',
                            placeholder: 'Your name'
                        },
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'lastName',
                        templateOptions: {
                            label: 'Last Name',
                        },
                        expressionProperties: {},
                    },
                ],
            },
            {
                template: '<span class="mat-subheading-1">Address:</span>',
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'street',
                        templateOptions: {
                            label: 'Street',
                        },
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'cityName',
                        templateOptions: {
                            label: 'City',
                        },
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'zip',
                        templateOptions: {
                            type: 'number',
                            label: 'Zip',
                            max: 99999,
                            min: 0,
                            pattern: '\\d{5}',
                        },
                    },
                ],
            },
            /*{
              template: '<hr />',
            },*/
            {
                type: 'input',
                key: 'otherInput',
                templateOptions: {
                    label: 'Other Input',
                },
            },
            {
                type: 'checkbox',
                key: 'otherToo',
                templateOptions: {
                    label: 'Other Checkbox',
                },
            },
        ];
    }
    NewAffiliationService.prototype.getPosFields = function () {
        return this.fields;
    };
    NewAffiliationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NewAffiliationService);
    return NewAffiliationService;
}());



/***/ }),

/***/ "./src/app/pos-request-stepper/pos-request-stepper.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pos-request-stepper/pos-request-stepper.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pos-request-stepper/pos-request-stepper.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pos-request-stepper/pos-request-stepper.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>"

/***/ }),

/***/ "./src/app/pos-request-stepper/pos-request-stepper.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pos-request-stepper/pos-request-stepper.component.ts ***!
  \**********************************************************************/
/*! exports provided: PosRequestStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosRequestStepperComponent", function() { return PosRequestStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PosRequestStepperComponent = /** @class */ (function () {
    function PosRequestStepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    PosRequestStepperComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PosRequestStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pos-request-stepper',
            template: __webpack_require__(/*! ./pos-request-stepper.component.html */ "./src/app/pos-request-stepper/pos-request-stepper.component.html"),
            styles: [__webpack_require__(/*! ./pos-request-stepper.component.css */ "./src/app/pos-request-stepper/pos-request-stepper.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PosRequestStepperComponent);
    return PosRequestStepperComponent;
}());



/***/ }),

/***/ "./src/app/pos-request/pos-request.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pos-request/pos-request.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-headline{\r\n\r\n\tcolor: #0d47a1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pos-request/pos-request.component.html":
/*!********************************************************!*\
  !*** ./src/app/pos-request/pos-request.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"mat-card-screen\">\n <mat-card-content>\n \n  <app-bdo-form-header [text]=\"title\" [sub_text]=\"subText\"></app-bdo-form-header>\n  \n <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n  <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\n     <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\n          <button type=\"submit\" color=\"primary\" mat-raised-button >Save </button>\n          <button type=\"submit\" color=\"accent\" mat-raised-button>Cancel</button>\n        </div>\n  </formly-form>\n</form>\n<br>\n\n<hr>\n<mat-tab-group>\n  <mat-tab label=\"MID Request\"> <app-mid-request></app-mid-request>\n</mat-tab>\n  <mat-tab label=\"TID Request\"> \n    <span class=\"mat-headline\" style=\"margin-bottom:20px;\">TID Request </span>\n  </mat-tab>\n  \n</mat-tab-group> \n</mat-card-content>\n</mat-card>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pos-request/pos-request.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pos-request/pos-request.component.ts ***!
  \******************************************************/
/*! exports provided: PosRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosRequestComponent", function() { return PosRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pos_fields_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pos-fields.service */ "./src/app/services/pos-fields.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PosRequestComponent = /** @class */ (function () {
    function PosRequestComponent(posFieldService) {
        this.posFieldService = posFieldService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {};
        this.options = {};
        this.title = 'Pos Request';
        this.subText = 'Create';
        this.fields = posFieldService.getPosFields();
    }
    PosRequestComponent.prototype.ngOnInit = function () {
    };
    PosRequestComponent.prototype.submit = function (model) {
        console.log(model);
    };
    PosRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pos-request',
            template: __webpack_require__(/*! ./pos-request.component.html */ "./src/app/pos-request/pos-request.component.html"),
            styles: [__webpack_require__(/*! ./pos-request.component.css */ "./src/app/pos-request/pos-request.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pos_fields_service__WEBPACK_IMPORTED_MODULE_2__["PosFieldsService"]])
    ], PosRequestComponent);
    return PosRequestComponent;
}());



/***/ }),

/***/ "./src/app/services/pos-fields.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/pos-fields.service.ts ***!
  \************************************************/
/*! exports provided: PosFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosFieldsService", function() { return PosFieldsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PosFieldsService = /** @class */ (function () {
    function PosFieldsService() {
        this.fields = [
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'dateEndorse',
                        type: 'calendar',
                        templateOptions: {
                            label: "Date and time Endorsed"
                        }
                    }, {
                        className: 'flex-1',
                        type: 'input',
                        key: 'aoCode',
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        },
                        templateOptions: {
                            label: "AO Code"
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'input',
                        key: 'aoCode',
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        },
                        templateOptions: {
                            label: "AO Code"
                        }
                    },
                    {
                        key: 'status',
                        type: 'input',
                        hide: true
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'statusDesc',
                        //ngModelAttrs: {
                        //    readOnly: {
                        //        bound: 'ng-readonly',
                        //        attribute: 'ng-readonly'
                        //    }
                        //},
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        },
                        templateOptions: {
                            label: 'Status',
                            //readOnly: true,
                            style: "margin-bottom: 5px; margin-top: 0;background-color:text-warning"
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'select',
                        key: 'natureOfRequest',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Nature Of Request',
                            labelProp: 'Description',
                            valueProp: 'NatureOfRequest_Id',
                            options: []
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'input',
                        key: 'requestorsName',
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        },
                        templateOptions: {
                            label: "Requestor's Name"
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'businessUnit',
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        },
                        templateOptions: {
                            label: 'Business Unit'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'requestorsContactNumber',
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        },
                        templateOptions: {
                            label: 'Contact Number'
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'select',
                        key: 'area',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Area',
                            labelProp: 'Description',
                            valueProp: 'Area_Id',
                            options: []
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'select',
                        key: 'typeOfAccount',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Type Of Account',
                            labelProp: 'Description',
                            valueProp: 'TypeOfAccount_Id',
                            options: []
                        }
                        // ,
                        // controller: function ($scope) {
                        //     dropDown.getTypeOfAccount().success(function (data) {
                        //         $scope.to.options = data;
                        //     });
                        // }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'segment',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Segment'
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'input',
                        key: 'legalName',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Legal Name'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'Branch.DBAName',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'DBA Name'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'signage',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Signage'
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'input',
                        key: 'Branch.address1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Address'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'select',
                        key: 'Branch.City_Id',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'City',
                            labelProp: 'Description',
                            valueProp: 'City_Id',
                            options: []
                        }
                        // ,
                        // controller: function ($scope) {
                        //     dropDown.getCities().success(function (data) {
                        //         $scope.to.options = data;
                        //     });
                        // }
                    },
                    {
                        className: 'col-sm-2',
                        type: 'checkbox',
                        key: 'contactlessMerchant',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Contactless Merchant'
                        }
                    },
                    {
                        className: 'col-sm-2',
                        type: 'select',
                        key: 'Branch.MCC_Id',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'MCC',
                            labelProp: 'Description',
                            valueProp: 'MCC_Id',
                            options: []
                        }
                        // ,
                        // controller: function ($scope) {
                        //     dropDown.getMCC().success(function (data) {
                        //         $scope.to.options = data;
                        //     });
                        // }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'input',
                        key: 'Branch.address2',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Addres 2 '
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'contactPerson',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Contact Person',
                            required: true
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'contactNumber',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Contact Number'
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'input',
                        key: 'Branch.address3',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Addres 3 '
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'numberOfTerminals',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Number Of Terminals',
                            pattern: '^\\d+$',
                            pd: 'number'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'noOfPrintedSlips',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'No. Of Printed Slips',
                            pattern: '^\\d+$',
                            pd: 'number'
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'select',
                        key: 'terminalBrandTypeModel',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Terminal Brand/Type/Model',
                            labelProp: 'Description',
                            valueProp: 'TerminalBrandTypeModel_Id',
                            options: []
                        }
                        // ,
                        // controller: function ($scope) {
                        //     dropDown.getTerminalBrandTypeModel().success(function (data) {
                        //         $scope.to.options = data;
                        //     });
                        // }
                    },
                    {
                        className: 'flex-1',
                        type: 'select',
                        key: 'reasonForThreeSlipPrinting',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Reason For 3 Slip Printing',
                            labelProp: 'Description',
                            valueProp: 'ReasonForThreeSlipPrinting_Id',
                            options: []
                        }
                        // ,
                        // controller: function ($scope) {
                        //     dropDown.getReasonForThreeSlipPrinting().success(function (data) {
                        //         $scope.to.options = data;
                        //     });
                        // }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'telcoProvider',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Telco Provider'
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'select',
                        key: 'simType',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Sim Type',
                            valueProp: 'SimType_Id',
                            labelProp: 'Description',
                            options: []
                        }
                        // ,
                        // controller: function ($scope) {
                        //     dropDown.getSimType().then(function (data) {
                        //         $scope.to.options = data;
                        //     })
                        // }
                    },
                    {
                        className: 'flex-1',
                        type: 'calendar',
                        key: 'dispatchDateTime',
                        //  defaultValue: moment().format('MM/DD/YYYY'),
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Dispatch Date/Time'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'calendar',
                        key: 'pullOutDateForTempGPRSTerminals',
                        // defaultValue: moment().format('MM/DD/YYYY'),
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Pull Out Date For Temp GPRS Terminals'
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'input',
                        key: 'reasonForGPRSInstallation',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Reason For GPRS Installation'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'otherProfilingFacility',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Other Profiling Facility'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'calendar',
                        key: 'ARISCheckUpdateTime',
                        // defaultValue: moment().format('MM/DD/YYYY'),
                        expressionProperties: {},
                        templateOptions: {
                            label: 'ARIS Check Update Time',
                            placeholder: 'ARIS CheckUp date'
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-1',
                        type: 'input',
                        key: 'ARISDownloadTime',
                        //defaultValue: moment().format('MM/DD/YYYY'),
                        expressionProperties: {},
                        templateOptions: {
                            label: 'ARIS Download Time'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'merchantPrepaid',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Merchant Prepaid'
                        }
                    },
                    {
                        key: 'cardPlan',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Card Plans',
                            options: [],
                            valueProp: 'CardPlans_Id',
                            labelProp: 'Description'
                        }
                        // ,
                        // controller: function ($scope) {
                        //     dropDown.getCardPlans().success(function (data) {
                        //         $scope.to.options = data;
                        //     });
                        // }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        className: 'flex-6',
                        type: 'textarea',
                        key: 'remarks',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Remarks',
                            rows: 2
                        }
                    }]
            }
        ];
    }
    PosFieldsService.prototype.getPosFields = function () {
        return this.fields;
    };
    PosFieldsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PosFieldsService);
    return PosFieldsService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularCliProject\SampleRouting\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map