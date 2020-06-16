// Import the  TodoActionTypes
import * as TodoActions from '../actions/todoActionTypes'

const initialState = []
export function TodoListReducer(state = initialState, action) {
    switch (action.type) {
        // The cases ordered in CRUD order.
        // Create
        case TodoActions.CREATE_TODO_SUCCESS: {
            return [
                ...state,
                action.todo
            ];
        }

        //Read    
        case TodoActions.GET_TODOS_SUCCESS: {
            return action.todos.data;
        }

        //Update
        case TodoActions.UPDATE_TODO_SUCCESS: {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        isDone: action.todo.isDone,
                    };
                } else {
                    return todo;
                }
            });
        }
        
        default:
            return state
    }
 }