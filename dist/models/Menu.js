"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Plato = _interopRequireDefault(require("./Plato"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Menu = _database.sequelize.define('menu', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  fecha: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

var Menu_Plato = _database.sequelize.define('menu_plato', {}, {
  timestamps: false
});

Menu.belongsToMany(_Plato["default"], {
  through: Menu_Plato
});

_Plato["default"].belongsToMany(Menu, {
  through: Menu_Plato
});

var _default = Menu;
exports["default"] = _default;