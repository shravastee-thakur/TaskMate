import tasksModel from "../Models/tasksModel.js";
import userModel from "../Models/userModel.js";

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id; // Extract user ID from req.user (after middleware verification)

    if (!title || !description) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }

    // Check if user exists
    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Create and save new task
    const newTask = new tasksModel({ title, description, user: userId });
    const savedTask = await newTask.save();

    // Push task ID to user's tasks array and save
    user.tasks.push(savedTask._id);
    await user.save();

    res.status(201).json({
      success: true,
      data: savedTask,
      message: "Task created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const allTasks = await userModel
      .findById(userId)
      .select("-password")
      .populate({ path: "tasks", options: { sort: { createdAt: -1 } } });
    res.status(200).json({ success: true, data: allTasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.user.id;
    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    user.tasks = user.tasks.filter((task) => task.toString() !== taskId);
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.user.id;

    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { title, description } = req.body;

    const updatedTask = await tasksModel.findByIdAndUpdate(taskId, {
      title,
      description,
    });

    user.tasks.push(updatedTask._id);
    await user.save();

    res.status(200).json({
      success: true,
      data: updatedTask,
      message: "Task updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getImpTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const importantTasks = await userModel
      .findById(userId)
      .select("-password")
      .populate({
        path: "tasks",
        match: { important: true },
        options: { sort: { createdAt: -1 } },
      });
    res.status(200).json({ success: true, data: importantTasks.tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
export const updateImpTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.user.id;

    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const taskData = await Task.findById(taskId);
    const importantTask = taskData.important;

    await Task.findByIdAndUpdate(taskId, {
      important: !importantTask,
    });

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getcompleteTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const completeTasks = await userModel
      .findById(userId)
      .select("-password")
      .populate({
        path: "tasks",
        match: { complete: true },
        options: { sort: { createdAt: -1 } },
      });
    res.status(200).json({ success: true, data: completeTasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCompleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.user.id;

    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const taskData = await Task.findById(taskId);
    const completeTask = taskData.complete;

    await Task.findByIdAndUpdate(taskId, {
      complete: !completeTask,
    });

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
