import { combineReducers } from "redux";

const todoMessage = (state = "", action) => {
    if (action.type === "ADD_ITEM") {
        return action.payload;
    }
    return state;
}


export default combineReducers({
    todoMessage
})