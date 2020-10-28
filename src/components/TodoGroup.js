import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';

class TodoGroup extends Component {

    render() {
        const items = this.props.items.map((item) => (
            <TodoItemContainer key={item.id} entry={item} />        ));
        return (
            <div>
                {items}
            </div>
        );
    }
}

export default TodoGroup;