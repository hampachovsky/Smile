import Router from 'express';
import doctorController from '../controllers/doctorController.js';

const router = new Router();

router.get('/all', doctorController.getAll);
router.get('/:id', doctorController.getById);
router.post('/', doctorController.create);

export default router;
