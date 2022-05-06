import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItems = cartItems.find(
        (cartItem)=> cartItem.id === productToAdd.id
    );

    if( existingCartItems) {
        return cartItems.map((cartItem)=>
            cartItem.id===productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem 
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    // finde the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    //check if quantity is equal to 1, if it is remove that item from cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);               
    }

    //return nack cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem)=>
        cartItem.id===cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem 
    );
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0);
        setCartCount(newCartCount);
    },[cartItems]);
   
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }
    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemToCart,
        cartItems, 
        cartCount 
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};