import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const Header = () => {
  const [state, setState] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails({
      ...userDetails,
      [name]: value,
    });
    console.log(userDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/signUp",
        userDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(res.data);

      if (res.data.success) {
        alert("User created successfully");
        setUserDetails({
          name: "",
          email: "",
          password: "",
        });
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
              {state ? "Register" : "Login"}
            </h1>
            <p className="text-xl text-center mt-2">
              {state ? "Please register here" : "Please login here"}
            </p>
            {state && (
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
                value={userDetails.email}
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
                value={userDetails.password}
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
                {state ? "Register" : "Login"}
              </button>
              <p className="mt-2">
                {state ? "Already have an account?" : "Don't have an account?"}
                <span
                  onClick={() => setState(!state)}
                  className="text-sky-800 cursor-pointer"
                >
                  {state ? " Login" : " Register"}
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
