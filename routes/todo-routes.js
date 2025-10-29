import express from 'express'
import { getTodoListController, insertTodoListController, marksAsDoneController, updateController } from '../controllers/todo-controller.js';

const router = express.Router();

router.get("/task", getTodoListController)

router.post("/task",insertTodoListController)

router.post("/task/done",marksAsDoneController)

router.put("/task/update",updateController)

export default router;