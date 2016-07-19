webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "body {\n  background-color: #000e27;\n  overflow: hidden;\n}\n#wrap {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #000e27;\n  background-image: url(" + __webpack_require__(44) + ");\n  transition: background-color 1s ease-in;\n}\n#main-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n#bg_magic_circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.05;\n  background: url(" + __webpack_require__(43) + ") center center fixed no-repeat;\n  transition: opacity 1s ease-in;\n}\n", ""]);

// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "@media screen {\n  #skin_space {\n    left: 0px;\n  }\n  #skin_space .logo {\n    left: 50%;\n    top: 200px;\n    width: 240px;\n    height: 240px;\n    margin-left: -120px;\n    padding-top: 250px;\n    background: url(" + __webpack_require__(19) + ") no-repeat;\n  }\n  #component_space {\n    right: 0px;\n  }\n  #component_space .logo {\n    left: 50%;\n    top: 250px;\n    width: 194px;\n    height: 194px;\n    margin-left: -92px;\n    padding-top: 204px;\n    background: url(" + __webpack_require__(18) + ") no-repeat;\n  }\n  .index-space {\n    position: absolute;\n    width: 50%;\n    height: 100%;\n    border: 0px solid #000;\n    background: rgba(0, 0, 0, 0);\n    overflow: hidden;\n    cursor: pointer;\n  }\n  .index-space:before {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 100%;\n    background-color: rgba(0, 11, 27, 0.22);\n    content: \"\";\n    cursor: pointer;\n    transition: transform 500ms ease-out;\n    transform: scale(0);\n  }\n  .index-space:hover:before {\n    transform: scale(2);\n  }\n  .index-space:hover .logo {\n    opacity: 1;\n  }\n  .index-space .logo {\n    position: absolute;\n    color: white;\n    text-align: center;\n    font-size: 24px;\n    opacity: 0.4;\n    transition: opacity 200ms linear;\n  }\n  .index-space a {\n    display: block;\n    height: 100%;\n  }\n}\n@media (max-width: 770px) {\n  .index-space {\n    position: relative;\n    width: 100%;\n    height: 50%;\n  }\n  .index-space .logo {\n    opacity: 1;\n  }\n  #skin_space .logo {\n    left: 50%;\n    top: 50%;\n    width: 240px;\n    height: 240px;\n    margin-left: -120px;\n    margin-top: -120px;\n    background: url(" + __webpack_require__(19) + ") no-repeat;\n  }\n  #component_space .logo {\n    left: 50%;\n    top: 50%;\n    width: 194px;\n    height: 194px;\n    margin-left: -92px;\n    margin-top: -92px;\n    background: url(" + __webpack_require__(18) + ") no-repeat;\n  }\n}\n@media (max-width: 320px) {\n  #skin_space .logo {\n    width: 160px;\n    height: 160px;\n    padding-top: 160px;\n    margin-top: -80px;\n    margin-left: -80px;\n    background-size: cover;\n  }\n  #component_space .logo {\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding-top: 67%;\n    background-size: 140px 140px;\n    background-position: 50%;\n  }\n}\n", ""]);

// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "@media screen {\n  #nav {\n    position: fixed;\n    top: 50px;\n    right: 50px;\n    width: 120px;\n    padding-top: 56px;\n    overflow: hidden;\n    transition: height 200ms linear;\n  }\n  #nav #nav-list .nav-item {\n    position: relative;\n    max-width: 120px;\n    max-height: 40px;\n    padding: 8px;\n    background-color: rgba(0, 0, 0, 0);\n    overflow: hidden;\n    cursor: pointer;\n    text-align: right;\n    transition: background-color 300ms linear;\n  }\n  #nav #nav-list .nav-item:hover {\n    background-color: #6d7db1;\n  }\n  #nav #nav-list .nav-item a {\n    display: block;\n    color: white;\n    z-index: 1;\n  }\n  #nav #nav-list .nav-item a:hover {\n    text-decoration: none;\n  }\n  #nav .skin-aside-menu {\n    width: 120px;\n    text-align: right;\n  }\n  #nav .skin-aside-menu .menu-item {\n    padding: 0px 8px 0px 8px;\n  }\n  #nav .skin-aside-menu .menu-item a {\n    color: #666666;\n    transition: color 200ms ease-in;\n  }\n  #nav .skin-aside-menu .menu-item a:hover {\n    color: white;\n    text-decoration: none;\n  }\n  #nav .skin-aside-menu .menu-item .title {\n    margin-top: 8px;\n    color: #7d5523;\n    font-weight: bold;\n  }\n  #nav .components-aside-menu {\n    width: 120px;\n    text-align: right;\n  }\n  #nav .components-aside-menu .menu-item {\n    padding: 0px 8px 0px 8px;\n  }\n  #nav .components-aside-menu .menu-item a {\n    color: #666666;\n    transition: color 200ms ease-in;\n  }\n  #nav .components-aside-menu .menu-item a:hover {\n    color: white;\n    text-decoration: none;\n  }\n  #nav .components-aside-menu .menu-item .title {\n    margin-top: 8px;\n    color: #7d5523;\n    font-weight: bold;\n  }\n  #nav #toggle_btn {\n    display: none;\n    position: relative;\n    float: right;\n    top: 10px;\n    color: white;\n  }\n  .skin-wrap #nav {\n    background: url(" + __webpack_require__(42) + ") top right no-repeat;\n  }\n  .ui-wrap #nav {\n    background: url(" + __webpack_require__(41) + ") top right no-repeat;\n  }\n}\n@media (max-width: 770px) {\n  #nav {\n    position: static;\n    top: 0px;\n    right: 0px;\n    width: 100%;\n    height: 56px;\n    padding: 8px;\n    z-index: 1;\n  }\n  #nav #nav-list {\n    display: inline-block;\n  }\n  #nav #nav-list .nav-item {\n    display: inline-block;\n    padding: 8px;\n    background-color: rgba(0, 0, 0, 0);\n    overflow: inherit;\n    cursor: pointer;\n    text-align: right;\n    transition: background-color 300ms linear;\n  }\n  #nav #nav-list .nav-item:hover {\n    background-color: #6d7db1;\n  }\n  #nav #nav-list .nav-item a {\n    display: block;\n    color: white;\n    z-index: 1;\n  }\n  #nav #nav-list .nav-item a:hover {\n    text-decoration: none;\n  }\n  #nav #nav-list .nav-item .dropdown-menu a {\n    color: black;\n  }\n  #nav #toggle_btn {\n    display: block;\n  }\n  #nav.show-skin-menu {\n    height: 200px;\n  }\n  #nav.show-component-menu {\n    height: 200px;\n  }\n  #nav .skin-aside-menu,\n  #nav .components-aside-menu {\n    padding-left: 7px;\n    text-align: left;\n    color: white;\n  }\n  #nav .skin-aside-menu .menu-item,\n  #nav .components-aside-menu .menu-item {\n    padding: 0px;\n  }\n  #nav .skin-aside-menu .menu-item a,\n  #nav .components-aside-menu .menu-item a {\n    color: white;\n  }\n  #nav .skin-aside-menu .aside-menu-title,\n  #nav .components-aside-menu .aside-menu-title {\n    display: none;\n  }\n  .skin-wrap #nav {\n    background: #ffab42;\n  }\n  .ui-wrap #nav {\n    background: #190d46;\n  }\n}\n", ""]);

// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "@media screen {\n  #wrap.skin-wrap {\n    background-color: #ffab42;\n  }\n  #wrap.skin-wrap .content-container {\n    position: absolute;\n    top: 50px;\n    left: 50px;\n    right: 180px;\n    padding: 36px;\n    padding-top: 0px;\n    border-radius: 4px;\n    background-color: rgba(255, 255, 255, 0.8);\n    overflow: auto;\n  }\n  .skin-wrap #bg_magic_circle {\n    opacity: 0.3;\n  }\n}\n@media (max-width: 770px) {\n  #wrap.skin-wrap .content-container {\n    position: static;\n    width: 100%;\n    border-radius: 0px;\n  }\n}\n", ""]);

// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "#wrap.ui-wrap {\n  background-color: #09031f;\n}\n#wrap.ui-wrap .content-container {\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  right: 180px;\n  padding: 36px;\n  padding-top: 0px;\n  border-radius: 4px;\n  background-color: rgba(255, 255, 255, 0.8);\n  overflow: auto;\n}\n.ui-wrap #bg_magic_circle {\n  opacity: 0.12;\n}\n@media (max-width: 770px) {\n  #wrap.ui-wrap .content-container {\n    position: static;\n    width: 100%;\n    border-radius: 0px;\n  }\n}\n", ""]);

// exports


/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img-ff7b0a8e315fbf159169dffd2929aae4.png";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img-3a5fa8f8907244f01f1b657e607812e7.png";

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(77);

__webpack_require__(78);

__webpack_require__(24);

var _appTemplate = __webpack_require__(68);

var _appTemplate2 = _interopRequireDefault(_appTemplate);

var _app = __webpack_require__(45);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /** @module src/app.component */

exports.default = {
  template: _appTemplate2.default,
  controller: _app2.default,
  controllerAs: 'vm'
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = __webpack_require__(4);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _index = __webpack_require__(49);

var _index2 = _interopRequireDefault(_index);

var _skin = __webpack_require__(55);

var _skin2 = _interopRequireDefault(_skin);

var _ui = __webpack_require__(67);

var _ui2 = _interopRequireDefault(_ui);

var _nav = __webpack_require__(52);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** pages modules */

'use strict';

exports.default = _angular2.default.module('components', [_angularUiRouter2.default, _index2.default.name, _skin2.default.name, _ui2.default.name, _nav2.default.name]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
  // .state('index', {
  //   url: '/',
  //   template: '<index></index>'
  // })
  .state('skin', {
    url: '/skin',
    template: '<skin></skin>'
  }).state('ui', {
    url: '/ui',
    template: '<ui></ui>'
  });
  $urlRouterProvider.otherwise('/');
}]);

/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img-b23d29369450028f303c8e41e78ea624.png";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img-2a737e0db5a4c5d2522ba0d55d5c6099.png";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img-7fe4511e1deb2cd7464fa8518db5c665.png";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img-49767ac507f1808d28b1122464ebb4e1.png";

/***/ },
/* 45 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppController = function AppController($state) {
  'ngInject';

  _classCallCheck(this, AppController);

  this.$state = $state;
};
AppController.$inject = ["$state"];

exports.default = AppController;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _app = __webpack_require__(21);

var _app2 = _interopRequireDefault(_app);

var _components = __webpack_require__(22);

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /** app entry */

exports.default = _angular2.default.module('app', [_components2.default.name]).component('app', _app2.default);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(79);

var _indexTemplate = __webpack_require__(69);

var _indexTemplate2 = _interopRequireDefault(_indexTemplate);

var _index = __webpack_require__(48);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /** @module index module component define */

exports.default = {
  template: _indexTemplate2.default,
  controller: _index2.default,
  controllerAs: 'vm'
};

/***/ },
/* 48 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexController = function IndexController() {
  _classCallCheck(this, IndexController);
};

exports.default = IndexController;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _index = __webpack_require__(47);

var _index2 = _interopRequireDefault(_index);

var _angularUiRouter = __webpack_require__(4);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('indexPage', [_angularUiRouter2.default]).component('index', _index2.default); /** index page entry */

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navTemplate = __webpack_require__(70);

var _navTemplate2 = _interopRequireDefault(_navTemplate);

var _nav = __webpack_require__(51);

var _nav2 = _interopRequireDefault(_nav);

__webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _navTemplate2.default,
  controller: _nav2.default,
  controllerAs: 'vm'
}; /** nav component define */

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** nav component controller */

var _gsap = __webpack_require__(14);

