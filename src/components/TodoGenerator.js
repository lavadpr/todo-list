import React, { Component } from 'react';

class TodoGenerator extends Component {
    constructor(props) {
        super(props);
        
        this.state = {todoItem: ""}
    }

    addItem = () => {
        this.setState({
            todoItem:"test"
        });
    }
    
    render() {
        return (
            <div>
                <input type="text" id="todo"/>
                <input type="button" value="add" onClick={this.addItem}/>
            </div>
        );
    }
}

export default TodoGenerator;