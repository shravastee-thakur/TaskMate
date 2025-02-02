import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = () => {
  const tasks = [
    {
      title: "Prepare Project Proposal",
      description:
        "Write and finalize the project proposal document for submission by the end of the week.",
    },
    {
      title: "Team Meeting with Developers",
      description:
        "Discuss project timelines, assign responsibilities, and resolve any ongoing issues.",
    },
    {
      title: "Design Landing Page",
      description:
        "Create a user-friendly and responsive landing page for the marketing campaign.",
    },
    {
      title: "Test Payment Integration",
      description:
        "Verify that the payment gateway works correctly with test and live environments.",
    },
    {
      title: "Update User Documentation",
      description:
        "Revise user guides to include recent UI/UX updates and new features.",
    },
    {
      title: "Prepare Sprint Report",
      description:
        "Document completed tasks, blockers, and planned features for the next sprint.",
    },
    {
      title: "Code Review Session",
      description:
        "Review the code for the latest feature updates and provide feedback to the developers.",
    },
    {
      title: "Resolve Bug #345",
      description:
        "Investigate and fix the intermittent login issue reported by multiple users.",
    },
    {
      title: "Customer Feedback Analysis",
      description:
        "Analyze customer feedback to identify pain points and feature requests.",
    },
    {
      title: "Optimize Database Queries",
      description:
        "Improve the performance of slow-running database queries for better app speed.",
    },
  ];

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
                  <button className="bg-green-600 text-white rounded-lg px-2 py-1">
                    Incomplete
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
    </div>
  );
};

export default Card;
