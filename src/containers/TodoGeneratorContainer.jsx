import {connect} from "react-redux";
import TodoGenerator from "../components/TodoGenerator";
import {addItem} from "../actions";

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => {
        dispatch(addItem(item))
    },
});

// state represents the reducers.js? under combineReducers
const mapStateToProps = (state) => ({
    items: state.itemsFromReducers
})

const TodoGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;