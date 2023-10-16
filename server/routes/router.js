import express from 'express';
import PartsController from '../controllers/parts.js';
import ComputersController from '../controllers/computers.js';
const router = express.Router();

router.get('/parts/:type', PartsController.get);

router.get('/computers', ComputersController.get);
router.get('/computers/:id', ComputersController.getById);
router.post('/computers', ComputersController.create);
router.patch('/computers/:id', ComputersController.update);
router.delete('/computers/:id', ComputersController.delete);

export default router;