import React from 'react';
import Subnav  from './subnav'

const Store = () => {
  return (
    <div>
      <Subnav />
      <span >Store</span>
    </div>
  )
}


export default React.memo(Store);