import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Plato = sequelize.define('platos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    precio: {
        type: Sequelize.REAL
    }
}, {
    timestamps: false
});

export default Plato;