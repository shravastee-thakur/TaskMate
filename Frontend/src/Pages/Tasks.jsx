import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Card from "../Components/Card";
import InputData from "../Components/InputData";

const Tasks = () => {
  const [input, setInput] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: "",
    title: "",
    description: "",
  });
  return (
    <div className="bg-yellow-100 min-h-screen">
      <div>
        <TopBar />
      </div>
      <div className="px-10">
        <Card
          input={input}
          setInput={setInput}
          Tasks={"true"}
          setUpdateData={setUpdateData}
        />
      </div>
      <InputData
        input={input}
        setInput={setInput}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />
    </div>
  );
};

export default Tasks;
