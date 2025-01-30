import React from "react";

const Navbar = () => {
  return (
    <div className="bg-sky-800 text-white w-full h-16 flex items-center">
      <div className="ml-8 flex items-center gap-2">
        <img src="./src/assets/GreenTick.png" className="w-9 h-9" />
        <h1 className="text-3xl font-bold">TaskMate</h1>
      </div>
    </div>
  );
};

export default Navbar;
