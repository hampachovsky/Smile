import Router from 'express';
import offerController from '../controllers/offerController.js';

const router = new Router();

router.get('/all', offerController.getAll);
router.get('/:id', offerController.getById);
router.post('/', offerController.create);
router.put('/:id', offerController.update);
router.delete('/:id', offerController.delete);

export default router;
