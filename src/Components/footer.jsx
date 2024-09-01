import React from 'react'
import '../Styles/footer.css'
import logo from '../Resources/webpage_head_logo.png';
import { FaRedditSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
        <hr style={{margin:'2% 0' , opacity:"0.3"}}></hr>
        <div className='footer-main'>
            <p className='footer-dis'>Our websites may contain links to other sites and resources provided by third parties. These links are offered solely for your convenience. 
                We have no control over the content of those sites or resources and accept no responsibility for them or any loss or damage that may result from your use of them. 
                These links are provided for educational purposes only.</p>

            <div className='footer-container'>
                <div className='footer-social-media'>
                    <FaRedditSquare size={30} className='footer-icon'/>
                    <FaSquareXTwitter size={30}  className='footer-icon'/>
                    <FaInstagramSquare size={30} className='footer-icon'/>
                    <FaFacebookSquare size={30}  className='footer-icon'/>
                    <FaYoutubeSquare size={30}  className='footer-icon'/>
                </div>
                <div className='footer-logo'>
                  <img alt='Electric logo' src={logo}></img>
                </div>
            </div>

            <span className='footer-copyright'>© 2024 Electric Inc .</span>

        </div>
        
    </div>
  )
}

export default Footer;