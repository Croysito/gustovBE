import express, { json } from "express";
import morgan from "morgan";

//importando rutas
import platoRoutes from './routes/plato';
import menuRoutes from './routes/menu';
import ventaRoutes from './routes/venta';

const app = express();
const cors = require('cors');
app.use(cors({
    origin: "*"
}))

//middlewares
app.use(morgan('dev'));
app.use(json());

//rutas
app.use('/api/plato', platoRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/venta', ventaRoutes);


export default app;