var _gsap2 = _interopRequireDefault(_gsap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

/**
 * @export
 * @class navController
 */

var NavController = function () {
  /**
   * create NavController
   * 
   * @constructor NavController
   * @param {RouteState} $state
   */

  NavController.$inject = ["$state", "$rootScope", "$timeout", "$anchorScroll", "$location"];
  function NavController($state, $rootScope, $timeout, $anchorScroll, $location) {
    'ngInject';

    _classCallCheck(this, NavController);

    this.$state = $state;
    this.$timeout = $timeout;
    this.$anchorScroll = $anchorScroll;
    this.$location = $location;

    $('#toggle_btn').click(function () {
      if ($state.is('skin')) {
        $('#nav').toggleClass('show-skin-menu');
      }
      if ($state.includes('ui')) {
        $('#nav').toggleClass('show-component-menu');
      }
    });
  }

  _createClass(NavController, [{
    key: 'goAnchor',
    value: function goAnchor(anchorName) {
      this.$location.hash(anchorName + '_anchor');
      this.$anchorScroll();
    }
  }]);

  return NavController;
}();

exports.default = NavController;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _nav = __webpack_require__(50);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @module nav component entry */

exports.default = _angular2.default.module('nav', []).component('fancyNav', _nav2.default);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(81);

var _skinTemplate = __webpack_require__(71);

var _skinTemplate2 = _interopRequireDefault(_skinTemplate);

var _skin = __webpack_require__(54);

var _skin2 = _interopRequireDefault(_skin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _skinTemplate2.default,
  controller: _skin2.default,
  controllerAs: 'vm'
}; /** skin component define */

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** skin component controller */

var _gsap = __webpack_require__(14);

var _gsap2 = _interopRequireDefault(_gsap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var SkinController = function () {
  SkinController.$inject = ["$anchorScroll", "$location"];
  function SkinController($anchorScroll, $location) {
    'ngInject';

    _classCallCheck(this, SkinController);

    this.$anchorScroll = $anchorScroll;
    this.$location = $location;
    var container = document.getElementById('main-container');
    container.style.opacity = 0;
    _gsap2.default.to(container, .5, { opacity: 1, ease: 'easeIn' });
  }

  _createClass(SkinController, [{
    key: 'goAnchor',
    value: function goAnchor(anchorName) {
      this.$location.hash(anchorName + '_anchor');
      this.$anchorScroll();
    }
  }]);

  return SkinController;
}();

exports.default = SkinController;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _skin = __webpack_require__(53);

var _skin2 = _interopRequireDefault(_skin);

var _angularUiRouter = __webpack_require__(4);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /** @module skin module entry */

exports.default = _angular2.default.module('skin', [_angularUiRouter2.default]).component('skin', _skin2.default);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _prismjs = __webpack_require__(15);

var _prismjs2 = _interopRequireDefault(_prismjs);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonShowController = function () {
  ButtonShowController.$inject = ["$timeout", "$sce"];
  function ButtonShowController($timeout, $sce) {
    'ngInject';

    _classCallCheck(this, ButtonShowController);

    this.disabled = false;
    this.ooxx = false;
    this.$timeout = $timeout;
    this.tiggleDisabled = true;

    // this.$timeout(() => {
    //   this.tiggleDisabled = false;
    // }, 3000);

    var codePart1 = '\n      <bp-button type="primary">primary</bp-button>\n      <bp-button type="primary" icon="ok">OK</bp-button>\n    ';
    this.part1Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart1, _prismjs2.default.languages.html));

    var codePart2 = '\n      <bp-button type="primary" size="xs">size xs button</bp-button>\n      <bp-button type="primary" size="sm">size sm button</bp-button>\n      <bp-button type="primary">size default button</bp-button>\n      <bp-button type="primary" size="lg">size lg button</bp-button>\n    ';
    this.part2Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart2, _prismjs2.default.languages.html));

    var codePart3 = '\n      <bp-button click="vm.sayHello(button)" type="primary" loading="true">loading</bp-button>\n      <bp-button click="vm.sayHello(button)" type="primary" icon="ok" loading="true">loading</bp-button>\n    ';
    this.part3Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart3, _prismjs2.default.languages.html));
  }

  _createClass(ButtonShowController, [{
    key: 'sayHello',
    value: function sayHello(btn, o) {
      // console.log('sayHello', btn, o);
      btn.state = { loading: true };
      this.tiggleDisabled = false;
      this.$timeout(function () {
        btn.state = { disabled: false, loading: false };
      }, 3000);
    }
  }]);

  return ButtonShowController;
}();

exports.default = ButtonShowController;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _template = __webpack_require__(72);

var _template2 = _interopRequireDefault(_template);

var _controller = __webpack_require__(56);

var _controller2 = _interopRequireDefault(_controller);

var _anaheim = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('buttonShow', [_anaheim.Button.name]).component('buttonShow', {
  template: _template2.default,
  controller: _controller2.default,
  controllerAs: 'vm'
});
// import Button from '../../src/components/button';

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prismjs = __webpack_require__(15);

var _prismjs2 = _interopRequireDefault(_prismjs);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckboxShowController = function CheckboxShowController($timeout, $sce) {
  'ngInject';

  _classCallCheck(this, CheckboxShowController);

  this.checked1 = false;
  this.checked2 = false;

  this.groupDataList = [{ label: '邢老师不要脸', checked: true }, { label: '老师不要脸' }, { label: '师不要脸' }, { label: '不要脸' }, { label: '要脸', disabled: true }, { label: '脸' }];

  var codePart1 = '\n      <bp-checkbox>暴风雪</bp-checkbox>\n      <bp-checkbox checked="true">暴风雪</bp-checkbox>\n      <bp-checkbox disabled="true">暴风雪</bp-checkbox>\n      <bp-checkbox checked="true" disabled="true">暴风雪</bp-checkbox>\n      <bp-checkbox half-checked="true">暴风雪</bp-checkbox>\n      <bp-checkbox half-checked="true" disabled="true">暴风雪</bp-checkbox>\n    ';
  this.part1Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart1, _prismjs2.default.languages.html));

  var codePart2 = '\n      <bp-checkbox checked="vm.checked1">\b绑定到controller的</bp-checkbox>\n      <p>binding to controller value: {{vm.checked1}}</p>\n    ';
  this.part2Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart2, _prismjs2.default.languages.html));

  var codePart3 = '\n      <bp-checkbox checked="vm.checked2" true-value="1" false-value="2">\b绑定到controller的</bp-checkbox>\n      <p>true-value and false-value: {{vm.checked2}}</p>\n    ';
  this.part3Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart3, _prismjs2.default.languages.html));

  var codePart4 = '\n      <bp-checkbox-group model="vm.groupDataList"></bp-checkbox-group>\n      <p>{{vm.groupDataList}}</p>\n    ';
  this.part4Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart4, _prismjs2.default.languages.html));

  var codePart5 = '\n      this.groupDataList = [\n        {label: \'邢老师不要脸\', checked: true},\n        {label: \'老师不要脸\'},\n        {label: \'师不要脸\'},\n        {label: \'不要脸\'},\n        {label: \'要脸\', disabled: true},\n        {label: \'脸\'}\n      ];\n    ';
  this.part5Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart5, _prismjs2.default.languages.javascript));

  var codePart6 = '\n      <bp-checkbox-group model="vm.groupDataList" disabled="true"></bp-checkbox-group>\n    ';
  this.part6Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart6, _prismjs2.default.languages.html));

  var codePart7 = '\n      <bp-checkbox-group model="vm.groupDataList" inline="true"></bp-checkbox-group>\n    ';
  this.part7Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart7, _prismjs2.default.languages.html));
};
CheckboxShowController.$inject = ["$timeout", "$sce"];

