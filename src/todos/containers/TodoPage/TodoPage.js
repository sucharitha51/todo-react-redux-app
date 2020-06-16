import React, { Component } from 'react'
import AddTodoForm from '../../components/AddTodoForm'
import TodoList from '../../components/TodoList/TodoList'
import { connect } from 'react-redux'
import * as todoActions from '../../actions/todoActions'
import './styles.scss';
import { TodoApi } from '../../../api/todoApi'

class TodoPage extends Component {
    state = {
        openAddNewModal: false
    }
    componentDidMount() {
        this.props.getTodos()
    }

    setOpenAddNewModal = (val) => {
        this.setState({ openAddNewModal: val })
    }

    resetTodos = () => {
        TodoApi.resetTodos();
    }

    render() {
        return (
            <>
                <header>
                    <h1>Todo List</h1>
                    <div className="actions">
                        <span className='add-new' onClick={() => this.setState({ openAddNewModal: true })}>Add Todo Item</span>
                        <a href='/' style={{ 'textDecoration': 'none', 'color': '#000000' }} className='add-new' onClick={this.resetTodos}>Reset All Todos</a>
                    </div>
                </header>
                {this.state.openAddNewModal ?
                    <AddTodoForm
                        openAddNewModal={this.state.openAddNewModal}
                        setOpenAddNewModal={this.setOpenAddNewModal}
                        createTodo={this.props.createTodo}
                    />
                    :
                    null
                }

                {<TodoList
                    todosList={this.props.todos}
                />}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTodos: () => dispatch(todoActions.GetTodos()),
        createTodo: (todo) => dispatch(todoActions.CreateTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)

