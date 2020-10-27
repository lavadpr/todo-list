import {connect} from "react-redux";
import TodoGroup from "../components/TodoGroup";

const mapStateToProps = (state) => ({
    items: state.items
});

const TodoGroupContainer = connect(mapStateToProps)(TodoGroup);

export default TodoGroupContainer;