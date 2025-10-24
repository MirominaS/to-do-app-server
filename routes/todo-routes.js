import express from 'express'
import { getTodoListController, insertTodoListController } from '../controllers/todo-controller.js';

const router = express.Router();

router.get("/task", getTodoListController)

router.post("/task",insertTodoListController)

export default router;