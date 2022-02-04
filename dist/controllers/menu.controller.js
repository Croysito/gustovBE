"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPlatos = addPlatos;
exports.createMenu = createMenu;
exports.getMenus = getMenus;
exports.getOneMenu = getOneMenu;

var _Menu = _interopRequireDefault(require("../models/Menu"));

var _Plato = _interopRequireDefault(require("../models/Plato"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createMenu(_x, _x2) {
  return _createMenu.apply(this, arguments);
}

function _createMenu() {
  _createMenu = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var fecha, newMenu;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            fecha = req.body.fecha;
            _context.next = 4;
            return _Menu["default"].create({
              fecha: fecha
            }, {
              fields: ['fecha']
            });

          case 4:
            newMenu = _context.sent;
            res.json({
              message: 'Menu Creado',
              data: newMenu
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
  return _createMenu.apply(this, arguments);
}

;

function getMenus(_x3, _x4) {
  return _getMenus.apply(this, arguments);
}

function _getMenus() {
  _getMenus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var menus;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Menu["default"].findAll({});

          case 2:
            menus = _context2.sent;
            res.json({
              data: menus
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getMenus.apply(this, arguments);
}

;

function getOneMenu(_x5, _x6) {
  return _getOneMenu.apply(this, arguments);
}

function _getOneMenu() {
  _getOneMenu = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, menu;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Menu["default"].findOne({
              where: {
                id: id
              },
              include: _Plato["default"]
            });

          case 4:
            menu = _context3.sent;
            res.json(menu);
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.json(_context3.t0);
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOneMenu.apply(this, arguments);
}

;

function addPlatos(_x7, _x8) {
  return _addPlatos.apply(this, arguments);
}

function _addPlatos() {
  _addPlatos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var platoId, plato, id, menu;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            platoId = req.body.platoId;
            _context4.next = 4;
            return _Plato["default"].findOne({
              where: {
                id: platoId
              }
            });

          case 4:
            plato = _context4.sent;
            id = req.params.id;
            _context4.next = 8;
            return _Menu["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            menu = _context4.sent;
            _context4.next = 11;
            return menu.addPlatos(plato);

          case 11:
            res.json({
              message: "plato añadido!"
            });
            _context4.next = 18;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            res.json(_context4.t0);
            console.log(_context4.t0);

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return _addPlatos.apply(this, arguments);
}

;