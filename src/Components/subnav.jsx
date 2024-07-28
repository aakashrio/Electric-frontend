import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/subnav.css';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiNewspaper } from "react-icons/gi";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiHomeModern } from "react-icons/hi2";

const Subnav = () => {
    const [searchVisible, setSearchVisible] = useState(window.innerWidth > 796);
    const [screenSize, setScreenSize] = useState(window.innerWidth <= 796);
    const [containerVisible, setContainerVisible] = useState(true);
    const [expandSearch, setExpandSearch] = useState(false);

    const handleSearch = () => {
        if (screenSize) {
            setSearchVisible(true);
            setContainerVisible(false);
            setExpandSearch(true);
        }
    };

    const handleClose = () => {
        if (screenSize) {
            setSearchVisible(false);
            setContainerVisible(true);
            setExpandSearch(false);
        }
    };

    const updateScreen = () => {
        const width = window.innerWidth;
        setScreenSize(width <= 796);
        setSearchVisible(width > 796); 
        setContainerVisible(true);
        setExpandSearch(false);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreen);
        return () => window.removeEventListener('resize', updateScreen);
    }, []);

    return (
        <div className='sub2'>
            <header className='header2'>
                <nav>
                    <div id='div1' className={expandSearch ? 'expand-search' : ''}>
                        <IoMdSearch onClick={handleSearch} activeClassName="active" id='search' size={20}  />
                        <input type='text' placeholder='search here..' className={searchVisible ? 'search_visible' : 'search_hidden'} />
                        <IoIosCloseCircleOutline onClick={handleClose}  className={searchVisible && screenSize ? 'search-close-btn-visible' : 'search-close-btn-hidden'} />
                    </div>
                    <div className={containerVisible ? 'div2' : 'div2-hidden'}>
                        <NavLink className="link" activeClassName="active"  to='/store'><span>Store</span> <HiHomeModern size={20}  id='store-icon' className='subnav-icon'/></NavLink>
                        <NavLink className="link" activeClassName="active" id='news' to='/news'><span>News</span><GiNewspaper size={20} id='news-icon' className='subnav-icon' /></NavLink>
                    </div>
                    <div id='div3' className={containerVisible ? 'div3' : 'div3-hidden'}>
                        <NavLink className="link" activeClassName="active" id='wishlist' to='/wishlist'><span>Wishlist</span><IoBookmarkOutline size={20} id='wishlist-icon' className='subnav-icon' color='aliceblue'/></NavLink>
                        <NavLink className="link" activeClassName="active" id='cart' to='/cart'><span>Cart</span><HiOutlineShoppingCart size={20}  id='cart-icon' className='subnav-icon' /></NavLink>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Subnav;
