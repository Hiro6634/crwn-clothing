import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo-container'/>
        </Link>       
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact' >
                CONTACT
            </Link>
            {
                currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
            }
        </div> 
    </div>
);

export default Header;