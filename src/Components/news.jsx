import React from 'react'
import Subnav  from './subnav'
import Footer from './footer';
const news = () => {
  return (
    
    <div>
      <Subnav />
      <span >News</span>
      <Footer />
    </div>
  )
}


export default React.memo(news);