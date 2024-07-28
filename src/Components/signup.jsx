import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/signup.css';
import { Link , useNavigate } from 'react-router-dom';

const Signup = ({ onSuccess }) => {
  const navigate = useNavigate()
  const [userdata, setuserdata] = useState({
    username: '',
    email: '',
    password: '',
  });

  const change = (e) => {
    const { name, value } = e.target;
    setuserdata({
      ...userdata,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!userdata.username.trim()) {
      toast.error("Invalid username");
      return;
    }
    if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(userdata.email)) {
      toast.error("Invalid Email address");
      return;
    }
    if(userdata.password.length<6 || userdata.password.length>16){
      toast.error("Passwords must be in 6-16 characters");
      return;
    }
    if (userdata.password !== document.getElementById("confirm-password").value) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/profile/signup", userdata);
      const { token, code, message } = response.data;
      
      console.log(code,message)
      if (code === 0) {
        localStorage.setItem('token', token);
        toast.success(message,{onClose:()=>{
          onSuccess(userdata.username)
          navigate('/profile')
        }});
      } else if (code === 1) {
        toast.success(message);
      } else {
        toast.error(message);
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
      <div id='main2'>
        <form id='signup-form' onSubmit={submit}>
          <span id='head2'>SignUp</span>
          <label>Username</label>
          <input
            id='username'
            name='username'
            onChange={change}
            placeholder='Enter username'
            required
          />
          <label>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            onChange={change}
            placeholder='Enter Email'
            required
          />
          <label>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            onChange={change}
            placeholder='password must be 6-16 characters'
            required
          />
          <label>Confirm Password</label>
          <input
            id='confirm-password'
            type='password'
            name='confirm-password'
            placeholder='Confirm password'
            required
          />
          <span id='ag'>
            <input type='checkbox' value='true' name='agreement' required /> Terms and condition agreement
          </span>
          <span id='signup-btn-container'>
            <button id='signup-btn' type='submit'>Create</button>
          </span>
        </form>
        <span id='login'>
          Already have an account? <Link to="/profile/login" id='login-btn'>Login</Link>
        </span>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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

export default Signup;
