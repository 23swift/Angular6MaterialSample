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

/***/ "./src/app/additional-facility/additional-facility.component.html":
/*!************************************************************************!*\
  !*** ./src/app/additional-facility/additional-facility.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-card class=\"mat-card-screen\">\r\n        <app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\" [mode]=\"mode\"></app-bdo-form-header>\r\n    <mat-card-content>\r\n     </mat-card-content>\r\n     </mat-card>"

/***/ }),

/***/ "./src/app/additional-facility/additional-facility.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/additional-facility/additional-facility.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/additional-facility/additional-facility.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/additional-facility/additional-facility.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdditionalFacilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalFacilityComponent", function() { return AdditionalFacilityComponent; });
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


var AdditionalFacilityComponent = /** @class */ (function () {
    function AdditionalFacilityComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {};
        this.options = {};
        this.title = 'Additional Facility';
        this.subTitle = 'Create';
    }
    AdditionalFacilityComponent.prototype.ngOnInit = function () {
    };
    AdditionalFacilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-additional-facility',
            template: __webpack_require__(/*! ./additional-facility.component.html */ "./src/app/additional-facility/additional-facility.component.html"),
            styles: [__webpack_require__(/*! ./additional-facility.component.scss */ "./src/app/additional-facility/additional-facility.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdditionalFacilityComponent);
    return AdditionalFacilityComponent;
}());



/***/ }),

/***/ "./src/app/app-base/app-base.component.css":
/*!*************************************************!*\
  !*** ./src/app/app-base/app-base.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-base/app-base.component.html":
/*!**************************************************!*\
  !*** ./src/app/app-base/app-base.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  app-base works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/app-base/app-base.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-base/app-base.component.ts ***!
  \************************************************/
/*! exports provided: AppBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBaseComponent", function() { return AppBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBaseComponent = /** @class */ (function () {
    function AppBaseComponent(route, router) {
        this.route = route;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {};
        this.options = {};
        this.title = '';
        this.subTitle = 'Create';
    }
    // ngOnInit() {
    //   this.initialize();
    // }
    /**
     * callSuperInit
     */
    AppBaseComponent.prototype.initialize = function () {
        this.mode = this.route.snapshot.paramMap.get('mode');
        this.selectMode();
    };
    AppBaseComponent.prototype.selectMode = function () {
        switch (this.mode) {
            case 'create':
                this.subTitle = "Create";
                this.baseExecuteFunction = this.create;
                break;
            case 'update':
                this.subTitle = "Update";
                this.baseExecuteFunction = this.update;
                break;
            default:
                this.subTitle = "Mode Not Found";
                this.baseExecuteFunction = this.noAction;
                break;
        }
    };
    AppBaseComponent.prototype.create = function () {
        alert('create');
    };
    AppBaseComponent.prototype.update = function () {
        alert('updated');
    };
    AppBaseComponent.prototype.cancel = function () {
        alert('Please override cancel function');
    };
    AppBaseComponent.prototype.noAction = function () {
        alert('No Action Found, Mode Not Found');
    };
    AppBaseComponent.prototype.getFields = function () {
        // this.fields=this._branchService.getBranchFields();
    };
    AppBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-base',
            template: __webpack_require__(/*! ./app-base.component.html */ "./src/app/app-base/app-base.component.html"),
            styles: [__webpack_require__(/*! ./app-base.component.css */ "./src/app/app-base/app-base.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppBaseComponent);
    return AppBaseComponent;
}());



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
/* harmony import */ var _branch_affiliation_branch_affiliation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./branch-affiliation/branch-affiliation.component */ "./src/app/branch-affiliation/branch-affiliation.component.ts");
/* harmony import */ var _additional_facility_additional_facility_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./additional-facility/additional-facility.component */ "./src/app/additional-facility/additional-facility.component.ts");
/* harmony import */ var _file_maintenance_file_maintenance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-maintenance/file-maintenance.component */ "./src/app/file-maintenance/file-maintenance.component.ts");
/* harmony import */ var _extention_extention_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extention/extention.component */ "./src/app/extention/extention.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/branch/branch.component.ts");
/* harmony import */ var _new_affiliation_step_new_affiliation_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-affiliation-step/new-affiliation-step.component */ "./src/app/new-affiliation-step/new-affiliation-step.component.ts");
/* harmony import */ var _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-screen/home-screen.component */ "./src/app/home-screen/home-screen.component.ts");
/* harmony import */ var _branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./branch-list/branch-list.component */ "./src/app/branch-list/branch-list.component.ts");
/* harmony import */ var _new_affiliation_sum_new_affiliation_sum_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-affiliation-sum/new-affiliation-sum.component */ "./src/app/new-affiliation-sum/new-affiliation-sum.component.ts");
/* harmony import */ var _forms_awr_form_awr_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forms/awr-form/awr-form.component */ "./src/app/forms/awr-form/awr-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'na/:mode', component: _new_affiliation_new_affiliation_component__WEBPACK_IMPORTED_MODULE_2__["NewAffiliationComponent"] },
    { path: 'pos/:mode', component: _pos_request_pos_request_component__WEBPACK_IMPORTED_MODULE_3__["PosRequestComponent"] },
    { path: 'posStep', component: _pos_request_stepper_pos_request_stepper_component__WEBPACK_IMPORTED_MODULE_4__["PosRequestStepperComponent"] },
    { path: 'ba/:mode', component: _branch_affiliation_branch_affiliation_component__WEBPACK_IMPORTED_MODULE_5__["BranchAffiliationComponent"] },
    { path: 'additionalFacility', component: _additional_facility_additional_facility_component__WEBPACK_IMPORTED_MODULE_6__["AdditionalFacilityComponent"] },
    { path: 'fileMaintenance', component: _file_maintenance_file_maintenance_component__WEBPACK_IMPORTED_MODULE_7__["FileMaintenanceComponent"] },
    { path: 'ext/:mode', component: _extention_extention_component__WEBPACK_IMPORTED_MODULE_8__["ExtentionComponent"] },
    // {path:'branch/:mode/:id', component:BranchComponent},
    { path: 'branch/:mode', component: _branch_branch_component__WEBPACK_IMPORTED_MODULE_9__["BranchComponent"] },
    { path: 'naStep/:mode', component: _new_affiliation_step_new_affiliation_step_component__WEBPACK_IMPORTED_MODULE_10__["NewAffiliationStepComponent"],
        children: [
            // { path: '', redirectTo: 'branchList', pathMatch: 'full' }
            { path: '', component: _branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_12__["BranchListComponent"] },
            { path: 'branch/:mode/:id', component: _branch_branch_component__WEBPACK_IMPORTED_MODULE_9__["BranchComponent"] },
            { path: 'branch/:mode', component: _branch_branch_component__WEBPACK_IMPORTED_MODULE_9__["BranchComponent"] }
        ]
    },
    { path: 'newAffSum', component: _new_affiliation_sum_new_affiliation_sum_component__WEBPACK_IMPORTED_MODULE_13__["NewAffiliationSumComponent"] },
    { path: 'home', component: _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_11__["HomeScreenComponent"] },
    { path: 'awr', component: _forms_awr_form_awr_form_component__WEBPACK_IMPORTED_MODULE_14__["AwrFormComponent"] }
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

