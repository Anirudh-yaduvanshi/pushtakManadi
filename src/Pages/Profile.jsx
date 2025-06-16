import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Bookcontext from "../Context/Bookcontext";
const Profile = () => {
    const {fetchUserData , user}=  useContext(Bookcontext)
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, [navigate]);

 
  const logouthandler = () => {
    localStorage.removeItem("auth-token");
    navigate("/");
    window.location.reload(); // Full reload after navigation
  };



  return (
    <div className="bg-gray-900 min-h-screen w-screen flex items-center justify-center text-gray-200">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl text-center flex flex-col w-11/12 md:w-1/3">
        <h2 className="text-3xl font-bold mb-6">Profile</h2>

        {user ? (
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <p className="text-gray-300 mb-2">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> {user.email}
            </p>
          
          </div>
        ) : (
          <p className="text-red-500">Loading user data...</p>
        )}

        <a
          href="/"
          onClick={logouthandler}
          className="bg-red-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-700 transition duration-300 shadow-md"
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default Profile;
