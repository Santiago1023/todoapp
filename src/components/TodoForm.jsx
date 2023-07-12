import React from 'react';
import '../styles/TodoForm.css';

const TodoForm = () => {
  return (
    <form className='todo-form debug'>
        <textarea type="text" placeholder='Write a todo'/>
        <div className='buttons'>
            <button className='button cancel-button'>cancel</button>
            <button className='button add-button'>add</button>
        </div>
    </form>
  );
};

export {TodoForm};