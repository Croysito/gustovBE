import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Plato from './Plato';

const Venta = sequelize.define('ventas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cliente: {
        type: Sequelize.TEXT
    },
    fecha: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

const Venta_Plato = sequelize.define('venta_plato', {
    cantidad: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Venta.belongsToMany(Plato, { through: Venta_Plato });
Plato.belongsToMany(Venta, { through: Venta_Plato });

export default Venta;