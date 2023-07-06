"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _generic = require("../utility/generic");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sidebar = function Sidebar(props) {
  var renderGroupContent = function renderGroupContent(group, isRightSidebar, groupTitleKey, groupRightTitleKey) {
    if (props.groupRenderer) {
      return _react["default"].createElement(props.groupRenderer, {
        group: group,
        isRightSidebar: isRightSidebar
      });
    } else {
      return (0, _generic._get)(group, isRightSidebar ? groupRightTitleKey : groupTitleKey);
    }
  };

  var width = props.width,
      groupHeights = props.groupHeights,
      height = props.height,
      isRightSidebar = props.isRightSidebar;
  var _props$keys = props.keys,
      groupIdKey = _props$keys.groupIdKey,
      groupTitleKey = _props$keys.groupTitleKey,
      groupRightTitleKey = _props$keys.groupRightTitleKey;
  var sidebarStyle = {
    width: "".concat(width, "px"),
    height: "".concat(height, "px")
  };
  var groupsStyle = {
    width: "".concat(width, "px")
  };
  var groupLines = props.groups.map(function (group, index) {
    var elementStyle = {
      height: "".concat(groupHeights[index], "px"),
      lineHeight: "".concat(groupHeights[index], "px")
    };
    return _react["default"].createElement("div", {
      key: (0, _generic._get)(group, groupIdKey),
      className: 'rct-sidebar-row rct-sidebar-row-' + (index % 2 === 0 ? 'even' : 'odd'),
      style: elementStyle
    }, renderGroupContent(group, isRightSidebar, groupTitleKey, groupRightTitleKey));
  });
  return _react["default"].createElement("div", {
    className: 'rct-sidebar' + (isRightSidebar ? ' rct-sidebar-right' : ''),
    style: sidebarStyle
  }, _react["default"].createElement("div", {
    style: groupsStyle
  }, groupLines));
};

var _default = Sidebar;
exports["default"] = _default;