"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlato = createPlato;
exports.getPlatos = getPlatos;

var _Plato = _interopRequireDefault(require("../models/Plato"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createPlato(_x, _x2) {
  return _createPlato.apply(this, arguments);
}

function _createPlato() {
  _createPlato = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, precio, newPlato;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, precio = _req$body.precio;
            _context.next = 4;
            return _Plato["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              precio: precio
            }, {
              fields: ['nombre', 'descripcion', 'precio']
            });

          case 4:
            newPlato = _context.sent;
            res.json({
              message: 'Plato creado',
              data: newPlato
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.json({
              message: 'no se creó'
            });
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _createPlato.apply(this, arguments);
}

function getPlatos(_x3, _x4) {
  return _getPlatos.apply(this, arguments);
}

function _getPlatos() {
  _getPlatos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var platos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Plato["default"].findAll();

          case 2:
            platos = _context2.sent;
            res.json({
              data: platos
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPlatos.apply(this, arguments);
}