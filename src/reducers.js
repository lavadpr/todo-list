import { combineReducers } from "redux";

const itemsFromReducers = (state = [], action) => {
    if (action.type === "ADD_ITEM") {
        return [...state, action.payload];
    }
    return state;
}


export default combineReducers({
    itemsFromReducers
})