
import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import axios from 'axios';
import{ useEffect ,useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';






function App() {
  useEffect(() => {
    const checkserver = async () => {
      try {
        const response = await axios.get('http://localhost:5000/status');
        if (response.data.status === 'online') {
          console.log("Server is online");
        } else {
          console.log("Server is offline");
        }
      } catch (error) {
        console.log("Unable to connect with server");
      }
    };

    checkserver();
  }, []);
  return (
    <div className="App">
        <React.Fragment>
          <Navbar />
        </React.Fragment>      
    </div>
  );
}

export default App;
