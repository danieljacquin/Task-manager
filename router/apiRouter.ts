import { Router } from "express";
import taskRouter from './routes/task';

const router = Router();

router.use('/task', taskRouter);

export default router;
