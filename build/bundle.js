/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InternalTextBanner = function (_Component) {
    _inherits(InternalTextBanner, _Component);

    function InternalTextBanner(props) {
        _classCallCheck(this, InternalTextBanner);

        return _possibleConstructorReturn(this, (InternalTextBanner.__proto__ || Object.getPrototypeOf(InternalTextBanner)).call(this, props));
    }

    _createClass(InternalTextBanner, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'topBanner_textOverlay banner_wrap ' + this.props.wrapperClass },
                _react2.default.createElement(
                    'h1',
                    null,
                    this.props.Heading
                )
            );
        }
    }]);

    return InternalTextBanner;
}(_react.Component);

exports.default = InternalTextBanner;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"siteURL":"http://localhost:3000","axiosInstance_baseURL":"https://api.graphcms.com"}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(19);

var _app2 = _interopRequireDefault(_app);

var _homePage = __webpack_require__(22);

var _homePage2 = _interopRequireDefault(_homePage);

var _contactPage = __webpack_require__(23);

var _contactPage2 = _interopRequireDefault(_contactPage);

var _servicesPage = __webpack_require__(26);

var _servicesPage2 = _interopRequireDefault(_servicesPage);

var _aboutPage = __webpack_require__(27);

var _aboutPage2 = _interopRequireDefault(_aboutPage);

var _postsPage = __webpack_require__(30);

var _postsPage2 = _interopRequireDefault(_postsPage);

var _postPage = __webpack_require__(32);

var _postPage2 = _interopRequireDefault(_postPage);

var _termsAndConditions = __webpack_require__(33);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

var _privacy = __webpack_require__(34);

var _privacy2 = _interopRequireDefault(_privacy);

var _cookiesPolicy = __webpack_require__(35);

var _cookiesPolicy2 = _interopRequireDefault(_cookiesPolicy);

var _notFound404Page = __webpack_require__(36);

var _notFound404Page2 = _interopRequireDefault(_notFound404Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({
    path: '/blog'
}, _app2.default, {
    routes: [_extends({
        path: '/blog/:id'
    }, _postPage2.default), _extends({}, _postsPage2.default)]
}), _extends({
    path: '/Services'
}, _app2.default, {
    routes: [_extends({}, _servicesPage2.default)]
}), _extends({
    path: '/about'
}, _app2.default, {
    routes: [_extends({}, _aboutPage2.default)]
}), _extends({
    path: '/contact'
}, _app2.default, {
    routes: [_extends({}, _contactPage2.default)]
}), _extends({
    path: '/policies/terms'
}, _app2.default, {
    routes: [_extends({}, _termsAndConditions2.default)]
}), _extends({
    path: '/policies/privacy'
}, _app2.default, {
    routes: [_extends({}, _privacy2.default)]
}), _extends({
    path: '/policies/cookies'
}, _app2.default, {
    routes: [_extends({}, _cookiesPolicy2.default)]
}), _extends({
    path: '/',
    exact: true
}, _app2.default, {
    routes: [_extends({}, _homePage2.default)]
}), _extends({
    path: '/'
}, _app2.default, {
    routes: [_extends({}, _notFound404Page2.default)]
})];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderHTML = function (_Component) {
    _inherits(RenderHTML, _Component);

    function RenderHTML(props) {
        _classCallCheck(this, RenderHTML);

        return _possibleConstructorReturn(this, (RenderHTML.__proto__ || Object.getPrototypeOf(RenderHTML)).call(this, props));
    }

    _createClass(RenderHTML, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: '' + this.props.wrapperClass,
                dangerouslySetInnerHTML: { __html: this.props.html } });
        }
    }]);

    return RenderHTML;
}(_react.Component);

exports.default = RenderHTML;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearPostData = exports.fetchPosts = exports.fetchPost = undefined;

var _endpoints = __webpack_require__(31);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchPost = exports.fetchPost = function fetchPost(postID) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var _query;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _query = {
                                query: '{\n            Blog(slug: "' + postID + '"){\n                postTitle\n                post\n                imageURL\n            }\n        }'
                            };
                            _context.next = 3;
                            return api.post(_endpoints.landingPageAPI, _query).then(function (response) {
                                dispatch({
                                    type: 'FETCH_POST',
                                    payload: response.data
                                });
                            }).catch(function (err) {
                                console.log('error', err);
                            });

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var fetchPosts = exports.fetchPosts = function fetchPosts() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var _query;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _query = {
                                query: '{\n            allBlogs {\n                postTitle\n                shortdescription\n                slug\n                imageURL\n              }\n        }'
                            };
                            _context2.next = 3;
                            return api.post(_endpoints.landingPageAPI, _query).then(function (response) {
                                dispatch({
                                    type: 'FETCH_POSTS',
                                    payload: response.data
                                });
                            }).catch(function (err) {
                                console.log('error', err);
                            });

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var clearPostData = exports.clearPostData = function clearPostData() {
    return function (dispatch) {
        dispatch({
            type: 'CLEAR_POST_DATA'
        });
    };
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(8);

var _expressHttpProxy = __webpack_require__(18);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

var _renderer = __webpack_require__(37);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(40);

var _createStore2 = _interopRequireDefault(_createStore);

var _nodemailer = __webpack_require__(45);

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _nodemailerExpressHandlebars = __webpack_require__(46);

var _nodemailerExpressHandlebars2 = _interopRequireDefault(_nodemailerExpressHandlebars);

var _bodyParser = __webpack_require__(47);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express2.default)();

