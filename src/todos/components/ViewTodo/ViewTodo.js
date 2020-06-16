// it displays the details of todo
import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../TodoList/styles.scss';
import '../../../styles/_modal.scss';

const ViewTodo = ({ open, setOpen, viewTodoInfo }) => {
    return (
        <Modal style={{ width: '50%' }} classNames={{ modal: 'modal' }} open={open} onClose={() => setOpen(false)} center>
            <div className="view-list">
                <div><span><strong>Title:</strong> </span>{viewTodoInfo.title}</div>
                <div><span><strong>Description:</strong> </span>{viewTodoInfo.description}</div>
                <div><span><strong>Priority:</strong> </span>{viewTodoInfo.priority}</div>
                <div><span><strong>Created At:</strong> </span>{viewTodoInfo.createdAt}</div>
            </div>
        </Modal>
    )
}

export default ViewTodo