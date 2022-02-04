"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _menu = require("../controllers/menu.controller");

var router = (0, _express.Router)();
router.post('/', _menu.createMenu);
router.get('/', _menu.getMenus);
router.get('/:id', _menu.getOneMenu);
router.post('/:id', _menu.addPlatos);
var _default = router;
exports["default"] = _default;