import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer,  OptionLink } from './header.styles';

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => {
    console.log("currentUser:", currentUser);
    return(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo-container'/>
        </LogoContainer>       
        <OptionsContainer>
            <OptionLink className='option' to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink className='option' to='/contact' >
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                    :
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
            }
            <CartIcon/>
        </OptionsContainer> 
        {
            hidden ? (
                null
            ) : (
                <CartDropdown/>
            )
        }
    </HeaderContainer>
)};

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});

export default connect(mapStateToProps)( Header);