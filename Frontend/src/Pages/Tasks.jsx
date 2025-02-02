import React from "react";
import TopBar from "../Components/TopBar";
import Card from "../Components/Card";

const Tasks = () => {
  return (
    <div className="min h-screen">
      <div className="bg-orange-200">
        <TopBar />
      </div>
      <div className="bg-amber-100 px-10">
        <Card />
      </div>
    </div>
  );
};

export default Tasks;
