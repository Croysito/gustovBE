"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Plato = _database.sequelize.define('platos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].STRING
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  precio: {
    type: _sequelize["default"].REAL
  }
}, {
  timestamps: false
});

var _default = Plato;
exports["default"] = _default;