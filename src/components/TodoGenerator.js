import React, { Component } from 'react';

class TodoGenerator extends Component {

    onSubmit = (event) => {
        event.preventDefault();

        this.props.addItem(event.target.entry.value);
    };
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="entry" />
                <input type="submit" value="add" />
            </form>
        );
    }
}

export default TodoGenerator;