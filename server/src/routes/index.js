import Router from 'express';
import doctorRouter from './doctorRouter.js';

const router = new Router();

router.use('/doctors', doctorRouter);

export default router;
