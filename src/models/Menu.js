import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Plato from './Plato';

const Menu = sequelize.define('menu', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

const Menu_Plato = sequelize.define('menu_plato', {}, {
    timestamps: false
});


Menu.belongsToMany(Plato, { through: Menu_Plato });
Plato.belongsToMany(Menu, { through: Menu_Plato });

export default Menu;