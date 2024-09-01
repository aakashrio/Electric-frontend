import React, { useState, useEffect ,useRef } from 'react';
import Subnav from './subnav';
import '../Styles/home.css';
import ad from '../Resources/home_banner.gif';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination} from 'swiper/modules';
import Footer from './footer';



const Home = () => {
  const [topFive, setTopFive] = useState([]);
  const [fulldata , setfulldata] = useState([]);
  const [newgames,setnewgames]=useState([]);


  const progressCircle = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
  };


  useEffect(() => {
    const getTopFive = async () => {
      try {
        const response = await axios.get('http://localhost:5000/top');
        const fulldata = await axios.get('http://localhost:5000/topgames')
        const newgames = await axios.get('http://localhost:5000/newrelease')
        setTopFive(response.data);
        setfulldata(fulldata.data);
        setnewgames(newgames.data);
      } catch (error) {
        console.error('Error fetching top five products:', error);
      }
    };
    getTopFive();
  }, []);

  return (
    <div className='subn'>
      <Subnav />
      <div className='main_content'>
        <img src={ad} className='home_banner' alt='event-banner' />
        <hr style={{margin:'2% 0' , opacity:"0.3"}}  />
        <Swiper id="mainslider" spaceBetween={30}
        centeredSlides={true}
        autoplay={{delay: 2500,disableOnInteraction: false,}}
        pagination={{clickable: true,}}
        navigation={false}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        
        style={{"--swiper-pagination-color": "#FFFF"}}

        >
          {topFive.length > 0 ? (
            topFive.map((item, index) => (
              <SwiperSlide >
                <div key={index} id='slider'>
                  <div style={{ backgroundImage: `url(${item.gif})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
                     <div  id='subs1' style={{ display:'flex' ,alignItems:"center" , justifyContent:"space-around", height:"100%" }}>
                        <img src={item.logo}  alt={item.name}  style={{ width: 'auto', height: '200px'} }  />
                        <div style={{width:"700px", display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"space-around"}}>
                          <h3>{item.name}</h3>
                          <h6 style={{textAlign:"left"}}>{item.description}</h6>
                          <button className='game-button-home'>See Details</button>
                        </div>
                      </div>
                  </div>
                </div>
            </SwiperSlide>
            ))
          ) : (
            <div>
              <h3>Loading...</h3>
            </div>
          )}
          <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle style={{stroke:"white"}}  cx="24" cy="24" r="15"></circle>
              </svg>
          </div>
        </Swiper>
        <hr style={{margin:'2% 0' , opacity:"0.3"}} />
        <p style={{textAlign:'start'}}>New Release</p>
        <div className='top-games-container'>
          {newgames.length > 0 ? (
            newgames.map((item,index)=>(
                <div className='top-games-card' style={{ backgroundImage: `url(${item.imgurl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
                  <div className='top-card-sub' style={{borderRadius:"8px"} }>
                    <img src={item.logo}  alt={item.name}  style={{ width: '50%', height: '30%' , borderRadius:"8px"} }  />
                    <span key={index}>{item.name}</span>
                    <span key={index} className='game-category'>{item.category}</span>
                    <button className='game-button-top'>See Details</button>
                  </div>
                </div>
            ))
          ):(
            <p>unable to fetch data</p>
          ) 
          }
          </div>        
        <hr style={{margin:'2% 0' , opacity:"0.3"}} />
        <p style={{textAlign:'start'}}>Top Games</p>
        <div className='top-games-container'>
          {fulldata.length > 0 ? (
            fulldata.map((item,index)=>(
                <div className='top-games-card' style={{ backgroundImage: `url(${item.imgurl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
                  <div className='top-card-sub' style={{borderRadius:"8px"} }>
                    <img src={item.logo}  alt={item.name}  style={{ width: '50%', height: '30%' , borderRadius:"8px"} }  />
                    <span key={index}>{item.name}</span>
                    <span key={index} className='game-category'>{item.category}</span>
                    <button className='game-button-top'>See Details</button>
                  </div>
                </div>
            ))
          ):(
            <p>unable to fetch data</p>
          ) 
          }
          </div>
        






      </div>
      <Footer/>
    </div>
  );
};

export default Home;
