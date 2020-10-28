import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const onText = () => {
            this.props.changeDone(this.props.entry.id);
        }
        const onX = () => {
            this.props.deleteItem(this.props.entry.id);
        }
        return (
            <div>
                <span onClick={onText} STYLE={this.props.entry.done ? "text-decoration:line-through" : ""}>{this.props.entry.text}</span>
                <span onClick={onX}> X</span>
            </div>
        );
    }
}

export default TodoItem;