import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Card from "../Components/Card";
import InputData from "../Components/InputData";

const Tasks = () => {
  const [input, setInput] = useState(false);
  return (
    <div className="bg-yellow-100 min-h-screen">
      <div>
        <TopBar />
      </div>
      <div className="px-10">
        <Card input={input} setInput={setInput} Tasks={"true"} />
      </div>
      <InputData input={input} setInput={setInput} />
    </div>
  );
};

export default Tasks;