module.exports = ".mat-menu-item{\r\n\tcolor: #0d47a1;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.example-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 10px;\r\n\r\n  /* border: 1px solid #555; */\r\n}\r\n\r\n.mat-toolbar-row{\r\n\tpadding-top: 15px;\r\n}\r\n\r\n.mat-icon{\r\n\r\n\tcolor: white;\r\n}\r\n\r\n.mat-headline{\r\n\tcolor: #0d47a1;\r\n}\r\n\r\n/* .mat-toolbar-main  {\r\n   position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  \r\n} */\r\n\r\n/* .sidenav-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 10px;\r\n  border: 1px solid #555; \r\n} */\r\n\r\nhtml, body{\r\n\r\n height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<!-- <mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav [mode]=\"side\">\r\n  \t\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n\r\n <mat-toolbar color=\"primary\" class=\"mat-elevation-z5\">\r\n  \t  \t \r\n  \t<span flex>Merchant Acquiring System</span>\r\n\r\n\t\t\t<button mat-icon-button  [matMenuTriggerFor]=\"menu\"><mat-icon>description</mat-icon></button>\r\n\t\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t  <a routerLink=\"/na\" mat-menu-item>New Affiliation</a>\r\n\t\t\t\t  <button mat-menu-item>Branch Affiiation</button>\r\n          \r\n          \t\t\t\t<a routerLink=\"/pos\" mat-menu-item>POS Request</a>\r\n\t\t\t\t  <button mat-menu-item>Additional Facility</button>\r\n\t\t\t\t  <button mat-menu-item>File Maintenance</button>\r\n\t\t\t\t</mat-menu>\r\n\t\t\t\t<button mat-icon-button><mat-icon>settings</mat-icon></button>\r\n\t\t\t\t<button mat-icon-button><mat-icon>assignment</mat-icon></button>\r\n\t\t<span fxFlex></span>\r\n  \r\n\t\t\t<button type=\"submit\"  mat-icon-button ><mat-icon>search</mat-icon> </button> \r\n  \t \t\r\n\r\n  \r\n\r\n  </mat-toolbar>\r\n \r\n\r\n <router-outlet></router-outlet>  \r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n -->\r\n\r\n<app-main-nav>\r\n    <!-- <button mat-raised-button color=\"accent\"  (click)=\"drawer.toggle()\">Click Me</button> -->\r\n    <!-- <div class=\"main-nav-container\">\r\n\t \r\n</div> -->\r\n    <div class=\"main-container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n</app-main-nav>\r\n<!-- \r\nEpic\r\n-User Story1\r\n-User Story2\r\n\r\nNew Affliation\r\n-User Story1\r\n-User Story2\r\n\r\nBranch Affiliation\r\n-User Story1\r\n-User Story2\r\n\r\n\r\nPOS Request\r\n-User Story1\r\n-User Story2\r\n\r\n\r\nAdditional Facility  \t\r\n-User Story1\r\n-User Story2\r\n\r\nFile Maintenance\r\n-User Story1\r\n-User Story2\r\n\r\nParameter Maintenance\r\n\r\nDocument Maintenance\r\n\r\nDefault Document management\r\n\r\nSFCC Setup -->"

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
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _calendar_type_calendar_type_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./calendar-type/calendar-type.component */ "./src/app/calendar-type/calendar-type.component.ts");
/* harmony import */ var _bdo_form_header_bdo_form_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bdo-form-header/bdo-form-header.component */ "./src/app/bdo-form-header/bdo-form-header.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _mid_request_mid_request_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mid-request/mid-request.component */ "./src/app/mid-request/mid-request.component.ts");
/* harmony import */ var _pos_request_stepper_pos_request_stepper_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pos-request-stepper/pos-request-stepper.component */ "./src/app/pos-request-stepper/pos-request-stepper.component.ts");
/* harmony import */ var _branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./branch-list/branch-list.component */ "./src/app/branch-list/branch-list.component.ts");
/* harmony import */ var _branch_affiliation_branch_affiliation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./branch-affiliation/branch-affiliation.component */ "./src/app/branch-affiliation/branch-affiliation.component.ts");
/* harmony import */ var _additional_facility_additional_facility_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./additional-facility/additional-facility.component */ "./src/app/additional-facility/additional-facility.component.ts");
/* harmony import */ var _file_maintenance_file_maintenance_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./file-maintenance/file-maintenance.component */ "./src/app/file-maintenance/file-maintenance.component.ts");
/* harmony import */ var _app_base_app_base_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app-base/app-base.component */ "./src/app/app-base/app-base.component.ts");
/* harmony import */ var _extention_extention_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./extention/extention.component */ "./src/app/extention/extention.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/branch/branch.component.ts");
/* harmony import */ var _new_affiliation_step_new_affiliation_step_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./new-affiliation-step/new-affiliation-step.component */ "./src/app/new-affiliation-step/new-affiliation-step.component.ts");
/* harmony import */ var _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./home-screen/home-screen.component */ "./src/app/home-screen/home-screen.component.ts");
/* harmony import */ var _ocular_inspection_form_ocular_inspection_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ocular-inspection-form/ocular-inspection-form.component */ "./src/app/ocular-inspection-form/ocular-inspection-form.component.ts");
/* harmony import */ var _document_check_list_document_check_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./document-check-list/document-check-list.component */ "./src/app/document-check-list/document-check-list.component.ts");
/* harmony import */ var _new_affiliation_sum_new_affiliation_sum_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./new-affiliation-sum/new-affiliation-sum.component */ "./src/app/new-affiliation-sum/new-affiliation-sum.component.ts");
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ "./src/app/customer-profile/customer-profile.component.ts");
/* harmony import */ var _maef_fields_maef_fields_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./maef-fields/maef-fields.component */ "./src/app/maef-fields/maef-fields.component.ts");
/* harmony import */ var _forms_awr_form_awr_form_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./forms/awr-form/awr-form.component */ "./src/app/forms/awr-form/awr-form.component.ts");
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
                _calendar_type_calendar_type_component__WEBPACK_IMPORTED_MODULE_21__["CalendarTypeComponent"],
                _bdo_form_header_bdo_form_header_component__WEBPACK_IMPORTED_MODULE_22__["BdoFormHeaderComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_23__["MainNavComponent"],
                _mid_request_mid_request_component__WEBPACK_IMPORTED_MODULE_25__["MidRequestComponent"],
                _pos_request_stepper_pos_request_stepper_component__WEBPACK_IMPORTED_MODULE_26__["PosRequestStepperComponent"],
                _branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_27__["BranchListComponent"],
                _branch_affiliation_branch_affiliation_component__WEBPACK_IMPORTED_MODULE_28__["BranchAffiliationComponent"],
                _additional_facility_additional_facility_component__WEBPACK_IMPORTED_MODULE_29__["AdditionalFacilityComponent"],
                _file_maintenance_file_maintenance_component__WEBPACK_IMPORTED_MODULE_30__["FileMaintenanceComponent"],
                _app_base_app_base_component__WEBPACK_IMPORTED_MODULE_31__["AppBaseComponent"],
                _extention_extention_component__WEBPACK_IMPORTED_MODULE_32__["ExtentionComponent"],
                _branch_branch_component__WEBPACK_IMPORTED_MODULE_33__["BranchComponent"],
                _new_affiliation_step_new_affiliation_step_component__WEBPACK_IMPORTED_MODULE_34__["NewAffiliationStepComponent"],
                _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_35__["HomeScreenComponent"],
                _ocular_inspection_form_ocular_inspection_form_component__WEBPACK_IMPORTED_MODULE_36__["OcularInspectionFormComponent"],
                _document_check_list_document_check_list_component__WEBPACK_IMPORTED_MODULE_37__["DocumentCheckListComponent"],
                _new_affiliation_sum_new_affiliation_sum_component__WEBPACK_IMPORTED_MODULE_38__["NewAffiliationSumComponent"],
                _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_39__["CustomerProfileComponent"],
                _maef_fields_maef_fields_component__WEBPACK_IMPORTED_MODULE_40__["MaefFieldsComponent"],
                _forms_awr_form_awr_form_component__WEBPACK_IMPORTED_MODULE_41__["AwrFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyModule"].forRoot({
                    types: [{
                            name: 'calendar',
                            component: _calendar_type_calendar_type_component__WEBPACK_IMPORTED_MODULE_21__["CalendarTypeComponent"]
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
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"]
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

module.exports = ".header-container {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: start;\r\n    /* margin-bottom: 5px;\r\n    margin-top: 0;\r\n    margin-left: 0;\r\n    margin-right: 0; */\r\n    margin: 0;\r\n    border-bottom: 2px #0d47a1 solid;\r\n    /* margin-top:7px; */\r\n    background-color: white;\r\n    padding: 0;\r\n}\r\n\r\n.mat-title {\r\n    color: #0d47a1;\r\n}\r\n\r\n.request-menu-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 500px !important;\r\n}\r\n\r\n/* .mat-menu{\r\n\t\tpadding: 0 !important;\r\n\t\tmax-width: 300px;\r\n\r\n} */\r\n\r\n.request-mat-icon {\r\n    padding: 0;\r\n    color: #0d47a1;\r\n    /* color: whitesmoke; */\r\n}\r\n\r\n.mat-menu-item {\r\n    font-size: 14px !important;\r\n    padding-left: 3px;\r\n}\r\n\r\n.request-mat-toolbar {\r\n    background-color: inherit !important;\r\n}\r\n\r\n.header-logo {\r\n    margin-left: 2px;\r\n    margin-top: 2px;\r\n    height: 65px;\r\n    width: 120px;\r\n}"

/***/ }),

/***/ "./src/app/bdo-form-header/bdo-form-header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bdo-form-header/bdo-form-header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\r\n    <div><img src=\"assets/img/bdoLogo.png\" class=\"header-logo\" alt=\"\"> </div>\r\n    <div style=\"margin-left:10px;\"> <span class=\"mat-title\">{{text}}</span>\r\n        <br>\r\n        <span style=\"color:orange\" class=\"mat-subheading-2\">{{sub_text}}</span>\r\n    </div>\r\n    <span fxFlex></span>\r\n\r\n    <mat-toolbar class=\"request-mat-toolbar\" fxFlex fxShow=”true” fxHide.sm=”true”>\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"6px\" fxLayoutAlign=\"space-around center\">\r\n            <span fxFlex></span>\r\n\r\n            <div *ngIf=\"showApprovalOptions\">\r\n                <button mat-fab style=\"font-size: 12px;\" color=\"primary\" matTooltip=\"Approve Request\">\r\n\t\t\t\t\t\t<span style=\"color:white\">Approve</span>  \r\n\t\t\t\t\t\t</button>\r\n                <button mat-fab style=\"font-size: 12px;\" matTooltip=\"Decline request\">\r\n\t\t\t\t\t\t  <!-- <mat-icon  class=\"request-mat-icon\">clear</mat-icon> -->\r\n\t\t\t\t\t\t  <span style=\"color:white\">Decline</span>  \r\n\t\t\t\t\t\t  </button>\r\n\r\n            </div>\r\n\r\n\r\n            <button *ngIf=\"showRequestFlowOptions\" mat-mini-fab style=\"font-size: 12px;\" matTooltip=\"Return Request\"><mat-icon  class=\"request-mat-icon\">subdirectory_arrow_left</mat-icon></button>\r\n            <button *ngIf=\"showRequestFlowOptions\" mat-mini-fab matTooltip=\"Submit Request\"><mat-icon  class=\"request-mat-icon\">arrow_forward</mat-icon></button>\r\n\r\n\r\n            <!-- \t<button mat-button color=\"primary\" matTooltip=\"Approve Request\" ><mat-icon  class=\"request-mat-icon\">done</mat-icon>Approve</button>\r\n      <button mat-button color=\"primary\" matTooltip=\"Decline request\"><mat-icon  class=\"request-mat-icon\">clear</mat-icon>Decline</button>\r\n      <button mat-button color=\"primary\" matTooltip=\"Return Request\"><mat-icon  class=\"request-mat-icon\">subdirectory_arrow_left</mat-icon>Return </button>\r\n      <button mat-button  color=\"primary\" matTooltip=\"Submit Request\" ><mat-icon  class=\"request-mat-icon\">arrow_forward</mat-icon>Submit</button> -->\r\n        </div>\r\n    </mat-toolbar>\r\n\r\n    <div>\r\n        <button fxFlex fxShow=”true” fxHide.lg=”true” mat-mini-fab [matMenuTriggerFor]=\"requestMenu\">\r\n  \t\t\t<mat-icon color=\"primary\">menu</mat-icon>\r\n  \t</button>\r\n\r\n        <mat-menu class=\"request-menu-container\" #requestMenu=\"matMenu\" style=\"padding:0;\">\r\n\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start\">\r\n\r\n                <button mat-menu-item color=\"primary\" matTooltip=\"Approve Request\"><mat-icon class=\"request-mat-icon\" >done</mat-icon>Approve</button>\r\n                <button mat-menu-item color=\"primary\" matTooltip=\"Decline request\"><mat-icon  class=\"request-mat-icon\" >clear</mat-icon>Decline</button>\r\n                <button mat-menu-item color=\"primary\" matTooltip=\"Return Request\" matTooltip=\"Return Request\"><mat-icon  class=\"request-mat-icon\" >subdirectory_arrow_left</mat-icon>Return</button>\r\n                <button mat-menu-item color=\"primary\" matTooltip=\"Submit Request\" matTooltip=\"Submit Request\"><mat-icon  class=\"request-mat-icon\">arrow_forward</mat-icon>Submit</button>\r\n\r\n\r\n            </div>\r\n\r\n        </mat-menu>\r\n\r\n    </div>\r\n\r\n</div>"

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
        this.showApprovalOptions = false;
        this.showRequestFlowOptions = false;
    }
    BdoFormHeaderComponent.prototype.ngOnInit = function () {
        if (this.mode == 'approval') {
            this.showApprovalOptions = true;
        }
        if (this.mode != 'create') {
            this.showRequestFlowOptions = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BdoFormHeaderComponent.prototype, "mode", void 0);
    BdoFormHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bdo-form-header',
            template: __webpack_require__(/*! ./bdo-form-header.component.html */ "./src/app/bdo-form-header/bdo-form-header.component.html"),
            styles: [__webpack_require__(/*! ./bdo-form-header.component.css */ "./src/app/bdo-form-header/bdo-form-header.component.css")],
            inputs: ['text', 'sub_text']
        }),
        __metadata("design:paramtypes", [])
    ], BdoFormHeaderComponent);
    return BdoFormHeaderComponent;
}());



