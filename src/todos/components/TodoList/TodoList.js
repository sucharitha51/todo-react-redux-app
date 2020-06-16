// it iterates through the todo list
import React from 'react'
import './styles.scss';
import Todo from '../Todo/Todo'

const TodoList = ({ todosList }) => {
  return (
    <div className='todos-list'>
      <div className='columns'>
        <p className='title'>Title</p>
        <p className='priority'>Priority</p>
        <p className='date'>date</p>
        <p className='isDone'>Done</p>
        <p className='isDone'>View</p>
      </div>

      {todosList && todosList.length === 0 ?
        <p>No data.</p>
        :
        todosList && todosList.map(item => (
          <Todo
            key={item.id}
            info={item}
          />
        ))
      }
    </div>
  )
}
export default TodoList;