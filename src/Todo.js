import React, { Component } from 'react'
import './todo.css'
export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            isEdit:false,
            task:this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleRemove(){
        this.props.removeTodo(this.props.id)
    }

    toggleForm(){
        this.setState({isEdit : !this.state.isEdit})
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleUpdate(e){
        e.preventDefault();
        this.props.updatedTodo(this.props.id, this.state.task)
        this.setState({isEdit:false})
    }

    render() {
        let result;
        if(this.state.isEdit){
            result = (
                <div className="todo">
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            );
        }else{
            result = (
                <div className="todo">
                    <li className="todo-task">{this.props.task}</li>
                    <div className="buttons">
                        <button onClick={this.toggleForm}><i class="fas fa-pen"></i></button>
                        <button onClick={this.handleRemove}><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            )
        }
        return result;
    }
}
