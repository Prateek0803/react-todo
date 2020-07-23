import React, { Component } from 'react'
import './todoform.css'
import { v4 as uuidv4 } from 'uuid';
export default class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {task:""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTodos({...this.state, id: uuidv4()})
        this.setState({task:" "})
    }   

    render() {
        return (
            <div className="todo-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="task" placeholder="Your task" value={this.state.task} onChange={this.handleChange} /> 
                    <button>Add the task!!</button>
                </form>
            </div>
        )
    }
}
