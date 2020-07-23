import React, { Component } from 'react';
import './todolist.css'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            todos:[] 
        }
        this.addTodos = this.addTodos.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
    }
    
    addTodos(todo){
        this.setState({
            todos:[...this.state.todos,todo]
        })
    }

    remove(id){
        this.setState({
            todos:[...this.state.todos.filter(t=>t.id !== id)]
        })
    }

    update(id,updateTask){
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return{...todo,task: updateTask}
            }
            return todo;
        })
        this.setState({todos:updatedTodos})
    }
    
    render() {
        const todos = this.state.todos.map(todo =>{
            return <Todo key={todo.id} task={todo.task} id={todo.id} removeTodo={this.remove} updatedTodo = {this.update}/>
        })
        return (
            <div className="todoList">
                <h1>Let's get some work done!</h1>
                  <TodoForm addTodos={this.addTodos} />
                 <ul>{todos}</ul>
            </div>
        )
    }
}
