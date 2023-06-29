import React, { useReducer } from "react";
import mainReducer from "./CartReducer";
import MainContext from "./CartContext";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

const CartState = ({ children }) => {
    const initialState = {
        cartItems: [],
    };

    const [state, dispatch] = useReducer(mainReducer, initialState);
    const addToCart = (el) => dispatch({ type: ADD_TO_CART, payload: el });
    const removeFromCart = (id) =>
        dispatch({ type: REMOVE_FROM_CART, payload: id });

    return (
        <MainContext.Provider
            value={{ cartItems: state.cartItems, addToCart, removeFromCart }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default CartState;