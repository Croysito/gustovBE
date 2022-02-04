import { Router } from 'express';
const router = Router();

import { createPlato, getPlatos } from '../controllers/plato.controller';

router.post('/', createPlato);
router.get('/', getPlatos);

export default router;