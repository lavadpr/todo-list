import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                Item{this.props.itemText}
            </div>
        );
    }
}

export default TodoItem;