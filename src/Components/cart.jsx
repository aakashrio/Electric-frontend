import React from 'react'
import Subnav  from './subnav'
import Footer from './footer';
const cart = () => {
  return (
    
    <div>
      <Subnav />
      <span >Cart</span>
      <Footer/>
    </div>
  )
}


export default React.memo(cart);