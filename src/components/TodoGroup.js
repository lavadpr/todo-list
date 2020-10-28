import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoGroup extends Component {

    render() {
        const items = this.props.items.map((item) => (
            <p>Testing {item.id} with {item.text}</p>
        ));
        return (
            <div>
                || {items} ||
                <TodoItem />
            </div>
        );
    }
}

export default TodoGroup;