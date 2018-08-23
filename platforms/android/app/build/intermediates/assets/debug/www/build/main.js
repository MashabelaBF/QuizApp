webpackJsonp([7],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\category\category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Category</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n<button ion-button color="light" (click)="gotoEdu()">Education</button>\n<button ion-button color="light" (click)="gotoEdu()">Politics</button>\n<button ion-button color="light" (click)="gotoEdu()">Scoccer</button>\n<button ion-button color="light" (click)="gotoEdu()">Technology</button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maths_maths__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EducationPage = /** @class */ (function () {
    function EducationPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.score = 0;
    }
    EducationPage_1 = EducationPage;
    EducationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EducationPage');
    };
    EducationPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Congradulations!',
            message: 'You got ' + this.score + '/5 click next to proceed to the next level',
            buttons: [
                {
                    text: 'Quit',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Next',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__maths_maths__["a" /* MathsPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    EducationPage.prototype.btnSubmit = function () {
        if (this.questionOne == "A") {
            this.score = this.score + 1;
        }
        if (this.questionTwo == "D") {
            this.score = this.score + 1;
        }
        if (this.questionThree == "A") {
            this.score = this.score + 1;
        }
        if (this.questionFour == "B") {
            this.score = this.score + 1;
        }
        if (this.questionFive == "D") {
            this.score = this.score + 1;
        }
        if (this.score == 5) {
            this.showConfirm();
        }
        else {
            alert("Sorry! you Scored " + this.score + "/5" + " you need to get everything correct, Please check your answers and try again");
            this.navCtrl.push(EducationPage_1);
        }
    };
    EducationPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    EducationPage = EducationPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-education',template:/*ion-inline-start:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\education\education.html"*/'<!--\n  Generated template for the EducationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>General</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n <ion-content padding>\n    <h5><ion-icon name="arrow-dropleft"></ion-icon>Slide<ion-icon name="arrow-dropright"></ion-icon></h5>\n    <ion-slides >\n      \n        <ion-slide>\n            <ion-list>\n              <h5>Question 1</h5>\n                <h5>\n                    Which popular cool drink was created in South Africa before going global?\n                  </h5>\n                <ion-item >\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionOne">\n                    <ion-option value="A">Appletiser</ion-option>\n                    <ion-option value="B">Fanta Grape</ion-option>\n                    <ion-option value="C">Stoney Ginger Beer</ion-option>\n                    <ion-option value="D">Lemon Twist</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list>\n                <h5>Question 2</h5>\n                <h5>\n                     What does South Africa produce more of than any other country?\n                  </h5>\n                <ion-item >\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionTwo">\n                    <ion-option value="A">Raw maize</ion-option>\n                    <ion-option value="B">Sugar cane</ion-option>\n                    <ion-option value="C"> Coal power</ion-option>\n                    <ion-option value="D">Macadamia nuts</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group >\n                <h5>Question 3</h5> \n              <h5>\n                 Which of these does not represent a national symbol for South Africa?\n                </h5>\n            \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionThree">\n                      <ion-option value="A">The Galjoen</ion-option>\n                      <ion-option value="B">The Blue Crane</ion-option>\n                      <ion-option value="C"> The King Protea</ion-option>\n                      <ion-option value="D">The Baobab</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group>\n                <h5>Question 4</h5>\n                <h5>\n                 Which of the following South African landmarks is not a world heritage site?\n                </h5>\n            \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionFour">\n                      <ion-option value="A">Robben Island</ion-option>\n                      <ion-option value="B">Vredefort Dome</ion-option>\n                      <ion-option value="C"> Cradle of Humankind</ion-option>\n                      <ion-option value="D">Kruger National Park</ion-option>\n                    </ion-select>\n                  </ion-item>\n                \n              </ion-list>\n          </ion-slide>\n          <ion-slide>\n              <ion-list radio-group>\n                  <h5>Question 5</h5>  \n                <h5 >\n                   How many democratically elected heads of state has South Africa had?\n                  </h5>\n              \n                  <ion-item >\n                      <ion-label>Answer</ion-label>\n                      <ion-select [(ngModel)]="questionFive">\n                        <ion-option value="A">4</ion-option>\n                        <ion-option value="B">5</ion-option>\n                        <ion-option value="C"> 3</ion-option>\n                        <ion-option value="D">6</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-list>\n                  <button ion-button color="light" (click)="btnSubmit()">Submit</button>\n            </ion-slide>\n            \n      </ion-slides>\n      <ion-fab right bottom >\n        <button ion-fab color="light"><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n          <button ion-fab ><ion-icon name="logo-instagram"></ion-icon></button>\n          <button ion-fab ><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab (click)="gotoHome()"><ion-icon name="home"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\education\education.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EducationPage);
    return EducationPage;
    var EducationPage_1;
}());

