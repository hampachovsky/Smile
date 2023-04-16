import Router from 'express';
import doctorRouter from './doctorRouter.js';
import serviceRouter from './serviceRouter.js';
import reviewRouter from './reviewRouter.js';
import adminRouter from './adminRouter.js';

const router = new Router();

router.use('/doctors', doctorRouter);
router.use('/services', serviceRouter);
router.use('/reviews', reviewRouter);
router.use('/admin', adminRouter);

export default router;
