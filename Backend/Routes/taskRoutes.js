import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getcompleteTasks,
  getImpTasks,
  updateCompleteTask,
  updateImpTask,
  updateTask,
} from "../Controllers/taskController.js";
import { authMiddleware } from "../Middlewares/AuthCheck.js";

const router = express.Router();

// get all tasks
router.get("/get-all-tasks", authMiddleware, getAllTasks);

// create task
router.post("/create-task", authMiddleware, createTask);

// update task
router.put("/update-task/:id", authMiddleware, updateTask);

// delete task
router.delete("/delete-task/:id", authMiddleware, deleteTask);

// get imp task
router.get("/get-imp-tasks", authMiddleware, getImpTasks);

// update imp task
router.put("/update-imp-task/:id", authMiddleware, updateImpTask);

// get complete task
router.get("/get-comp-tasks", authMiddleware, getcompleteTasks);

// update complete task
router.put("/update-comp-task/:id", authMiddleware, updateCompleteTask);

export default router;
