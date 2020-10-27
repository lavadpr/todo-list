import {connect} from 'react-redux';
import TodoGenerator from "../components/TodoGenerator";

const mapDispatchToProps = (dispatch) => ({
    addItem: (todoItem) => {dispatch(addItem(todoItem))},
})

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;