//# sourceMappingURL=education.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__science_science__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MathsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MathsPage = /** @class */ (function () {
    function MathsPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.score = 0;
    }
    MathsPage_1 = MathsPage;
    MathsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MathsPage');
    };
    MathsPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Congradulations!',
            message: 'You got ' + this.score + '/5 click next to proceed to the next level',
            buttons: [
                {
                    text: 'Quit',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Next',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__science_science__["a" /* SciencePage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    MathsPage.prototype.btnSubmit = function () {
        if (this.questionOne == "C") {
            this.score = this.score + 1;
        }
        if (this.questionTwo == "D") {
            this.score = this.score + 1;
        }
        if (this.questionThree == "A") {
            this.score = this.score + 1;
        }
        if (this.questionFour == "B") {
            this.score = this.score + 1;
        }
        if (this.questionFive == "B") {
            this.score = this.score + 1;
        }
        if (this.score == 5) {
            this.showConfirm();
        }
        else {
            alert("Sorry! you Scored " + this.score + "/5" + " you need to get everything correct, Please check your answers and try again");
            this.navCtrl.push(MathsPage_1);
            console.log(this.score);
        }
    };
    MathsPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MathsPage = MathsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maths',template:/*ion-inline-start:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\maths\maths.html"*/'<!--\n  Generated template for the MathsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Mathematics</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n    <h5><ion-icon name="arrow-dropleft"></ion-icon>Slide<ion-icon name="arrow-dropright"></ion-icon></h5>\n    <ion-slides>\n      \n        <ion-slide>\n            <ion-list>\n                <h5 >\n                    Question 1. <br>2*5\n                  </h5>\n                 \n              <ion-item>\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionOne">\n                    <ion-option value="A">25</ion-option>\n                    <ion-option value="B">16</ion-option>\n                    <ion-option value="C">10</ion-option>\n                    <ion-option value="D">20</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list>\n                <h5>\n                    Question 2<br> 9*3\n                  </h5>\n                     \n                <ion-item >\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionTwo">\n                    <ion-option value="A">28</ion-option>\n                    <ion-option value="B">21</ion-option>\n                    <ion-option value="C">32</ion-option>\n                    <ion-option value="D">27</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group >\n                <h5>\n                    Question 3<br> 7*6\n                  </h5>\n                    \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionThree">\n                      <ion-option value="A">42</ion-option>\n                      <ion-option value="B">38</ion-option>\n                      <ion-option value="C">37</ion-option>\n                      <ion-option value="D">29</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group>\n\n                <h5>\n                    Question 4<br> 5*9\n                  </h5>\n                     \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionFour">\n                      <ion-option value="A">55</ion-option>\n                      <ion-option value="B">45</ion-option>\n                      <ion-option value="C">35</ion-option>\n                      <ion-option value="D">60</ion-option>\n                    </ion-select>\n                  </ion-item>\n                \n              </ion-list>\n          </ion-slide>\n          <ion-slide>\n              <ion-list radio-group>\n                  <h5 >\n                      Question 5<br> 99*1\n                    </h5>\n                       \n                  <ion-item >\n                      <ion-label>Answer</ion-label>\n                      <ion-select [(ngModel)]="questionFive">\n                        <ion-option value="A">91</ion-option>\n                        <ion-option value="B">99</ion-option>\n                        <ion-option value="C">1</ion-option>\n                        <ion-option value="D">98</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-list>\n                  <button ion-button color="light" (click)="btnSubmit()">Submit</button>\n            </ion-slide>\n            \n      </ion-slides>\n\n      <ion-fab right bottom >\n        <button ion-fab color="black"><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n          <button ion-fab ><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab (click)="gotoHome()"><ion-icon name="home"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\maths\maths.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MathsPage);
    return MathsPage;
    var MathsPage_1;
}());

