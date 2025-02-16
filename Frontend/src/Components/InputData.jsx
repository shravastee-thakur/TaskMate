import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const InputData = ({ input, setInput }) => {
  return (
    <>
      {/* <div className="fixed top-0 left-0 bg-white opacity-50 h-screen w-full"></div> */}
      {input && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full">
          <div className="w-2/6 bg-amber-300 px-4 py-4 rounded-xl">
            <button
              onClick={() => setInput(!input)}
              className="float-right cursor-pointer"
            >
              <CloseIcon />
            </button>
            <input
              type="text"
              placeholder="Enter Task Here"
              className="bg-white p-2 mt-4 rounded-xl w-full outline-none"
            />
            <textarea
              name="description"
              cols="30"
              rows="10"
              className="bg-white p-2 rounded-xl w-full outline-none mt-4"
              placeholder="Enter Description Here"
            ></textarea>
            <div className="text-center">
              <button className="bg-orange-600 text-white rounded-xl font-semibold px-9 py-2 mt-2 cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputData;
