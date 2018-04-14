module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "FWi5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./style.css
var style = __webpack_require__("FWi5");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./components/FullpageImage.jsx


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _ref = Object(preact_min["h"])(
  'div',
  { className: 'fullpageImage', id: 'top' },
  Object(preact_min["h"])(
    'div',
    { className: 'container container-fluid' },
    Object(preact_min["h"])(
      'div',
      { className: 'row align-items-end justify-content-center', style: 'height: 100vh;' },
      Object(preact_min["h"])(
        'div',
        { className: 'col-12 text-left' },
        Object(preact_min["h"])(
          'h4',
          { className: 'page-title' },
          Object(preact_min["h"])(
            'em',
            null,
            'Hey, I\'m'
          )
        ),
        Object(preact_min["h"])(
          'h2',
          { className: 'display-3 page-title' },
          'BROOKS TOWNSEND'
        )
      )
    )
  )
);

var FullpageImage = function (_Component) {
  _inherits(FullpageImage, _Component);

  function FullpageImage() {
    _classCallCheck(this, FullpageImage);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  FullpageImage.prototype.render = function render() {
    return _ref;
  };

  return FullpageImage;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./components/Sidebar.jsx


function Sidebar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sidebar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Sidebar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Sidebar__ref = Object(preact_min["h"])(
  'div',
  { className: 'col-md-2 sidebar' },
  Object(preact_min["h"])(
    'ul',
    { 'class': 'navbar-nav ml-auto' },
    Object(preact_min["h"])(
      'li',
      { 'class': 'nav-item mx-0 mx-lg-1' },
      Object(preact_min["h"])(
        'a',
        { 'class': 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger', href: '#' },
        'Home'
      )
    ),
    Object(preact_min["h"])(
      'li',
      { 'class': 'nav-item mx-0 mx-lg-1' },
      Object(preact_min["h"])(
        'a',
        { 'class': 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger', href: '#about-me' },
        'About Me'
      )
    ),
    Object(preact_min["h"])(
      'li',
      { 'class': 'nav-item mx-0 mx-lg-1' },
      Object(preact_min["h"])(
        'a',
        { 'class': 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger', href: '#experience' },
        'My Experience'
      )
    ),
    Object(preact_min["h"])(
      'li',
      { 'class': 'nav-item mx-0 mx-lg-1' },
      Object(preact_min["h"])(
        'a',
        { 'class': 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger', href: '#projects' },
        'Projects'
      )
    )
  )
);

var Sidebar = function (_Component) {
  Sidebar__inherits(Sidebar, _Component);

  function Sidebar() {
    Sidebar__classCallCheck(this, Sidebar);

    return Sidebar__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Sidebar.prototype.render = function render() {
    return Sidebar__ref;
  };

  return Sidebar;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./components/AboutMe.jsx


function AboutMe__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AboutMe__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function AboutMe__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AboutMe__ref = Object(preact_min["h"])(
  'div',
  { className: 'col-md-10 content' },
  Object(preact_min["h"])(
    'div',
    { className: 'jumbotron jumbotron-fluid' },
    Object(preact_min["h"])(
      'div',
      { className: 'container' },
      Object(preact_min["h"])(
        'h1',
        { className: 'display-4', id: 'about-me' },
        'About me'
      ),
      Object(preact_min["h"])(
        'p',
        { className: 'lead' },
        'I am a Junior computer science student at the University of North Carolina at Chapel Hill. Currently I work as an Undergraduate teaching assistant for the Introduction to Programming class (COMP110), and I am an incoming Technology Development Program Intern at Capital One. I loved working in the software industry over the summer and developing apps, and now that I am headed to work for Capital One I am excited to extend my knowledge in computer science once again. I am not yet sure what team I will be placed in at Capital One, but I put down that I would like to work either in the mobile division or in the cloud engineering department as I feel like those are two great places to further my career.'
      )
    )
  )
);

var AboutMe = function (_Component) {
  AboutMe__inherits(AboutMe, _Component);

  function AboutMe() {
    AboutMe__classCallCheck(this, AboutMe);

    return AboutMe__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AboutMe.prototype.render = function render() {
    return AboutMe__ref;
  };

  return AboutMe;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./components/Head.jsx


function Head__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Head__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Head__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Head__ref = Object(preact_min["h"])("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
  crossorigin: "anonymous" });

var Head_Head = function (_Component) {
  Head__inherits(Head, _Component);

  function Head() {
    Head__classCallCheck(this, Head);

    return Head__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Head.prototype.render = function render() {
    return Object(preact_min["h"])(
      "head",
      null,
      Head__ref
    );
  };

  return Head;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./components/IOSProjectCard.jsx


function IOSProjectCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function IOSProjectCard__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function IOSProjectCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var IOSProjectCard__ref = Object(preact_min["h"])(
  "a",
  { className: "carousel-control-prev", role: "button", "data-slide": "prev" },
  Object(preact_min["h"])("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
  Object(preact_min["h"])(
    "span",
    { className: "sr-only" },
    "Previous"
  )
);

var _ref2 = Object(preact_min["h"])(
  "a",
  { className: "carousel-control-next", role: "button", "data-slide": "next" },
  Object(preact_min["h"])("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
  Object(preact_min["h"])(
    "span",
    { className: "sr-only" },
    "Next"
  )
);

var IOSProjectCard_IOSProjectCard = function (_Component) {
  IOSProjectCard__inherits(IOSProjectCard, _Component);

  function IOSProjectCard() {
    IOSProjectCard__classCallCheck(this, IOSProjectCard);

    return IOSProjectCard__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  IOSProjectCard.prototype.render = function render() {
    var src1 = this.props.src1;
    var src2 = this.props.src2;
    var src3 = this.props.src3;
    var title = this.props.title;
    var description = this.props.description;
    var skills = this.props.skills;
    var link = this.props.link;
    var offset = this.props.offset ? "offset-md-1" : "";
    var bgcolor = this.props.bgcolor;

    return Object(preact_min["h"])(
      "div",
      { className: "col-md-5 " + offset },
      Object(preact_min["h"])(
        "div",
        { className: "card project-card" },
        Object(preact_min["h"])(
          "div",
          { id: "carouselExampleControls", className: "carousel slide", "data-ride": "carousel" },
          Object(preact_min["h"])(
            "div",
            { className: "carousel-inner justify-content-md-center" },
            Object(preact_min["h"])(
              "div",
              { className: "carousel-item active", style: { backgroundColor: bgcolor } },
              Object(preact_min["h"])("img", { className: "d-block h-50 w-50", src: src1, alt: "First slide" })
            ),
            Object(preact_min["h"])(
              "div",
              { className: "carousel-item", style: { backgroundColor: bgcolor } },
              Object(preact_min["h"])("img", { className: "d-block h-50 w-50", src: src2, alt: "Second slide" })
            ),
            Object(preact_min["h"])(
              "div",
              { className: "carousel-item", style: { backgroundColor: bgcolor } },
              Object(preact_min["h"])("img", { className: "d-block h-50 w-50", src: src3, alt: "Third slide" })
            )
          ),
          IOSProjectCard__ref,
          _ref2
        ),
        Object(preact_min["h"])(
          "div",
          { className: "card-body" },
          Object(preact_min["h"])(
            "h5",
            { className: "card-title" },
            title
          ),
          Object(preact_min["h"])(
            "p",
            { className: "card-text" },
            description
          ),
          Object(preact_min["h"])(
            "p",
            { className: "card-text font-weight-light" },
            "Skills used: " + skills
          ),
          Object(preact_min["h"])(
            "a",
            { href: link, className: "btn btn-primary" },
            "View on Github"
          )
        )
      )
    );
  };

  return IOSProjectCard;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./components/LargeProjectCard.jsx


function LargeProjectCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LargeProjectCard__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function LargeProjectCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var LargeProjectCard_LargeProjectCard = function (_Component) {
  LargeProjectCard__inherits(LargeProjectCard, _Component);

  function LargeProjectCard() {
    LargeProjectCard__classCallCheck(this, LargeProjectCard);

    return LargeProjectCard__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LargeProjectCard.prototype.render = function render() {
    var src = this.props.src;
    var title = this.props.title;
    var description = this.props.description;
    var skills = this.props.skills;
    var link = this.props.link;

    return Object(preact_min["h"])(
      "div",
      { className: "col-md-10 offset-md-1" },
      Object(preact_min["h"])(
        "div",
        { className: "card project-card" },
        Object(preact_min["h"])("img", { className: "card-img-top", src: src, alt: "Card image cap" }),
        Object(preact_min["h"])(
          "div",
          { className: "card-body" },
          Object(preact_min["h"])(
            "h5",
            { className: "card-title" },
            title
          ),
          Object(preact_min["h"])(
            "p",
            { className: "card-text" },
            description
          ),
          Object(preact_min["h"])(
            "p",
            { className: "card-text font-weight-light" },
            "Skills used: " + skills
          ),
          Object(preact_min["h"])(
            "a",
            { href: link, className: "btn btn-primary" },
            "View on Github"
          )
        )
      )
    );
  };

  return LargeProjectCard;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./components/Projects.jsx


function Projects__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Projects__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Projects__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Projects__ref = Object(preact_min["h"])(
  'div',
  { className: 'container container-fluid' },
  Object(preact_min["h"])(
    'div',
    { className: 'row' },
    Object(preact_min["h"])(
      'div',
      { className: 'col-md-12 content' },
      Object(preact_min["h"])(
        'div',
        { className: 'jumbotron jumbotron-fluid' },
        Object(preact_min["h"])(
          'div',
          { className: 'container ' },
          Object(preact_min["h"])(
            'h1',
            { className: 'display-4', id: 'projects' },
            'My Projects'
          ),
          Object(preact_min["h"])(
            'div',
            { className: 'row' },
            Object(preact_min["h"])(LargeProjectCard_LargeProjectCard, {
              src: 'https://i.imgur.com/cqejWjX.png',
              title: 'PlanCarolina',
              description: 'At UNC there are endless opportunities; however, those endless options can be overwhelming especially with only four years to seize them. We found ourselves rewriting our four-year plans over and over again on pieces of paper each time we took that art history or philosophy className and instantly wanted to add another major or minor. Could we fit it in? What about study abroad? The erasing and reoutlining became onerous, especially with the confusing UNC academic worksheets. Out of this frustration grew PlanCarolina, a tool that we hope will help you explore your indecisiveness efficiently. We are a team of three Juniors studying Computer Science, Linguistics, Economics, Math, and... who knows? We hope PlanCarolina will help you plan out your four years at this school of national champions! Cheers to planning! Kate, Hank, and Brooks.',
              skills: 'HTML, CSS, TypeScript, React, MobX, Python, MySQL, Amazon AWS.',
              link: 'https://github.com/hankhester/plancarolina'
            }),
            Object(preact_min["h"])('div', { 'class': 'col-md-12', style: 'height:15px;' }),
            Object(preact_min["h"])(IOSProjectCard_IOSProjectCard, {
              src1: 'https://i.imgur.com/R1nGo6d.png',
              src2: 'https://i.imgur.com/GSuFhaG.png',
              src3: 'https://i.imgur.com/2wa3KC7.png',
              title: 'Phi Sigma Pi Mobile Application',
              description: 'Last semester, I worked with my Co-IT chair to design, develop, and maintain a cross platform application to update outdated communication and data collection systems. We also recorded detailed documentation and engineered comprehensive unit tests to simplify production and scalability. Our first goal was to release the application to over 50 unique users on Apple App store and Android Play store, which we accomplished and the majority of the fraternity now uses the app every event.',
              skills: 'React-Native, React-Native-Elements, CSS, Google Firebase, Google Play Store, iTunes Connect.',
              link: 'https://github.com/brooksmtownsend/PhiSigmaPiAK',
              offset: true,
              bgcolor: 'rgba(16, 79, 98, .9)'
            }),
            Object(preact_min["h"])(IOSProjectCard_IOSProjectCard, {
              src1: 'https://i.imgur.com/rVX3asA.png',
              src2: 'https://i.imgur.com/xIVuHgf.png',
              src3: 'https://i.imgur.com/yvkO7Ah.png',
              title: 'Personal Weightlifting Tracker',
              description: 'I found that the apps that were on the app store for weight tracking were not exactly what I wanted. Bodybuilding.com has a cluttered app, while StrongLifts is too specific to the StrongLifts program. I chose to make this app as a personal project, because I thought it would be a great learning experience as well as something that I could actually use. Though I made a working application, I think that it is visually not my best work so I am currently in the process of remaking the weightlifting app, since I have much more experience in iOS development after my internship.',
              skills: 'Skills used: Apple iOS Programming, Swift 3.0, Core Data Stack, XCode interface builder.',
              link: 'https://github.com/brooksmtownsend/Personal-Lift-Tracker',
              offset: false,
              bgcolor: 'rgba(190, 37, 55, .9)'
            })
          )
        )
      )
    )
  )
);

var Projects = function (_Component) {
  Projects__inherits(Projects, _Component);

  function Projects() {
    Projects__classCallCheck(this, Projects);

    return Projects__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Projects.prototype.render = function render() {
    return Projects__ref;
  };

  return Projects;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./components/Experience.jsx


function Experience__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Experience__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Experience__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Experience = function (_Component) {
  Experience__inherits(Experience, _Component);

  function Experience() {
    Experience__classCallCheck(this, Experience);

    return Experience__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Experience.prototype.render = function render() {
    return Experience__ref;
  };

  return Experience;
}(preact_min["Component"]);

var Experience_ExperienceCard = function (_Component2) {
  Experience__inherits(ExperienceCard, _Component2);

  function ExperienceCard() {
    Experience__classCallCheck(this, ExperienceCard);

    return Experience__possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  ExperienceCard.prototype.render = function render() {
    var src = this.props.src;
    var title = this.props.title;
    var description = this.props.description;

    return Object(preact_min["h"])(
      'div',
      { className: 'col-md-10 offset-md-1' },
      Object(preact_min["h"])(
        'div',
        { className: 'card experience-card' },
        Object(preact_min["h"])('img', { className: 'card-img-top', src: src, alt: 'Card image cap' }),
        Object(preact_min["h"])(
          'div',
          { className: 'card-body' },
          Object(preact_min["h"])(
            'h5',
            { className: 'card-title' },
            title
          ),
          Object(preact_min["h"])(
            'p',
            { className: 'card-text' },
            description
          )
        )
      )
    );
  };

  return ExperienceCard;
}(preact_min["Component"]);

var Experience__ref = Object(preact_min["h"])(
  'div',
  { className: 'container container-fluid' },
  Object(preact_min["h"])(
    'div',
    { className: 'row' },
    Object(preact_min["h"])(
      'div',
      { className: 'col-md-12 content' },
      Object(preact_min["h"])(
        'div',
        { className: 'jumbotron jumbotron-fluid' },
        Object(preact_min["h"])(
          'div',
          { className: 'container' },
          Object(preact_min["h"])(
            'h1',
            { className: 'display-4', id: 'experience' },
            'My Experience'
          ),
          Object(preact_min["h"])(
            'div',
            { className: 'row' },
            Object(preact_min["h"])(Experience_ExperienceCard, {
              src: 'https://i.imgur.com/qRQAdB7.jpg',
              title: 'SentryOne',
              description: 'I worked at SentryOne last summer as an iOS development intern. As a sophomore intern, I was the youngest one in the office that was doing development. Working for a company was very different than me just coding in my room. Agile development, TDD, and code reviews were a huge part of what I was doing, and what makes me a better programmer today. This is me with all of the other engineering interns with some of our new SentryOne swag.'
            }),
            Object(preact_min["h"])('div', { 'class': 'col-md-12', style: 'height:15px;' }),
            Object(preact_min["h"])(Experience_ExperienceCard, {
              src: 'https://i.imgur.com/NIBfJb9.jpg',
              title: 'COMP110 UTA',
              description: 'I work as a COMP110 UTA at UNC Chapel Hill along with all of these other wonderful people. COMP110 is the introduction to programming course at UNC, and is the largest undergraduate course at over 900 students per semester. I personally tutor hundreds of students a month, and I lead review sessions along with another UTA. I am also a part of the team leads, which is a special team of the head TAs that meet with the professor once a week to discuss the course.'
            }),
            Object(preact_min["h"])('div', { 'class': 'col-md-12', style: 'height:15px;' }),
            Object(preact_min["h"])(Experience_ExperienceCard, {
              src: 'https://i.imgur.com/Ek38GPE.png',
              description: 'Something that I have loved about being an UTA for COMP110 is the sheer number of students that we help every day. Over the last two semesters, I have accumulated 300 office hours tickets for over 240 students, and seeing their feedback is incredibly rewarding.'
            })
          )
        )
      )
    )
  )
);
// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_App; });


function index__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var index__ref = Object(preact_min["h"])(Head_Head, null);

var index__ref2 = Object(preact_min["h"])(FullpageImage, null);

var _ref3 = Object(preact_min["h"])(AboutMe, null);

var _ref4 = Object(preact_min["h"])(Experience, null);

var _ref5 = Object(preact_min["h"])(Projects, null);

var _ref6 = Object(preact_min["h"])('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous' });

var _ref7 = Object(preact_min["h"])('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', integrity: 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q', crossorigin: 'anonymous' });

var _ref8 = Object(preact_min["h"])('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', integrity: 'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl', crossorigin: 'anonymous' });

var index_App = function (_Component) {
  index__inherits(App, _Component);

  function App() {
    index__classCallCheck(this, App);

    return index__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      null,
      index__ref,
      Object(preact_min["h"])(
        'body',
        { className: '' },
        index__ref2,
        Object(preact_min["h"])(
          'div',
          { className: 'container' },
          Object(preact_min["h"])(
            'div',
            { className: 'row align-items-center justify-content-center' },
            _ref3
          )
        ),
        _ref4,
        _ref5,
        _ref6,
        _ref7,
        _ref8
      )
    );
  };

  return App;
}(preact_min["Component"]);



/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map