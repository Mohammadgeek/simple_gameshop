/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/compotent.js":
/*!*************************!*\
  !*** ./js/compotent.js ***!
  \*************************/
/***/ (() => {

eval("console.log(\"Hello dark mode enable \")\r\n\n\n//# sourceURL=webpack://gameshopsite/./js/compotent.js?");

/***/ }),

/***/ "./js/logic.js":
/*!*********************!*\
  !*** ./js/logic.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dynamic_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic.css */ \"./js/dynamic.css\");\n/* harmony import */ var _static_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static.css */ \"./js/static.css\");\n/* harmony import */ var _compotent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compotent */ \"./js/compotent.js\");\n/* harmony import */ var _compotent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_compotent__WEBPACK_IMPORTED_MODULE_2__);\n\r\n//import 'bootstrap/dist/css/bootstrap.min.css';\r\n//import {logic} from './compotent'\r\n\r\n\r\n\r\n\r\n\r\nlet getImages = document.querySelectorAll('img');\r\nlet div_image = document.querySelectorAll('label');\r\nlet getinp = document.querySelectorAll('input');\r\nlet ul_list = document.querySelector('ul');\r\nlet fa = document.querySelectorAll('.fa');\r\n\r\nlet body = document.querySelector('body');\r\nlet cart = document.querySelector('#cart_icon');\r\n\r\nlet imglst = document.querySelectorAll('label img')\r\n\r\nlet originalsrc; // golbal bariable \r\n\r\n\r\nmain();\r\n\r\nfunction main(){\r\n  window.addEventListener('DOMContentLoaded',function(){\r\n    console.log('loaded page');\r\n    localStorage.clear();\r\n    create_elem();\r\n    create_cart();\r\n    add_game_cart();\r\n  })\r\n}\r\n// change game images with hambarger menu + button page\r\n/*\r\nwindow.onload = () =>{\r\n    console.log('loaded page');\r\n    localStorage.clear();\r\n    create_elem();\r\n    create_cart();\r\n    add_game_cart();\r\n}\r\n*/\r\n\r\n\r\n\r\nfunction add_game_cart(){\r\n\r\n  let tbody = document.querySelector('tbody');\r\n  let c = [...imglst]; // create array with speard method\r\n  let arr2 = [...tbody.children];\r\n\r\n  for(const i of c){\r\n\r\n    i.addEventListener('click',function(){\r\n      let gamediv = document.createElement('div')\r\n\r\n      gamediv.setAttribute('id','imgitem');\r\n\r\n      let gameimg = document.createElement('img');\r\n      gameimg.setAttribute('id','imgsrc');\r\n\r\n      localStorage.setItem('imgsrc',originalsrc); // using data store for save src images\r\n      let read_data = JSON.stringify(localStorage.getItem('imgsrc'));\r\n      console.log(`reading stronge from json : ${JSON.parse(read_data)}`);\r\n       \r\n      \r\n      if(arr2.length <= 5){\r\n        console.log('show image product in order!');\r\n         originalsrc = i.src;\r\n         gameimg.src = originalsrc;\r\n         tbody.appendChild(gamediv);\r\n         gamediv.appendChild(gameimg);\r\n         document.querySelector('tr').style.right = \"6rem\";\r\n         \r\n\r\n      }else{\r\n        arr2.forEach(index =>{\r\n          arr2.pop(); // remove lastchild\r\n        })\r\n      }\r\n\r\n    })\r\n  }\r\n \r\n}\r\n\r\nfunction create_elem(){\r\n\r\nbody.insertAdjacentHTML\r\n('afterbegin',\"<button id = cart_icon class = btn btn-primary  type= button data-toggle= modal data-target=#cartModal>cart order</button>\")\r\n\r\nbody.insertAdjacentHTML('afterbegin',`<i id = \"moonicon\" class=\"fa fa-moon-o themeicon\"></i>`)\r\nlet cart_btn = document.querySelector('button');  \r\n\r\n\r\ncart_btn.insertAdjacentHTML(\r\n    'afterbegin',\r\n   `\r\n   <div class=\"modal fade\" id=\"cartModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header border-bottom-0\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n          Your Shopping Cart\r\n        </h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"table table-image\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\"></th>\r\n              <th scope=\"col\">Game</th>\r\n              <th scope= \"col\">count</th>\r\n              <th scope=\"col\">Price</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class = \"table\">\r\n          </tbody>\r\n \r\n          \r\n   `\r\n)\r\n\r\ncreate_price_item();\r\ncreate_count_item();\r\n\r\nlightmode();\r\n//Darkmode();\r\n\r\n}\r\n\r\n\r\nfunction create_cart(){\r\nlet cart_btn = document.querySelector('#cart_icon');\r\nlet cart_model = document.querySelector('#cartModal');\r\nlet modelmain = document.querySelector('.modal-content')\r\n\r\ncart_btn.addEventListener('click',function(){\r\n    console.log(document.querySelector('#cartModal'))\r\n    cart_model.classList.add('show');\r\n    body.style.overflow = \"hidden\";\r\n\r\n    if(modelmain.classList.contains('hide')){\r\n        ul_list.style.filter = 'none'\r\n        console.log('Open cart order')\r\n        modelmain.classList.toggle('show');\r\n        body.style.overflow = \"visible\"\r\n    }\r\n    if(modelmain.classList.contains('hide') && modelmain.classList.contains('show')){\r\n      console.log('show hide class name');\r\n      body.style.overflow = \"hidden\";\r\n      ul_list.style.filter = \"blur(0.5rem)\";\r\n    }\r\n    \r\n    close_cart();\r\n   \r\n\r\n})\r\n\r\n}\r\n\r\nfunction create_price_item(){\r\n    let tbody = document.querySelector('tbody');\r\n    let thead = document.querySelector('thead');\r\n    let div_price = document.createElement('div');\r\n    div_price.setAttribute('id','pricediv');\r\n\r\n    const ELNew = (tag, prop,) => Object.assign(document.createElement(tag), prop,);\r\n    console.log('created price value product!')\r\n    \r\n\r\n    const userCorrectAnswers = [\r\n      ELNew(\"span\", {textContent:\"120$\"},),\r\n      ELNew(\"span\", {textContent:\"60$\"}),\r\n      ELNew(\"span\", {textContent:\"30$\"}),\r\n      ELNew(\"span\", {textContent:\"40$\"}),\r\n      ELNew(\"span\", {textContent:\"20$\"}),\r\n      ELNew(\"span\", {textContent:\"12$\"}),\r\n    ]\r\n\r\n    console.log('create array price item : ',userCorrectAnswers);\r\n      \r\n    imglst.forEach(value =>{\r\n      value.addEventListener('click',function(){\r\n        userCorrectAnswers.forEach(index =>{\r\n        console.log(`show detail index value equall : ${index.innerHTML}`)\r\n        div_price.innerHTML = index.innerHTML;\r\n      })\r\n  })     \r\n})\r\n\r\n    /*\r\n      imglst.forEach(value =>{\r\n        value.addEventListener('click',function(){\r\n          thead.after(div_price);\r\n          div_price.innerHTML = userCorrectAnswers.reduce((html, el) => html += el.outerHTML, \"\");\r\n        })\r\n      })*/\r\n\r\n}\r\n\r\nfunction create_count_item(){\r\n  console.log('created count value!')\r\n\r\n  let tbox = document.querySelector('thead')\r\n  let quantity = document.createElement('div');\r\n\r\n  quantity.setAttribute('class','count_item')\r\n  tbox.before(quantity);\r\n\r\n  // write custom html code in js\r\n\r\n   quantity.style.cssText = `\r\n   position: absolute;\r\n   display : flex;\r\n   flex-flow: wrap column;\r\n   left: 45%;\r\n   top: 6rem;\r\n   `\r\n\r\n   imglst.forEach(value =>{\r\n    value.addEventListener('click',function(){\r\n      quantity.insertAdjacentHTML('afterbegin',\r\n  `\r\n    <input type=\"number\" id=\"quantity\" name=\"quantity\" min=\"1\" max=\"7\" title = \"add count items!\" value = \"\">\r\n  `)\r\n  let input_count_item = document.querySelector('#quantity');\r\n        })\r\n   })\r\n}\r\n\r\nfunction close_cart(){\r\n    let closeicon = document.querySelector('.close');\r\n    let modelmain = document.querySelector('.modal-content')\r\n    console.log(closeicon);\r\n    closeicon.addEventListener('click',function(){\r\n        modelmain.classList.toggle('hide');\r\n    })\r\n}\r\n\r\n\r\nfunction Darkmode(){\r\n   console.log('Dark mode enable!')\r\n   let moonicon = document.querySelector('#moonicon');\r\n   let sun = document.querySelector('#sunicon');\r\n\r\n   moonicon.style.display = 'block';\r\n   moonicon.addEventListener('click',function(){\r\n       localStorage.removeItem('theme');\r\n       let get_theme = localStorage.setItem('theme','darktoggle')\r\n       if(localStorage.getItem('theme') == 'darktoggle'){\r\n        body.classList.remove('light');\r\n        moonicon.style.display = 'none';\r\n        sun.style.display = 'block'\r\n       }\r\n   })\r\n\r\n}\r\n\r\nfunction lightmode(){\r\n  let moonicon = document.querySelector('#moonicon');\r\n  moonicon.style.display = 'none';\r\n  body.insertAdjacentHTML('afterbegin',`<i id = \"sunicon\" class=\"fa fa-sun-o\"></i>`)\r\n  let sun = document.querySelector('#sunicon');\r\n  sun.addEventListener('click',function(){\r\n    localStorage.setItem('theme','light')\r\n    body.classList.toggle('light');\r\n    if(body.classList.contains('light')){\r\n       sun.style.display = 'none';\r\n       Darkmode();\r\n    }\r\n   \r\n  })\r\n\r\n}\r\n    \r\n\n\n//# sourceURL=webpack://gameshopsite/./js/logic.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./js/dynamic.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./js/dynamic.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    --color--body-background: hsl(220,50%,5%);\\n    --color--body-foreground: hsl(0, 0%, 90%);\\n    --color--checkmark-background: hsl(220, 50%, 5%, 0.8);\\n    --color--checkmark-foreground: hsl(0, 0%, 90%);\\n}\\n\\n*,\\n*::before,\\n*::after{\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\nhtml{font-family:popins,sans-serif ;}\\n\\nbody{\\n    background-color: var(--color--body-background);\\n    color: var(--color--body-foreground);\\n    max-width: 100rem; /* 100rem equall 1600px*/\\n    min-width: 100vh;\\n    margin: 0;\\n    padding: 1rem;\\n}\\n.head-page{\\n    text-align: center;\\n    margin-block-end: 2rem;\\n    margin-right: -23rem;\\n    font-size: clamp(2rem, 2.2vw, 2.4rem); /* defualt size,main size,font size */\\n    line-height: 1.3;\\n}\\n\\n@media (max-width: 1136px){\\n  .head-page{\\n    text-align: center;\\n    font-size : clamp(1.4rem,100%,3rem)\\n  }\\n}\\n@media (max-width: 562px) {\\n  .head-page{\\n     margin-right: 16rem;\\n     visibility: visible;\\n  }\\n}\\n\\n\\nul > li {\\n    overflow: hidden;\\n  }\\n  \\n  ul > li > label > img {\\n    transition: transform 0.25s linear;\\n  }\\n\\nbody img{\\n    max-width: 100%;\\n    display: block;\\n}\\ninput[type = \\\"checkbox\\\"]{\\n    display: none;\\n}\\n\\nli,\\nul {\\n  list-style: none;\\n}\\n\\nul{\\n    display: grid;\\n    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));\\n    grid-auto-flow: dense;\\n    gap: 0.5rem;\\n    position: relative;\\n    left: 5%;\\n}\\n\\nli {\\n  grid-column: span 1;\\n  grid-row: span 1;\\n\\n}\\n\\nli.large {\\n  grid-column: span 2;\\n  grid-row: span 2;\\n}\\n\\n  label{\\n    position: relative;\\n    display: block;\\n  }\\n\\n\\n  .overlay {\\n    background-color: var(--color--checkmark-background);\\n    color: var(--color--checkmark-foreground);\\n    font-size: 4.8rem;\\n    font-weight: 700;\\n    z-index: 1000;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    visibility: hidden;\\n    cursor: pointer;\\n  }\\n\\n.overlay::before {\\n    position: absolute;\\n    top: 50%; \\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    content: \\\"\\\\02713\\\";\\n  }\\n\\ninput:checked ~ .overlay{\\n  visibility: visible;\\n}\\n\\n\\n#cart_icon{\\n  background: green;\\n  \\n}\\n\\n#cartModal{\\n  width: 357px;\\n}\\n\\n.modal-content{\\nheight: 100%;\\nborder-radius: 2px;\\nwidth: 100%;\\nposition: absolute;\\ntop: 5rem;\\nbackground-color: rgb(56, 54, 54);\\ncolor: white;\\n}\\n\\n.modal-content:hover{\\n  background-color: transparent;\\n  color: white;\\n}\\n\\nbody.light .modal-content:hover{\\n  background-color: gray;\\n  color: white;\\n}\\n\\n.count_item input{\\n  margin-bottom: 6.5rem;\\n  width: 100px;\\n}\\n\\n\\n#pricediv{\\n  position: absolute;\\n  left: 85%;\\n  font-size: 1.4em;\\n  top: 7rem;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.hide{\\n  display: none;\\n}\\n.show{\\n  display: block;\\n}\\n\\n#imgitem img{\\n  margin-top: 0.25rem;\\n  border-radius: 36px;\\n}\\n\\n\\n/*\\ndark toggle style \\n*/\\n\\n:is(#moonicon,#sunicon) {\\nfont-size: 2.5rem;\\nposition: absolute;\\nleft: 90%;\\ncursor: pointer;\\n\\n}\\n\\n\\nbody.light{\\n      background-color: #ECF8F9;\\n      color: #4C4C6D;\\n}\\n\\nbody:not(.light) {\\n  --background-color: #044965;\\n}\\n\\n\\n\\ntr{\\nposition: relative;\\nright: 4rem;\\n}\\n\\ntr th:nth-child(3){\\nposition: relative;\\nleft: 3rem;\\n}\\n\\ntr th:nth-child(4){\\n  position: relative;\\n  left: 6rem;\\n}\\n\\nimg:hover input:checked + img{\\n  transform: scale(1.025);\\n}\\n\\n.table :first-child .imgsrc{\\nwidth: 100px;\\nobject-fit: contain;\\nfilter: hue-rotate(180rad);\\n}\\n\\n\\nimg:hover,\\ninput[type=\\\"checkbox\\\"]:checked + img {\\n  transform: scale(1.025);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gameshopsite/./js/dynamic.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./js/static.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./js/static.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n    --color--body-background: hsl(220, 50%, 5%);\\r\\n    --color--body-foreground: hsl(0, 0%, 90%);\\r\\n\\r\\n    --color--checkmark-background: hsl(220, 50%, 5%, 0.8);\\r\\n    --color--checkmark-foreground: hsl(0, 0%, 90%);\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    font-family: Poppins, sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: var(--color--body-background);\\r\\n    color: var(--color--body-foreground);\\r\\n\\r\\n    max-width: 100rem;\\r\\n    min-height: 100vh;\\r\\n\\r\\n    margin: auto;\\r\\n    padding: 2rem;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    margin-block-end: 2rem;\\r\\n\\r\\n    font-size: 2.4rem;\\r\\n}\\r\\n\\r\\nul > li {\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\nul > li > label > img {\\r\\n    transition: transform 0.25s linear;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gameshopsite/./js/static.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://gameshopsite/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gameshopsite/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./js/dynamic.css":
/*!************************!*\
  !*** ./js/dynamic.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dynamic_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./dynamic.css */ \"./node_modules/css-loader/dist/cjs.js!./js/dynamic.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dynamic_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dynamic_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://gameshopsite/./js/dynamic.css?");

/***/ }),

/***/ "./js/static.css":
/*!***********************!*\
  !*** ./js/static.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_static_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./static.css */ \"./node_modules/css-loader/dist/cjs.js!./js/static.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_static_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_static_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://gameshopsite/./js/static.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gameshopsite/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/logic.js");
/******/ 	
/******/ })()
;