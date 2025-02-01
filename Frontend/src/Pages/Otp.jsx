import React from "react";

const Otp = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-amber-50">
      <div className="rounded-xl p-8 bg-blue-400 text-white">
        <h1 className="text-xl font-bold text-center mb-2">Enter otp here</h1>
        <div>
          <input type="text" className="outline-none bg-white rounded-xl p-2" />
          <p className="text-center mt-2">Otp will expire in 5 minutes</p>
        </div>
        <div className="text-center">
          <button className="bg-green-700 text-white rounded-xl p-2 mt-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
