import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

const mainReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (el) => el.id !== action.payload
                ),
            };
        default:
            return "hii";
    }
};

export default mainReducer;