import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Otp from "./Pages/Otp";
import Tasks from "./Pages/Tasks";
import ImportantTasks from "./Pages/ImportantTasks";
import CompletedTasks from "./Pages/CompletedTasks";
import IncompleteTasks from "./Pages/IncompleteTasks";

function App() {
  return (
    <div className="h-screen relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/important" element={<ImportantTasks />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/incomplete" element={<IncompleteTasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
