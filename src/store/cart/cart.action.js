import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";


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

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export const setIsCartOpen = (boolean) => createAction( CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems,cartItemToRemove) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
