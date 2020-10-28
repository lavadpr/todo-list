import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

class TodoGenerator extends Component {

    onSubmit = (event) => {
        event.preventDefault();

        const id = uuidv4();
        const entry = event.target.entry.value;
        const item = { id: id, text: entry, done: false};

        this.props.addItem(item);
        
        event.target.entry.value = "";
    };
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="entry" placeholder="input a new todo here..." />
                <input type="submit" value="add" />
            </form>
        );
    }
}

export default TodoGenerator;