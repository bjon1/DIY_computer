import express from 'express';
import ItemsController from '../controllers/items.js';

const router = express.Router();

router.get('/items', ItemsController.get);
router.get('/items/:id', ItemsController.getById);
router.post('/items', ItemsController.create);
router.post('items/:id', ItemsController.update);
router.delete('/items/:id', ItemsController.delete);

export default router;