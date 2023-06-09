import Router from 'express';
import doctorController from '../controllers/doctorController.js';

const router = new Router();

router.get('/all', doctorController.getAll);
router.get('/:id', doctorController.getById);
router.post('/', doctorController.create);
router.put('/:id', doctorController.update);
router.delete('/:id', doctorController.delete);

export default router;
