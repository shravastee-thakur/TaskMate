import express from "express";
import { createTask } from "../Controllers/taskController.js";
import { authMiddleware } from "../Middlewares/AuthCheck.js";

const router = express.Router();

// get all tasks
router.get("/get-all-tasks", (req, res) => {});

// create task
router.post("/create-task", authMiddleware, createTask);

// update task
router.put("/update-task/:id", (req, res) => {});

// delete task
router.delete("/delete-task/:id", (req, res) => {});

export default router;
