import React, { useState, useContext } from "react";
import Bookcontext from "../Context/Bookcontext";
import { redirect, useNavigate } from "react-router";
const Signup = () => {
  const navigate = useNavigate()
  const{login, register}=  useContext(Bookcontext)
  const [log, setLog] = useState(true);
  const [rdata, setrdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const [ldata, setldata] = useState({
    email: "",
    password: "",
  });

  const handleregister = async (e) => {
    e.preventDefault();
    let success = await register(rdata.username, rdata.email, rdata.password);
    if (success) {
      navigate("/home");
      window.location.reload();
    }
    else {
      navigate("/auth");
      window.location.reload(); 
    }
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    let success = await login(ldata.email, ldata.password)
    if (success) {
      navigate("/home");
      window.location.reload(); 
    }
    else {
      navigate("/auth");
      window.location.reload(); 
    }
  };

  const onChangel = (e) => {
    setldata({ ...ldata, [e.target.name]: e.target.value });
  };

  const onChanger = (e) => {
    setrdata({ ...rdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-gray-200 overflow-hidden relative">
      <div className="relative w-11/12 md:w-1/3 bg-gray-800 shadow-xl rounded-2xl flex items-center justify-center p-8">
        {/* Signup Form */}
        <div
          className={`absolute transition-all duration-700 ease-in-out transform ${
            log
              ? "opacity-100 translate-x-0 visible"
              : "opacity-0 -translate-x-full hidden"
          } w-full`}
        >
          <form
            method="post"
            onSubmit={handleregister}
            className="w-3/4 flex flex-col items-center"
          >
            <h1 className="text-3xl font-normal mb-6">Create New Account</h1>
            <input
              required
              value={rdata.username}
              onChange={onChanger}
              name="username"
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              required
              value={rdata.email}
              onChange={onChanger}
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              required
              value={rdata.password}
              onChange={onChanger}
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              required
              value={rdata.confirmpassword}
              onChange={onChanger}
              minLength={6}
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              className={`w-full p-2 mb-4 rounded-lg bg-gray-700 text-white border border-gray-500 ${
                rdata.password !== rdata.confirmpassword
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              } focus:outline-none focus:ring-2`}
            />
            <button
              type="submit"
              disabled={rdata.password !== rdata.confirmpassword}
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
            <div className="mt-4">
              Already have an account?{" "}
              <p
                onClick={() => setLog(false)}
                className="text-blue-400 inline-block hover:underline cursor-pointer"
              >
                Login
              </p>
            </div>
          </form>
        </div>

        {/* Login Form */}
        <div
          className={`absolute transition-all duration-700 ease-in-out transform ${
            !log
              ? "opacity-100 translate-x-0 visible"
              : "opacity-0 translate-x-full hidden"
          } w-full`}
        >
          <form
            method="post"
            onSubmit={handlelogin}
            className="w-3/4 flex flex-col items-center"
          >
            <h1 className="text-3xl font-normal mb-6">
              Log in to Your Account
            </h1>
            <input
              required
              value={ldata.email}
              onChange={onChangel}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              required
              value={ldata.password}
              onChange={onChangel}
              minLength={6}
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
            <div className="mt-4">
              Don't have an account?{" "}
              <p
                onClick={() => setLog(true)}
                className="text-blue-400 inline-block hover:underline cursor-pointer"
              >
                Sign Up
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;