/***/ }),

/***/ "./src/app/branch-affiliation/branch-affiliation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/branch-affiliation/branch-affiliation.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/branch-affiliation/branch-affiliation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/branch-affiliation/branch-affiliation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-card-screen\">\r\n\r\n    <mat-card-content>\r\n        <app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\" [mode]=\"mode\"></app-bdo-form-header>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n            <button mat-button color=\"warn\">\r\n            <mat-icon >attachment</mat-icon>\r\n            OIF\r\n        </button>\r\n            <button mat-button color=\"warn\">\r\n            <mat-icon>attachment</mat-icon>\r\n            POS\r\n        </button>\r\n        </div>\r\n\r\n\r\n\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n            <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\r\n\r\n            </formly-form>\r\n\r\n        </form>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n\r\n            <button (click)=\"executeFunction();\" color=\"primary\" mat-raised-button>{{subTitle}}</button>\r\n\r\n            <a routerLink=\"/na\" color=\"accent\" mat-raised-button>Cancel</a>\r\n        </div>\r\n\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/branch-affiliation/branch-affiliation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/branch-affiliation/branch-affiliation.component.ts ***!
  \********************************************************************/
/*! exports provided: BranchAffiliationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchAffiliationComponent", function() { return BranchAffiliationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BranchAffiliationComponent = /** @class */ (function () {
    // @Input() mode: string;
    function BranchAffiliationComponent(branchService, route, router) {
        this.branchService = branchService;
        this.route = route;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {};
        this.options = {};
        this.title = 'Branch Affiliation';
        this.subTitle = '';
        this._branchService = branchService;
        this.getFields();
    }
    BranchAffiliationComponent.prototype.ngOnInit = function () {
        this.mode = this.route.snapshot.paramMap.get('mode');
        this.selectMode();
    };
    BranchAffiliationComponent.prototype.selectMode = function () {
        switch (this.mode) {
            case 'create':
                this.subTitle = "Create";
                this.executeFunction = this.create;
                break;
            case 'update':
                this.subTitle = "Update";
                this.executeFunction = this.update;
            default:
                break;
        }
    };
    BranchAffiliationComponent.prototype.create = function () {
        alert('create');
    };
    BranchAffiliationComponent.prototype.update = function () {
        alert('updated');
    };
    BranchAffiliationComponent.prototype.getFields = function () {
        this.fields = this._branchService.getBranchFields();
    };
    BranchAffiliationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch',
            template: __webpack_require__(/*! ./branch-affiliation.component.html */ "./src/app/branch-affiliation/branch-affiliation.component.html"),
            styles: [__webpack_require__(/*! ./branch-affiliation.component.css */ "./src/app/branch-affiliation/branch-affiliation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BranchAffiliationComponent);
    return BranchAffiliationComponent;
}());



/***/ }),

/***/ "./src/app/branch-list/branch-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/branch-list/branch-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n    background-color: #fafafa;\r\n}\r\n\r\n.flex-branch-list-header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    /* border:4px blue solid; */\r\n    justify-content: space-between;\r\n}\r\n\r\n.mat-subheading-1 {\r\n    font-size: 20px;\r\n}\r\n\r\n.mat-subheading-1 {\r\n    color: #0d47a1;\r\n}"

/***/ }),

/***/ "./src/app/branch-list/branch-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/branch-list/branch-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-branch-list-header\">\r\n\r\n    <span class=\"mat-subheading-1\">\r\n            \r\n            Branch List</span>\r\n    <a routerLink=\"branch/create\" mat-mini-fab>\r\n        <mat-icon>playlist_add</mat-icon>\r\n    </a>\r\n</div>\r\n<div fxLayout=\"row\">\r\n    <!-- <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"> -->\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"BranchName\">\r\n            <th mat-header-cell *matHeaderCellDef> Branch Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.BranchName}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"BranchCode\">\r\n            <th mat-header-cell *matHeaderCellDef> Branch Code </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.BranchCode}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"DBAName\">\r\n            <th mat-header-cell *matHeaderCellDef> DBA Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.DBAName}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Attachment\">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n\r\n\r\n                <!-- <span class=\"fxFlex\"></span>\r\n                <a routerLink=\"/branch/create\" mat-mini-fab>\r\n                    <mat-icon>playlist_add</mat-icon>\r\n                </a> -->\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n\r\n                <a (click)=\"getItem(element.Id)\" mat-mini-fab>\r\n                    <mat-icon style=\"color:white;\">edit</mat-icon>\r\n\r\n                </a>\r\n\r\n            </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/branch-list/branch-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/branch-list/branch-list.component.ts ***!
  \******************************************************/
/*! exports provided: BranchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchListComponent", function() { return BranchListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    { Id: 1, BranchName: 'Aldo', BranchCode: 'BR300', DBAName: 'AldoMegamall' },
    { Id: 2, BranchName: 'Bench', BranchCode: 'BR300', DBAName: 'Bench' }
];
var BranchListComponent = /** @class */ (function () {
    function BranchListComponent(route, router) {
        this.route = route;
        this.router = router;
        this.displayedColumns = ['BranchName', 'BranchCode', 'DBAName', 'Attachment'];
        this.dataSource = ELEMENT_DATA;
    }
    BranchListComponent.prototype.ngOnInit = function () {
    };
    BranchListComponent.prototype.getItem = function (Id) {
        this.router.navigateByUrl('branch/update/' + Id);
    };
    BranchListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch-list',
            template: __webpack_require__(/*! ./branch-list.component.html */ "./src/app/branch-list/branch-list.component.html"),
            styles: [__webpack_require__(/*! ./branch-list.component.css */ "./src/app/branch-list/branch-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BranchListComponent);
    return BranchListComponent;
}());



/***/ }),

/***/ "./src/app/branch/branch.component.css":
/*!*********************************************!*\
  !*** ./src/app/branch/branch.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/branch/branch.component.html":
/*!**********************************************!*\
  !*** ./src/app/branch/branch.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-card-screen\">\r\n\r\n    <mat-card-content>\r\n        <app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\" [mode]=\"mode\"></app-bdo-form-header>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n            <button mat-button color=\"warn\">\r\n                <mat-icon >attachment</mat-icon>\r\n                OIF\r\n            </button>\r\n            <button mat-button color=\"warn\">\r\n                <mat-icon>attachment</mat-icon>\r\n                POS\r\n            </button>\r\n        </div>\r\n\r\n\r\n\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n            <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\r\n\r\n            </formly-form>\r\n\r\n        </form>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n\r\n            <button (click)=\"executeFunction();\" color=\"primary\" mat-raised-button>{{subTitle}}</button>\r\n\r\n            <button (click)=\"cancel();\" color=\"accent\" mat-raised-button>Cancel</button>\r\n        </div>\r\n\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/branch/branch.component.ts":
/*!********************************************!*\
  !*** ./src/app/branch/branch.component.ts ***!
  \********************************************/
/*! exports provided: BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_base_app_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-base/app-base.component */ "./src/app/app-base/app-base.component.ts");
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





var BranchComponent = /** @class */ (function (_super) {
    __extends(BranchComponent, _super);
    function BranchComponent(branchService, route, router) {
        var _this = _super.call(this, route, router) || this;
        _this.branchService = branchService;
        _this.route = route;
        _this.router = router;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        _this.model = {};
        _this.options = {};
        _this.title = 'Branch Affiliation';
        _this.subTitle = '';
        _this._branchService = branchService;
        _this.getFields();
        return _this;
    }
    BranchComponent.prototype.ngOnInit = function () {
        this.title = 'Branch';
        // this.baseCreateFunction=this.create;
        // this.baseUpdateFunction=this.update;
        this.initialize();
    };
    BranchComponent.prototype.create = function () {
        alert('Create branch');
    };
    BranchComponent.prototype.update = function () {
        alert('Update Branch');
        alert(this.route.snapshot.paramMap.get('id'));
    };
    BranchComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/naStep/create');
    };
    BranchComponent.prototype.getFields = function () {
        this.fields = this._branchService.getBranchFields();
    };
    BranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch',
            template: __webpack_require__(/*! ./branch.component.html */ "./src/app/branch/branch.component.html"),
            styles: [__webpack_require__(/*! ./branch.component.css */ "./src/app/branch/branch.component.css")]
        }),
        __metadata("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BranchComponent);
    return BranchComponent;
}(_app_base_app_base_component__WEBPACK_IMPORTED_MODULE_4__["AppBaseComponent"]));



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

module.exports = "<mat-form-field class='{{className}} mat-body-1'>\r\n\r\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"{{to.label}}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>"

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

/***/ "./src/app/customer-profile/customer-profile.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/customer-profile/customer-profile.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer-profile/customer-profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/customer-profile/customer-profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n    <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\r\n        <div *ngIf=\"!displayMode\" fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n            <button type=\"button\" color=\"primary\" (click)=\"submit()\" mat-raised-button>Save </button>\r\n            <button type=\"submit\" color=\"accent\" mat-raised-button>Cancel</button>\r\n\r\n        </div>\r\n        <div *ngIf=\"displayMode\" fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n\r\n            <button mat-button (click)=\"edit();\">Edit</button>\r\n        </div>\r\n    </formly-form>\r\n</form>"

/***/ }),

