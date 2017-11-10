"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Btn = exports.Li = exports.keyFrame = exports.Ul = exports.StyledLink = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  display: block;\n  margin: 1em;\n"], ["\n  display: block;\n  margin: 1em;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  margin: auto 0 0 0;\n  padding: 0;\n"], ["\n  margin: auto 0 0 0;\n  padding: 0;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n0%{transform : scale(1) rotateX(90deg);}\n50%{transform : scale(1.5) rotateX(45deg);}\n100%{transform : scale(1) rotateX(0deg);}\n"], ["\n0%{transform : scale(1) rotateX(90deg);}\n50%{transform : scale(1.5) rotateX(45deg);}\n100%{transform : scale(1) rotateX(0deg);}\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  transition: transform 0.2s ease;\n  transform: rotateY(90deg) translateY(100%);\n  list-style: none;\n  animation-duration: 0.5s;\n  animation-timing-function: cubic-bezier(1, 0.04, 0.23, 1.62);\n  animation-direction: normal;\n  ", ";\n"], ["\n  transition: transform 0.2s ease;\n  transform: rotateY(90deg) translateY(100%);\n  list-style: none;\n  animation-duration: 0.5s;\n  animation-timing-function: cubic-bezier(1, 0.04, 0.23, 1.62);\n  animation-direction: normal;\n  ", ";\n"]),
    _templateObject5 = _taggedTemplateLiteral(["margin: 1em;"], ["margin: 1em;"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLink = exports.StyledLink = _styledComponents2.default.span(_templateObject);

var Ul = exports.Ul = _styledComponents2.default.ul(_templateObject2);

var keyFrame = exports.keyFrame = (0, _styledComponents.keyframes)(_templateObject3);

// transition: transform .5s cubic-bezier(1, 0.04, 0.23, 1.62);
var Li = exports.Li = _styledComponents2.default.li(_templateObject4, function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? "\n  animation-name: " + keyFrame + ";\n  transform : rotateX(0deg);" : null;
});
var Btn = exports.Btn = _styledComponents2.default.div(_templateObject5);