//# sourceMappingURL=maths.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SciencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geography_geography__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SciencePage = /** @class */ (function () {
    function SciencePage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.score = 0;
    }
    SciencePage_1 = SciencePage;
    SciencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SciencePage');
    };
    SciencePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Congradulations!',
            message: 'You got ' + this.score + '/5 click next to proceed to the next level',
            buttons: [
                {
                    text: 'Quit',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Next',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__geography_geography__["a" /* GeographyPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    SciencePage.prototype.btnSubmit = function () {
        if (this.questionOne == "B") {
            this.score = this.score + 1;
        }
        if (this.questionTwo == "B") {
            this.score = this.score + 1;
        }
        if (this.questionThree == "B") {
            this.score = this.score + 1;
        }
        if (this.questionFour == "A") {
            this.score = this.score + 1;
        }
        if (this.questionFive == "B") {
            this.score = this.score + 1;
        }
        if (this.score == 5) {
            this.showConfirm();
        }
        else {
            alert("Sorry! you Scored " + this.score + "/5" + " you need to get everything correct, Please check your answers and try again");
            this.navCtrl.push(SciencePage_1);
        }
    };
    SciencePage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SciencePage = SciencePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-science',template:/*ion-inline-start:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\science\science.html"*/'<!--\n  Generated template for the SciencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Science</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n    <h5><ion-icon name="arrow-dropleft"></ion-icon>Slide<ion-icon name="arrow-dropright"></ion-icon></h5>\n    <ion-slides>\n      \n        <ion-slide>\n            <ion-list>\n                <h5 >\n                    Question 1<br> What does the H stand for in H2O?\n                  </h5>       \n                 \n              <ion-item>\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionOne">\n                    <ion-option value="A">Halogen</ion-option>\n                    <ion-option value="B">Hydrogen</ion-option>\n                    <ion-option value="C">Hydration</ion-option>\n                    <ion-option value="D">Helium</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list>\n                <h5>\n                    Question 2<br> Brass gets discoloured in air because of the presence of which of the following gases in air?\n                  </h5>\n                     \n                <ion-item >\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionTwo">\n                    <ion-option value="A">Oxygen</ion-option>\n                    <ion-option value="B">Hydrogen sulphide</ion-option>\n                    <ion-option value="C">Carbon dioxide</ion-option>\n                    <ion-option value="D">Nitrogen</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group >\n                <h5>\n                    Question 3<br> Which of the following is a non metal that remains liquid at room temperature?\n                  </h5>\n                     \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionThree">\n                      <ion-option value="A">Phosphorous</ion-option>\n                      <ion-option value="B">Bromine</ion-option>\n                      <ion-option value="C">Chlorine</ion-option>\n                      <ion-option value="D">Helium</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group>\n\n                <h5>\n                    Question 4<br>Which of the following is used in pencils?\n                  </h5>\n                     \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionFour">\n                      <ion-option value="A">Graphite</ion-option>\n                      <ion-option value="B">Silicon</ion-option>\n                      <ion-option value="C">Charcoal</ion-option>\n                      <ion-option value="D">Phosphorous</ion-option>\n                    </ion-select>\n                  </ion-item>\n                \n              </ion-list>\n          </ion-slide>\n          <ion-slide>\n              <ion-list radio-group>\n                  <h5 >\n                      Question 5<br> Which of the following metals forms an amalgam with other metals?\n                    </h5>\n                       \n                  <ion-item >\n                      <ion-label>Answer</ion-label>\n                      <ion-select [(ngModel)]="questionFive">\n                        <ion-option value="A">Tin</ion-option>\n                        <ion-option value="B">Mercury</ion-option>\n                        <ion-option value="C">Lead</ion-option>\n                        <ion-option value="D">Zinc</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-list>\n                  <button ion-button color="light" (click)="btnSubmit()">Submit</button>\n            </ion-slide>\n            \n      </ion-slides>\n\n      <ion-fab right bottom >\n        <button ion-fab color="black"><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n          <button ion-fab ><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab (click)="gotoHome()"><ion-icon name="home"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\science\science.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SciencePage);
    return SciencePage;
    var SciencePage_1;
}());

