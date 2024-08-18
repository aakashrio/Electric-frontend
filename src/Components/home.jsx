import React, { useState, useEffect } from 'react';
import Subnav from './subnav';
import '../Styles/home.css';
import ad from '../Resources/home_banner.gif';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const [topFive, setTopFive] = useState([]);

  useEffect(() => {
    const getTopFive = async () => {
      try {
        const response = await axios.get('http://localhost:5000/top');
        setTopFive(response.data);
      } catch (error) {
        console.error('Error fetching top five products:', error);
      }
    };
    getTopFive();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true
  };

  return (
    <div className='subn'>
      <Subnav />
      <div className='main_content'>
        <img src={ad} className='home_banner' alt='event-banner' />
        <hr />
        <Slider {...settings} id="mainslider">
          {topFive.length > 0 ? (
            topFive.map((item, index) => (
              <div key={index} id='slider'>
                <div style={{ backgroundImage: `url(${item.gif})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
                   <div  id='subs1' style={{ display:'flex' ,alignItems:"center" , justifyContent:"space-around", height:"100%" }}>
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      style={{ width: '200px', height: '200px'} }
                   />
                   <div style={{width:"700px", display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"space-around"}}>
                    <h3>{item.name}</h3>
                    <h6 style={{textAlign:"left"}}>{item.description}</h6>
                   </div>
                   </div>
                 </div>
              </div>
            ))
          ) : (
            <div>
              <h3>Loading...</h3>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
