import { Router } from 'express';
const router = Router();

import { createMenu, getMenus, getOneMenu, addPlatos } from '../controllers/menu.controller';

router.post('/', createMenu);
router.get('/', getMenus);

router.get('/:id', getOneMenu);
router.post('/:id', addPlatos);

export default router;