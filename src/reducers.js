import { combineReducers } from "redux";

const itemsFromReducers = (state = [], action) => {
    if (action.type === "ADD_ITEM") {
        return [...state, action.payload];
    }
    if(action.type === "CHANGE_DONE"){
        return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
      }
    if(action.type === "DELETE_ITEM"){
        return state.filter(todo => todo.id !== action.payload);
    }
    return state;
}


export default combineReducers({
    itemsFromReducers
})