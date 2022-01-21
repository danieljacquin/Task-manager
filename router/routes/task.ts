import { Router } from "express";
import {taskController} from '../../controllers/task';

const router = Router();

router.get('/',taskController.getAll);
router.post('/',taskController.createTask);
router.get('/:id',taskController.getTask);
router.put('/:id',taskController.updateTask);
router.delete('/:id',taskController.deleteTask);

export default router