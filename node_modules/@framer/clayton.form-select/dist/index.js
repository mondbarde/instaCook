(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react", "styled-components"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react"), require("styled-components")) : factory(root["Framer"], root["React"], root["styled-components"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Examples.tsx": "./code/Examples.tsx",
	"./FormSelect.tsx": "./code/FormSelect.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0), rotationY: framer_1.Animatable(0) });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window[\"__checkBudget__\"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window[\"__checkBudget__\"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.FlipOutput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        rotationY: data.rotationY,\n    };\n};\nexports.FlipInput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onTap() {\n            window[\"__checkBudget__\"]();\n            const toggle = data.toggle;\n            framer_1.animate.spring({ rotationY: data.rotationY }, {\n                rotationY: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle = !toggle;\n        },\n    };\n};\nexports.__info__ = [{ name: \"Scale\", type: \"override\" }, { name: \"Rotate\", type: \"override\" }, { name: \"Fade\", type: \"override\" }, { name: \"FlipOutput\", type: \"override\" }, { name: \"FlipInput\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNEJBQTRCLG9KQUFvSjtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLEdBQUcsaUNBQWlDLEdBQUcsdUNBQXVDLEdBQUcsc0NBQXNDIiwiZmlsZSI6Ii4vY29kZS9FeGFtcGxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgdG9nZ2xlOiB0cnVlLCBzY2FsZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgb3BhY2l0eTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgcm90YXRpb246IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksIHJvdGF0aW9uWTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZsaXBPdXRwdXQgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSxcbiAgICB9O1xufTtcbmV4cG9ydHMuRmxpcElucHV0ID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkYXRhLnRvZ2dsZTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKHsgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSB9LCB7XG4gICAgICAgICAgICAgICAgcm90YXRpb25ZOiB0b2dnbGUgPyAzNjAgOiAwLFxuICAgICAgICAgICAgfSwgeyB0ZW5zaW9uOiAyMDAsIGZyaWN0aW9uOiAyMCB9KTtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlID0gIXRvZ2dsZTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlNjYWxlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiUm90YXRlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmFkZVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkZsaXBPdXRwdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGbGlwSW5wdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Examples.tsx\n");

/***/ }),