/***/ "./src/app/customer-profile/customer-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-profile/customer-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileComponent", function() { return CustomerProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-profile.service */ "./src/app/customer-profile/customer-profile.service.ts");
/* harmony import */ var _app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-base/app-base.component */ "./src/app/app-base/app-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var CustomerProfileComponent = /** @class */ (function (_super) {
    __extends(CustomerProfileComponent, _super);
    //Properties
    function CustomerProfileComponent(route, router, customerProfileService) {
        var _this = _super.call(this, route, router) || this;
        _this.route = route;
        _this.router = router;
        _this.customerProfileService = customerProfileService;
        //Properties
        _this.displayMode = false;
        _this.title = 'New Affiliation';
        _this.options = {
            formState: {
                disabled: true
            }
        };
        _this.fields = customerProfileService.getPosFields();
        _this.form.disable();
        return _this;
    }
    CustomerProfileComponent.prototype.ngOnInit = function () {
        this.initialize();
        this.model.businessName = 'Bench';
        // apply expressionProperty for disabled based on formState to all fields
        if (this.displayMode == true) {
            this.disableFields();
        }
        else {
            this.enableFields();
        }
    };
    CustomerProfileComponent.prototype.disableFields = function () {
        this.fields.forEach(function (field) {
            field.expressionProperties = field.expressionProperties || {};
            field.expressionProperties['templateOptions.disabled'] = 'formState.disabled';
            if (field.fieldGroup) {
                field.fieldGroup.forEach(function (fieldInGroup) {
                    fieldInGroup.expressionProperties = fieldInGroup.expressionProperties || {};
                    fieldInGroup.expressionProperties['templateOptions.disabled'] = 'formState.disabled';
                });
            }
        });
    };
    CustomerProfileComponent.prototype.enableFields = function () {
        this.fields.forEach(function (field) {
            field.expressionProperties = field.expressionProperties || {};
            // field.expressionProperties['templateOptions.disabled'] = 'false';
            if (field.fieldGroup) {
                field.fieldGroup.forEach(function (fieldInGroup) {
                    fieldInGroup.expressionProperties = fieldInGroup.expressionProperties || {};
                    // fieldInGroup.expressionProperties['templateOptions.disabled'] ='false';
                });
            }
        });
    };
    CustomerProfileComponent.prototype.submit = function () {
        alert(JSON.stringify(this.model));
        console.log(JSON.stringify(this.model));
        this.disableFields();
        this.options.formState = 'disabled: true';
        this.displayMode = true;
    };
    CustomerProfileComponent.prototype.edit = function () {
        this.enableFields();
        this.options.formState = 'disabled: false';
        this.displayMode = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CustomerProfileComponent.prototype, "displayMode", void 0);
    CustomerProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-profile',
            template: __webpack_require__(/*! ./customer-profile.component.html */ "./src/app/customer-profile/customer-profile.component.html"),
            styles: [__webpack_require__(/*! ./customer-profile.component.css */ "./src/app/customer-profile/customer-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _customer_profile_service__WEBPACK_IMPORTED_MODULE_1__["CustomerProfileService"]])
    ], CustomerProfileComponent);
    return CustomerProfileComponent;
}(_app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]));



/***/ }),

/***/ "./src/app/customer-profile/customer-profile.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer-profile/customer-profile.service.ts ***!
  \**************************************************************/
/*! exports provided: CustomerProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileService", function() { return CustomerProfileService; });
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

var CustomerProfileService = /** @class */ (function () {
    function CustomerProfileService() {
        this.fields = [
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'businessName',
                        templateOptions: {
                            label: 'Business/Legal Name',
                            placeholder: 'Business Name'
                        },
                    },
                    {
                        className: 'flex-1',
                        type: 'select',
                        key: 'ownership',
                        templateOptions: {
                            label: 'Ownership',
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
                key: 'remarks',
                templateOptions: {
                    label: 'Remarks'
                },
            },
            {
                type: 'checkbox',
                key: 'otherToo',
                templateOptions: {
                    label: 'Other Checkbox'
                },
            },
        ];
    }
    CustomerProfileService.prototype.getPosFields = function () {
        return this.fields;
    };
    CustomerProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CustomerProfileService);
    return CustomerProfileService;
}());



/***/ }),

/***/ "./src/app/document-check-list/document-check-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/document-check-list/document-check-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/document-check-list/document-check-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/document-check-list/document-check-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  document-check-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/document-check-list/document-check-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/document-check-list/document-check-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: DocumentCheckListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCheckListComponent", function() { return DocumentCheckListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    { Id: 1, DocumentName: 'Aldo', Remarks: 'BR300', DateSubmitted: 'AldoMegamall', FileUpload: '' },
    { Id: 2, DocumentName: 'Bench', Remarks: 'BR300', DateSubmitted: 'Bench', FileUpload: '' }
];
var DocumentCheckListComponent = /** @class */ (function () {
    function DocumentCheckListComponent(route, router) {
        this.route = route;
        this.router = router;
        this.displayedColumns = ['BranchName', 'Remarks', 'DateSubmitted', 'FileUpload'];
        this.dataSource = ELEMENT_DATA;
    }
    DocumentCheckListComponent.prototype.ngOnInit = function () {
    };
    DocumentCheckListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-check-list',
            template: __webpack_require__(/*! ./document-check-list.component.html */ "./src/app/document-check-list/document-check-list.component.html"),
            styles: [__webpack_require__(/*! ./document-check-list.component.css */ "./src/app/document-check-list/document-check-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DocumentCheckListComponent);
    return DocumentCheckListComponent;
}());



/***/ }),

/***/ "./src/app/extention/extention.component.css":
/*!***************************************************!*\
  !*** ./src/app/extention/extention.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/extention/extention.component.html":
/*!****************************************************!*\
  !*** ./src/app/extention/extention.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-card-screen\">\r\n    <app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\"[mode]=\"mode\" ></app-bdo-form-header>\r\n<mat-card-content>\r\n </mat-card-content>\r\n </mat-card>"

/***/ }),

/***/ "./src/app/extention/extention.component.ts":
/*!**************************************************!*\
  !*** ./src/app/extention/extention.component.ts ***!
  \**************************************************/
/*! exports provided: ExtentionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtentionComponent", function() { return ExtentionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_base_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-base/app-base.component */ "./src/app/app-base/app-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var ExtentionComponent = /** @class */ (function (_super) {
    __extends(ExtentionComponent, _super);
    function ExtentionComponent(route, router) {
        var _this = _super.call(this, route, router) || this;
        _this.route = route;
        _this.router = router;
        return _this;
    }
    ExtentionComponent.prototype.ngOnInit = function () {
        this.initialize();
        this.title = 'Extention Class';
        // this.subTitle='Create'
    };
    ExtentionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extention',
            template: __webpack_require__(/*! ./extention.component.html */ "./src/app/extention/extention.component.html"),
            styles: [__webpack_require__(/*! ./extention.component.css */ "./src/app/extention/extention.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExtentionComponent);
    return ExtentionComponent;
}(_app_base_app_base_component__WEBPACK_IMPORTED_MODULE_1__["AppBaseComponent"]));



/***/ }),

/***/ "./src/app/file-maintenance/file-maintenance.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/file-maintenance/file-maintenance.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-maintenance/file-maintenance.component.html":
/*!******************************************************************!*\
  !*** ./src/app/file-maintenance/file-maintenance.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-card-screen\">\r\n        <app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\" ></app-bdo-form-header>\r\n    <mat-card-content>\r\n     </mat-card-content>\r\n     </mat-card>"

/***/ }),

/***/ "./src/app/file-maintenance/file-maintenance.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/file-maintenance/file-maintenance.component.ts ***!
  \****************************************************************/
