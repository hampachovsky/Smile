import Router from 'express';
import serviceController from '../controllers/serviceController.js';

const router = new Router();

router.get('/all', serviceController.getAll);
router.get('/:id', serviceController.getById);
router.post('/', serviceController.create);
router.put('/:id', serviceController.update);
router.delete('/:id', serviceController.delete);

export default router;
