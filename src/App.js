import React, { useEffect} from 'react';
import Navbar from './Components/Navbar';
import axios from 'axios';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await axios.get('http://localhost:5000/status');
        console.log(response)
        if (response.data.status === 'online') {
          console.log("Server is online");
        } else {
          console.log("Server is offline");
        }
      } catch (error) {
        console.log("Unable to connect with server");
      }
    };
    checkServer();
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
