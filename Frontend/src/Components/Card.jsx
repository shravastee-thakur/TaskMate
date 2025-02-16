import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Card = ({ Tasks, input, setInput }) => {
  const tasks = [
    {
      title: "Prepare Project Proposal",
      description:
        "Write and finalize the project proposal document for submission by the end of the week.",
      status: "Completed",
    },
    {
      title: "Team Meeting with Developers",
      description:
        "Discuss project timelines, assign responsibilities, and resolve any ongoing issues.",
      status: "Incomplete",
    },
    {
      title: "Design Landing Page",
      description:
        "Create a user-friendly and responsive landing page for the marketing campaign.",
      status: "Completed",
    },
    {
      title: "Test Payment Integration",
      description:
        "Verify that the payment gateway works correctly with test and live environments.",
      status: "Incomplete",
    },
    {
      title: "Update User Documentation",
      description:
        "Revise user guides to include recent UI/UX updates and new features.",
      status: "Completed",
    },
  ];

  const [importantButton, setImportantButton] = useState("Incomplete");

  return (
    <div className="grid grid-cols-4 gap-8 p-4">
      {tasks &&
        tasks.map((task, index) => {
          return (
            <div key={index} className="bg-yellow-50 p-4 rounded-lg shadow-md">
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
                  <EditIcon />
                  <DeleteIcon />
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
