import React from 'react'
import '../styles/TodoList.css'

const TodoList = ({children}) => {
  return (
    <div className='todo-list'>
        {children}
    </div>
  );
};

export {TodoList};