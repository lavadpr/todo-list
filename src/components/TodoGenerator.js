import React, { Component } from 'react';

class TodoGenerator extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <input type="button" value="add"/>
            </div>
        );
    }
}

export default TodoGenerator;