/*! exports provided: FileMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileMaintenanceComponent", function() { return FileMaintenanceComponent; });
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


var FileMaintenanceComponent = /** @class */ (function () {
    function FileMaintenanceComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {};
        this.options = {};
        this.title = 'File Maintenance';
        this.subTitle = 'Create';
    }
    FileMaintenanceComponent.prototype.ngOnInit = function () {
    };
    FileMaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-maintenance',
            template: __webpack_require__(/*! ./file-maintenance.component.html */ "./src/app/file-maintenance/file-maintenance.component.html"),
            styles: [__webpack_require__(/*! ./file-maintenance.component.css */ "./src/app/file-maintenance/file-maintenance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FileMaintenanceComponent);
    return FileMaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/forms/awr-form/awr-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/forms/awr-form/awr-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/awr-form/awr-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/forms/awr-form/awr-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 100px\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\n          <button type=\"submit\" color=\"primary\" mat-raised-button>Save </button>\n          <button type=\"submit\" color=\"accent\" mat-raised-button>Cancel</button>\n      </div>\n    </formly-form>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/forms/awr-form/awr-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/forms/awr-form/awr-form.component.ts ***!
  \******************************************************/
/*! exports provided: AwrFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwrFormComponent", function() { return AwrFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _awr_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awr-form.service */ "./src/app/forms/awr-form/awr-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AwrFormComponent = /** @class */ (function () {
    function AwrFormComponent(awrService) {
        this.awrService = awrService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.fields = [
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'legalName',
                        type: 'input',
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        },
                        templateOptions: {
                            label: "Legal Name"
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'dbaName',
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        },
                        templateOptions: {
                            label: "DBA Name"
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'dbaAddress',
                        templateOptions: {
                            label: "DBA Address"
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isMdrRelated',
                        type: 'checkbox',
                        templateOptions: {
                            label: "MDR Related"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'mdrRelatedDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'isIncompleteDetails',
                        templateOptions: {
                            label: "Type of Affiliation"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompleteDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isMdrRelated',
                        type: 'checkbox',
                        templateOptions: {
                            label: "MDR Related"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'mdrRelatedDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'checkbox',
                        key: 'isIncompleteDetails',
                        templateOptions: {
                            label: "Incomplete Details in Merchant Info Sheet"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompleteDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-3',
                        key: 'isIncompleteMerchantAgreement',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Incomplete / Incorrect Details in Merchant Agreement"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompleteMerchantAgreementDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'checkbox',
                        key: 'isIncompleteSecretaryCertificate',
                        templateOptions: {
                            label: "Is Incomplete Details in Secretary Certificate"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompleteSecretaryCertificateDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isIncompleteOif',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Incomplete Details in OIF"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompleteOifDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'checkbox',
                        key: 'isIncompleteBusinessDocuments',
                        templateOptions: {
                            label: "Incomplete Details in Other Business Documents"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompleteBusinessDocumentsDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isIncompleteCorporatePapers',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Incomplete Corporate Papers"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompleteCorporatePapersDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'isIncompleteId',
                        templateOptions: {
                            label: "Incomplete ID of Signatory"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompleteIdDtails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isIncompletePhotos',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Incomplete Photos"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompletePhotosDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'isIncompleteDocument',
                        templateOptions: {
                            label: "Incomplete Document"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'incompleteDocumentDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isNoProofDbaName',
                        type: 'checkbox',
                        templateOptions: {
                            label: "No Proof of DBA Name"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'noProofDbaNameDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'noProofDbaAddress',
                        templateOptions: {
                            label: "No Proof of DBA Address"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'noProofDbaAddressDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isUnclearDocument',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Unclear Document"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'unclearDocumentDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'isExpiredDocument',
                        templateOptions: {
                            label: "Expired Document"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'expiredDocumentDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-2',
                        key: 'isComparedWithOriginal',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Document Without \"Compared with Original Copy\" Stamp"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'comparedWithOriginalDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'isSignatureMatched',
                        templateOptions: {
                            label: "Signature Matching"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'signatureMatchedDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isInformationMatching',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Information Matching"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'informationMatchingDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-1',
                        key: 'isMismatchSfccMdr',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Mismatch SFCC vs MDR in MIS"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'mismatchSfccMdrDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'noPosFormInSharedFolder',
                        templateOptions: {
                            label: "No POS Form in Shared Folder"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'noPosFormInSharedFolderDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-1',
                        key: 'noBuhApprovalOn',
                        type: 'checkbox',
                        templateOptions: {
                            label: "No BUH Approval On"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'noBuhApprovalOnDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isGprsTerminal',
                        type: 'checkbox',
                        templateOptions: {
                            label: "GPRS Terminal"
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'noDebitFacility',
                        templateOptions: {
                            label: "No Debit Facility"
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'zeroPayDelay',
                        templateOptions: {
                            label: "Zero (0) Pay Delay"
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'newContactDetails',
                        templateOptions: {
                            label: "New Contact Details"
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isInvalidCasa',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Invalid CASA / Third Party"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'invalidCasaDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'checkbox',
                        key: 'isSettlementOfOutstandingBalance',
                        templateOptions: {
                            label: "Settlement of Outstanding Balance / Past Due"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'settlementOfOutstandingBalanceDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'noHoldoutDeposit',
                        type: 'checkbox',
                        templateOptions: {
                            label: "No Holdout Deposit in ICBS"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'noHoldoutDepositDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'checkbox',
                        key: 'isEcrSp',
                        templateOptions: {
                            label: "ECR SP Details (Not Included in Visa Whitelist / Incomplete SP Info) Details"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'ecrSpDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'isNotes',
                        type: 'checkbox',
                        templateOptions: {
                            label: "Notes / Remarks"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'notesDetails',
                        templateOptions: {
                            label: "Details",
                            maxLength: 500
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'isReturned',
                        templateOptions: {
                            label: "Returned"
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'checkbox',
                        key: 'isNotReturned',
                        templateOptions: {
                            label: "Not Returned"
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'ao',
                        templateOptions: {
                            label: 'Account Officer',
                            disabled: true
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'bu',
                        templateOptions: {
                            label: 'Business Unit',
                            disabled: true
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'creditOfficerOfMaef',
                        templateOptions: {
                            label: 'Name of Credit Officer of MAEF',
                            disabled: true
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'approverOfMaef',
                        templateOptions: {
                            label: 'Name of Approver of MAEF',
                            disabled: true
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'remarksMaef',
                        templateOptions: {
                            label: 'Remarks / Special Conditions Indicated in the MAEF (if any)',
                            disabled: true
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'complete',
                        templateOptions: {
                            label: 'Complete',
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'cancel',
                        templateOptions: {
                            label: 'Cancel',
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'cancelRemarks',
                        templateOptions: {
                            label: 'Cancel Remarks',
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'checkbox',
                        key: 'isTempoWaiver',
                        templateOptions: {
                            label: 'Tempo Waiver'
                        }
                    },
                    {
                        className: 'flex-2',
                        type: 'input',
                        key: 'tempoWaiverDetails',
                        templateOptions: {
                            label: 'Details'
                        }
                    }
                ]
            }
        ];
    }
    AwrFormComponent.prototype.ngOnInit = function () {
    };
    AwrFormComponent.prototype.Get = function () { };
    AwrFormComponent.prototype.GetById = function () { };
    AwrFormComponent.prototype.Save = function () { };
    AwrFormComponent.prototype.Update = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AwrFormComponent.prototype, "requestId", void 0);
    AwrFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-awr-form',
            template: __webpack_require__(/*! ./awr-form.component.html */ "./src/app/forms/awr-form/awr-form.component.html"),
            styles: [__webpack_require__(/*! ./awr-form.component.css */ "./src/app/forms/awr-form/awr-form.component.css")],
            providers: [_awr_form_service__WEBPACK_IMPORTED_MODULE_2__["AwrFormService"]]
        }),
        __metadata("design:paramtypes", [_awr_form_service__WEBPACK_IMPORTED_MODULE_2__["AwrFormService"]])
    ], AwrFormComponent);
    return AwrFormComponent;
}());



/***/ }),

/***/ "./src/app/forms/awr-form/awr-form.service.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/awr-form/awr-form.service.ts ***!
  \****************************************************/
/*! exports provided: AwrFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwrFormService", function() { return AwrFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var apiUrl = '';
var AwrFormService = /** @class */ (function () {
    function AwrFormService(http) {
        this.http = http;
    }
    AwrFormService.prototype.Get = function () { };
    AwrFormService.prototype.GetById = function () { };
    AwrFormService.prototype.Save = function () { };
    AwrFormService.prototype.Update = function () { };
    AwrFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AwrFormService);
    return AwrFormService;
}());



/***/ }),

/***/ "./src/app/home-screen/home-screen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/home-screen/home-screen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-display-3 {\r\n    color: #0d47a1;\r\n}"

/***/ }),

/***/ "./src/app/home-screen/home-screen.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-screen/home-screen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\" [mode]=\"mode\"></app-bdo-form-header>\r\n\r\n<span class=\"mat-display-3\"><mat-icon color=\"warn\">dashboard</mat-icon> Welcome to Merchant Acquiring System</span>\r\n<!-- <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n    <mat-grid-tile color=\"primary\">\r\n        <mat-card>Simple card1</mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>2</mat-grid-tile>\r\n    <mat-grid-tile>3</mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <mat-card color=\"accent\">Simple card1</mat-card>\r\n    </mat-grid-tile>\r\n\r\n</mat-grid-list> -->"

/***/ }),

/***/ "./src/app/home-screen/home-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-screen/home-screen.component.ts ***!
  \******************************************************/
/*! exports provided: HomeScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenComponent", function() { return HomeScreenComponent; });
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

var HomeScreenComponent = /** @class */ (function () {
    function HomeScreenComponent() {
        this.mode = 'create';
        this.status = "done";
    }
    HomeScreenComponent.prototype.ngOnInit = function () {
    };
    HomeScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-screen',
            template: __webpack_require__(/*! ./home-screen.component.html */ "./src/app/home-screen/home-screen.component.html"),
            styles: [__webpack_require__(/*! ./home-screen.component.css */ "./src/app/home-screen/home-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeScreenComponent);
    return HomeScreenComponent;
}());



/***/ }),

/***/ "./src/app/maef-fields/maef-fields.component.css":
/*!*******************************************************!*\
  !*** ./src/app/maef-fields/maef-fields.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maef-fields/maef-fields.component.html":
/*!********************************************************!*\
  !*** ./src/app/maef-fields/maef-fields.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin: 100px\">\n  maef-fields works!\n</p>\n"

/***/ }),

/***/ "./src/app/maef-fields/maef-fields.component.ts":
/*!******************************************************!*\
  !*** ./src/app/maef-fields/maef-fields.component.ts ***!
  \******************************************************/
/*! exports provided: MaefFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaefFieldsComponent", function() { return MaefFieldsComponent; });
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

var MaefFieldsComponent = /** @class */ (function () {
    function MaefFieldsComponent() {
    }
    MaefFieldsComponent.prototype.ngOnInit = function () {
    };
    MaefFieldsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maef-fields',
            template: __webpack_require__(/*! ./maef-fields.component.html */ "./src/app/maef-fields/maef-fields.component.html"),
            styles: [__webpack_require__(/*! ./maef-fields.component.css */ "./src/app/maef-fields/maef-fields.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaefFieldsComponent);
    return MaefFieldsComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n min-height: 671px;\r\n}\r\n\r\n.sidenav {\r\n  width: 400px;\r\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\r\n}\r\n\r\n/* @media (min-width: 900px) {\r\n\t.sidenav {\r\n\t\tdisplay: none;\r\n\t}\r\n} */\r\n\r\n.mat-toolbar.mat-primary{\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.mat-toolbar  {\r\n   position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  \r\n}\r\n\r\n/* .card-container {\r\n  max-width: 400px;\r\n  margin: 2px;\r\n}\r\n */\r\n\r\n.mat-headline{\r\n\r\n\tmargin-left: 7px;\r\n\tmargin-top: 7px;\r\n}"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"false\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"over\" [opened]=\"false\" position=\"end\">\r\n        <!--  <mat-toolbar color=\"accent\">\r\n          <span style=\"color:whitesmoke\">Menu</span>\r\n    </mat-toolbar> -->\r\n        <!-- <mat-nav-list>\r\n      <a mat-list-item href=\"#\">Submit</a>\r\n      <a mat-list-item href=\"#\">Return</a>\r\n      <a mat-list-item href=\"#\">Decline</a>\r\n    </mat-nav-list> -->\r\n\r\n        <!--     <mat-card class=\"card-container\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n            Account Information \r\n        </mat-card-title>\r\n        \r\n      </mat-card-header>\r\n      <mat-card-content fxLayout=\"column\"  fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around start\">\r\n       <mat-list>\r\n       <mat-list-item> Name: Arnold Costamero </mat-list-item>\r\n       <mat-list-item> Unit: IT DEV CLG </mat-list-item>\r\n      </mat-list>\r\n \r\n          <button mat-flat-button color=\"accent\">Logout</button>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n    \r\n  </mat-card-actions>\r\n      \r\n      \r\n    \r\n  </mat-card> -->\r\n\r\n        <div fxLayout=\"column\" fxLayoutGap=\"2px\" fxLayoutAlign=\"space-around start\">\r\n            <mat-toolbar color=\"accent\">\r\n                <span style=\"color:whitesmoke\">Menu</span>\r\n            </mat-toolbar>\r\n            <mat-list>\r\n                <mat-list-item>\r\n                    <mat-icon color=\"primary\">face</mat-icon> Arnold Costamero </mat-list-item>\r\n                <mat-list-item> Unit: IT DEV CLG </mat-list-item>\r\n            </mat-list>\r\n\r\n\r\n            <button mat-flat-button color=\"accent\">Logout</button>\r\n\r\n\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n\r\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z5\">\r\n            <a routerLink=\"/home\" mat-icon-button>\r\n                <mat-icon>home</mat-icon>\r\n            </a>\r\n            <span>Merchant Acquiring System</span>\r\n            <span fxFlex></span>\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>description</mat-icon></button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <a routerLink=\"/naStep/create\" mat-menu-item>New Affiliation</a>\r\n                <a routerLink=\"/ba/create\" mat-menu-item>Branch Affiliation</a>\r\n\r\n                <a routerLink=\"/posStep\" mat-menu-item>POS Request</a>\r\n                <a routerLink=\"/additionalFacility\" mat-menu-item>Additional Facility</a>\r\n                <a routerLink=\"/fileMaintenance\" mat-menu-item>File Maintenance</a>\r\n                <a routerLink=\"/awr\" mat-menu-item>Test Form</a>\r\n            </mat-menu>\r\n            <button mat-icon-button><mat-icon>settings</mat-icon></button>\r\n            <button mat-icon-button><mat-icon>assignment</mat-icon></button>\r\n\r\n\r\n            <button type=\"submit\" mat-icon-button><mat-icon>search</mat-icon> </button>\r\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">face</mat-icon>\r\n      </button>\r\n\r\n\r\n\r\n        </mat-toolbar>\r\n        \r\n\r\n        \r\n    <ng-content></ng-content>\r\n    <!-- Add Content Here -->\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

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

module.exports = "\r\n<div fxLayout=\"column\"  fxLayoutGap=\"3px\" fxLayoutAlign=\"start end\" style=\"margin-top:7px;\">\r\n  <mat-toolbar style=\"background-color: inherit\">\r\n     <span class=\"mat-headline\">MID Request List</span>\r\n    <span fxFlex></span>\r\n      <button mat-mini-fab color=\"primary\" matTooltip=\"Create New Entry\">\r\n    <mat-icon style=\"color:white\">add</mat-icon>\r\n    \r\n  </button>  \r\n  </mat-toolbar>\r\n  \r\n  \r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"currency\">\r\n    <th mat-header-cell *matHeaderCellDef> Currency  </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.currency}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"monitorCode\">\r\n    <th mat-header-cell *matHeaderCellDef> Monitor Code </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.monitorCode}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"merchantGroupCode\">\r\n    <th mat-header-cell *matHeaderCellDef> Merchant Group Code </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.merchantGroupCode}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"sfcc\">\r\n    <th mat-header-cell *matHeaderCellDef> Service Fee Rate </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.sfcc}} </td>\r\n  </ng-container>\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n <ng-container matColumnDef=\"controls\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n     <!--  <button mat-mini-fab> \r\n        <mat-icon>menu</mat-icon>\r\n      </button> -->\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let row\">\r\n      <button mat-icon-button> \r\n        <mat-icon color=\"primary\">edit</mat-icon>\r\n      </button>\r\n       <button mat-icon-button> \r\n        <mat-icon color=\"warn\">delete_forever</mat-icon>\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n \r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n</div>\r\n\r\n  \r\n"

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

/***/ "./src/app/new-affiliation-step/new-affiliation-step.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/new-affiliation-step/new-affiliation-step.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matStepLabel {\r\n    color: red;\r\n}\r\n\r\n.mat-subheading-1 {\r\n    color: #2196F3\r\n}\r\n\r\n.mat-display-1 {\r\n    color: #0d47a1;\r\n}\r\n\r\n.mat-headline {\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/new-affiliation-step/new-affiliation-step.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/new-affiliation-step/new-affiliation-step.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\" [mode]=\"mode\"></app-bdo-form-header>\r\n<span class=\"mat-headline\">Please follow the steps:</span>\r\n<mat-vertical-stepper [linear]=\"true\" #stepper>\r\n    <!-- <ng-template  [matStepperIcon]=\"'edit'\">\r\n        <mat-icon>check</mat-icon>\r\n    </ng-template>\r\n    <ng-template  matStepperIcon=\"done\">\r\n        <mat-icon>done_outline</mat-icon>\r\n    </ng-template> -->\r\n    <mat-step [completed]=\"false\">\r\n\r\n        <ng-template matStepLabel>\r\n\r\n            <span class=\"mat-subheading-1\">\r\n            \r\n                Create Customer Profile</span>\r\n\r\n        </ng-template>\r\n        <!-- <mat-step-header state=\"done\">Complete</mat-step-header> -->\r\n        <span class=\"mat-headline\">\r\n          Customer Profile\r\n        </span>\r\n        <app-customer-profile [displayMode]=\"false\"></app-customer-profile>\r\n\r\n        <button style=\"margin-top:3px\" mat-button color=\"primary\" (click)=\"completed(stepper);\">Next\r\n            <mat-icon color=\"primary\">navigate_next</mat-icon>\r\n        </button>\r\n\r\n        <!-- <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n            <button mat-mini-fab (click)=\"doneWithCustomer(stepper);\">\r\n                <mat-icon>check</mat-icon>\r\n            </button>\r\n        </div> -->\r\n    </mat-step>\r\n    <mat-step [completed]=\"false\">\r\n        <ng-template matStepLabel>\r\n            <span class=\"mat-subheading-1\">\r\n                    \r\n                Add Branches</span>\r\n        </ng-template>\r\n\r\n        <!-- <app-branch-list></app-branch-list> -->\r\n        <router-outlet></router-outlet>\r\n\r\n        <button style=\"margin-top:3px\" mat-button color=\"primary\" (click)=\"completed(stepper);\">Next\r\n            <mat-icon color=\"primary\">navigate_next</mat-icon>\r\n        </button>\r\n\r\n    </mat-step>\r\n    <mat-step [completed]=\"false\">\r\n        <ng-template matStepLabel>\r\n            <span class=\"mat-subheading-1\">\r\n                        \r\n                    Attach Occular Inspection Form to Branches</span>\r\n        </ng-template>\r\n\r\n        <!-- <app-branch-list></app-branch-list> -->\r\n        <mat-accordion class=\"mat-elevation-z0\">\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Aldo\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        This is a summary of the content\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <span class=\"mat-headline\">\r\n                                                    Occular Inspection Form\r\n                                                  </span>\r\n                <app-ocular-inspection-form></app-ocular-inspection-form>\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Bench\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        This is a summary of the content\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <span class=\"mat-headline\">\r\n                                                        Occular Inspection Form\r\n                                                      </span>\r\n                <app-ocular-inspection-form></app-ocular-inspection-form>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n\r\n        <button style=\"margin-top:3px\" mat-button color=\"primary\" (click)=\"completed(stepper);\">Next\r\n            <mat-icon color=\"primary\">navigate_next</mat-icon>\r\n        </button>\r\n    </mat-step>\r\n    <mat-step [completed]=\"false\">\r\n        <ng-template matStepLabel>\r\n            <span class=\"mat-subheading-1\">\r\n                            \r\n                        Create POS Request for Branches</span>\r\n        </ng-template>\r\n\r\n        <app-branch-list></app-branch-list>\r\n\r\n        <button style=\"margin-top:3px\" mat-button color=\"primary\" (click)=\"completed(stepper);\">Next\r\n            <mat-icon color=\"primary\">navigate_next</mat-icon>\r\n        </button>\r\n\r\n    </mat-step>\r\n    <mat-step [completed]=\"false\">\r\n        <ng-template matStepLabel>\r\n            <span class=\"mat-subheading-1\">\r\n                            \r\n                        Attach Required Documents</span>\r\n        </ng-template>\r\n        <app-document-check-list></app-document-check-list>\r\n        <button style=\"margin-top:3px\" mat-button color=\"primary\" (click)=\"completed(stepper);\">Next\r\n            <mat-icon color=\"primary\">navigate_next</mat-icon>\r\n        </button>\r\n\r\n    </mat-step>\r\n    <mat-step state=\"done\">\r\n        <ng-template matStepLabel>\r\n\r\n            <span class=\"mat-subheading-1\">Done!</span>\r\n\r\n        </ng-template>\r\n\r\n        <span class=\"mat-subheading-1\">You are now done. Would you like to submit the Request?</span>\r\n        <div xLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxLayoutGap=\"3px\">\r\n            <button style=\"margin-top:3px\" mat-stroked-button matStepperPrevious color=\"primary\">Yes</button>\r\n            <a mat-stroked-button routerLink=\"/newAffSum\" color=\"accent\">No</a>\r\n\r\n        </div>\r\n    </mat-step>\r\n\r\n\r\n    <!-- Stepper steps go here -->\r\n    <!-- <mat-step label=\"step 1\">step 1 content</mat-step>\r\n    <mat-step label=\"step 2\">step 2 content</mat-stngep>\r\n    <mat-step label=\"step 3\">step 3 content</mat-step> -->\r\n</mat-vertical-stepper>"

/***/ }),

/***/ "./src/app/new-affiliation-step/new-affiliation-step.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/new-affiliation-step/new-affiliation-step.component.ts ***!
  \************************************************************************/
/*! exports provided: NewAffiliationStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAffiliationStepComponent", function() { return NewAffiliationStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewAffiliationStepComponent = /** @class */ (function () {
    //  completed:boolean=false;
    function NewAffiliationStepComponent(_formBuilder, route) {
        this._formBuilder = _formBuilder;
        this.route = route;
        this.isLinear = false;
        this.isOptional = false;
        this.title = 'New Affiliation';
        this.subTitle = 'Create';
        this.mode = 'create';
        this.status = "done";
    }
    NewAffiliationStepComponent.prototype.ngOnInit = function () {
        this.isOptional = true;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    NewAffiliationStepComponent.prototype.completed = function (stepper) {
        stepper.selected.completed = true;
        stepper.next();
        return true;
    };
    NewAffiliationStepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-affiliation-step',
            template: __webpack_require__(/*! ./new-affiliation-step.component.html */ "./src/app/new-affiliation-step/new-affiliation-step.component.html"),
            styles: [__webpack_require__(/*! ./new-affiliation-step.component.css */ "./src/app/new-affiliation-step/new-affiliation-step.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewAffiliationStepComponent);
    return NewAffiliationStepComponent;
}());



/***/ }),

/***/ "./src/app/new-affiliation-sum/new-affiliation-sum.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/new-affiliation-sum/new-affiliation-sum.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-headline {\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/new-affiliation-sum/new-affiliation-sum.component.html":
/*!************************************************************************!*\
  !*** ./src/app/new-affiliation-sum/new-affiliation-sum.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\" [mode]=\"mode\"></app-bdo-form-header>\r\n<span class=\"mat-headline\">\r\n    Customer Profile\r\n  </span>\r\n<app-customer-profile [displayMode]=\"isDisplay\"></app-customer-profile>\r\n\r\n\r\n\r\n<br>\r\n<span class=\"mat-headline\">\r\n    Branches\r\n</span>"

/***/ }),

/***/ "./src/app/new-affiliation-sum/new-affiliation-sum.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/new-affiliation-sum/new-affiliation-sum.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewAffiliationSumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAffiliationSumComponent", function() { return NewAffiliationSumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _new_affiliation_sum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-affiliation-sum.service */ "./src/app/new-affiliation-sum/new-affiliation-sum.service.ts");
/* harmony import */ var _app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-base/app-base.component */ "./src/app/app-base/app-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var NewAffiliationSumComponent = /** @class */ (function (_super) {
    __extends(NewAffiliationSumComponent, _super);
    //Properties
    function NewAffiliationSumComponent(route, router, newAffiliationSumService) {
        var _this = _super.call(this, route, router) || this;
        _this.route = route;
        _this.router = router;
        _this.newAffiliationSumService = newAffiliationSumService;
        //Properties
        _this.title = 'New Affiliation Request';
        _this.subTitle = 'Summary';
        _this.isDisplay = true;
        _this.fields = newAffiliationSumService.getPosFields();
        return _this;
    }
    NewAffiliationSumComponent.prototype.ngOnInit = function () {
    };
    NewAffiliationSumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-affiliation-sum',
            template: __webpack_require__(/*! ./new-affiliation-sum.component.html */ "./src/app/new-affiliation-sum/new-affiliation-sum.component.html"),
            styles: [__webpack_require__(/*! ./new-affiliation-sum.component.css */ "./src/app/new-affiliation-sum/new-affiliation-sum.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _new_affiliation_sum_service__WEBPACK_IMPORTED_MODULE_1__["NewAffiliationSumService"]])
    ], NewAffiliationSumComponent);
    return NewAffiliationSumComponent;
}(_app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]));



/***/ }),

/***/ "./src/app/new-affiliation-sum/new-affiliation-sum.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/new-affiliation-sum/new-affiliation-sum.service.ts ***!
  \********************************************************************/
/*! exports provided: NewAffiliationSumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAffiliationSumService", function() { return NewAffiliationSumService; });
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

var NewAffiliationSumService = /** @class */ (function () {
    function NewAffiliationSumService() {
        this.fields = [
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'businessName',
                        templateOptions: {
                            label: 'Business/Legal Name',
                            placeholder: 'Business Name'
                        },
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'select',
                        key: 'ownership',
                        templateOptions: {
                            label: 'Ownership',
                        },
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        }
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
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        }
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'cityName',
                        templateOptions: {
                            label: 'City',
                        },
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        }
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
                        expressionProperties: {
                            'templateOptions.disabled': 'true'
                        }
                    },
                ],
            },
            /*{
              template: '<hr />',
            },*/
            {
                type: 'input',
                key: 'remarks',
                templateOptions: {
                    label: 'Remarks'
                },
                expressionProperties: {
                    'templateOptions.disabled': 'true'
                }
            },
            {
                type: 'checkbox',
                key: 'otherToo',
                templateOptions: {
                    label: 'Other Checkbox'
                },
                expressionProperties: {
                    'templateOptions.disabled': 'true'
                }
            },
        ];
    }
    NewAffiliationSumService.prototype.getPosFields = function () {
        return this.fields;
    };
    NewAffiliationSumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NewAffiliationSumService);
    return NewAffiliationSumService;
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

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n    <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n            <button type=\"submit\" color=\"primary\" mat-raised-button>Save </button>\r\n            <button type=\"submit\" color=\"accent\" mat-raised-button>Cancel</button>\r\n        </div>\r\n    </formly-form>\r\n</form>"

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
/* harmony import */ var _new_affiliation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-affiliation.service */ "./src/app/new-affiliation/new-affiliation.service.ts");
/* harmony import */ var _app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-base/app-base.component */ "./src/app/app-base/app-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var NewAffiliationComponent = /** @class */ (function (_super) {
    __extends(NewAffiliationComponent, _super);
    // subText = 'Create';
    // mode='create';
    function NewAffiliationComponent(route, router, newAffiliationService) {
        var _this = _super.call(this, route, router) || this;
        _this.route = route;
        _this.router = router;
        _this.newAffiliationService = newAffiliationService;
        // form = new FormGroup({});
        // model: any = {};
        // options: FormlyFormOptions = {};
        // fields: FormlyFieldConfig[];
        _this.title = 'New Affiliation';
        _this.fields = newAffiliationService.getPosFields();
        return _this;
    }
    NewAffiliationComponent.prototype.ngOnInit = function () {
        this.initialize();
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _new_affiliation_service__WEBPACK_IMPORTED_MODULE_1__["NewAffiliationService"]])
    ], NewAffiliationComponent);
    return NewAffiliationComponent;
}(_app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]));



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
                        key: 'businessName',
                        templateOptions: {
                            label: 'Business/Legal Name',
                            placeholder: 'Business Name'
                        },
                    },
                    {
                        className: 'flex-1',
                        type: 'select',
                        key: 'ownership',
                        templateOptions: {
                            label: 'Ownership',
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
                key: 'remarks',
                templateOptions: {
                    label: 'Remarks'
                },
            },
            {
                type: 'checkbox',
                key: 'otherToo',
                templateOptions: {
                    label: 'Other Checkbox'
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

/***/ "./src/app/ocular-inspection-form/ocular-inspection-form.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/ocular-inspection-form/ocular-inspection-form.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ocular-inspection-form/ocular-inspection-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/ocular-inspection-form/ocular-inspection-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n    <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n            <button type=\"submit\" color=\"primary\" mat-raised-button>Save </button>\r\n            <button type=\"submit\" color=\"accent\" mat-raised-button>Cancel</button>\r\n        </div>\r\n    </formly-form>\r\n</form>"

/***/ }),

/***/ "./src/app/ocular-inspection-form/ocular-inspection-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ocular-inspection-form/ocular-inspection-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: OcularInspectionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcularInspectionFormComponent", function() { return OcularInspectionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ocular_inspection_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ocular-inspection-form.service */ "./src/app/ocular-inspection-form/ocular-inspection-form.service.ts");
/* harmony import */ var _app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-base/app-base.component */ "./src/app/app-base/app-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var OcularInspectionFormComponent = /** @class */ (function (_super) {
    __extends(OcularInspectionFormComponent, _super);
    //  subTitle:string;
    //  mode:string; 
    function OcularInspectionFormComponent(ocularInspectionFormService, route, router) {
        var _this = _super.call(this, route, router) || this;
        _this.ocularInspectionFormService = ocularInspectionFormService;
        _this.route = route;
        _this.router = router;
        //  form = new FormGroup({});
        //   model: any = {};
        //   options: FormlyFormOptions = {};
        //   fields:FormlyFieldConfig[];
        _this.title = 'Pos Request';
        _this.fields = ocularInspectionFormService.getPosFields();
        return _this;
    }
    OcularInspectionFormComponent.prototype.ngOnInit = function () {
    };
    OcularInspectionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ocular-inspection-form',
            template: __webpack_require__(/*! ./ocular-inspection-form.component.html */ "./src/app/ocular-inspection-form/ocular-inspection-form.component.html"),
            styles: [__webpack_require__(/*! ./ocular-inspection-form.component.css */ "./src/app/ocular-inspection-form/ocular-inspection-form.component.css")]
        }),
        __metadata("design:paramtypes", [_ocular_inspection_form_service__WEBPACK_IMPORTED_MODULE_1__["OcularInspectionFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OcularInspectionFormComponent);
    return OcularInspectionFormComponent;
}(_app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]));