/***/ "./code/FormSelect.tsx":
/*!*****************************!*\
  !*** ./code/FormSelect.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst styled_components_1 = __webpack_require__(/*! styled-components */ \"styled-components\");\nclass FormSelect extends React.Component {\n    constructor() {\n        super(...arguments);\n        // https://www.filamentgroup.com/lab/select-css.html\n        this.StyledSelect = styled_components_1.default.select `\n        -moz-appearance: none;\n        -webkit-Appearance: none;\n        appearance: none;\n        display: block;\n        width: 100%;\n        height: 100%;\n        max-width: 100%;\n        max-height: 100%;\n        box-sizing: border-box;\n        border-style: solid;\n        margin: 0;\n        background-repeat: no-repeat, repeat;\n        &::-ms-expand {\n            display: none;\n        }\n        &:hover {\n            border-color: ${this.props.focusColor} !important;\n        }\n        &:focus {\n            border-color: ${this.props.focusColor} !important;\n            outline: none;\n        }\n    `;\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        const { paddingPerSide, padding, paddingTop, paddingRight, paddingBottom, paddingLeft, } = this.props;\n        var optionTitleArray = this.props.options.split(this.props.separator);\n        var optionArray = [];\n        if (this.props.placeholder) {\n            optionArray.push(React.createElement(\"option\", { key: i, value: \"\", disabled: true, selected: true }, this.props.placeholderText));\n        }\n        for (var i = 0; i < optionTitleArray.length; i++) {\n            window[\"__checkBudget__\"]();\n            if (optionTitleArray[i] == \"\") {\n                optionTitleArray[i] = \"Option\";\n            }\n            optionArray.push(React.createElement(\"option\", { key: i, value: \"\" }, optionTitleArray[i]));\n        }\n        const paddingValue = paddingPerSide\n            ? `${paddingTop}px calc(${paddingRight}px + 30px) ${paddingBottom}px ${paddingLeft}px`\n            : padding;\n        return (React.createElement(this.StyledSelect, { style: {\n                fontSize: this.props.fontSize,\n                fontFamily: this.props.customFont ? this.props.customFontFamily : \"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'\",\n                color: this.props.textColor,\n                padding: paddingPerSide ? paddingValue : '0 ' + padding + 'px 0 ' + padding + 'px',\n                borderWidth: this.props.borderWidth,\n                borderColor: this.props.borderColor,\n                borderRadius: this.props.borderRadius,\n                backgroundColor: this.props.bgColor,\n                backgroundImage: this.props.customIcon ? \"url('\" + this.props.icon + \"'), linear-gradient(to bottom, \" + this.props.bgColor + \" 0%, \" + this.props.bgColor + \" 100%)\" : \"url('data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%228%22%20viewBox%3D%220%200%2014%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1%201L7%207L13%201%22%20stroke%3D%22\" + this.props.iconColor + \"%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A'), linear-gradient(to bottom, \" + this.props.bgColor + \" 0%, \" + this.props.bgColor + \" 100%)\",\n                backgroundPosition: \"right calc(\" + this.props.padding + \"px + \" + this.props.iconSize * .3 + \"em) top 50%, 0 0\",\n                backgroundSize: this.props.iconSize + \"em auto, 100%\",\n                boxShadow: this.props.boxShadow ? \" 0 1px 0 1px rgba(0, 0, 0, .04)\" : \"\",\n            } }, optionArray));\n    }\n}\n// Set default properties\nFormSelect.defaultProps = {\n    // Size\n    width: 240,\n    height: 48,\n    // Options\n    options: \"Option One, Option Two, Option Three, Option Four\",\n    separator: \",\",\n    // Text\n    fontSize: 16,\n    customFont: false,\n    textColor: \"#000\",\n    placeholder: true,\n    placeholderText: \"Select an Option\",\n    placeholderColor: \"#999\",\n    // Icon\n    iconColor: \"#666\",\n    customIcon: false,\n    icon: \"\",\n    iconSize: .7,\n    // Padding\n    paddingPerSide: false,\n    padding: 15,\n    paddingTop: 0,\n    paddingRight: 15,\n    paddingBottom: 0,\n    paddingLeft: 15,\n    // Border\n    borderWidth: 1,\n    borderColor: \"rgba(0,0,0,0.2)\",\n    borderRadius: 2,\n    focusColor: \"#09F\",\n    // Background\n    bgColor: \"#FFF\",\n    // Background\n    boxShadow: true,\n};\n// Items shown in property panel\nFormSelect.propertyControls = {\n    fontSize: {\n        type: framer_1.ControlType.Number,\n        title: \"Font Size\",\n        min: 1\n    },\n    customFont: { type: framer_1.ControlType.Boolean, title: \"Custom Font\" },\n    customFontFamily: {\n        type: framer_1.ControlType.String,\n        title: \"Font\",\n        hidden: (props) => props.customFont == false\n    },\n    options: { type: framer_1.ControlType.String, title: \"Options\" },\n    separator: { type: framer_1.ControlType.String, title: \"Separator\" },\n    placeholder: { type: framer_1.ControlType.Boolean, title: \"Placeholder\" },\n    placeholderText: {\n        type: framer_1.ControlType.String,\n        title: \" \",\n        hidden: (props) => props.placeholder == false\n    },\n    textColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Text\",\n    },\n    iconColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Icon Color\",\n        hidden: (props) => props.customIcon == true\n    },\n    iconSize: {\n        type: framer_1.ControlType.Number,\n        title: \"Icon Size\",\n        min: 0,\n        max: 5,\n        step: .1,\n    },\n    customIcon: { type: framer_1.ControlType.Boolean, title: \"Custom Icon\" },\n    icon: {\n        type: framer_1.ControlType.File,\n        allowedFileTypes: [\"png\", \"jpg\", \"svg\"],\n        title: \"Icon Art\",\n        hidden: (props) => props.customIcon == false\n    },\n    padding: {\n        type: framer_1.ControlType.FusedNumber,\n        toggleKey: \"paddingPerSide\",\n        toggleTitles: [\"All Sides\", \"Per Side\"],\n        valueKeys: [\"paddingTop\", \"paddingRight\", \"paddingBottom\", \"paddingLeft\"],\n        valueLabels: [\"T\", \"R\", \"B\", \"L\"],\n        min: 0,\n        title: \"Padding\"\n    },\n    borderWidth: {\n        type: framer_1.ControlType.Number,\n        title: \"Border\",\n        min: 0,\n        max: 6,\n        step: 1,\n        displayStepper: true\n    },\n    borderColor: {\n        type: framer_1.ControlType.Color,\n        title: \" \",\n        hidden: (props) => props.borderWidth <= 0\n    },\n    focusColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Focused\",\n        hidden: (props) => props.borderWidth <= 0\n    },\n    borderRadius: {\n        type: framer_1.ControlType.Number,\n        title: \"Radius\",\n        min: 0\n    },\n    bgColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Background\",\n    },\n    boxShadow: { type: framer_1.ControlType.Boolean, title: \"Shadow\" },\n};\nexports.FormSelect = FormSelect;\nexports.__info__ = [{ name: \"FormSelect\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0Zvcm1TZWxlY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlGQUFpRjtBQUNoRztBQUNBO0FBQ0E7QUFDQSw0REFBNEQsb0RBQW9EO0FBQ2hIO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxvQkFBb0I7QUFDaEY7QUFDQTtBQUNBLGlCQUFpQixXQUFXLFVBQVUsYUFBYSxhQUFhLGNBQWMsS0FBSyxZQUFZO0FBQy9GO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsMkRBQTJEO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGNBQWMsc0RBQXNEO0FBQ3BFLGdCQUFnQix3REFBd0Q7QUFDeEUsa0JBQWtCLDJEQUEyRDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQiwyREFBMkQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQkFBZ0Isc0RBQXNEO0FBQ3RFO0FBQ0E7QUFDQSxxQkFBcUIseURBQXlEIiwiZmlsZSI6Ii4vY29kZS9Gb3JtU2VsZWN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5jb25zdCBzdHlsZWRfY29tcG9uZW50c18xID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpO1xuY2xhc3MgRm9ybVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LmZpbGFtZW50Z3JvdXAuY29tL2xhYi9zZWxlY3QtY3NzLmh0bWxcbiAgICAgICAgdGhpcy5TdHlsZWRTZWxlY3QgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuc2VsZWN0IGBcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtd2Via2l0LUFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgcmVwZWF0O1xuICAgICAgICAmOjotbXMtZXhwYW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhpcy5wcm9wcy5mb2N1c0NvbG9yfSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoaXMucHJvcHMuZm9jdXNDb2xvcn0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICBgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IHBhZGRpbmdQZXJTaWRlLCBwYWRkaW5nLCBwYWRkaW5nVG9wLCBwYWRkaW5nUmlnaHQsIHBhZGRpbmdCb3R0b20sIHBhZGRpbmdMZWZ0LCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIG9wdGlvblRpdGxlQXJyYXkgPSB0aGlzLnByb3BzLm9wdGlvbnMuc3BsaXQodGhpcy5wcm9wcy5zZXBhcmF0b3IpO1xuICAgICAgICB2YXIgb3B0aW9uQXJyYXkgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIG9wdGlvbkFycmF5LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogaSwgdmFsdWU6IFwiXCIsIGRpc2FibGVkOiB0cnVlLCBzZWxlY3RlZDogdHJ1ZSB9LCB0aGlzLnByb3BzLnBsYWNlaG9sZGVyVGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9uVGl0bGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBpZiAob3B0aW9uVGl0bGVBcnJheVtpXSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uVGl0bGVBcnJheVtpXSA9IFwiT3B0aW9uXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25BcnJheS5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IGksIHZhbHVlOiBcIlwiIH0sIG9wdGlvblRpdGxlQXJyYXlbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWRkaW5nVmFsdWUgPSBwYWRkaW5nUGVyU2lkZVxuICAgICAgICAgICAgPyBgJHtwYWRkaW5nVG9wfXB4IGNhbGMoJHtwYWRkaW5nUmlnaHR9cHggKyAzMHB4KSAke3BhZGRpbmdCb3R0b219cHggJHtwYWRkaW5nTGVmdH1weGBcbiAgICAgICAgICAgIDogcGFkZGluZztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMuU3R5bGVkU2VsZWN0LCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHRoaXMucHJvcHMuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogdGhpcy5wcm9wcy5jdXN0b21Gb250ID8gdGhpcy5wcm9wcy5jdXN0b21Gb250RmFtaWx5IDogXCJmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHBhZGRpbmdQZXJTaWRlID8gcGFkZGluZ1ZhbHVlIDogJzAgJyArIHBhZGRpbmcgKyAncHggMCAnICsgcGFkZGluZyArICdweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IHRoaXMucHJvcHMuYm9yZGVyV2lkdGgsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMucHJvcHMuYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLnByb3BzLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuYmdDb2xvcixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRoaXMucHJvcHMuY3VzdG9tSWNvbiA/IFwidXJsKCdcIiArIHRoaXMucHJvcHMuaWNvbiArIFwiJyksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIFwiICsgdGhpcy5wcm9wcy5iZ0NvbG9yICsgXCIgMCUsIFwiICsgdGhpcy5wcm9wcy5iZ0NvbG9yICsgXCIgMTAwJSlcIiA6IFwidXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnJTIwd2lkdGglM0QlMjIxNCUyMiUyMGhlaWdodCUzRCUyMjglMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjAxNCUyMDglMjIlMjBmaWxsJTNEJTIybm9uZSUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTNFJTBBJTNDcGF0aCUyMGQlM0QlMjJNMSUyMDFMNyUyMDdMMTMlMjAxJTIyJTIwc3Ryb2tlJTNEJTIyXCIgKyB0aGlzLnByb3BzLmljb25Db2xvciArIFwiJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMiUyMiUyMHN0cm9rZS1saW5lY2FwJTNEJTIycm91bmQlMjIlMjBzdHJva2UtbGluZWpvaW4lM0QlMjJyb3VuZCUyMiUyRiUzRSUwQSUzQyUyRnN2ZyUzRSUwQScpLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBcIiArIHRoaXMucHJvcHMuYmdDb2xvciArIFwiIDAlLCBcIiArIHRoaXMucHJvcHMuYmdDb2xvciArIFwiIDEwMCUpXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcInJpZ2h0IGNhbGMoXCIgKyB0aGlzLnByb3BzLnBhZGRpbmcgKyBcInB4ICsgXCIgKyB0aGlzLnByb3BzLmljb25TaXplICogLjMgKyBcImVtKSB0b3AgNTAlLCAwIDBcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogdGhpcy5wcm9wcy5pY29uU2l6ZSArIFwiZW0gYXV0bywgMTAwJVwiLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogdGhpcy5wcm9wcy5ib3hTaGFkb3cgPyBcIiAwIDFweCAwIDFweCByZ2JhKDAsIDAsIDAsIC4wNClcIiA6IFwiXCIsXG4gICAgICAgICAgICB9IH0sIG9wdGlvbkFycmF5KSk7XG4gICAgfVxufVxuLy8gU2V0IGRlZmF1bHQgcHJvcGVydGllc1xuRm9ybVNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgLy8gU2l6ZVxuICAgIHdpZHRoOiAyNDAsXG4gICAgaGVpZ2h0OiA0OCxcbiAgICAvLyBPcHRpb25zXG4gICAgb3B0aW9uczogXCJPcHRpb24gT25lLCBPcHRpb24gVHdvLCBPcHRpb24gVGhyZWUsIE9wdGlvbiBGb3VyXCIsXG4gICAgc2VwYXJhdG9yOiBcIixcIixcbiAgICAvLyBUZXh0XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGN1c3RvbUZvbnQ6IGZhbHNlLFxuICAgIHRleHRDb2xvcjogXCIjMDAwXCIsXG4gICAgcGxhY2Vob2xkZXI6IHRydWUsXG4gICAgcGxhY2Vob2xkZXJUZXh0OiBcIlNlbGVjdCBhbiBPcHRpb25cIixcbiAgICBwbGFjZWhvbGRlckNvbG9yOiBcIiM5OTlcIixcbiAgICAvLyBJY29uXG4gICAgaWNvbkNvbG9yOiBcIiM2NjZcIixcbiAgICBjdXN0b21JY29uOiBmYWxzZSxcbiAgICBpY29uOiBcIlwiLFxuICAgIGljb25TaXplOiAuNyxcbiAgICAvLyBQYWRkaW5nXG4gICAgcGFkZGluZ1BlclNpZGU6IGZhbHNlLFxuICAgIHBhZGRpbmc6IDE1LFxuICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgcGFkZGluZ1JpZ2h0OiAxNSxcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIHBhZGRpbmdMZWZ0OiAxNSxcbiAgICAvLyBCb3JkZXJcbiAgICBib3JkZXJXaWR0aDogMSxcbiAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMilcIixcbiAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgZm9jdXNDb2xvcjogXCIjMDlGXCIsXG4gICAgLy8gQmFja2dyb3VuZFxuICAgIGJnQ29sb3I6IFwiI0ZGRlwiLFxuICAgIC8vIEJhY2tncm91bmRcbiAgICBib3hTaGFkb3c6IHRydWUsXG59O1xuLy8gSXRlbXMgc2hvd24gaW4gcHJvcGVydHkgcGFuZWxcbkZvcm1TZWxlY3QucHJvcGVydHlDb250cm9scyA9IHtcbiAgICBmb250U2l6ZToge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsXG4gICAgICAgIHRpdGxlOiBcIkZvbnQgU2l6ZVwiLFxuICAgICAgICBtaW46IDFcbiAgICB9LFxuICAgIGN1c3RvbUZvbnQ6IHsgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuQm9vbGVhbiwgdGl0bGU6IFwiQ3VzdG9tIEZvbnRcIiB9LFxuICAgIGN1c3RvbUZvbnRGYW1pbHk6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuU3RyaW5nLFxuICAgICAgICB0aXRsZTogXCJGb250XCIsXG4gICAgICAgIGhpZGRlbjogKHByb3BzKSA9PiBwcm9wcy5jdXN0b21Gb250ID09IGZhbHNlXG4gICAgfSxcbiAgICBvcHRpb25zOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZywgdGl0bGU6IFwiT3B0aW9uc1wiIH0sXG4gICAgc2VwYXJhdG9yOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZywgdGl0bGU6IFwiU2VwYXJhdG9yXCIgfSxcbiAgICBwbGFjZWhvbGRlcjogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Cb29sZWFuLCB0aXRsZTogXCJQbGFjZWhvbGRlclwiIH0sXG4gICAgcGxhY2Vob2xkZXJUZXh0OiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZyxcbiAgICAgICAgdGl0bGU6IFwiIFwiLFxuICAgICAgICBoaWRkZW46IChwcm9wcykgPT4gcHJvcHMucGxhY2Vob2xkZXIgPT0gZmFsc2VcbiAgICB9LFxuICAgIHRleHRDb2xvcjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvcixcbiAgICAgICAgdGl0bGU6IFwiVGV4dFwiLFxuICAgIH0sXG4gICAgaWNvbkNvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJJY29uIENvbG9yXCIsXG4gICAgICAgIGhpZGRlbjogKHByb3BzKSA9PiBwcm9wcy5jdXN0b21JY29uID09IHRydWVcbiAgICB9LFxuICAgIGljb25TaXplOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlcixcbiAgICAgICAgdGl0bGU6IFwiSWNvbiBTaXplXCIsXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiA1LFxuICAgICAgICBzdGVwOiAuMSxcbiAgICB9LFxuICAgIGN1c3RvbUljb246IHsgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuQm9vbGVhbiwgdGl0bGU6IFwiQ3VzdG9tIEljb25cIiB9LFxuICAgIGljb246IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuRmlsZSxcbiAgICAgICAgYWxsb3dlZEZpbGVUeXBlczogW1wicG5nXCIsIFwianBnXCIsIFwic3ZnXCJdLFxuICAgICAgICB0aXRsZTogXCJJY29uIEFydFwiLFxuICAgICAgICBoaWRkZW46IChwcm9wcykgPT4gcHJvcHMuY3VzdG9tSWNvbiA9PSBmYWxzZVxuICAgIH0sXG4gICAgcGFkZGluZzoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5GdXNlZE51bWJlcixcbiAgICAgICAgdG9nZ2xlS2V5OiBcInBhZGRpbmdQZXJTaWRlXCIsXG4gICAgICAgIHRvZ2dsZVRpdGxlczogW1wiQWxsIFNpZGVzXCIsIFwiUGVyIFNpZGVcIl0sXG4gICAgICAgIHZhbHVlS2V5czogW1wicGFkZGluZ1RvcFwiLCBcInBhZGRpbmdSaWdodFwiLCBcInBhZGRpbmdCb3R0b21cIiwgXCJwYWRkaW5nTGVmdFwiXSxcbiAgICAgICAgdmFsdWVMYWJlbHM6IFtcIlRcIiwgXCJSXCIsIFwiQlwiLCBcIkxcIl0sXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgdGl0bGU6IFwiUGFkZGluZ1wiXG4gICAgfSxcbiAgICBib3JkZXJXaWR0aDoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsXG4gICAgICAgIHRpdGxlOiBcIkJvcmRlclwiLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogNixcbiAgICAgICAgc3RlcDogMSxcbiAgICAgICAgZGlzcGxheVN0ZXBwZXI6IHRydWVcbiAgICB9LFxuICAgIGJvcmRlckNvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCIgXCIsXG4gICAgICAgIGhpZGRlbjogKHByb3BzKSA9PiBwcm9wcy5ib3JkZXJXaWR0aCA8PSAwXG4gICAgfSxcbiAgICBmb2N1c0NvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJGb2N1c2VkXCIsXG4gICAgICAgIGhpZGRlbjogKHByb3BzKSA9PiBwcm9wcy5ib3JkZXJXaWR0aCA8PSAwXG4gICAgfSxcbiAgICBib3JkZXJSYWRpdXM6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuTnVtYmVyLFxuICAgICAgICB0aXRsZTogXCJSYWRpdXNcIixcbiAgICAgICAgbWluOiAwXG4gICAgfSxcbiAgICBiZ0NvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJCYWNrZ3JvdW5kXCIsXG4gICAgfSxcbiAgICBib3hTaGFkb3c6IHsgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuQm9vbGVhbiwgdGl0bGU6IFwiU2hhZG93XCIgfSxcbn07XG5leHBvcnRzLkZvcm1TZWxlY3QgPSBGb3JtU2VsZWN0O1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiRm9ybVNlbGVjdFwiLCBjaGlsZHJlbjogZmFsc2UsIHR5cGU6IFwiY29tcG9uZW50XCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/FormSelect.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.10.1","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"^7.0.2","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"^16","@types/react-dom":"^16","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"~16.4","react-dev-utils":"^5.0.1","react-dom":"~16.4","semver":"^5.6.0","ts-jest":"^22.4.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3","react-dom":"^16.3"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16","framer":"^0.10.1"},"peerDependencies":{"framer":"^0.10.1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"1e3e5809-ab07-4f7f-91cf-979812e17e3a","displayName":"Form : Select"},"author":"Clayton Farr","dependencies":{"styled-components":"^4.1.3"},"name":"@framer/clayton.form-select","version":"1.0.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});