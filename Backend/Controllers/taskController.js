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
