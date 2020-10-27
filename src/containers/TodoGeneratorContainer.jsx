import {connect} from "react-redux";
import TodoGenerator from "../components/TodoGenerator";
import {addItem} from "../actions";

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => {
        dispatch(addItem(item))
    },
});

const mapStateToProps = (state) => ({
    items: state.items
})

const TodoGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;