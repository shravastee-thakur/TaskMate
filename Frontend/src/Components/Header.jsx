import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useNavigate } from "react-router";

const Header = () => {
  const Navigate = useNavigate();

  const [isRegister, setiIsRegister] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    if (isRegister) {
      const { name, value } = e.target;

      setUserDetails({
        ...userDetails,
        [name]: value,
      });
      console.log(userDetails);
    } else {
      const { name, value } = e.target;

      setLoginDetails({
        ...loginDetails,
        [name]: value,
      });
      console.log(loginDetails);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // endpoints
      const endpoints = isRegister
        ? "http://localhost:3000/api/v1/user/signUp"
        : "http://localhost:3000/api/v1/user/login";

      // payload
      const payload = isRegister ? userDetails : loginDetails;

      // send request
      const res = await axios.post(endpoints, payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res.data);

      if (res.data.success) {
        alert(
          isRegister
            ? "User registered successfully"
            : "User logged in successfully"
        );
        if (!isRegister) {
          Navigate("/tasks");
        }

        // clear fields
        if (isRegister) {
          setUserDetails({
            name: "",
            email: "",
            password: "",
          });
        } else {
          setLoginDetails({
            email: "",
            password: "",
          });
        }
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <section className="h-auto flex justify-center items-center bg-amber-50">
      <div className="w-1/2 flex flex-col items-center text-center pt-30">
        <img src="./src/assets/Calendar.png" className="w-40 h-40" />
        <h1 className="text-5xl font-bold text-sky-800">TaskMate</h1>
        <h3 className="text-2xl font-semibold mt-2">
          Your friendly task manager
        </h3>
        <p className="mt-4 pb-40">
          Stay organized, prioritize tasks, and accomplish your goals
          effortlessly. <br /> With TaskMate, managing your daily workflow has
          never been easier.
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-3/5">
          <form
            onSubmit={handleSubmit}
            className="p-6 border rounded-2xl bg-yellow-50 border-orange-700"
          >
            <h1 className="text-2xl font-bold text-center">
              {isRegister ? "Register" : "Login"}
            </h1>
            <p className="text-xl text-center mt-2">
              {isRegister ? "Please register here" : "Please login here"}
            </p>
            {isRegister && (
              <div className="flex flex-col mt-2">
                <label>Name</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Eneter your name"
                  name="name"
                  value={userDetails.name}
                  className="outline-none border-2  bg-white border-gray-500 rounded-xl p-2"
                />
              </div>
            )}

            <div className="flex flex-col mt-2">
              <label>Email</label>
              <input
                required
                onChange={handleChange}
                type="email"
                placeholder="Eneter your email"
                name="email"
                value={isRegister ? userDetails.email : loginDetails.email}
                className="outline-none border-2  bg-white border-gray-500 rounded-xl p-2"
              />
            </div>

            <div className="relative flex flex-col mt-2">
              <label>Password</label>
              <input
                required
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Eneter your password"
                name="password"
                value={
                  isRegister ? userDetails.password : loginDetails.password
                }
                className="outline-none border-2  bg-white border-gray-500 rounded-xl p-2"
              />
              <div className="absolute top-8 right-3">
                {showPassword ? (
                  <VisibilityIcon
                    onClick={() => setShowPassword(!showPassword)}
                    fontSize="small"
                    className="cursor-pointer"
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => setShowPassword(!showPassword)}
                    fontSize="small"
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <button
                type="submit"
                className="w-full mt-4 bg-green-800 text-white p-2 rounded-xl cursor-pointer"
              >
                {isRegister ? "Register" : "Login"}
              </button>
              <p className="mt-2">
                {isRegister
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <span
                  onClick={() => setiIsRegister(!isRegister)}
                  className="text-sky-800 cursor-pointer"
                >
                  {isRegister ? " Login" : " Register"}
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Header;
