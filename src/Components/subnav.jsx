import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import '../Styles/subnav.css'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";


const subnav = () => {
  return (
    <div className='sub2'>
        <header className='header2'>
            <nav>
                <div id='div1'>
                    <IoMdSearch />
                    <input placeholder='search here..'></input>
                </div>
                <div id='div2'>
                    <NavLink className="link" activeClassName="active" to='/store'>store</NavLink>
                    <NavLink className="link" activeClassName="active" id='news' to='/news'>News</NavLink>
                </div>
                <div id='div3'>
                    <NavLink className="link" activeClassName="active" id='whishlist' to='/wishlist'>wishlist</NavLink>
                    <NavLink className="link" activeClassName="active" id='cart' to='/cart'>Cart <HiOutlineShoppingCart /></NavLink>
                </div>
            </nav>
        </header>
    </div>
  )

}

export default subnav