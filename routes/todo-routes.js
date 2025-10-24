import express from 'express'
import { getTodoListController } from '../controllers/todo-controller.js';

const router = express.Router();

router.get("/task", getTodoListController)

export default router;