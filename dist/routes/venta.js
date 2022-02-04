"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _venta = require("../controllers/venta.controller");

var router = (0, _express.Router)();
router.post('/', _venta.createVenta);
router.get('/', _venta.getVentas);
router.get('/:id', _venta.getOneVenta);
router.post('/:id', _venta.addPlatos);
var _default = router;
exports["default"] = _default;