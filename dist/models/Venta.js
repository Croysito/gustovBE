"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Plato = _interopRequireDefault(require("./Plato"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Venta = _database.sequelize.define('ventas', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  cliente: {
    type: _sequelize["default"].TEXT
  },
  fecha: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

var Venta_Plato = _database.sequelize.define('venta_plato', {
  cantidad: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

Venta.belongsToMany(_Plato["default"], {
  through: Venta_Plato
});

_Plato["default"].belongsToMany(Venta, {
  through: Venta_Plato
});

var _default = Venta;
exports["default"] = _default;