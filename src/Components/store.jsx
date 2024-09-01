import React from 'react';
import Subnav from './subnav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footer';
import '../Styles/store.css'

const Store = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data');
        setdata(response.data);
      } catch (error) {
        console.log("Error getting data");
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Subnav />
      <div className='store-main-content'>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className='game-cards' style={{ backgroundImage: `url(${item.imgurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='game-card-secoundary'>
                    <div className='game-logo'>
                      <img src={item.logo} alt={item.name}></img>
                    </div>
                    <span  className='game-name' key={index}>{item.name}</span>
                    <button className='game-button'>See Details</button>
                </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Store;
