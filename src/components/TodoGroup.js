import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoGroup extends Component {

    render() {
        return (
            <div>
                || {this.props.items} ||
                <TodoItem />
            </div>
        );
    }
}

export default TodoGroup;