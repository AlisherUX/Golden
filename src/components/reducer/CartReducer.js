import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

const mainReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action.payload)
        break;
        case REMOVE_FROM_CART:
            return "hello"
        default:
            return "hii";
    }
}

export default mainReducer;