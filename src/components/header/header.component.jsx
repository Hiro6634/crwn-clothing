import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to='\'>
            <Logo className='logo-container'/>
        </Link>       
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact' >
                CONTACT
            </Link>
        </div> 
    </div>
);

export default Header;