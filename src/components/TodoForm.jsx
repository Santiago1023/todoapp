import React, { useState } from 'react';
import '../styles/TodoForm.css';

const TodoForm = ({openModal, setOpenModal, todoList, setTodoList}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedList = [...todoList];
    const todo = {'desc': newTodoValue, 'state': false};
    updatedList.push(todo);
    setTodoList(updatedList);
    setOpenModal(!openModal);
    localStorage.setItem('data', JSON.stringify(updatedList));
  }
  const [newTodoValue, setNewTodoValue] = useState('');
  const onChange = (event) =>{
    setNewTodoValue(event.target.value);
  } 
  return (
    <form className='todo-form debug' onSubmit={handleSubmit}>
        <h1>Add a todo</h1>
        <textarea onChange={onChange} rows='5' placeholder='Description' className='desc-text-area'/>
        <div className='buttons'>
            <button className='button cancel-button' type='button' onClick={()=>{setOpenModal(!openModal)}}>cancel</button>
            <button className='button add-button' type='submit'>add</button>
        </div>
    </form>
  );
};

export {TodoForm};