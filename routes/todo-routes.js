import express from 'express'
import { getTodoListController, insertTodoListController, marksAsDoneController } from '../controllers/todo-controller.js';

const router = express.Router();

router.get("/task", getTodoListController)

router.post("/task",insertTodoListController)

router.post("/task/done",marksAsDoneController)

export default router;