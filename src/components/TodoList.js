import React, { Component } from 'react';
import TodoGroupContainer from '../containers/TodoGroupContainer';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';


class TodoList extends Component {
    render() {
        return (
            <div>
                <p>TodoList</p>
                <TodoGroupContainer />
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;