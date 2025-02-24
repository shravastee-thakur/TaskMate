import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";

const Card = ({ Tasks, input, setInput, setUpdateData }) => {
  const [tasks, setTasks] = useState([]);

  // const [importantButton, setImportantButton] = useState("Incomplete");

  // get all tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/tasks/get-all-tasks",
          { withCredentials: true }
        );

        if (res.data.success) {
          setTasks(res.data.data.tasks);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // edit
  const handleEdit = async (id, title, description) => {
    setInput(!input);
    setUpdateData({
      id: id,
      title: title,
      description: description,
    });
  };

  // delete
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/v1/tasks/delete-task/${id}`,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        alert(res.data.message);
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-8 p-4">
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <div
              key={task._id}
              className="bg-yellow-50 p-4 rounded-lg shadow-md"
            >
              <h3 className="font-bold pb-2">{task.title}</h3>
              <p>{task.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <button
                    className={`${
                      task.status === "Completed"
                        ? "bg-green-600"
                        : "bg-red-600"
                    } text-white rounded-lg px-2 py-1`}
                  >
                    {task.status}
                  </button>
                </div>

                <div className="flex gap-2 items-center">
                  <FavoriteBorderIcon />
                  {/* <FavoriteIcon /> */}

                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      handleEdit(task._id, task.title, task.description)
                    }
                  >
                    <EditIcon />
                  </button>

                  <button
                    className="cursor-pointer"
                    onClick={() => handleDelete(task._id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

      {Tasks === "true" && (
        <button
          onClick={() => setInput(!input)}
          className="flex flex-col justify-center items-center bg-yellow-50 p-4 rounded-lg shadow-md hover:scale-105 hover:cursor-pointer transition-all duration-300"
        >
          <AddCircleIcon fontSize="large" />
          <h1 className="text-2xl pt-2 text-red-600">Add Tasks</h1>
        </button>
      )}
    </div>
  );
};

export default Card;
