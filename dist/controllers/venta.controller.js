"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPlatos = addPlatos;
exports.createVenta = createVenta;
exports.getOneVenta = getOneVenta;
exports.getVentas = getVentas;

var _Plato = _interopRequireDefault(require("../models/Plato"));

var _Venta = _interopRequireDefault(require("../models/Venta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createVenta(_x, _x2) {
  return _createVenta.apply(this, arguments);
}

function _createVenta() {
  _createVenta = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, cliente, fecha, newVenta;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, cliente = _req$body.cliente, fecha = _req$body.fecha;
            _context.next = 4;
            return _Venta["default"].create({
              cliente: cliente,
              fecha: fecha
            }, {
              fields: ['cliente', 'fecha']
            });

          case 4:
            newVenta = _context.sent;
            //newVenta.setPlatos(platos);
            res.json({
              message: 'succes!',
              data: newVenta
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _createVenta.apply(this, arguments);
}

;

function getVentas(_x3, _x4) {
  return _getVentas.apply(this, arguments);
}

function _getVentas() {
  _getVentas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var ventas;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Venta["default"].findAll();

          case 2:
            ventas = _context2.sent;
            res.json({
              data: ventas
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getVentas.apply(this, arguments);
}

;

function getOneVenta(_x5, _x6) {
  return _getOneVenta.apply(this, arguments);
}

function _getOneVenta() {
  _getOneVenta = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, venta;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Venta["default"].findOne({
              where: {
                id: id
              },
              include: _Plato["default"]
            });

          case 4:
            venta = _context3.sent;
            res.json(venta);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOneVenta.apply(this, arguments);
}

;

function addPlatos(_x7, _x8) {
  return _addPlatos.apply(this, arguments);
}

function _addPlatos() {
  _addPlatos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var platoId, cantidad, plato, id, venta;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            platoId = req.body.platoId;
            cantidad = req.body.cantidad;
            _context4.next = 5;
            return _Plato["default"].findOne({
              where: {
                id: platoId
              }
            });

          case 5:
            plato = _context4.sent;
            id = req.params.id;
            _context4.next = 9;
            return _Venta["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            venta = _context4.sent;
            _context4.next = 12;
            return venta.addPlatos(plato, {
              through: {
                cantidad: cantidad
              }
            });

          case 12:
            res.json({
              message: "plato añadido!"
            });
            _context4.next = 18;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return _addPlatos.apply(this, arguments);
}