/***/ }),

/***/ "./src/app/ocular-inspection-form/ocular-inspection-form.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ocular-inspection-form/ocular-inspection-form.service.ts ***!
  \**************************************************************************/
/*! exports provided: OcularInspectionFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcularInspectionFormService", function() { return OcularInspectionFormService; });
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

var OcularInspectionFormService = /** @class */ (function () {
    function OcularInspectionFormService() {
        this.fields = [
            // {
            //     key: 'Id',
            //     type: 'input',
            //      className: 'flex-1',
            //     // templateOptions: {
            //     //     type: 'hidden'
            //     // },
            //     validation: {
            //         show: true
            //     }
            // },
            {
                key: 'branchName',
                type: 'input',
                className: 'flex-1',
                expressionProperties: {},
                templateOptions: {
                    label: 'Branch Name',
                    disabled: true
                }
            }, {
                key: 'DBAName',
                type: 'input',
                className: 'flex-1',
                expressionProperties: {},
                templateOptions: {
                    label: 'DBA Name',
                    disabled: true
                }
            },
            {
                key: 'businessSignageOnOutlet',
                type: 'input',
                className: 'flex-1',
                expressionProperties: {},
                templateOptions: {
                    label: 'Signage on Outlet',
                    required: true
                },
                validation: {
                    show: true
                }
            },
            {
                key: 'address1',
                type: 'input',
                className: 'flex-1',
                expressionProperties: {},
                templateOptions: {
                    label: 'Address'
                }
            },
            {
                key: 'outskirt',
                type: 'checkbox',
                className: 'flex-1',
                expressionProperties: {},
                templateOptions: {
                    label: 'Outskirt'
                }
            },
            {
                key: 'typeOfBusiness',
                type: 'input',
                className: 'flex-1',
                expressionProperties: {},
                templateOptions: {
                    label: 'Type of Business',
                    required: true
                },
                validation: {
                    show: true
                }
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: []
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'address2',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: ''
                        }
                    },
                    {
                        key: 'contactperson',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Contact Person'
                        }
                    },
                    {
                        key: 'position',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Position'
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'address3',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: ''
                        }
                    },
                    {
                        key: 'phoneNo',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Telephone Number'
                        }
                    },
                    {
                        key: 'mobileNo',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Mobile Number'
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'natureOfBusiness',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Nature of Business'
                        }
                    },
                    {
                        key: 'potentialSalesVolume',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Potential Sales Volume'
                        }
                    },
                    {
                        key: 'productsOfferedSold',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Products Offered/Sold'
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'numberOfYearsOperating',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            pattern: '^\\d+$',
                            pd: 'number',
                            label: 'Number of Years Operating'
                        }
                    },
                    {
                        key: 'businessHours',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Business Hours'
                        }
                    },
                    {
                        key: 'noOfFulltimeEmployees',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            pattern: '^\\d+$',
                            pd: 'number',
                            label: 'No. of Fulltime Employees'
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'premiseStatus',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Premise Status',
                            labelProp: 'Description',
                            valueProp: 'PremiseStatus_Id',
                            options: []
                        }
                    },
                    {
                        key: 'lengthOfStay',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Length of Stay'
                        }
                    },
                    {
                        key: 'noOfContractualEmployees',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            pattern: '^\\d+$',
                            pd: 'number',
                            label: 'No. of Contractual Employees'
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'typeOfPremise',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Type of Premise',
                            labelProp: 'Description',
                            valueProp: 'TypeOfPremise_Id',
                            options: []
                        }
                    },
                    {
                        key: 'location',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Location',
                            labelProp: 'Description',
                            valueProp: 'Location_Id',
                            options: []
                        }
                    },
                    {
                        key: 'interiorAppearance',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Interior Appearance',
                            labelProp: 'Description',
                            valueProp: 'InteriorAppearance_Id',
                            options: []
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'exteriorAppearance',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Exterior Appearance',
                            labelProp: 'Description',
                            valueProp: 'ExteriorAppearance_Id',
                            options: []
                        }
                    },
                    {
                        key: 'stocksInventory',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Stocks/Inventory',
                            labelProp: 'Description',
                            valueProp: 'StocksInventory_Id',
                            options: []
                        }
                    },
                    {
                        key: 'equipment',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Equipment',
                            labelProp: 'Description',
                            valueProp: 'Equipment_Id',
                            options: []
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'floorArea',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Floor Area'
                        }
                    },
                    {
                        key: 'withHighCardTraffic',
                        type: 'checkbox',
                        className: 'col-sm-2',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'With High Card Traffic'
                        }
                    },
                    {
                        key: 'surroundingEstablishment',
                        type: 'input',
                        className: 'col-sm-6',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Surrounding Establishment'
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'averageNoOfTransactionMonth',
                        type: 'input',
                        className: 'col-sm-3',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            pattern: '^\\d+$',
                            pd: 'number',
                            label: 'Average No. of Transaction/Month'
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'nameOfEvent',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Name of Event'
                        }
                    },
                    {
                        key: 'nameOfVenue',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Name of Venue'
                        }
                    },
                    {
                        key: 'typeOfEvent',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Type of Event',
                            labelProp: 'Description',
                            valueProp: 'TypeOfEvent_Id',
                            options: []
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'noOfBuyers',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            pattern: '^\\d+$',
                            pd: 'number',
                            label: 'No. of Buyers'
                        }
                    },
                    {
                        key: 'priceRangeOfProductsServices',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Price Range of Products/Services'
                        }
                    },
                    {
                        key: 'noOfParticipant',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            pattern: '^\\d+$',
                            pd: 'number',
                            label: 'No. of Participant'
                        }
                    }
                ]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'averageRegistration',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            pattern: '^\\d+$',
                            pd: 'number',
                            label: 'Average Registration'
                        }
                    },
                    {
                        key: 'dateOfTheLastEvent',
                        type: 'calendar',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            label: 'Date of the Last Event'
                        }
                    },
                    {
                        key: 'nameOfLastEvent',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Name of Last Event'
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'venueOfTheLastEvent',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Venue of the Last Event'
                        }
                    },
                    {
                        key: 'totalSalesVolume',
                        type: 'input',
                        className: 'col-sm-offset-4 flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            required: true,
                            pattern: '^\\d+$',
                            pd: 'number',
                            label: 'Total Sales Volume'
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'nameOfTheLastEventAcquirer',
                        type: 'input',
                        className: 'col-sm-offset-8 flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Name of the Last Event Acquirer'
                        }
                    }]
            },
            {
                className: 'section-label',
                template: '<hr />'
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'informantsName',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Informants Name'
                        }
                    },
                    {
                        key: 'informantsPosition',
                        type: 'input',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Informants Position'
                        }
                    },
                    {
                        key: 'overAllRating',
                        type: 'select',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Over All Rating',
                            labelProp: 'OverAllRating_Id',
                            valueProp: 'Description',
                            options: []
                        }
                    }]
            },
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [{
                        key: 'remarks',
                        type: 'textarea',
                        className: 'flex-1',
                        expressionProperties: {},
                        templateOptions: {
                            label: 'Remarks',
                            description: ''
                        }
                    }]
            }
        ];
    }
    OcularInspectionFormService.prototype.getPosFields = function () {
        return this.fields;
    };
    OcularInspectionFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], OcularInspectionFormService);
    return OcularInspectionFormService;
}());



