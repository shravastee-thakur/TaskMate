import React from "react";
import TopBar from "../Components/TopBar";
import Card from "../Components/Card";

const IncompleteTasks = () => {
  return (
    <div className="bg-yellow-100 min-h-screen">
      <TopBar />
      <div className="px-10">
        <Card Tasks={"false"} />
      </div>
    </div>
  );
};

export default IncompleteTasks;