//# sourceMappingURL=science.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeographyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_history__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GeographyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeographyPage = /** @class */ (function () {
    function GeographyPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.score = 0;
    }
    GeographyPage_1 = GeographyPage;
    GeographyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeographyPage');
    };
    GeographyPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Congradulations!',
            message: 'You got ' + this.score + '/5 click next to proceed to the next level',
            buttons: [
                {
                    text: 'Quit',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Next',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__history_history__["a" /* HistoryPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    GeographyPage.prototype.btnSubmit = function () {
        if (this.questionOne == "B") {
            this.score = this.score + 1;
        }
        if (this.questionTwo == "C") {
            this.score = this.score + 1;
        }
        if (this.questionThree == "C") {
            this.score = this.score + 1;
        }
        if (this.questionFour == "B") {
            this.score = this.score + 1;
        }
        if (this.questionFive == "B") {
            this.score = this.score + 1;
        }
        if (this.score == 5) {
            this.showConfirm();
        }
        else {
            alert("Sorry! you Scored " + this.score + "/5" + " you need to get everything correct, Please check your answers and try again");
            this.navCtrl.push(GeographyPage_1);
            console.log(this.score);
        }
    };
    GeographyPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    GeographyPage = GeographyPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geography',template:/*ion-inline-start:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\geography\geography.html"*/'<!--\n  Generated template for the GeographyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Geography</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n    <h5><ion-icon name="arrow-dropleft"></ion-icon>Slide<ion-icon name="arrow-dropright"></ion-icon></h5>\n    <ion-slides>\n      \n        <ion-slide>\n            <ion-list>\n                <h5>\n                    Question 1 <br>Which of the following is tropical grassland?\n                </h5>\n                <ion-item>\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionOne">\n                    <ion-option value="A">Taiga   </ion-option>\n                    <ion-option value="B">Savannah</ion-option>\n                    <ion-option value="C">Pampas</ion-option>\n                    <ion-option value="D">Prairies</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list>\n                <h5>\n                    Question 2<br> The intersecting lines drawn on maps and globes are?\n                </h5>\n                  \n                <ion-item >\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionTwo">\n                    <ion-option value="A">latitudes</ion-option>\n                    <ion-option value="B">longitudes</ion-option>\n                    <ion-option value="C"> geographic grids</ion-option>\n                    <ion-option value="D">None of the above</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group >\n                <h5>\n                    Question 3<br> The great Victoria Desert is located in?\n                </h5>\n             \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionThree">\n                      <ion-option value="A">Canada</ion-option>\n                      <ion-option value="B">West Africa</ion-option>\n                      <ion-option value="C">Australia</ion-option>\n                      <ion-option value="D">North America</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group>\n\n                <h5>\n                    Question 4<br>The Homolographic projection has the correct representation of?\n                </h5>\n            \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionFour">\n                      <ion-option value="A">Shape</ion-option>\n                      <ion-option value="B">Area</ion-option>\n                      <ion-option value="C">Baring</ion-option>\n                      <ion-option value="D">Distance</ion-option>\n                    </ion-select>\n                  </ion-item>\n                \n              </ion-list>\n          </ion-slide>\n          <ion-slide>\n              <ion-list radio-group>\n                  <h5>\n                      Question 5<br>Which of the following countries does not border South Africa?\n                  </h5>\n                \n                  <ion-item >\n                      <ion-label>Answer</ion-label>\n                      <ion-select [(ngModel)]="questionFive">\n                        <ion-option value="A">Namibia</ion-option>\n                        <ion-option value="B">Egypt</ion-option>\n                        <ion-option value="C">Botswana</ion-option>\n                        <ion-option value="D">Zimbabwe</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-list>\n                  <button ion-button color="light" (click)="btnSubmit()">Submit</button>\n            </ion-slide>\n            \n      </ion-slides>\n\n      <ion-fab right bottom >\n        <button ion-fab color="black"><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n          <button ion-fab ><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab (click)="gotoHome()"><ion-icon name="home"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\geography\geography.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GeographyPage);
    return GeographyPage;
    var GeographyPage_1;
}());

