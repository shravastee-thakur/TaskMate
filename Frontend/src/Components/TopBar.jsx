import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const TopBar = () => {
  const Navigate = useNavigate();
  const data = [
    {
      title: "All tasks",
      link: "/tasks",
    },
    {
      title: "Important tasks",
      link: "/important",
    },
    {
      title: "Completed tasks",
      link: "/completed",
    },
    {
      title: "Incomplete tasks",
      link: "/incomplete",
    },
  ];

  // Logout
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);

      if (res.data.success) {
        alert("User logged out successfully");
        Navigate("/");
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="flex justify-between px-10 py-4 bg-sky-800 text-white">
      <div>
        <NavLink to={"/tasks"}>
          <h1 className="text-2xl font-bold">TaskMate</h1>
        </NavLink>
      </div>
      <div className="flex gap-10 justify-evenly items-center">
        {data.map((item, index) => {
          return (
            <NavLink key={index} to={item.link}>
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <div className="flex gap-8 items-center">
        <h3>Sameer</h3>
        <button
          onClick={handleSubmit}
          className="bg-orange-600 text-white px-4 py-1 rounded-xl cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
