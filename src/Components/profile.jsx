import React, { useState, useEffect } from "react";
import "../Styles/profile.css";
import Login from "./login";
import Signup from "./signup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from 'react-router-dom';

const Profile = () => {
  // toast.info("")
  const [user, setuser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : { name: "" };
  });

  useEffect(() => {
    if (user.name) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const getData = (username) => {
    setuser({ name: username });
  };

  const logout = () => {
      localStorage.removeItem('token');
      setuser({ name: "" });
      toast.success("logout sucessfull")
  };
  return (
    <div>
    <div className="main">
      <div className="user-content">
        {user.name ? (
          <div className="user-profile">
            <span>Profile</span>
            <hr />
            <p>Welcome, {user.name}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Routes>
            <Route path="/login" element={<Login onSuccess={getData} />} />
            <Route path="/signup" element={<Signup onSuccess={getData} />} />
            <Route path="*" element={<Navigate to="/profile/login" />} />
          </Routes>
        )}
      </div>
    </div>
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Profile;