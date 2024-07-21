import React, { useState, useEffect } from "react";
import "../Styles/profile.css";
import Login from "./login";
import Signup from "./signup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';

const Profile = () => {
  const [logindata, setlogindata] = useState(false);
  const [login, setlogin] = useState(true);
  const [user, setuser] = useState({
    name: "",
  });

  useEffect(() => {
    if (user.name === "") {
      setlogindata(false);
    } else {
      setlogindata(true);
    }
  }, [user, logindata]);

  useEffect(() => {
    console.log(logindata);
    console.log(user);
  }, [user, logindata]);

  const getdata = (username) => {
    setlogindata(true);
    setuser({
      name: username,
    });
  };



  const logout = () => {
    setlogindata(false);
    setuser({ name: "" });
    // ,
    //   {
    //   onClose: () => {
    //     setuser({ name: '' });
    //     setlogindata(false);
    //   }
    // }

    toast.success("Logout successful");
  };

  return (
    <div className="main">
      <div className="user-content">
        {logindata ? (
          <div className="user-profile">
            <span>Profile</span>
            <hr />
            <p>Welcome, {user.name}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Routes>
            <Route path="/login" element={<Login onSuccess={getdata} />} />
            <Route path="/signup" element={<Signup onSuccess={getdata} />} />
            <Route path="*" element={<Navigate to="/profile/login" />} />
          </Routes>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
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