exports.default = CheckboxShowController;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _template = __webpack_require__(73);

var _template2 = _interopRequireDefault(_template);

var _controller = __webpack_require__(58);

var _controller2 = _interopRequireDefault(_controller);

var _anaheim = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

exports.default = _angular2.default.module('checkboxTest', [_anaheim.Checkbox.name, _anaheim.CheckboxGroup.name]).component('checkboxShow', {
  template: _template2.default,
  controller: _controller2.default,
  controllerAs: 'vm'
});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _template = __webpack_require__(74);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(82);

var _getStarted = __webpack_require__(61);

var _getStarted2 = _interopRequireDefault(_getStarted);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _template2.default,
  controller: _getStarted2.default,
  controllerAs: 'vm'
};

/***/ },
/* 61 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetStartedController = function GetStartedController() {
  _classCallCheck(this, GetStartedController);
};

exports.default = GetStartedController;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _getStarted = __webpack_require__(60);

var _getStarted2 = _interopRequireDefault(_getStarted);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

exports.default = _angular2.default.module('getStarted', []).component('uiGetStarted', _getStarted2.default);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prismjs = __webpack_require__(15);

var _prismjs2 = _interopRequireDefault(_prismjs);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RadioTextController = function RadioTextController($sce) {
  'ngInject';

  _classCallCheck(this, RadioTextController);

  this.player = "仙道";
  this.specialInfo = { name: "宫城良田", age: "22", sex: "男" };

  this.model = "这个杀手不太冷";
  this.groupDataList = [{ label: '沉默的羔羊', value: '沉默的羔羊' }, { label: '这个杀手不太冷', value: '这个杀手不太冷' }, { label: '指环王', value: '指环王', complex: { author: 'xxx', age: 45, sex: '不详' } }, { label: '速度与激情', value: "速度与激情" }, { label: '魔兽世界', value: "魔兽世界", disabled: true }, { label: 'X战警', value: "X战警" }];

  var codePart1 = '\n     <bp-radio model="vm.player" value="樱木花道">樱木花道</bp-radio>\n     <bp-radio model="vm.player" value="流川枫">流川枫</bp-radio>\n     <bp-radio model="vm.player" value="仙道" disabled="true">仙道</bp-radio>\n     <bp-radio model="vm.player" value="宫城良田" >宫城良田</bp-radio>   \n    ';
  this.part1Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart1, _prismjs2.default.languages.html));

  var codePart2 = '\n    <bp-radio model="vm.player" value="樱木花道">樱木花道</bp-radio>\n    <bp-radio model="vm.player" value="流川枫">流川枫</bp-radio>\n    <bp-radio model="vm.player" value="仙道">仙道</bp-radio>\n    <bp-radio model="vm.player" complex="vm.specialInfo" value="宫城良田">宫城良田</bp-radio>\n    ';
  this.part2Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart2, _prismjs2.default.languages.html));

  var codePart3 = '\n      <bp-radio-group list="vm.groupDataList" model="vm.model" inline="true"></bp-radio-group>\n      <p>{{vm.groupDataList}}</p>\n    ';

  var codePart5 = '\n      <bp-radio-group list="vm.groupDataList" model="vm.model"></bp-radio-group>\n      <p>{{vm.groupDataList}}</p>\n    ';
  this.part3Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart3, _prismjs2.default.languages.html));

  var codePart4 = ' \n      this.model = "这个杀手不太冷";\n      this.groupDataList = [\n        {label: \'沉默的羔羊\', value: \'沉默的羔羊\'},\n        {label: \'这个杀手不太冷\',value:\'这个杀手不太冷\'},\n        {label: \'指环王\',value:\'指环王\',complex:{author:\'xxx\',age:45,sex:\'不详\'}},\n        {label: \'速度与激情\',value:"速度与激情"},\n        {label: \'魔兽世界\', value:"魔兽世界",disabled: true},\n        {label: \'X战警\',value:"X战警"}\n      ];\n    ';
  this.part4Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart4, _prismjs2.default.languages.javascript));
  this.part5Html = $sce.trustAsHtml(_prismjs2.default.highlight(codePart5, _prismjs2.default.languages.html));
};
RadioTextController.$inject = ["$sce"];

exports.default = RadioTextController;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = __webpack_require__(4);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _anaheim = __webpack_require__(5);

var _template = __webpack_require__(75);

var _template2 = _interopRequireDefault(_template);

var _controller = __webpack_require__(63);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

exports.default = _angular2.default.module('radioShow', [_anaheim.Radiobox.name, _anaheim.RadioboxGroup.name]).component('radioboxShow', {
  template: _template2.default,
  controller: _controller2.default,
  controllerAs: 'vm'
});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(83);

var _uiTemplate = __webpack_require__(76);

var _uiTemplate2 = _interopRequireDefault(_uiTemplate);

var _ui = __webpack_require__(66);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _uiTemplate2.default,
  controller: _ui2.default,
  controllerAs: 'vm'
};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gsap = __webpack_require__(14);

var _gsap2 = _interopRequireDefault(_gsap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var UIController = function UIController() {
  _classCallCheck(this, UIController);

  var container = document.getElementById('main-container');
  container.style.opacity = 0;
  _gsap2.default.to(container, .5, { opacity: 1, ease: 'easeIn' });
};

exports.default = UIController;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = __webpack_require__(4);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _ui = __webpack_require__(65);

var _ui2 = _interopRequireDefault(_ui);

var _button = __webpack_require__(57);

var _button2 = _interopRequireDefault(_button);

var _checkbox = __webpack_require__(59);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radiobox = __webpack_require__(64);

var _radiobox2 = _interopRequireDefault(_radiobox);

var _getStarted = __webpack_require__(62);

var _getStarted2 = _interopRequireDefault(_getStarted);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

exports.default = _angular2.default.module('ui', [_angularUiRouter2.default, _button2.default.name, _checkbox2.default.name, _radiobox2.default.name, _getStarted2.default.name]).component('ui', _ui2.default).config(["$stateProvider", function ($stateProvider) {
  'ngInject';

  $stateProvider.state('ui.button', {
    url: '/button',
    template: '<button-show></button-show>'
  }).state('ui.checkbox', {
    url: '/checkbox',
    template: '<checkbox-show></checkbox-show>'
  }).state('ui.radiobox', {
    url: '/radiobox',
    template: '<radiobox-show></radiobox-show>'
  }).state('ui.getstarted', {
    url: '/getstarted',
    template: '<ui-get-started></ui-get-started>'
  });
}]);

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = "<div id=\"wrap\" ng-class=\"{'skin-wrap': vm.$state.is('skin'), 'ui-wrap': vm.$state.includes('ui')}\">\n  <div id=\"bg_magic_circle\"></div>\n  <div id=\"main-container\" ui-view></div>\n</div>"

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = "<section id=\"skin_space\" class=\"index-space\">\n  <a href ui-sref=\"skin\">\n    <div class=\"logo\">SKIN</div>\n  </a>\n</section>\n<section id=\"component_space\" class=\"index-space\">\n  <a href ui-sref=\"ui.getstarted\">\n    <div class=\"logo\">COMPONENTS</div>\n  </a>\n</section>"

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = "<nav id=\"nav\">\n  <ul id=\"nav-list\" class=\"list-unstyled clearfix\">\n    <li class=\"nav-item\" ui-sref-active-eq=\"active\">\n      <a href ui-sref=\"skin\">SKIN</a>\n    </li>\n    <li class=\"nav-item\" ui-sref-active-eq=\"active\">\n      <a href ui-sref=\"ui.getstarted\">COMPONENTS</a>\n    </li>\n  </ul>\n  <a id=\"toggle_btn\" href=\"javascript:;\" role=\"button\">\n    <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n  </a>\n  <aside class=\"skin-aside-menu\" ng-if=\"vm.$state.is('skin')\">\n    <ul class=\"list-unstyled\">\n      <li class=\"menu-item\"><a href ui-sref=\"skin.gettingStarted\">Getting started</a></li>\n      <li class=\"menu-item\">\n        <div class=\"title aside-menu-title\">Component list</div>\n        <ul class=\"list-unstyled\">\n          <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('button')\">Button</a></li>\n          <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('form')\">Form</a></li>\n          <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('panel')\">Panel</a></li>\n          <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('table')\">Table</a></li>\n          <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('modal')\">Modal</a></li>\n        </ul>\n      </li>\n    </ul>\n  </aside>\n  <aside class=\"components-aside-menu\" ng-if=\"vm.$state.includes('ui')\">\n    <ul class=\"list-unstyled\">\n      <li class=\"menu-item\"><a href ui-sref=\"ui.getstarted\">Getting started</a></li>\n      <li class=\"menu-item\"><a href=\"/doc/\" target=\"_blank\">Docs</a></li>\n      <li class=\"menu-item\">\n        <div class=\"title aside-menu-title\">\bExample list</div>\n        <ul class=\"list-unstyled\">\n          <li class=\"menu-item\"><a href ui-sref=\"ui.button\">Button</a></li>\n          <li class=\"menu-item\"><a href ui-sref=\"ui.checkbox\">Checkbox</a></li>\n          <li class=\"menu-item\"><a href ui-sref=\"ui.radiobox\">Radiobox</a></li>\n        </ul>\n      </li>\n    </ul>\n  </aside>\n</nav>"

/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = "<fancy-nav></fancy-nav>\n<!--<aside class=\"skin-aside-menu\">\n  <ul class=\"list-unstyled\">\n    <li class=\"menu-item\"><a href ui-sref=\"skin.gettingStarted\">Getting started</a></li>\n    <li class=\"menu-item\">\n      <div class=\"title\">Component list</div>\n      <ul class=\"list-unstyled\">\n        <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('button')\">Button</a></li>\n        <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('form')\">Form</a></li>\n        <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('panel')\">Panel</a></li>\n        <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('table')\">Table</a></li>\n        <li class=\"menu-item\"><a href=\"javascript:;\" ng-click=\"vm.goAnchor('modal')\">Modal</a></li>\n      </ul>\n    </li>\n  </ul>\n</aside>-->\n<section class=\"content-container\">\n  <div>\n    <h3 id=\"button_anchor\">Button</h3>\n    <div class=\"form-group\">\n      <div>基本皮肤:</div>\n      <div>\n        <button type=\"button\" class=\"btn bp-btn-default\">（默认）default</button>\n        <button type=\"button\" class=\"btn bp-btn-primary\">（确定）primary</button>\n        <button type=\"button\" class=\"btn bp-btn-danger\">（删除）danger</button>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div>\bDisable状态:</div>\n      <div>\n        <button type=\"button\" class=\"btn bp-btn-default\" disabled>（默认尺寸）Default button</button>\n        <button type=\"button\" class=\"btn bp-btn-primary\" disabled>（默认尺寸）Default button</button>\n        <button type=\"button\" class=\"btn bp-btn-danger\" disabled>（默认尺寸）Default button</button>       \n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div>\b尺寸:</div>\n      <div>\n        <p>\n          <button type=\"button\" class=\"btn bp-btn-primary btn-xs\">（超小尺寸）Extra small button</button>\n        </p>\n        <p>\n          <button type=\"button\" class=\"btn bp-btn-primary btn-sm\">（小按钮）Small button</button>\n        </p>\n        <p>\n          <button type=\"button\" class=\"btn bp-btn-primary\">（默认尺寸）Default button</button>\n        </p>\n        <p>\n          <button type=\"button\" class=\"btn bp-btn-primary btn-lg\">（大按钮）Large button</button>\n        </p>\n      </div>\n    </div>\n  </div>\n  <div>\n    <h3 id=\"form_anchor\">Form</h3>\n    <div class=\"form-group\">\n      <label class=\"control-label\"><span class=\"required-star\">*</span>龙破斩的咒文:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"请输入\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"control-label\"><span class=\"required-star\">*</span>Dropdown:</label>\n      <ul class=\"dropdown-menu\">\n        <li><a href=\"#\">Action</a></li>\n        <li><a href=\"#\">Another action</a></li>\n        <li><a href=\"#\">Something else here</a></li>\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"control-label\">Select:</label>\n      <select multiple class=\"form-control\">\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n      </select>\n    </div>\n  </div>\n  <div>\n    <h3 id=\"panel_anchor\">Panel</h3>\n    <div class=\"panel bp-panel-primary\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">通常的Panel</div>\n      </div>\n      <div class=\"panel-body\">你能跟上我的节奏么</div>\n      <div class=\"panel-footer\">\n        <button type=\"button\" class=\"btn bp-btn-default\">（默认）default</button>\n        <button type=\"button\" class=\"btn bp-btn-primary\">（确定）primary</button>\n      </div>\n    </div>\n    <div class=\"panel bp-panel-danger\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">我们再来个红色的</div>\n      </div>\n      <div class=\"panel-body\">嘿~在这停顿</div>\n      <div class=\"panel-footer\">\n        <button type=\"button\" class=\"btn bp-btn-default\">（默认）default</button>\n        <button type=\"button\" class=\"btn bp-btn-primary\">（确定）primary</button>\n      </div>\n    </div>\n  </div>\n  <div>\n    <h3 id=\"table_anchor\">表格</h3>\n    <table class=\"table table-condensed table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Address</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>John</td>\n          <td>john@gmail.com</td>\n          <td>London, UK</td>\n        </tr>\n        <tr>\n          <td>Andy</td>\n          <td>andygmail.com</td>\n          <td>Merseyside, UK</td>\n        </tr>\n        <tr>\n          <td>姓名</td>\n          <td>邮箱</td>\n          <td>地址</td>\n        </tr>\n        <tr>\n          <td>John</td>\n          <td>john@gmail.com</td>\n          <td>London, UK</td>\n        </tr>\n        <tr>\n          <td>Andy</td>\n          <td>andygmail.com</td>\n          <td>Merseyside, UK</td>\n        </tr>\n        <tr>\n          <td>Frank</td>\n          <td>frank@gmail.com</td>\n          <td>Southampton, UK</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"panel bp-panel-primary\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">\bPanel + Table</div>\n      </div>\n      <div class=\"panel-body\">\n        <table class=\"table table-condensed table-bordered table-striped table-hover\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Email</th>\n              <th>Address</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>John</td>\n              <td>john@gmail.com</td>\n              <td>London, UK</td>\n            </tr>\n            <tr>\n              <td>Andy</td>\n              <td>andygmail.com</td>\n              <td>Merseyside, UK</td>\n            </tr>\n            <tr>\n              <td>姓名</td>\n              <td>邮箱</td>\n              <td>地址</td>\n            </tr>\n            <tr>\n              <td>John</td>\n              <td>john@gmail.com</td>\n              <td>London, UK</td>\n            </tr>\n            <tr>\n              <td>Andy</td>\n              <td>andygmail.com</td>\n              <td>Merseyside, UK</td>\n            </tr>\n            <tr>\n              <td>Frank</td>\n              <td>frank@gmail.com</td>\n              <td>Southampton, UK</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div>\n    <h3 id=\"modal_anchor\">Modal</h3>\n    <div class=\"modal-dialog\" style=\"margin: 0px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <span class=\"modal-title\">Modal Title</span>\n          <div class=\"modal-close\">X</div>\n        </div>\n        <div class=\"modal-body\">\n          <div> This is a modal body </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn bp-btn-default\">（默认）default</button>\n          <button type=\"button\" class=\"btn bp-btn-primary\">（确定）primary</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-dialog modal-sm\" style=\"margin: 0px; margin-top: 20px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <span class=\"modal-title\">弹窗啊都是弹</span>\n          <div class=\"modal-close\">X</div>\n        </div>\n        <div class=\"modal-body\">\n          <div> This is a modal body </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn bp-btn-primary\">（确定）primary</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = "<h3>Button</h3>\n<section>\n  <p>\n    <bp-button type=\"primary\" disabled=\"vm.tiggleDisabled\">primary</bp-button>\n    <bp-button type=\"primary\" icon=\"ok\">OK</bp-button>\n    <div>\n      <pre>\n        <code class=\"language-html\" ng-bind-html=\"vm.part1Html\"></code>\n      </pre>\n    </div>\n  </p>\n  <p>\n    <bp-button type=\"primary\" size=\"xs\">size xs button</bp-button>\n    <bp-button type=\"primary\" size=\"sm\">size sm button</bp-button>\n    <bp-button type=\"primary\">size default button</bp-button>\n    <bp-button type=\"primary\" size=\"lg\">size lg button</bp-button>\n    <pre>\n        <code class=\"language-html\" ng-bind-html=\"vm.part2Html\"></code>\n    </pre>\n  </p>\n  <p>\n    <bp-button click=\"vm.sayHello(button)\" type=\"primary\" loading=\"true\">loading</bp-button>\n    <bp-button click=\"vm.sayHello(button)\" type=\"primary\" icon=\"ok\" loading=\"true\">loading</bp-button>\n    <pre>\n        <code class=\"language-html\" ng-bind-html=\"vm.part3Html\"></code>\n    </pre>\n  </p>\n</section>\n<section>\n  <h2>属性</h2>\n  <table class=\"table table-condensed table-bordered table-striped table-hover\">\n    <thead>\n      <tr>\n        <th>属性名</th>\n        <th>类型</th>\n        <th>说明</th>\n        <th>可选值</th>\n        <th>默认值</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>type</td>\n        <td>String</td>\n        <td>类型, 会改变按钮的样式</td>\n        <td>primary | default | danger</td>\n        <td>primary</td>\n      </tr>\n      <tr>\n        <td>size</td>\n        <td>String</td>\n        <td>沿用bootstrap 改变大小</td>\n        <td>空 | lg | sm | xs</td>\n        <td>空</td>\n      </tr>\n      <tr>\n        <td>htmlType</td>\n        <td>String</td>\n        <td>正常的html中的type</td>\n        <td>button | submit ...</td>\n        <td>button</td>\n      </tr>\n      <tr>\n        <td>icon</td>\n        <td>String</td>\n        <td>需要展示的<a href=\"/#/icon\">Icon</a></td>\n        <td>详见bootstrap文档</td>\n        <td>空</td>\n      </tr>\n      <tr>\n        <td>loading</td>\n        <td>Boolean</td>\n        <td>\b是否支持loading</td>\n        <td>true | false</td>\n        <td>false</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td>Boolean</td>\n        <td>\b是否禁用</td>\n        <td>true | false</td>\n        <td>false</td>\n      </tr>\n      <tr>\n        <td>click</td>\n        <td>Function</td>\n        <td>\bClick 处理函数</td>\n        <td>Function</td>\n        <td>空</td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n<section>\n  <h2>接口</h2>\n</section>"

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = "<h3>Checkbox</h3>\n<section class=\"example-container\">\n  <bp-checkbox>暴风雪</bp-checkbox>\n  <bp-checkbox checked=\"true\">暴风雪</bp-checkbox>\n  <bp-checkbox disabled=\"true\">暴风雪</bp-checkbox>\n  <bp-checkbox checked=\"true\" disabled=\"true\">暴风雪</bp-checkbox>\n  <bp-checkbox half-checked=\"true\">暴风雪</bp-checkbox>\n  <bp-checkbox half-checked=\"true\" disabled=\"true\">暴风雪</bp-checkbox>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part1Html\"></code>\n    </pre>\n  </div>\n</section>\n<section class=\"example-container\">\n  <bp-checkbox checked=\"vm.checked1\">\b绑定到controller的</bp-checkbox>\n  <p>binding to controller value: {{vm.checked1}}</p>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part2Html\"></code>\n    </pre>\n  </div>\n</section>\n<section class=\"example-container\">\n  <bp-checkbox checked=\"vm.checked2\" true-value=\"1\", false-value=\"2\">\b绑定到controller的</bp-checkbox>\n  <p>true-value and false-value: {{vm.checked2}}</p>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part3Html\"></code>\n    </pre>\n  </div>\n</section>\n<section class=\"example-container\">\n  <bp-checkbox-group model=\"vm.groupDataList\"></bp-checkbox-group>\n  <p>{{vm.groupDataList}}</p>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part4Html\"></code>\n    </pre>\n  </div>\n  <div>\n    <pre>\n      <code class=\"language-javascript\" ng-bind-html=\"vm.part5Html\"></code>\n    </pre>\n  </div>\n</section>\n<section class=\"example-container\">\n  <bp-checkbox-group model=\"vm.groupDataList\" disabled=\"true\"></bp-checkbox-group>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part6Html\"></code>\n    </pre>\n  </div>\n</section>\n<section class=\"example-container\">\n  <bp-checkbox-group model=\"vm.groupDataList\" inline=\"true\"></bp-checkbox-group>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part7Html\"></code>\n    </pre>\n  </div>\n</section>\n<section>\n  <h2>Checkbox属性</h2>\n  <table class=\"table table-condensed table-bordered table-striped table-hover\">\n    <thead>\n      <tr>\n        <th>属性名</th>\n        <th>类型</th>\n        <th>说明</th>\n        <th>可选值</th>\n        <th>默认值</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>disabled</td>\n        <td>Boolean</td>\n        <td>是否禁用状态, 单向绑定</td>\n        <td>true | false</td>\n        <td>false</td>\n      </tr>\n      <tr>\n        <td>\bchecked</td>\n        <td>Boolean</td>\n        <td>是否选中状态, 双向绑定</td>\n        <td>true | false</td>\n        <td>false</td>\n      </tr>\n      <tr>\n        <td>halfChecked</td>\n        <td>Boolean</td>\n        <td>是否\b半选状态, 双向绑定</td>\n        <td>true | false</td>\n        <td>false</td>\n      </tr>\n      <tr>\n        <td>trueValue</td>\n        <td>\bObject</td>\n        <td>ng-true-value的实现</td>\n        <td>代替ture的某个值</td>\n        <td>true</td>\n      </tr>\n      <tr>\n        <td>falseValue</td>\n        <td>\bObject</td>\n        <td>ng-false-value的实现</td>\n        <td>代替false的某个值</td>\n        <td>false</td>\n      </tr>\n    </tbody>\n  </table>\n  <h2>半选说明</h2>\n  <div class=\"doc-container\">\n    半选主要用在列表全选的情况, 全选的时候是checked状态, 选择了某几个但没有全选是半选状态\n  </div>\n</section>\n<section>\n  <h2>Checkbox Group属性</h2>\n  <table class=\"table table-condensed table-bordered table-striped table-hover\">\n    <thead>\n      <tr>\n        <th>属性名</th>\n        <th>类型</th>\n        <th>说明</th>\n        <th>可选值</th>\n        <th>默认值</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>disabled</td>\n        <td>Boolean</td>\n        <td>是否禁用状态, 单向绑定, 禁用整个组</td>\n        <td>true | false</td>\n        <td>false</td>\n      </tr>\n      <tr>\n        <td>model</td>\n        <td><code>Array.&lt;Object&gt;</code></td>\n        <td>\n            <p>数据集, 填充数据中label是必选</p>\n            <p>并支持checkbox的<code>checked, disabled, half-checked</code>属性</p>\n        </td>\n        <td>true | false</td>\n        <td>false</td>\n      </tr>\n      <tr>\n        <td>inline</td>\n        <td>Boolean</td>\n        <td>排版时使用的是ul>li, 此属性是是否改为横向排版</td>\n        <td>true | false</td>\n        <td>false</td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n"

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = "<h3>Get started</h3>"

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = "<section class=\"exmaple-container\">\n  <h3>只支持String类型值<span style=\"font-size: 11px;\">注:vm.player默认值为 \"仙道\" </span></h3>\n  <bp-radiobox model=\"vm.player\" value=\"樱木花道\">樱木花道</bp-radiobox>\n  <bp-radiobox model=\"vm.player\" value=\"流川枫\">流川枫</bp-radiobox>\n  <bp-radiobox model=\"vm.player\" value=\"仙道\" disabled=\"true\">仙道</bp-radiobox>\n  <bp-radiobox model=\"vm.player\" value=\"宫城良田\" >宫城良田</bp-radiobox>\n  <p>binding to controller value: {{vm.player}}</p>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part1Html\"></code>\n    </pre>\n  </div>\n</section>\n\n<section class=\"exmaple-container\">\n  <h3>复杂数据结构支持如Objec,Array,Boolean<span style=\"font-size: 11px;\">注:vm.player默认值为 \"仙道\" </span></h3>\n  <bp-radiobox model=\"vm.player\" value=\"樱木花道\">樱木花道</bp-radiobox>\n  <bp-radiobox model=\"vm.player\" value=\"流川枫\">流川枫</bp-radiobox>\n  <bp-radiobox model=\"vm.player\" value=\"仙道\">仙道</bp-radiobox>\n  <bp-radiobox model=\"vm.player\" complex=\"vm.specialInfo\" value=\"宫城良田\">宫城良田</bp-radiobox>\n  <p>binding to controller value:{{vm.player}}</p>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part2Html\"></code>\n    </pre>\n  </div>\n</section>\n\n<section class=\"example-container\">\n  <h3>Radio组</h3>\n  <h6>横向展示</h6>\n  <bp-radiobox-group list=\"vm.groupDataList\" model=\"vm.model\" inline=true></bp-radiobox-group>\n  <p>binding to controller value:{{vm.model}}</p>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part3Html\"></code>\n    </pre>\n  </div>\n  <div>\n    <pre>\n      <code class=\"language-javascript\" ng-bind-html=\"vm.part4Html\"></code>\n    </pre>\n  </div>\n</section>\n\n\n<section class=\"example-container\">\n  <h6>竖向展示</h6>\n  <bp-radiobox-group list=\"vm.groupDataList\" model=\"vm.model\" ></bp-radiobox-group>\n  <p>binding to controller value:{{vm.model}}</p>\n  <div>\n    <pre>\n      <code class=\"language-html\" ng-bind-html=\"vm.part5Html\"></code>\n    </pre>\n  </div>\n  <div>\n    <pre>\n      <code class=\"language-javascript\" ng-bind-html=\"vm.part4Html\"></code>\n    </pre>\n  </div>\n</section>\n\n<section>\n  <h2>说明</h2>\n  <div class=\"doc-container\">\n    当 value 和 complex 指令同时拥有时,complex指令值会覆盖掉value值\n  </div>\n</section>\n\n<section>\n  <h2>Radio Component说明文档</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n    <tr>\n      <th>指令名</th>\n      <th>类型</th>\n      <th>说明</th>\n      <th>可选值</th>\n      <th>默认值</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>model</td>\n      <td>String,Array,Object,Boolean...</td>\n      <td>model值为value 或者 complex 值</td>\n      <td>Array,Object,Boolean类型值</td>\n      <td>Undefined</td>\n    </tr>\n    <tr>\n      <td>value</td>\n      <td>String,Number</td>\n      <td>当选定后value的值会绑定到ngModel上,只支持String,如果需要自持Array,Object值,请使用complex</td>\n      <td>String类型值</td>\n      <td>Undefined</td>\n    </tr>\n    <tr>\n      <td>complex</td>\n      <td>Array,Object,Boolean</td>\n      <td>当选中后complex值会绑定到ngModel上,如果value指令和complex指令同时被设置值后,complex值会覆盖value值</td>\n      <td>Array,Object,Boolean类型值</td>\n      <td>Undefined</td>\n    </tr>\n    <tr>\n      <td>disabled</td>\n      <td>Boolean</td>\n      <td>是否禁用状态, 单向绑定</td>\n      <td>true | false</td>\n      <td>false</td>\n    </tr>\n    </tbody>\n  </table>\n</section>\n\n<section>\n  <h2>RadioGroup Component说明文档</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n    <tr>\n      <th>指令名</th>\n      <th>类型</th>\n      <th>说明</th>\n      <th>可选值</th>\n      <th>默认值</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>model</td>\n      <td>String,Array,Object,Boolean...</td>\n      <td>model值为value 或者 complex 值</td>\n      <td>Array,Object,Boolean类型值</td>\n      <td>Undefined</td>\n    </tr>\n    <tr>\n      <td>list</td>\n      <td><code>Array.&lt;Object&gt;</code></td>\n      <td>参考数据:<code>[\n        {label: '沉默的羔羊', value: '沉默的羔羊'},\n        {label: '这个杀手不太冷',value:'这个杀手不太冷'},\n        {label: '指环王',value:'指环王',complex:{author:'xxx',age:45,sex:'不详'}},\n        {label: '速度与激情',value:\"速度与激情\"},\n        {label: '魔兽世界', value:\"魔兽世界\",disabled: true},\n        {label: 'X战警',value:\"X战警\"}\n        ];</code></td>\n      <td>Array,Object,Boolean类型值</td>\n      <td>Undefined</td>\n    </tr>\n    <tr>\n      <td>disabled</td>\n      <td>Boolean</td>\n      <td>是否禁用状态, 单向绑定</td>\n      <td>true | false</td>\n      <td>false</td>\n    </tr>\n    <tr>\n      <td>inline</td>\n      <td>Boolean</td>\n      <td>横向展示还是竖向展示</td>\n      <td>true | false</td>\n      <td>false</td>\n    </tr>\n    </tbody>\n  </table>\n</section>\n\n"

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = "<fancy-nav></fancy-nav>\n<section class=\"content-container\" ui-view></section>"

/***/ },
/* 77 */,
/* 78 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(7, function() {
			var newContent = __webpack_require__(7);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(8, function() {
			var newContent = __webpack_require__(8);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(9, function() {
			var newContent = __webpack_require__(9);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(10, function() {
			var newContent = __webpack_require__(10);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(11, function() {
			var newContent = __webpack_require__(11);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(12, function() {
			var newContent = __webpack_require__(12);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }
],[46]);