import { HttpClient } from './httpClient'

// This is the API. The backend root URL can be set from here.
const API = `https://backend-test.pi-top.com/todo-test/v1`


//Setting the todos URI
const TODO_API = `${API}/todos`

// The CRUD Operations of the Todo Resource.

//Create
const createTodo = todo => {
    return HttpClient.post(TODO_API, todo)
}

//get all todos
const getTodos = () => {
    return HttpClient.get(TODO_API)
}

// get individual todo
const getTodo = (id) => {
    return HttpClient.get(`${TODO_API}/${id}`)
}

// reset todos
const resetTodos = () => {
    return HttpClient.post(API + '/reset')
}

//update todo
const updateTodo = todo => {
    return HttpClient.put(`${TODO_API}/${todo.id}`, { "isDone": todo.isDone })
}

//Delete
const removeTodo = id => {
    return HttpClient.delete(`${TODO_API}/${id}`)
}

//Encapsulating in a JSON object

const TodoApi = { createTodo, getTodos, getTodo, updateTodo, removeTodo, resetTodos }

export { TodoApi }