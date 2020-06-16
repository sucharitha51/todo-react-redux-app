// It specifies the each todo row
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import './styles.scss';
import ViewTodo from '../ViewTodo/ViewTodo'
import { UpdateTodo } from '../../actions/todoActions'
import { TodoApi } from '../../../api/todoApi';
import viewDetails from '../../../assets/view-details.svg';

const Todo = ({ info }) => {
  const { id, title, priority, createdAt, isDone } = info;
  const [openModal, setOpenModal] = useState(false);
  const [viewTodo, setViewTodo] = useState({});

  const dispatch = useDispatch();

  const handleTodoUpdate = id => {
    const todo = { id: id, isDone: !isDone }
    dispatch(UpdateTodo(todo))
  }

  const geTodoViewDetails = id => {
    TodoApi.getTodo(id).then(res => {
      setViewTodo(res.data)
      setOpenModal(true)
    }).catch(err => console.log(err)
  )}

  return (
    <div className='todo' style={{ 'backgroundColor' : isDone? 'rgb(232,251,240)':''}}>
      <p className='title'>{title}</p>
      <p className='priority'>{priority}</p>
      <p className='date' >{createdAt}</p>
      <input
        type="checkbox"
        checked={!!isDone}
        onChange={() => handleTodoUpdate(id)}
      />
      <div className='actions'>
        <img src={viewDetails} alt='Edit' onClick={() => geTodoViewDetails(id)} />
      </div>

      {openModal ?
        <ViewTodo
          open={openModal}
          setOpen={setOpenModal}
          viewTodoInfo={viewTodo}
        />
        :
        null
      }
    </div>
  )
}

export default Todo;