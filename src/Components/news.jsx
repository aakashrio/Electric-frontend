import React from 'react'
import Subnav  from './subnav'
const news = () => {
  return (
    
    <div>
      <Subnav />
      <span >News</span>
    </div>
  )
}


export default React.memo(news);