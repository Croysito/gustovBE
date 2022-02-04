import { Router } from 'express';
const router = Router();

import { createVenta, getVentas, getOneVenta, addPlatos, getbyDate } from '../controllers/venta.controller';

router.post('/', createVenta);
router.get('/', getVentas);
router.get('/:id', getOneVenta);
router.post('/:id', addPlatos);

export default router;