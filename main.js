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

/***/ "./src/app/components/app-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/app-routing.module.ts ***!
  \**************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/components/cv/cv.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/components/contact/contact.component.ts");







var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_5__["CvComponent"] },
    { path: 'contact-me', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_app_wrapper\" [ngClass]=\"[sidebarClass ? 'sidebarOpened' : '', !hasMenu ? 'no-menu' : '']\">\n    <div class=\"side_menu_wrapper\">\n      <app-side-menu (onSidebarClick)=\"toggleSidebar()\"></app-side-menu>\n    </div>\n    <!--background_component-->\n    <div class=\"main_content_wrapper\">\n      <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/app.component.less":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
        this.sidebarClass = false;
    }
    AppComponent.prototype.toggleSidebar = function () {
        this.sidebarClass = !this.sidebarClass;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/components/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/app.module.ts":
/*!******************************************!*\
  !*** ./src/app/components/app.module.ts ***!
  \******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/components/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/components/cv/cv.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/components/contact/contact.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["SideMenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page_contactme section_bck page\">\n  <h1>CONTACT ME</h1>\n  <p>I am available for hire and open to any ideas of cooperation.</p>\n  <div class=\"inner_contact_wrapper\">\n    <!--<div class=\"contact_wrapper\">-->\n\n      <!--<ul>-->\n        <!--<li><a><span>E-mail:</span><span><i class=\"fa fa-envelope\"></i></span></a></li>-->\n        <!--<li><a><span>LinkedIn:</span><span><i class=\"fa fa-linkedin-square\"></i></span></a></li>-->\n        <!--<li><a><span>Github:</span><span><i class=\"fa fa-github-square\"></i></span></a></li>-->\n        <!--<li><a><span>Facebook:</span><span><i class=\"fa fa-facebook-square\"></i></span></a></li>-->\n      <!--</ul>-->\n\n    <!--</div>-->\n    <div class=\"contac_form\">\n      <h3 class=\"section_title\">Contact Me</h3>\n      <p>Lorem ispus lorem ipsum lorem ipsum</p>\n      <div class=\"contact_form_picture\">\n        <ul>\n          <li><a href=\"mailto:gocejosifoski13@gmail.com\"><i class=\"fa fa-envelope\"></i></a></li>\n          <li><a href=\"https://www.linkedin.com/in/goce-josifoski/\" target=\"_blank\"><i class=\"fa fa-linkedin-square\"></i></a></li>\n          <li><a href=\"https://github.com/goce13\" target=\"_blank\"><i class=\"fa fa-github-square\"></i></a></li>\n          <li><a href=\"https://www.facebook.com/goce.josifoski.14\" target=\"_blank\"><i class=\"fa fa-facebook-square\"></i></a></li>\n        </ul>\n      </div>\n      <div class=\"form_label\">\n        <form>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"Your Name\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"Your E-mail\">\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" rows=\"3\" placeholder=\"Your Message\"></textarea>\n          </div>\n        </form>\n        <button class=\"btn btn_accent_outline btn_medium\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.less */ "./src/app/components/contact/contact.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/cv/cv.component.html":
/*!*************************************************!*\
  !*** ./src/app/components/cv/cv.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cv_page section_bck page\">\n  <div class=\"pdf_wrapper\">\n    <div class=\"cv_header\">\n      <div class=\"cv_header_avatar\">\n        <img src=\"../../../assets/images/profile.jpg\" alt=\"\">\n      </div>\n      <div class=\"cv_header_txt\">\n        <h1 class=\"cv_header_name accent\">Goce Josifoski</h1>\n        <p class=\"cv_sub_header_name\">Senior UI/UX & Web Developer</p>\n        <div class=\"cv_header_lead\">\n          <p class=\"mb20\">\n            Self-motivated UI/UX Designer & Web Developer with over four years of professional experience in creating designing, wireframes, prototypes and coding, launching and\n            teaching others.\n          </p>\n          <strong>Currently available.</strong>\n          <p>Ready for relocation or can work remotely.</p>\n        </div>\n      </div>\n      <div class=\"cv_header_meta\">\n        <div class=\"cv_header_meta_right\">\n          <div class=\"cv_header_meta_row\">\n            <a href=\"mailto:gocejosifoski13@gmail.com\">gocejosifoski13@gmail.com</a>\n          </div>\n          <div class=\"cv_header_meta_row\">\n            +389 77 790 133\n          </div>\n          <div class=\"cv_header_meta_row\">\n            <a href=\"https://gocejosifoski.me/\">www.gocejosifoski.me</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"cv_section mt20\">\n      <h3 class=\"section_title\">Experience</h3>\n      <div class=\"cv_timeline\">\n        <div class=\"cv_timeline_row\">\n          <div class=\"cv_timeline_side\">\n            <div class=\"cv_timeline_company\">MIRACLEMILL</div>\n            <div class=\"cv_timelione_date\">02/2017 - present</div>\n            <a href=\"https://miraclemill.com/\">miraclemill.com</a>\n          </div>\n          <div class=\"cv_time_line_body\">\n            <h4 class=\"cv_time_line_header\">\n              UI/UX Lead Designer & Web Developer\n            </h4>\n            <ul class=\"timeline_body_list\">\n              <li>Developing Web, Desktop & Mobile <strong>(hybrid)</strong> applications with <strong>Angular5+/Sass/Less</strong> with reusable components & codes;</li>\n              <li>Ensuring that each application works as\n                expected in all popular browsers such as\n                <strong>Chrome, Firefox, Safari, Ei/Edge</strong> in different\n                resolutions and operating system thus allowing\n                its end users to access it and use it properly;</li>\n              <li><strong>Cordova</strong> platform;</li>\n              <li>Working with <strong>Scrum/Agile</strong> methodology</li>\n              <li><strong>GIT</strong>/pull requests</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"cv_timeline_row\">\n          <div class=\"cv_timeline_side\">\n            <div class=\"cv_timeline_company\">ITCROWD</div>\n            <div class=\"cv_timelione_date\">08/2016 - 02/2017</div>\n            <a href=\"https://miraclemill.com/\">miraclemill.com</a>\n          </div>\n          <div class=\"cv_time_line_body\">\n            <h4 class=\"cv_time_line_header\">\n              UI/UX Lead Designer & Web Developer at Miraclemill, Skopje (Macedonia)\n            </h4>\n            <ul class=\"timeline_body_list\">\n              <li>Creating designs in <strong>photoshop</strong> & <strong>figma</strong>;</li>\n              <li>Making responsive designs and implementing\n                them with <strong>HTML/HTML5 & CSS LESS/SASS</strong>\n                (with variables);</li>\n              <li><strong>Cordova</strong> platform;</li>\n              <li><strong>Maintaining</strong> websites and teaching interns and\n                helping them improve their skills;</li>\n              <li>Working with <strong>Scrum</strong> methodology;</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"cv_timeline_row\">\n          <div class=\"cv_timeline_side\">\n            <div class=\"cv_timeline_company\">UPWORK</div>\n            <div class=\"cv_timelione_date\">2013 - 2016</div>\n            <a href=\"https://www.upwork.com/fl/gocejosifoski\">www.upwork.com</a>\n          </div>\n          <div class=\"cv_time_line_body\">\n            <h4 class=\"cv_time_line_header\">\n              Freelancer\n            </h4>\n            <ul class=\"timeline_body_list\">\n              <li>Designing (<strong>Photoshop</strong>) and Developing\n                Websites;</li>\n              <li>Implementing designs and making them real via\n                <strong>HTML & CSS</strong>;</li>\n              <li><strong>Maintaining Wordpress sites;</strong></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"cv_section mt20\">\n      <h3 class=\"section_title\">Education</h3>\n      <div class=\"cv_timeline\">\n        <div class=\"cv_timeline_row\">\n          <div class=\"cv_timeline_side\">\n            <div class=\"cv_timeline_company\">Mirce Acev Prilep</div>\n            <div class=\"cv_timelione_date\">2004 - 2008</div>\n            <a href=\"https://www.gimprilep.edu.mk/\">gimprilep.edu.mk/</a>\n          </div>\n          <div class=\"cv_time_line_body\">\n            <div class=\"timeline_body_list pl0\">\n             <span> <strong>Social Humanism Department</strong>\n               - High School - Gymnasium \"Mirche Acev\",\n               Prilep (Macedonia)</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"cv_timeline_row\">\n          <div class=\"cv_timeline_side\">\n            <div class=\"cv_timeline_company\">Ss. Cyril and Methodius University</div>\n            <div class=\"cv_timelione_date\">2008 - 2012</div>\n            <a href=\"http://www.ukim.edu.mk/en_index.php\">www.ukim.edu</a>\n          </div>\n          <div class=\"cv_time_line_body\">\n            <div class=\"timeline_body_list pl0\">\n              <strong>Faculty of Design and Technology of Furniture and Interiot</strong>\n              - \"Ss. Cyril and Methodius\" University,\n              Skopje (Macedonia)\n            </div>\n          </div>\n        </div>\n        <div class=\"cv_timeline_row\">\n          <div class=\"cv_timeline_side\">\n            <div class=\"cv_timeline_company\">SEMOS Academy</div>\n            <div class=\"cv_timelione_date\">2015 - 2016</div>\n            <a href=\"http://www.semosedu.com.mk/Home_page.aspx\">semosedu.com.mk</a>\n          </div>\n          <div class=\"cv_time_line_body\">\n            <div class=\"timeline_body_list pl0\">\n              <strong>Certified Web designer</strong>\n              - SEMOS Academy Skopje, (Macedonia)\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"cv_section mt20\">\n      <h3 class=\"section_title\">Skills</h3>\n      <div class=\"cv_content cv_section_content__indented\">\n        <div class=\"tech_skills\">\n          <ul>\n            <li>HTML/HTML5</li>\n            <li>css/css3/less/sass</li>\n            <li>JavaScript</li>\n            <li>Angular</li>\n            <li>Typescript</li>\n            <li>AWS Services</li>\n            <li>Contentful</li>\n            <li>locize</li>\n            <li>X-code</li>\n            <li>Android studio</li>\n            <li>Git/Bitbucket</li>\n            <li>Asana</li>\n            <li>Photoshop</li>\n            <li>Sketch</li>\n            <li>Figma</li>\n            <li>Wordpress</li>\n            <li>Mentor & Leader</li>\n            <li>Customer support</li>\n            <li>Motivator</li>\n            <li>Оrganized</li>\n            <li>Adaptability</li>\n            <li>Problem-Solving</li>\n            <li>Teamwork</li>\n            <li>Creativity</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"cv_section mt20\">\n      <h3 class=\"section_title\">language skills</h3>\n      <div class=\"cv_content cv_section_content__indented\">\n        <div class=\"lang_skills flex_wrap\">\n          <div>\n            <strong>Mother language</strong>\n            <ul>\n              <li>Macedonian</li>\n            </ul>\n          </div>\n          <div>\n            <strong>Foreign languages</strong>\n            <ul>\n              <li>English</li>\n              <li>Serbian</li>\n              <li>Bulgarian</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn_back\">\n      <button routerLink=\"/home\"><i class=\"ion-ios-home\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cv/cv.component.less":
/*!*************************************************!*\
  !*** ./src/app/components/cv/cv.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3YvY3YuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/cv/cv.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/cv/cv.component.ts ***!
  \***********************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CvComponent = /** @class */ (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(/*! ./cv.component.html */ "./src/app/components/cv/cv.component.html"),
            styles: [__webpack_require__(/*! ./cv.component.less */ "./src/app/components/cv/cv.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CvComponent);
    return CvComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home_page page\">\n  <div class=\"home_header\"><h1>Hi, I am Goce,</h1></div>\n  <div class=\"home_sub_header\">\n   <h2> a freelance Designer & Web Developer specialized in</h2>\n    <br/>\n    <strong><h2>UI/UX & Front-end Web Development</h2></strong>\n  </div>\n  <div class=\"home_buttons\">\n    <button class=\"btn btn_accent_outline btn_medium\" routerLink=\"/portfolio\">PORTFOLIO</button>\n    <button class=\"btn btn_accent_outline btn_medium\" routerLink=\"/cv\">MY OFFER</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/components/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page_portfolio section_bck page\">\n  <h1>PORTFOLIO</h1>\n  <p>See my works below. Unless explicitly stated otherwise, <strong class=\"accent\">\n    all their back-end and front-end parts were completely done by me\n  </strong>.</p>\n  <div class=\"portfolio_timeline\">\n    <ul>\n      <li class=\"timeline_element\">\n        <div class=\"timeline_element_date\">\n          <time class=\"timeline_element_date_text\">Now</time>\n        </div>\n        <div class=\"timeline_element_content\">\n          <strong><p>Currently open to co-operation on new and existing projects.</p></strong>\n          <p>\n            Looking for a UI/UX Designer/Engineer, Web & Front-end Developer/Designer?\n            <strong class=\"accent\" routerLink=\"/contact\">Contact me</strong>. I will answer you in ~24 hours.\n          </p>\n        </div>\n      </li>\n      <li class=\"timeline_element\">\n        <div class=\"timeline_element_date\">\n          <time class=\"timeline_element_date_text\">2017 - Pres</time>\n        </div>\n        <div class=\"timeline_element_content\">\n          <strong><p>UI/UX Lead Designer & Web Developer at\n            Miraclemill, Skopje (Macedonia)</p></strong>\n          <ul>\n            <li>\n              Developing Web, Desktop & Mobile (hybrid)\n              applications with Angular5+/Sass/Less with\n              reusable components & codes;\n            </li>\n            <li>\n              Ensuring that each application works as\n              expected in all popular browsers such as\n              Chrome, Firefox, Safari, Ei/Edge in different\n              resolutions and operating system thus allowing\n              its end users to access it and use it properly;\n            </li>\n            <li>\n              Cordova platform;\n            </li>\n            <li>\n              Working with Scrum/Agile methodology\n            </li>\n            <li>\n              Git and pull requests;\n            </li>\n            <li>\n              Knowledge Sharing methodology;\n            </li>\n          </ul>\n        </div>\n      </li>\n      <li class=\"timeline_element\">\n        <div class=\"timeline_element_date\">\n          <time class=\"timeline_element_date_text\">Now</time>\n        </div>\n        <div class=\"timeline_element_content\">\n          <strong><p>Currently open to co-operation on new and existing projects.</p></strong>\n          <p>\n            Looking for a UI/UX Designer/Engineer, Web & Front-end Developer/Designer?\n            <strong class=\"accent\" routerLink=\"/contact\">Contact me</strong>. I will answer you in ~24 hours.\n          </p>\n        </div>\n      </li>\n      <li class=\"timeline_element\">\n        <div class=\"timeline_element_date\">\n          <time class=\"timeline_element_date_text\">Now</time>\n        </div>\n        <div class=\"timeline_element_content\">\n          <strong><p>Currently open to co-operation on new and existing projects.</p></strong>\n          <p>\n            Looking for a UI/UX Designer/Engineer, Web & Front-end Developer/Designer?\n            <strong class=\"accent\" routerLink=\"/contact\">Contact me</strong>. I will answer you in ~24 hours.\n          </p>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.less */ "./src/app/components/portfolio/portfolio.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar_inner\">\n  <div class=\"person_wrapper\" routerLink=\"/home\">\n    <div class=\"avatar_wrapper\">\n      <!--<img src=\"../../../assets/images/profile.jpg\" alt=\"\">-->\n    </div>\n    <div class=\"person_info\">\n      <div class=\"home_logo\">\n        <img src=\"../../../assets/images/logo/logo_goce.svg\" alt=\"\">\n      </div>\n      <div class=\"person_title\">Goce Josifoski</div>\n      <div class=\"person__sub_title\">Senior UI/UX & Web developer</div>\n    </div>\n  </div>\n  <div class=\"main_navigation\">\n    <div class=\"main_items\">\n      <ul class=\"mb40 mt40\">\n        <li class=\"current\"><a routerLink=\"portfolio\">Portfolio</a></li>\n        <li class=\"\"><a>My offer</a></li>\n        <li class=\"\"><a routerLink=\"contact-me\">Contact me</a></li>\n      </ul>\n      <ul class=\"mb40\">\n        <li class=\"\"><a routerLink=\"cv\">My CV</a></li>\n        <li class=\"\"><a>Personal Blog</a></li>\n      </ul>\n    </div>\n    <div class=\"social\">\n      <div class=\"block_title\">\n        <p>GET IN TOUCH</p>\n      </div>\n      <ul>\n        <li><a href=\"mailto:gocejosifoski13@gmail.com\"><i class=\"fa fa-envelope\"></i></a></li>\n        <li><a href=\"https://www.linkedin.com/in/goce-josifoski/\" target=\"_blank\"><i class=\"fa fa-linkedin-square\"></i></a></li>\n        <li><a href=\"https://github.com/goce13\" target=\"_blank\"><i class=\"fa fa-github-square\"></i></a></li>\n      </ul>\n    </div>\n    <div class=\"blog mt40\">\n      <div class=\"block_title\">\n        <p>RECENTLY ON MY BLOG</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/components/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.less */ "./src/app/components/side-menu/side-menu.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
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
/* harmony import */ var _app_components_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/app.module */ "./src/app/components/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_components_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gocejosifoski/repos/Portfolio/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map