//# sourceMappingURL=geography.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.score = 0;
    }
    HistoryPage_1 = HistoryPage;
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Congradulations!',
            message: 'You got ' + this.score + '/5 click next to proceed to the next level',
            buttons: [
                {
                    text: 'Quit',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Next',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    HistoryPage.prototype.btnSubmit = function () {
        if (this.questionOne == "D") {
            this.score = this.score + 1;
        }
        if (this.questionTwo == "A") {
            this.score = this.score + 1;
        }
        if (this.questionThree == "A") {
            this.score = this.score + 1;
        }
        if (this.questionFour == "B") {
            this.score = this.score + 1;
        }
        if (this.questionFive == "B") {
            this.score = this.score + 1;
        }
        if (this.score == 5) {
            this.showConfirm();
        }
        else {
            alert("Sorry! you Scored " + this.score + "/5" + " you need to get everything correct, Please check your answers and try again");
            this.navCtrl.push(HistoryPage_1);
            console.log(this.score);
        }
    };
    HistoryPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    HistoryPage = HistoryPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\history\history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>History</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n    <h5><ion-icon name="arrow-dropleft"></ion-icon>Slide<ion-icon name="arrow-dropright"></ion-icon></h5>\n    <ion-slides>\n      \n        <ion-slide>\n            <ion-list>\n                <h5 >\n                    Question 1<br> Soweto stands for..\n                </h5>\n              <ion-item>\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionOne">\n                    <ion-option value="A">South African Western Town   </ion-option>\n                    <ion-option value="B"> South Western Town</ion-option>\n                    <ion-option value="C">Sobukwe Western Townships</ion-option>\n                    <ion-option value="D">South western Township</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list>\n                <h5>\n                    Question 2<br> Which is the most popular mountain for tourists\n                </h5>\n   \n                <ion-item >\n                  <ion-label>Answer</ion-label>\n                  <ion-select [(ngModel)]="questionTwo">\n                    <ion-option value="A">Table mountain</ion-option>\n                    <ion-option value="B">Lions Head</ion-option>\n                    <ion-option value="C"> Devils Peak</ion-option>\n                    <ion-option value="D">Champagne Coast</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group >\n                <h5>\n                    Question 3<br> What is the most largest park in South Africa\n                  </h5>\n                \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionThree">\n                      <ion-option value="A">Kruger National Park</ion-option>\n                      <ion-option value="B">Madikwe Game Reserve</ion-option>\n                      <ion-option value="C">Pilanesberg Game Reserve</ion-option>\n                      <ion-option value="D">Kgalagadi Transfrontier Park</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n        </ion-slide>\n        <ion-slide>\n            <ion-list radio-group>\n\n                <h5>\n                    Question 4<br> Nelson Mandela spent 18 years imprisionment at an island called?\n                  </h5>\n                 \n                <ion-item >\n                    <ion-label>Answer</ion-label>\n                    <ion-select [(ngModel)]="questionFour">\n                      <ion-option value="A">Msikaba Island</ion-option>\n                      <ion-option value="B">Robben Island</ion-option>\n                      <ion-option value="C"> Marion Island</ion-option>\n                      <ion-option value="D">Easter Island</ion-option>\n                    </ion-select>\n                  </ion-item>\n                \n              </ion-list>\n          </ion-slide>\n          <ion-slide>\n              <ion-list radio-group>\n                  <h5 >\n                      Question 5<br>Johannesburg\'s population boomed  after the discovery of ?\n                    </h5> \n              \n                  <ion-item >\n                      <ion-label>Answer</ion-label>\n                      <ion-select [(ngModel)]="questionFive">\n                        <ion-option value="A"> Cocoa Beans</ion-option>\n                        <ion-option value="B">Gold</ion-option>\n                        <ion-option value="C">Uranium</ion-option>\n                        <ion-option value="D">Oil</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-list>\n                  <button ion-button color="light" (click)="btnSubmit()">Submit</button>\n            </ion-slide>\n            \n      </ion-slides>\n\n      <ion-fab right bottom >\n        <button ion-fab color="black"><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n          <button ion-fab ><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab (click)="gotoHome()"><ion-icon name="home"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n      </ion-content>'/*ion-inline-end:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
    var HistoryPage_1;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		275,
		6
	],
	"../pages/education/education.module": [
		276,
		5
	],
	"../pages/geography/geography.module": [
		277,
		4
	],
	"../pages/history/history.module": [
		278,
		3
	],
	"../pages/maths/maths.module": [
		279,
		2
	],
	"../pages/results/results.module": [
		280,
		1
	],
	"../pages/science/science.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__education_education__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.gotoEdu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__education_education__["a" /* EducationPage */]);
    };
    HomePage.prototype.gotoEd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__results_results__["a" /* ResultsPage */]);
    };
    HomePage.prototype.gotoCategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* CategoryPage */]);
    };
    HomePage.prototype.gotoHome = function () {
        this.navCtrl.push(HomePage_1);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Quiz App\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n    \n  <div class="divm">\n       <img src="../../assets/imgs/Its-Quiz-Time.jpg" width="50%" height="50%">\n    <p>\n       <b>Welcome to the Quiz App click start to begin the Challenge.</b>\n    </p>\n  </div>\n  <div> \n       <button ion-button color="light" (click)="gotoEdu()">Start</button>\n       <!-- <button ion-button color="light" (click)="gotoCategory()">Start</button> -->\n      \n  </div>\n        \n  \n    \n  <!-- <ion-fab right bottom >\n      <button ion-fab color="black"><ion-icon name="arrow-dropup"></ion-icon></button>\n      <ion-fab-list side="top">\n        <button ion-fab ><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab (click)="gotoHome()"><ion-icon name="home"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab> -->\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_education_education__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_geography_geography__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_science_science__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_maths_maths__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_history_history__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_results_results__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_category_category__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_education_education__["a" /* EducationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_geography_geography__["a" /* GeographyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_science_science__["a" /* SciencePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_maths_maths__["a" /* MathsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_category_category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/education/education.module#EducationPageModule', name: 'EducationPage', segment: 'education', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geography/geography.module#GeographyPageModule', name: 'GeographyPage', segment: 'geography', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maths/maths.module#MathsPageModule', name: 'MathsPage', segment: 'maths', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/science/science.module#SciencePageModule', name: 'SciencePage', segment: 'science', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_education_education__["a" /* EducationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_geography_geography__["a" /* GeographyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_science_science__["a" /* SciencePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_maths_maths__["a" /* MathsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_category_category__["a" /* CategoryPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsPage');
    };
    ResultsPage.prototype.goto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\results\results.html"*/'<!--\n  Generated template for the ResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n  <h1>YEEAAAAAA!!</h1>\n<h1>CONGRADULATIONS!! YOU GOT ALL QUESTIONS CORRECT</h1> \n<ion-fab left bottom>\n    <button ion-fab color="black"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="goto()"><ion-icon name="ios-game-controller-b-outline"></ion-icon></button>\n      \n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\BF\Desktop\Project\Quiz\Quiz\src\pages\results\results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map