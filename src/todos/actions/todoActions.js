//Import the Todo API 

import { TodoApi } from "../../api/todoApi";
import * as actionTypes from '../actions/todoActionTypes'
//These are the action types Also ordered in CRUD Order.

//Create

//The dispatch function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateTodo(todo) {
    return dispatch => {
        return TodoApi.createTodo(todo).then(res => {
            dispatch(CreateTodoSuccess(res.data))
        })
    }
}

export function CreateTodoSuccess(todo) {
    return {
        type: actionTypes.CREATE_TODO_SUCCESS,
        todo
    }
}

// Read
export function GetTodos() {
    return dispatch => {
        return TodoApi.getTodos().then(res => {
            dispatch(GetTodosSuccess(res))
        })
    }
}

export function GetTodosSuccess(todos) {
    return {
        type: actionTypes.GET_TODOS_SUCCESS,
        todos
    }
}

// Update
export function UpdateTodo(todo) {
    return dispatch => {
        TodoApi.updateTodo(todo).then(res => {
            dispatch(UpdateTodoSuccess(res.data))
        })
    }
}

export function UpdateTodoSuccess(todo) {
    return {
        type: actionTypes.UPDATE_TODO_SUCCESS,
        todo,
        id: todo.id
    }
}