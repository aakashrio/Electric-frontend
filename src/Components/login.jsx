import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onSuccess }) => {

  const navigate = useNavigate();
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setlogindata({
      ...logindata,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const email = logindata.email.trim();
    const password = logindata.password.trim();

    try {
      const response = await axios.post("http://localhost:5000/profile/login",{email , password}
      );
      const { token, code, message , username } = response.data;
      console.log(code , message ,username)
      if (code === 0) {
        localStorage.setItem('token', token);
        toast.success(message,{onClose: () => {
            onSuccess(username);
            navigate('/profile')
          },
        });
      }else{
        toast.error(message)
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.info(error.response.data.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <div>
      <div id="main">
        <form id="login-form" onSubmit={submit}>
          <span id="head">Login</span>
          <label>Email</label>
          <input id="email" type="email" name="email" onChange={change}></input>
          <label>Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={change}
          ></input>
          <span id="login-btn-container">
            <button type="submit" id="login-btn">
              Login
            </button>
          </span>
        </form>
        <a id="fpass">Forgot Password &#x3f;</a>
        <span id="signup">
          Don't have an account?{" "}
          <Link to="/profile/signup" id="signup-btn">
            Signup
          </Link>
        </span>
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

export default Login;
