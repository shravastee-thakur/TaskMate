import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const InputData = ({ input, setInput, updateData, setUpdateData }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setData({ title: updateData.title, description: updateData.description });
  }, [updateData]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/tasks/create-task",
        {
          title: data.title,
          description: data.description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        alert(res.data.message);
        setData({ title: "", description: "" });
        setInput(!input);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/v1/tasks/update-task/${updateData.id}`,
        {
          title: data.title,
          description: data.description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        alert(res.data.message);
        setData({ title: "", description: "" });
        setInput(!input);
        setUpdateData({ id: "", title: "", description: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <div className="fixed top-0 left-0 bg-white opacity-50 h-screen w-full"></div> */}
      {input && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full">
          <div className="w-2/6 bg-amber-300 px-4 py-4 rounded-xl">
            <button
              onClick={() => {
                setInput(!input);
                setUpdateData({ id: "", title: "", description: "" });
                setData({ title: "", description: "" });
              }}
              className="float-right cursor-pointer"
            >
              <CloseIcon />
            </button>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              value={data.title}
              placeholder="Enter Task Here"
              className="bg-white p-2 mt-4 rounded-xl w-full outline-none"
            />
            <textarea
              onChange={handleChange}
              type="text"
              name="description"
              value={data.description}
              cols="30"
              rows="10"
              className="bg-white p-2 rounded-xl w-full outline-none mt-4"
              placeholder="Enter Description Here"
            ></textarea>
            <div className="text-center">
              {updateData.id && (
                <button
                  onClick={handleUpdate}
                  className="bg-orange-600 text-white rounded-xl font-semibold px-9 py-2 mt-2 cursor-pointer"
                >
                  Update
                </button>
              )}
              {!updateData.id && (
                <button
                  onClick={handleClick}
                  className="bg-orange-600 text-white rounded-xl font-semibold px-9 py-2 mt-2 cursor-pointer"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputData;
