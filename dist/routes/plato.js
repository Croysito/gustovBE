"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _plato = require("../controllers/plato.controller");

var router = (0, _express.Router)();
router.post('/', _plato.createPlato);
router.get('/', _plato.getPlatos);
var _default = router;
exports["default"] = _default;