/***/ }),

/***/ "./src/app/pos-request-stepper/pos-request-stepper.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pos-request-stepper/pos-request-stepper.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matStepLabel{\r\n\r\n\tcolor: orange !important;\r\n}\r\n\r\n.matStepLabel {\r\n    color: red;\r\n}\r\n\r\n.mat-subheading-1 {\r\n    color: #2196F3\r\n}\r\n\r\n.mat-display-1 {\r\n    color: #0d47a1;\r\n}\r\n\r\n.mat-headline {\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/pos-request-stepper/pos-request-stepper.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pos-request-stepper/pos-request-stepper.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\" [mode]=\"mode\"></app-bdo-form-header>\r\n<span class=\"mat-headline\">Please follow the steps:</span>\r\n<mat-vertical-stepper [linear]=\"isLinear\" #stepper>\r\n    <mat-step>\r\n\r\n        <ng-template matStepLabel>\r\n            <span class=\"mat-subheading-1\">\r\n            Fill out POS Request form\r\n                </span>\r\n        </ng-template>\r\n        <span class=\"mat-headline\">\r\n            POS Request Details\r\n          </span>\r\n        <app-pos-request></app-pos-request>\r\n    </mat-step>\r\n    <mat-step>\r\n\r\n        <ng-template matStepLabel>\r\n            <span class=\"mat-subheading-1\">\r\n            Add MID Request\r\n        </span>\r\n        </ng-template>\r\n        <app-mid-request></app-mid-request>\r\n    </mat-step>\r\n    <mat-step state=\"done\">\r\n        <ng-template matStepLabel>\r\n\r\n            <span class=\"mat-subheading-1\">Done!</span>\r\n\r\n        </ng-template>\r\n\r\n        <span class=\"mat-subheading-1\">You are now done. Would you like to submit the Request?</span>\r\n        <div xLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxLayoutGap=\"3px\">\r\n            <button mat-stroked-button matStepperPrevious color=\"primary\">Yes</button>\r\n            <button mat-stroked-button (click)=\"stepper.reset()\" color=\"accent\">No</button>\r\n\r\n        </div>\r\n    </mat-step>\r\n</mat-vertical-stepper>"

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
        this.isOptional = false;
        this.title = "";
        this.subTitle = "";
        this.mode = 'create';
        this.status = "done";
    }
    PosRequestStepperComponent.prototype.ngOnInit = function () {
        this.isOptional = true;
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

module.exports = "<!-- <mat-card class=\"mat-card-screen\">\r\n <mat-card-content>\r\n \r\n  \r\n</mat-card-content>\r\n</mat-card> -->\r\n\r\n<!-- <app-bdo-form-header [text]=\"title\" [sub_text]=\"subTitle\" [mode]=\"mode\"></app-bdo-form-header> -->\r\n\r\n<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n    <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\" fxLayoutGap=\"3px\">\r\n            <button type=\"submit\" color=\"primary\" mat-raised-button>Save </button>\r\n            <button type=\"submit\" color=\"accent\" mat-raised-button>Cancel</button>\r\n        </div>\r\n    </formly-form>\r\n</form>\r\n<br>\r\n\r\n<!-- <hr>\r\n<mat-tab-group>\r\n    <mat-tab label=\"MID Request\">\r\n        <app-mid-request></app-mid-request>\r\n    </mat-tab>\r\n    <mat-tab label=\"TID Request\">\r\n        <span class=\"mat-headline\" style=\"margin-bottom:20px;\">TID Request </span>\r\n    </mat-tab>\r\n\r\n</mat-tab-group> -->"

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
/* harmony import */ var _services_pos_fields_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pos-fields.service */ "./src/app/services/pos-fields.service.ts");
/* harmony import */ var _app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-base/app-base.component */ "./src/app/app-base/app-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var PosRequestComponent = /** @class */ (function (_super) {
    __extends(PosRequestComponent, _super);
    //  subTitle:string;
    //  mode:string; 
    function PosRequestComponent(posFieldService, route, router) {
        var _this = _super.call(this, route, router) || this;
        _this.posFieldService = posFieldService;
        _this.route = route;
        _this.router = router;
        //  form = new FormGroup({});
        //   model: any = {};
        //   options: FormlyFormOptions = {};
        //   fields:FormlyFieldConfig[];
        _this.title = 'Pos Request';
        _this.fields = posFieldService.getPosFields();
        return _this;
    }
    PosRequestComponent.prototype.ngOnInit = function () {
        this.initialize();
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
        __metadata("design:paramtypes", [_services_pos_fields_service__WEBPACK_IMPORTED_MODULE_1__["PosFieldsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PosRequestComponent);
    return PosRequestComponent;
}(_app_base_app_base_component__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]));



/***/ }),

/***/ "./src/app/services/branch.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/branch.service.ts ***!
  \********************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
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

var BranchService = /** @class */ (function () {
    function BranchService() {
        this.fields = [
            {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'branchName',
                        templateOptions: {
                            label: 'Branch Name',
                            placeholder: 'Branch Name'
                        },
                    },
                    {
                        className: 'flex-1',
                        type: 'input',
                        key: 'branchCode',
                        templateOptions: {
                            label: 'Branch Code',
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
                key: 'remarks',
                templateOptions: {
                    label: 'Remarks'
                },
            },
            {
                type: 'checkbox',
                key: 'otherToo',
                templateOptions: {
                    label: 'Other Checkbox'
                },
            },
        ];
    }
    BranchService.prototype.getBranchFields = function () {
        return this.fields;
    };
    BranchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BranchService);
    return BranchService;
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

module.exports = __webpack_require__(/*! C:\Users\a025007888\Documents\MAP Front-End\Angular6MaterialSample\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map