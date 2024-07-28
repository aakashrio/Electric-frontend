import React, { useRef } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { TbUser } from "react-icons/tb";
import { IoClose } from 'react-icons/io5';
import headlogo from '../Resources/webpage_head_logo.png';
import '../Styles/Navbar.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Contact from './contact';
import Profile from './profile';
import Home from './home';
import Store from './store';
import Cart from './cart';
import News from './news';
import Wishlist from './wishlist'
import Subnav from './subnav';

const Navbar = () => {
    const NavRef = useRef();
    
    const shownav = () => {
        NavRef.current.classList.toggle('res_nav');
    };

    const reload = () => {
        window.location.reload();
    };

    return (
        <Router className='rout'>
            <header className='header1'>
                <img alt='Electric logo' src={headlogo} onClick={reload}></img>
                <nav ref={NavRef} className="navbar">
                    <NavLink className="link" activeClassName="active" to='/' onClick={shownav} >Home</NavLink>
                    <NavLink className="link" activeClassName="active" to='/contact' onClick={shownav} >Contact us</NavLink>
                    <NavLink className="link" activeClassName="active" id='profile' to='/profile' onClick={shownav}>
                        <button className='nav-btn-user'>
                            <span>Profile</span><TbUser></TbUser>
                        </button>
                    </NavLink>
                    <button className='nav-btn-close' onClick={shownav}>
                        <IoClose />
                    </button>
                </nav>
                <button className='nav-btn-menu' onClick={shownav}>
                    <TiThMenu />
                </button>
            </header>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/profile/*' element={<Profile />}/>
                    <Route path='/store' element={<Store />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Navbar;