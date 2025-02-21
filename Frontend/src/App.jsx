import React, { useEffect } from "react";
import Home from "./Pages/Home";
import { Routes, Route, useNavigate } from "react-router";
import Otp from "./Pages/Otp";
import Tasks from "./Pages/Tasks";
import ImportantTasks from "./Pages/ImportantTasks";
import CompletedTasks from "./Pages/CompletedTasks";
import IncompleteTasks from "./Pages/IncompleteTasks";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // useEffect(() => {
  //   if (isLoggedIn === false) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="h-screen relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/important" element={<ImportantTasks />} />
        <Route path="/completed" element={<CompletedTasks />} />
        <Route path="/incomplete" element={<IncompleteTasks />} />
      </Routes>
    </div>
  );
}

export default App;
