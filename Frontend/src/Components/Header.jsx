import React from "react";

const Header = () => {
  return (
    <section className="h-auto flex justify-center items-center bg-amber-50">
      <div className="w-1/2 flex flex-col items-center text-center pt-30">
        <img src="./src/assets/Calendar.png" className="w-40 h-40" />
        <h1 className="text-5xl font-extrabold text-sky-800">TaskMate</h1>
        <h3 className="text-2xl font-semibold mt-2">Your friendly task manager</h3>
        <p className="mt-4 pb-40">
          Stay organized, prioritize tasks, and accomplish your goals
          effortlessly. <br/> With TaskMate, managing your daily workflow has never
          been easier.
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-3/5">
          <form className="p-6 border rounded-2xl bg-yellow-50 border-gray-500">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <p className="text-xl text-center mt-2">Please register here</p>
            <div className="flex flex-col mt-2">
              <label>Name</label>
              <input
                type="text"
                placeholder="Eneter your name"
                className="outline-none border-2  bg-white border-gray-500 rounded-xl p-2"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label>Email</label>
              <input type="email" placeholder="Eneter your email" 
              className="outline-none border-2  bg-white border-gray-500 rounded-xl p-2"/>
            </div>

            <div className="flex flex-col mt-2">
              <label>Password</label>
              <input type="password" placeholder="Eneter your password" 
              className="outline-none border-2  bg-white border-gray-500 rounded-xl p-2"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Header;