app.use(_express2.default.static('build'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.get(['/*/:param', '*'], function (req, res) {

    var ParamValue = req.params.param ? req.params.param : null;

    var store = (0, _createStore2.default)(req);

    var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store, ParamValue) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        // check if 404
        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

app.post('/sendmail', function (req, response) {

    var mailer = _nodemailer2.default.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });

    mailer.use('compile', (0, _nodemailerExpressHandlebars2.default)({
        viewPath: 'build/assets/email_templates',
        extName: '.hbs'
    }));

    mailer.sendMail({
        from: '',
        to: '',
        subject: 'Contact Form',
        template: 'contactForm',
        context: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            message: req.body.message
        }
    }, function (err, res) {
        if (err) {
            console.log(err);
            response.status(500).send('500 - Internal Server Error');
        }
        response.status(200).send('200 - The request has succeeded.');
    });
});

app.listen(port, function () {
    console.log('Running on Port ' + port);
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(8);

var _header = __webpack_require__(20);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(21);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'default_layout' },
                _react2.default.createElement(_header2.default, null),
                (0, _reactRouterConfig.renderRoutes)(this.props.route.routes),
                _react2.default.createElement(_footer2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

;

exports.default = {
    component: App
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(6);

var _webConfig = __webpack_require__(7);

var _webConfig2 = _interopRequireDefault(_webConfig);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {
            vPos: 0,
            mobileToggle: false
        };
        _this.listenScrollEvent = _this.listenScrollEvent.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'listenScrollEvent',
        value: function listenScrollEvent(event) {
            this.setState({
                vPos: event.target.body.scrollTop
            });
        }
    }, {
        key: 'toggleMobileNav',
        value: function toggleMobileNav() {
            this.setState({
                mobileToggle: !this.state.mobileToggle
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('scroll', this.listenScrollEvent);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('scroll', this.listenScrollEvent);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'header',
                { onScroll: this.listenScrollEvent, className: (0, _classnames2.default)({ 'scrollActive': this.state.vPos > 0, 'mobileNavActive': this.state.mobileToggle }) },
                _react2.default.createElement(
                    'div',
                    { className: 'wrap' },
                    _react2.default.createElement(
                        'div',
                        { className: 'logo_wrap' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/' },
                            _react2.default.createElement('img', { src: _webConfig2.default.siteURL + '/assets/graphics/logo.png', alt: 'Logo', className: 'dark' }),
                            _react2.default.createElement('img', { src: _webConfig2.default.siteURL + '/assets/graphics/logo_white.png', alt: 'Logo', className: 'white' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mobile' },
                        _react2.default.createElement(
                            'span',
                            { className: (0, _classnames2.default)({ 'icon': true, 'mobileNavActive': this.state.mobileToggle }), onClick: this.toggleMobileNav.bind(this) },
                            _react2.default.createElement('span', null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)({ 'nav_wrap': true, 'mobile_active': this.state.mobileToggle }) },
                        _react2.default.createElement(
                            'nav',
                            null,
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    { className: 'first' },
                                    _react2.default.createElement(
                                        _reactRouterDom.NavLink,
                                        { activeClassName: 'active', to: '/blog' },
                                        'Blog'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'first' },
                                    _react2.default.createElement(
                                        _reactRouterDom.NavLink,
                                        { activeClassName: 'active', to: '/services' },
                                        'Services'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.NavLink,
                                        { activeClassName: 'active', to: '/about' },
                                        'About'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'last' },
                                    _react2.default.createElement(
                                        _reactRouterDom.NavLink,
                                        { activeClassName: 'active', to: '/contact' },
                                        'Contact'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

;

exports.default = Header;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {

    return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
            'div',
            { className: 'wrap' },
            _react2.default.createElement(
                'div',
                { className: 'clearFloat' },
                _react2.default.createElement(
                    'div',
                    { className: 'left' },
                    _react2.default.createElement(
                        'div',
                        { className: 'copyright' },
                        '\xA9 2018 React Starter Kit. All Rights Reserved.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'right' },
                    _react2.default.createElement(
                        'div',
                        { className: 'footer_nav' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/policies/terms' },
                                    'Terms and conditions'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/policies/privacy' },
                                    'Privacy policy'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/policies/cookies' },
                                    'Cookies policy'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/contact' },
                                    'Contact'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'social_icons' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://www.facebook.com/SimpleTut', target: '_blank' },
                                    _react2.default.createElement('i', { className: 'fab fa-facebook-f' })
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://github.com/reactjs-starter-kit', target: '_blank' },
                                    _react2.default.createElement('i', { className: 'fab fa-github' })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = Footer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactHelmet = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        { bodyAttributes: { class: "homePage" } },
        _react2.default.createElement(
          'title',
          null,
          'Home Page - React Starter Kit'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'homePage_wrap' },
        this.head(),
        _react2.default.createElement(
          'div',
          { className: 'hero' },
          _react2.default.createElement(
            'div',
            { className: 'content_wrap' },
            _react2.default.createElement(
              'h1',
              null,
              'Your slogan here'
            ),
            _react2.default.createElement(
              'span',
              { className: 'msg' },
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo, alias animi iusto neque, sint corrupti? Laudantium, dignissimos id excepturi facilis, facere saepe quasi placeat praesentium ipsa sapiente illo molestiae?'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/about' },
              _react2.default.createElement(
                'span',
                null,
                'Learn more'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'pageScroll' },
            _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'main' },
          _react2.default.createElement(
            'div',
            { className: 'spotlights' },
            _react2.default.createElement(
              'div',
              { className: 'grid' },
              _react2.default.createElement(
                'div',
                { className: 'column column_4_12' },
                _react2.default.createElement(
                  'div',
                  { className: 'item_wrap' },
                  _react2.default.createElement(
                    'div',
                    { className: 'img' },
                    _react2.default.createElement('img', { src: 'http://via.placeholder.com/300x250' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'column column_4_12' },
                _react2.default.createElement(
                  'div',
                  { className: 'item_wrap' },
                  _react2.default.createElement(
                    'div',
                    { className: 'img' },
                    _react2.default.createElement('img', { src: 'http://via.placeholder.com/300x250' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'column column_4_12' },
                _react2.default.createElement(
                  'div',
                  { className: 'item_wrap' },
                  _react2.default.createElement(
                    'div',
                    { className: 'img' },
                    _react2.default.createElement('img', { src: 'http://via.placeholder.com/300x250' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = {
  component: HomePage
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactHelmet = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(4);

var _reduxForm = __webpack_require__(10);

var _validation = __webpack_require__(24);

var _inputTypes = __webpack_require__(25);

var _reactAddonsCssTransitionGroup = __webpack_require__(2);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _internalTextBanner = __webpack_require__(3);

var _internalTextBanner2 = _interopRequireDefault(_internalTextBanner);

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactPage = function (_Component) {
  _inherits(ContactPage, _Component);

  function ContactPage() {
    _classCallCheck(this, ContactPage);

    return _possibleConstructorReturn(this, (ContactPage.__proto__ || Object.getPrototypeOf(ContactPage)).apply(this, arguments));
  }

  _createClass(ContactPage, [{
    key: 'submit',
    value: function submit(data) {
      console.log(data);

      _axios2.default.post('/sendmail', data).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        { bodyAttributes: { class: "contactPage" } },
        _react2.default.createElement(
          'title',
          null,
          'Contact - React Starter Kit'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var handleSubmit = this.props.handleSubmit;


      return _react2.default.createElement(
        'section',
        { className: 'contactPage_wrap' },
        this.head(),
        _react2.default.createElement(_internalTextBanner2.default, { Heading: 'Contact', wrapperClass: 'contact' }),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
          _react2.default.createElement(
            'div',
            { className: 'main anim-appear' },
            _react2.default.createElement(
              'div',
              { className: 'grid' },
              _react2.default.createElement(
                'div',
                { className: 'column column_12_12' },
                _react2.default.createElement(
                  'div',
                  { className: 'content_block' },
                  _react2.default.createElement(
                    'form',
                    { onSubmit: handleSubmit(this.submit.bind(this)) },
                    _react2.default.createElement(
                      'div',
                      { className: 'form_wrap' },
                      _react2.default.createElement(
                        'div',
                        { className: 'form_row' },
                        _react2.default.createElement(_reduxForm.Field, {
                          name: 'firstName',
                          component: _inputTypes.renderTextField,
                          label: 'First Name:'
                        })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'form_row' },
                        _react2.default.createElement(_reduxForm.Field, {
                          name: 'lastName',
                          component: _inputTypes.renderTextField,
                          label: 'Last Name:'
                        })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'form_row' },
                        _react2.default.createElement(_reduxForm.Field, {
                          name: 'email',
                          component: _inputTypes.renderTextField,
                          label: 'Email:'
                        })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'form_row' },
                        _react2.default.createElement(_reduxForm.Field, {
                          name: 'message',
                          component: _inputTypes.renderTextarea,
                          label: 'Message:'
                        })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'form_buttons' },
                        _react2.default.createElement(
                          'button',
                          { className: 'btn first', type: 'submit' },
                          'Send'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ContactPage;
}(_react.Component);

ContactPage = (0, _reduxForm.reduxForm)({
  form: 'contactForm',
  validate: _validation.validate_contactForm,
  enableReinitialize: true
})(ContactPage);

exports.default = {
  component: ContactPage
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var validate_contactForm = exports.validate_contactForm = function validate_contactForm(values) {

  var errors = {};

  var requiredFields = ['firstName', 'lastName', 'email', 'message'];

  requiredFields.forEach(function (field) {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTextarea = exports.renderTextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Textfield
var renderTextField = function renderTextField(_ref) {
  var label = _ref.label,
      input = _ref.input,
      helperText = _ref.helperText,
      _ref$meta = _ref.meta,
      asyncValidating = _ref$meta.asyncValidating,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = _objectWithoutProperties(_ref, ['label', 'input', 'helperText', 'meta']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)({ 'async_validating': asyncValidating, 'form_item': true, 'invalid': touched && error, 'dirty': touched }) },
    _react2.default.createElement(
      'div',
      { className: 'form_label' },
      _react2.default.createElement(
        'label',
        null,
        label
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'form_input' },
      _react2.default.createElement('input', _extends({}, input, custom)),
      _react2.default.createElement('span', { className: 'bottom_border' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'invalid_msg' },
      error
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)({ 'helperText': true, 'active': helperText }) },
      _react2.default.createElement(
        'span',
        null,
        helperText
      )
    )
  );
};

// Textarea
exports.renderTextField = renderTextField;
var renderTextarea = function renderTextarea(_ref2) {
  var label = _ref2.label,
      input = _ref2.input,
      helperText = _ref2.helperText,
      _ref2$meta = _ref2.meta,
      asyncValidating = _ref2$meta.asyncValidating,
      touched = _ref2$meta.touched,
      error = _ref2$meta.error,
      custom = _objectWithoutProperties(_ref2, ['label', 'input', 'helperText', 'meta']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)({ 'async_validating': asyncValidating, 'form_item': true, 'invalid': touched && error, 'dirty': touched }) },
    _react2.default.createElement(
      'div',
      { className: 'form_label' },
      _react2.default.createElement(
        'label',
        null,
        label
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'form_textarea' },
      _react2.default.createElement('textarea', _extends({}, input, custom)),
      _react2.default.createElement('span', { className: 'bottom_border' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'invalid_msg' },
      error
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)({ 'helperText': true, 'active': helperText }) },
      _react2.default.createElement(
        'span',
        null,
        helperText
      )
    )
  );
};
exports.renderTextarea = renderTextarea;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(2);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _internalTextBanner = __webpack_require__(3);

var _internalTextBanner2 = _interopRequireDefault(_internalTextBanner);

var _reactHelmet = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Services = function (_Component) {
    _inherits(Services, _Component);

    function Services() {
        _classCallCheck(this, Services);

        return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).apply(this, arguments));
    }

    _createClass(Services, [{
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                { bodyAttributes: { class: "servicesPage" } },
                _react2.default.createElement(
                    'title',
                    null,
                    'Services - React Starter Kit'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                _react2.default.createElement(_internalTextBanner2.default, { Heading: 'Services', wrapperClass: 'services' }),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                    _react2.default.createElement(
                        'div',
                        { className: 'main anim-appear' },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'column column_12_12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'services_grid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'icon' },
                                            _react2.default.createElement('i', { className: 'fab fa-connectdevelop' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                'Global coverage'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'desc' },
                                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'icon' },
                                            _react2.default.createElement('i', { className: 'fab fa-connectdevelop' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                'Global coverage'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'desc' },
                                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'icon' },
                                            _react2.default.createElement('i', { className: 'fab fa-connectdevelop' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                'Global coverage'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'desc' },
                                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'icon' },
                                            _react2.default.createElement('i', { className: 'fab fa-connectdevelop' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                'Global coverage'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'desc' },
                                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'icon' },
                                            _react2.default.createElement('i', { className: 'fab fa-connectdevelop' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                'Global coverage'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'desc' },
                                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'icon' },
                                            _react2.default.createElement('i', { className: 'fab fa-connectdevelop' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                'Global coverage'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'desc' },
                                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Services;
}(_react.Component);

;

exports.default = {
    component: Services
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(2);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _internalTextBanner = __webpack_require__(3);

var _internalTextBanner2 = _interopRequireDefault(_internalTextBanner);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _meetTheTeam = __webpack_require__(28);

var _meetTheTeam2 = _interopRequireDefault(_meetTheTeam);

var _reactHelmet = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
    _inherits(About, _Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                { bodyAttributes: { class: "aboutPage" } },
                _react2.default.createElement(
                    'title',
                    null,
                    'About - React Starter Kit'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                _react2.default.createElement(_internalTextBanner2.default, { Heading: 'About', wrapperClass: 'about' }),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                    _react2.default.createElement(
                        'div',
                        { className: 'main anim-appear' },
                        _react2.default.createElement(
                            'div',
                            { className: 'aboutPage_wrapper' },
                            _react2.default.createElement(
                                'div',
                                { className: 'grid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'column column_12_12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'content_block' },
                                        _react2.default.createElement(
                                            'h2',
                                            null,
                                            'The company'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis dignissim ultrices. Suspendisse ut sollicitudin nisi. Fusce efficitur nec nunc nec bibendum. Praesent laoreet tortor quis velit facilisis faucibus. Maecenas sollicitudin lectus diam, non vehicula arcu ullamcorper ac. In pharetra, est vitae interdum tincidunt, urna ligula rutrum tellus, sit amet pharetra purus magna eu enim. Sed iaculis imperdiet nisi, et pulvinar mauris gravida maximus. Phasellus vitae lorem at sem mattis volutpat. In eget dictum dui. Quisque nec sapien at massa mattis semper. Ut ac malesuada turpis. Fusce eu nulla vehicula, tincidunt dui ultrices, fermentum felis. Aliquam lectus nisi, feugiat ut aliquet sed, posuere sed libero.'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Pellentesque consectetur massa nec nulla fermentum, at tincidunt elit volutpat. Duis vulputate placerat tortor, sit amet eleifend mauris tincidunt sit amet. Aliquam a maximus ligula. Phasellus nec sapien sed tellus tempor eleifend id a erat. Donec convallis bibendum posuere. Quisque mollis imperdiet malesuada. Suspendisse eget dictum massa.'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Phasellus ac posuere nibh, in finibus nulla. In diam arcu, luctus sit amet condimentum sit amet, tristique et leo. Sed tincidunt justo a porttitor tristique. Nulla eu metus tincidunt, ornare magna ullamcorper, semper lacus. Quisque vitae porttitor odio, id tincidunt tellus. Fusce a suscipit eros. Proin sit amet risus fermentum, lobortis quam sed, consequat velit. Quisque sit amet ultricies lorem. Phasellus scelerisque ipsum eget ipsum posuere suscipit. Proin id molestie mauris, a venenatis ipsum. Quisque efficitur, nibh a dapibus mollis, metus tortor fermentum ante, non pellentesque mi magna non leo. Integer quis sem hendrerit, euismod dolor id, dapibus nulla. Maecenas non ultrices lorem. Pellentesque lobortis, diam eget feugiat lacinia, ante augue ullamcorper tortor, vel ornare sapien lacus pharetra quam.'
                                        )
                                    ),
                                    _react2.default.createElement(_meetTheTeam2.default, null)
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return About;
}(_react.Component);

;

exports.default = {
    component: About
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(29);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _webConfig = __webpack_require__(7);

var _webConfig2 = _interopRequireDefault(_webConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeetTheTeamSlider = function (_Component) {
    _inherits(MeetTheTeamSlider, _Component);

    function MeetTheTeamSlider(props) {
        _classCallCheck(this, MeetTheTeamSlider);

        var _this = _possibleConstructorReturn(this, (MeetTheTeamSlider.__proto__ || Object.getPrototypeOf(MeetTheTeamSlider)).call(this, props));

        _this.state = {
            meetTheTeam_loaded: false
        };
        return _this;
    }

    _createClass(MeetTheTeamSlider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ meetTheTeam_loaded: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                fade: false,
                responsive: [{
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            };

            return _react2.default.createElement(
                'div',
                { className: 'meetTheTeam' },
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)({ 'banner_scroller': true, 'loaded': this.state.meetTheTeam_loaded }) },
                    _react2.default.createElement(
                        _reactSlick2.default,
                        settings,
                        _react2.default.createElement(
                            'div',
                            { className: 'item' },
                            _react2.default.createElement(
                                'div',
                                { className: 'profilePic' },
                                _react2.default.createElement('img', { src: _webConfig2.default.siteURL + '/assets/graphics/meetTheTeam/profilePic.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'name' },
                                    'Jane Doe'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'jobRole' },
                                    'General manager'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'item' },
                            _react2.default.createElement(
                                'div',
                                { className: 'profilePic' },
                                _react2.default.createElement('img', { src: _webConfig2.default.siteURL + '/assets/graphics/meetTheTeam/profilePic.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'name' },
                                    'Jane Doe'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'jobRole' },
                                    'General manager'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'item' },
                            _react2.default.createElement(
                                'div',
                                { className: 'profilePic' },
                                _react2.default.createElement('img', { src: _webConfig2.default.siteURL + '/assets/graphics/meetTheTeam/profilePic.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'name' },
                                    'Jane Doe'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'jobRole' },
                                    'General manager'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'item' },
                            _react2.default.createElement(
                                'div',
                                { className: 'profilePic' },
                                _react2.default.createElement('img', { src: _webConfig2.default.siteURL + '/assets/graphics/meetTheTeam/profilePic.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'name' },
                                    'Jane Doe'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'jobRole' },
                                    'General manager'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'item' },
                            _react2.default.createElement(
                                'div',
                                { className: 'profilePic' },
                                _react2.default.createElement('img', { src: _webConfig2.default.siteURL + '/assets/graphics/meetTheTeam/profilePic.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'name' },
                                    'Jane Doe'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'jobRole' },
                                    'General manager'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MeetTheTeamSlider;
}(_react.Component);

exports.default = MeetTheTeamSlider;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reactAddonsCssTransitionGroup = __webpack_require__(2);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _internalTextBanner = __webpack_require__(3);

var _internalTextBanner2 = _interopRequireDefault(_internalTextBanner);

var _renderHTML = __webpack_require__(12);

var _renderHTML2 = _interopRequireDefault(_renderHTML);

var _actions = __webpack_require__(13);

var _reactHelmet = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
    _inherits(Posts, _Component);

    function Posts() {
        _classCallCheck(this, Posts);

        return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).apply(this, arguments));
    }

    _createClass(Posts, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchPosts();
        }
    }, {
        key: 'renderPosts',
        value: function renderPosts() {
            if (this.props.pageData != false) {
                return this.props.pageData.map(function (post, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: index, className: 'post' },
                        _react2.default.createElement(
                            'div',
                            { className: 'wrap' },
                            _react2.default.createElement(
                                'div',
                                { className: 'img' },
                                _react2.default.createElement('img', { src: post.imageURL })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'headline' },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/blog/' + post.slug },
                                        post.postTitle
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'short_desc' },
                                    _react2.default.createElement(_renderHTML2.default, { wrapperClass: 'user_content', html: post.shortdescription })
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { className: 'readMore', to: '/blog/' + post.slug },
                                    'Read more'
                                )
                            )
                        )
                    );
                });
            }
        }
    }, {
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                { bodyAttributes: { class: "postsPage" } },
                _react2.default.createElement(
                    'title',
                    null,
                    'Posts - React Starter Kit'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {

            if (!this.props.pageData == false) {
                return _react2.default.createElement(
                    'div',
                    null,
                    this.head(),
                    _react2.default.createElement(_internalTextBanner2.default, { Heading: 'Posts', wrapperClass: 'posts' }),
                    _react2.default.createElement(
                        _reactAddonsCssTransitionGroup2.default,
                        { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                        _react2.default.createElement(
                            'div',
                            { className: 'main anim-appear' },
                            _react2.default.createElement(
                                'div',
                                { className: 'grid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'column column_12_12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'posts' },
                                        this.renderPosts()
                                    )
                                )
                            )
                        )
                    )
                );
            }

            if (this.props.pageData == null) {
                return _react2.default.createElement(
                    'div',
                    null,
                    this.head(),
                    _react2.default.createElement(_internalTextBanner2.default, { Heading: '', wrapperClass: 'posts' }),
                    _react2.default.createElement(
                        _reactAddonsCssTransitionGroup2.default,
                        { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                        _react2.default.createElement(
                            'div',
                            { className: 'main anim-appear' },
                            _react2.default.createElement(
                                'div',
                                { className: 'grid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'column column_8_12' },
                                    _react2.default.createElement('div', { className: 'posts' })
                                ),
                                _react2.default.createElement('div', { className: 'column column_4_12' })
                            )
                        )
                    )
                );
            }

            if (this.props.pageData == false) {
                return _react2.default.createElement(
                    'div',
                    null,
                    this.head(),
                    _react2.default.createElement(_internalTextBanner2.default, { Heading: '404 Not found', wrapperClass: 'posts' }),
                    _react2.default.createElement(
                        _reactAddonsCssTransitionGroup2.default,
                        { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                        _react2.default.createElement(
                            'div',
                            { className: 'main anim-appear' },
                            _react2.default.createElement(
                                'div',
                                { className: 'grid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'column column_8_12' },
                                    _react2.default.createElement('div', { className: 'posts' })
                                ),
                                _react2.default.createElement('div', { className: 'column column_4_12' })
                            )
                        )
                    )
                );
            }
        }
    }]);

    return Posts;
}(_react.Component);

function mapStateToProps(state) {
    return {
        pageData: state.posts.arr
    };
};

function loadData(store) {
    return store.dispatch((0, _actions.fetchPosts)());
}
//export default Posts;
exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _actions.fetchPosts })(Posts)
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var landingPageAPI = exports.landingPageAPI = '/simple/v1/cjhm2fr577kni01706tr0xvst';

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reactAddonsCssTransitionGroup = __webpack_require__(2);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _actions = __webpack_require__(13);

var _reactHelmet = __webpack_require__(1);

var _internalTextBanner = __webpack_require__(3);

var _internalTextBanner2 = _interopRequireDefault(_internalTextBanner);

var _renderHTML = __webpack_require__(12);

var _renderHTML2 = _interopRequireDefault(_renderHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_Component) {
    _inherits(Post, _Component);

    function Post() {
        _classCallCheck(this, Post);

        return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
    }

    _createClass(Post, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.props);
            this.props.fetchPost(this.props.match.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.clearPostData();
        }
    }, {
        key: 'render',
        value: function render() {

            if (!this.props.postData == false) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactHelmet.Helmet,
                        { bodyAttributes: { class: "postPage" } },
                        _react2.default.createElement(
                            'title',
                            null,
                            this.props.postData.postTitle + ' - React Starter Kit'
                        )
                    ),
                    _react2.default.createElement(_internalTextBanner2.default, { Heading: this.props.postData.postTitle, wrapperClass: 'post' }),
                    _react2.default.createElement(
                        _reactAddonsCssTransitionGroup2.default,
                        { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                        _react2.default.createElement(
                            'div',
                            { className: 'main anim-appear' },
                            _react2.default.createElement(
                                'div',
                                { className: 'grid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'column column_12_12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'post' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'post_banner' },
                                            _react2.default.createElement('img', { src: this.props.postData.imageURL })
                                        ),
                                        _react2.default.createElement(_renderHTML2.default, { wrapperClass: 'user_content', html: this.props.postData.post })
                                    )
                                )
                            )
                        )
                    )
                );
            }

            if (this.props.postData == null) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactHelmet.Helmet,
                        { bodyAttributes: { class: "postPage" } },
                        _react2.default.createElement(
                            'title',
                            null,
                            'React Starter Kit'
                        )
                    ),
                    _react2.default.createElement(_internalTextBanner2.default, { Heading: '', wrapperClass: 'post' }),
                    _react2.default.createElement(
                        _reactAddonsCssTransitionGroup2.default,
                        { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                        _react2.default.createElement(
                            'div',
                            { className: 'main anim-appear' },
                            _react2.default.createElement(
                                'div',
                                { className: 'grid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'column column_12_12' },
                                    _react2.default.createElement('div', { className: 'post' })
                                )
                            )
                        )
                    )
                );
            }

            if (this.props.postData == false) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactHelmet.Helmet,
                        { bodyAttributes: { class: "postPage" } },
                        _react2.default.createElement(
                            'title',
                            null,
                            '404 not found - React Starter Kit'
                        )
                    ),
                    _react2.default.createElement(_internalTextBanner2.default, { Heading: '404 not found', wrapperClass: 'post' }),
                    _react2.default.createElement(
                        _reactAddonsCssTransitionGroup2.default,
                        { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                        _react2.default.createElement(
                            'div',
                            { className: 'main anim-appear' },
                            _react2.default.createElement(
                                'div',
                                { className: 'grid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'column column_12_12' },
                                    _react2.default.createElement('div', { className: 'post' })
                                )
                            )
                        )
                    )
                );
            }
        }
    }]);

    return Post;
}(_react.Component);

function mapStateToProps(state) {
    return {
        postData: state.post
    };
};

function loadData(store, landingPageID) {
    return store.dispatch((0, _actions.fetchPost)(landingPageID));
}

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchPost: _actions.fetchPost, clearPostData: _actions.clearPostData })(Post)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(2);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _internalTextBanner = __webpack_require__(3);

var _internalTextBanner2 = _interopRequireDefault(_internalTextBanner);

var _reactHelmet = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TermsAndConditions = function (_Component) {
    _inherits(TermsAndConditions, _Component);

    function TermsAndConditions() {
        _classCallCheck(this, TermsAndConditions);

        return _possibleConstructorReturn(this, (TermsAndConditions.__proto__ || Object.getPrototypeOf(TermsAndConditions)).apply(this, arguments));
    }

    _createClass(TermsAndConditions, [{
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                { bodyAttributes: { class: "termsAndConditionsPage" } },
                _react2.default.createElement(
                    'title',
                    null,
                    'Terms and conditions - React Starter Kit'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                _react2.default.createElement(_internalTextBanner2.default, { Heading: 'Terms and conditions', wrapperClass: 'termsAndConditions_banner' }),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                    _react2.default.createElement(
                        'div',
                        { className: 'main anim-appear' },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'column column_12_12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'content_block' },
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Terms and Conditions of Use'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis dignissim ultrices. Suspendisse ut sollicitudin nisi. Fusce efficitur nec nunc nec bibendum. Praesent laoreet tortor quis velit facilisis faucibus. Maecenas sollicitudin lectus diam, non vehicula arcu ullamcorper ac. In pharetra, est vitae interdum tincidunt, urna ligula rutrum tellus, sit amet pharetra purus magna eu enim. Sed iaculis imperdiet nisi, et pulvinar mauris gravida maximus. Phasellus vitae lorem at sem mattis volutpat. In eget dictum dui. Quisque nec sapien at massa mattis semper. Ut ac malesuada turpis. Fusce eu nulla vehicula, tincidunt dui ultrices, fermentum felis. Aliquam lectus nisi, feugiat ut aliquet sed, posuere sed libero.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Pellentesque consectetur massa nec nulla fermentum, at tincidunt elit volutpat. Duis vulputate placerat tortor, sit amet eleifend mauris tincidunt sit amet. Aliquam a maximus ligula. Phasellus nec sapien sed tellus tempor eleifend id a erat. Donec convallis bibendum posuere. Quisque mollis imperdiet malesuada. Suspendisse eget dictum massa.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Phasellus ac posuere nibh, in finibus nulla. In diam arcu, luctus sit amet condimentum sit amet, tristique et leo. Sed tincidunt justo a porttitor tristique. Nulla eu metus tincidunt, ornare magna ullamcorper, semper lacus. Quisque vitae porttitor odio, id tincidunt tellus. Fusce a suscipit eros. Proin sit amet risus fermentum, lobortis quam sed, consequat velit. Quisque sit amet ultricies lorem. Phasellus scelerisque ipsum eget ipsum posuere suscipit. Proin id molestie mauris, a venenatis ipsum. Quisque efficitur, nibh a dapibus mollis, metus tortor fermentum ante, non pellentesque mi magna non leo. Integer quis sem hendrerit, euismod dolor id, dapibus nulla. Maecenas non ultrices lorem. Pellentesque lobortis, diam eget feugiat lacinia, ante augue ullamcorper tortor, vel ornare sapien lacus pharetra quam.'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TermsAndConditions;
}(_react.Component);

exports.default = {
    component: TermsAndConditions
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(2);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _internalTextBanner = __webpack_require__(3);

var _internalTextBanner2 = _interopRequireDefault(_internalTextBanner);

var _reactHelmet = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Privacy = function (_Component) {
    _inherits(Privacy, _Component);

    function Privacy() {
        _classCallCheck(this, Privacy);

        return _possibleConstructorReturn(this, (Privacy.__proto__ || Object.getPrototypeOf(Privacy)).apply(this, arguments));
    }

    _createClass(Privacy, [{
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                { bodyAttributes: { class: "privacyPolicyPage" } },
                _react2.default.createElement(
                    'title',
                    null,
                    'Privacy policy - React Starter Kit'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                _react2.default.createElement(_internalTextBanner2.default, { Heading: 'Privacy policy', wrapperClass: 'privacyPolicy_banner' }),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                    _react2.default.createElement(
                        'div',
                        { className: 'main anim-appear' },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'column column_12_12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'content_block' },
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Privacy policy notice'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis dignissim ultrices. Suspendisse ut sollicitudin nisi. Fusce efficitur nec nunc nec bibendum. Praesent laoreet tortor quis velit facilisis faucibus. Maecenas sollicitudin lectus diam, non vehicula arcu ullamcorper ac. In pharetra, est vitae interdum tincidunt, urna ligula rutrum tellus, sit amet pharetra purus magna eu enim. Sed iaculis imperdiet nisi, et pulvinar mauris gravida maximus. Phasellus vitae lorem at sem mattis volutpat. In eget dictum dui. Quisque nec sapien at massa mattis semper. Ut ac malesuada turpis. Fusce eu nulla vehicula, tincidunt dui ultrices, fermentum felis. Aliquam lectus nisi, feugiat ut aliquet sed, posuere sed libero.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Pellentesque consectetur massa nec nulla fermentum, at tincidunt elit volutpat. Duis vulputate placerat tortor, sit amet eleifend mauris tincidunt sit amet. Aliquam a maximus ligula. Phasellus nec sapien sed tellus tempor eleifend id a erat. Donec convallis bibendum posuere. Quisque mollis imperdiet malesuada. Suspendisse eget dictum massa.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Phasellus ac posuere nibh, in finibus nulla. In diam arcu, luctus sit amet condimentum sit amet, tristique et leo. Sed tincidunt justo a porttitor tristique. Nulla eu metus tincidunt, ornare magna ullamcorper, semper lacus. Quisque vitae porttitor odio, id tincidunt tellus. Fusce a suscipit eros. Proin sit amet risus fermentum, lobortis quam sed, consequat velit. Quisque sit amet ultricies lorem. Phasellus scelerisque ipsum eget ipsum posuere suscipit. Proin id molestie mauris, a venenatis ipsum. Quisque efficitur, nibh a dapibus mollis, metus tortor fermentum ante, non pellentesque mi magna non leo. Integer quis sem hendrerit, euismod dolor id, dapibus nulla. Maecenas non ultrices lorem. Pellentesque lobortis, diam eget feugiat lacinia, ante augue ullamcorper tortor, vel ornare sapien lacus pharetra quam.'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Privacy;
}(_react.Component);

exports.default = {
    component: Privacy
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(2);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _internalTextBanner = __webpack_require__(3);

var _internalTextBanner2 = _interopRequireDefault(_internalTextBanner);

var _reactHelmet = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CookiesPolicy = function (_Component) {
    _inherits(CookiesPolicy, _Component);

    function CookiesPolicy() {
        _classCallCheck(this, CookiesPolicy);

        return _possibleConstructorReturn(this, (CookiesPolicy.__proto__ || Object.getPrototypeOf(CookiesPolicy)).apply(this, arguments));
    }

    _createClass(CookiesPolicy, [{
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                { bodyAttributes: { class: "cookiesPolicyPage" } },
                _react2.default.createElement(
                    'title',
                    null,
                    'Cookies policy - React Starter Kit'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                _react2.default.createElement(_internalTextBanner2.default, { Heading: 'Cookies Policy', wrapperClass: 'cookiesPolicy_banner' }),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                    _react2.default.createElement(
                        'div',
                        { className: 'main anim-appear' },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'column column_12_12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'content_block' },
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Cookies policy notice'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis dignissim ultrices. Suspendisse ut sollicitudin nisi. Fusce efficitur nec nunc nec bibendum. Praesent laoreet tortor quis velit facilisis faucibus. Maecenas sollicitudin lectus diam, non vehicula arcu ullamcorper ac. In pharetra, est vitae interdum tincidunt, urna ligula rutrum tellus, sit amet pharetra purus magna eu enim. Sed iaculis imperdiet nisi, et pulvinar mauris gravida maximus. Phasellus vitae lorem at sem mattis volutpat. In eget dictum dui. Quisque nec sapien at massa mattis semper. Ut ac malesuada turpis. Fusce eu nulla vehicula, tincidunt dui ultrices, fermentum felis. Aliquam lectus nisi, feugiat ut aliquet sed, posuere sed libero.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Pellentesque consectetur massa nec nulla fermentum, at tincidunt elit volutpat. Duis vulputate placerat tortor, sit amet eleifend mauris tincidunt sit amet. Aliquam a maximus ligula. Phasellus nec sapien sed tellus tempor eleifend id a erat. Donec convallis bibendum posuere. Quisque mollis imperdiet malesuada. Suspendisse eget dictum massa.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Phasellus ac posuere nibh, in finibus nulla. In diam arcu, luctus sit amet condimentum sit amet, tristique et leo. Sed tincidunt justo a porttitor tristique. Nulla eu metus tincidunt, ornare magna ullamcorper, semper lacus. Quisque vitae porttitor odio, id tincidunt tellus. Fusce a suscipit eros. Proin sit amet risus fermentum, lobortis quam sed, consequat velit. Quisque sit amet ultricies lorem. Phasellus scelerisque ipsum eget ipsum posuere suscipit. Proin id molestie mauris, a venenatis ipsum. Quisque efficitur, nibh a dapibus mollis, metus tortor fermentum ante, non pellentesque mi magna non leo. Integer quis sem hendrerit, euismod dolor id, dapibus nulla. Maecenas non ultrices lorem. Pellentesque lobortis, diam eget feugiat lacinia, ante augue ullamcorper tortor, vel ornare sapien lacus pharetra quam.'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CookiesPolicy;
}(_react.Component);

exports.default = {
    component: CookiesPolicy
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(2);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _internalTextBanner = __webpack_require__(3);

var _internalTextBanner2 = _interopRequireDefault(_internalTextBanner);

var _reactHelmet = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundPage = function (_Component) {
    _inherits(NotFoundPage, _Component);

    function NotFoundPage() {
        _classCallCheck(this, NotFoundPage);

        return _possibleConstructorReturn(this, (NotFoundPage.__proto__ || Object.getPrototypeOf(NotFoundPage)).apply(this, arguments));
    }

    _createClass(NotFoundPage, [{
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                { bodyAttributes: { class: "notFound" } },
                _react2.default.createElement(
                    'title',
                    null,
                    '404 not found - React Starter Kit'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                _react2.default.createElement(_internalTextBanner2.default, { Heading: '404 Not Found', wrapperClass: 'posts' }),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    { transitionName: 'anim', transitionAppear: true, transitionAppearTimeout: 5000, transitionEnter: false, transitionLeave: false },
                    _react2.default.createElement(
                        'div',
                        { className: 'main anim-appear' },
                        _react2.default.createElement(
                            'div',
                            { className: 'grid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'column column_12_12' },
                                _react2.default.createElement('div', { className: 'posts' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NotFoundPage;
}(_react.Component);

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(38);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(8);

var _serializeJavascript = __webpack_require__(39);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(1);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

var _webConfig = __webpack_require__(7);

var _webConfig2 = _interopRequireDefault(_webConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: context },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_routes2.default)
            )
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();

    return '<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        ' + helmet.meta.toString() + '\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        ' + helmet.title.toString() + '\n        <link rel="shortcut icon" href="' + _webConfig2.default.siteURL + '/assets/graphics/favicon.ico">\n        <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">\n        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />\n        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">\n        <link href="' + _webConfig2.default.siteURL + '/assets/css/styles.min.css" rel="stylesheet" type="text/css" />\n    </head>\n    <body ' + helmet.bodyAttributes.toString() + '>\n        <div id="root">' + content + '</div>\n        <script>\n            window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="' + _webConfig2.default.siteURL + '/client_bundle.js"></script>\n    </body>\n</html>';
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(14);

var _reduxThunk = __webpack_require__(41);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(42);

var _reducers2 = _interopRequireDefault(_reducers);

var _webConfig = __webpack_require__(7);

var _webConfig2 = _interopRequireDefault(_webConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {

    var axiosInstance = _axios2.default.create({
        baseURL: _webConfig2.default.axiosInstance_baseURL,
        headers: {
            cookie: req.get('cookie') || ''
        }
    });

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
    return store;
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(14);

var _reduxForm = __webpack_require__(10);

var _postsReducer = __webpack_require__(43);

var _postsReducer2 = _interopRequireDefault(_postsReducer);

var _postReducer = __webpack_require__(44);

var _postReducer2 = _interopRequireDefault(_postReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    form: _reduxForm.reducer,
    posts: _postsReducer2.default,
    post: _postReducer2.default
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        posts: null
    };
    var action = arguments[1];

    switch (action.type) {
        case 'FETCH_POSTS':
            return _extends({}, state, { arr: action.payload.data.allBlogs || false });
        default:
            return state;
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'FETCH_POST':
            return action.payload.data.Blog || false;
        case 'CLEAR_POST_DATA':
            return null;
        default:
            return state;
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("nodemailer-express-handlebars");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ })
/******/ ]);