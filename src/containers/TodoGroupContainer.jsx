import {connect} from "react-redux";
import TodoGroup from "../components/TodoGroup";

// state represents the reducers.js? under combineReducers
const mapStateToProps = (state) => ({
    items: state.itemsFromReducers
});

const TodoGroupContainer = connect(mapStateToProps)(TodoGroup);

export default TodoGroupContainer;