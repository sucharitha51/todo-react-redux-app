import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../../styles/_modal.scss';

class AddItemForm extends Component {
  state =  { title: "", description: "", priority: 0, tags: [] }

  handleInputChange = e => {
    if (e.target.name === 'title') this.setState({ title: e.target.value });
    if (e.target.name === 'description') this.setState({ description: e.target.value });
    if (e.target.name === 'priority') this.setState({ priority: parseInt(e.target.value) });
    if (e.target.name === 'tags') this.setState({ tags: [e.target.value] });
  };

  createTodo = (e) => {
    e.preventDefault()
    this.props.createTodo(this.state)
    this.props.setOpenAddNewModal(false);
  }

  render() {
    return (
      <Modal classNames={{ modal: 'modal' }} open={this.props.openAddNewModal} onClose={() => this.props.setOpenAddNewModal(false)} center>
        <h2 className='title'>Add New Item</h2>

        <form onSubmit={this.createTodo}>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            placeholder='Todo title'
            value={this.state.title}
            onChange={this.handleInputChange}
            required={true}
          />

          <label htmlFor='description'>Description:</label>
          <input
            type='textarea'
            name='description'
            placeholder='Description'
            value={this.state.description}
            onChange={this.handleInputChange}
            required={true}
          />

          <label htmlFor='priority'>Priority:</label>
          <input
            type='number'
            name='priority'
            placeholder='Priority'
            value={this.state.priority}
            onChange={this.handleInputChange}
            required={true}
          />

          <label htmlFor='tags'>tags:</label>
          <input
            type='textarea'
            name='tags'
            placeholder='Tags'
            value={this.state.tags}
            onChange={this.handleInputChange}
          />

          <button className='confirm' type='submit'>Confirm</button>
        </form>
        <button className='cancel' type='reset' onClick={() => this.props.setOpenAddNewModal(false)}>Cancel</button>
      </Modal>
    )
  }
}
export default AddItemForm;