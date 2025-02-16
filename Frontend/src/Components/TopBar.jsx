import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = () => {
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
        <button className="bg-orange-600 text-white px-4 py-1 rounded-xl">
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
