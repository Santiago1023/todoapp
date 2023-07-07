import React from 'react'
import '../styles/TodoList.css'

const TodoList = ({children}) => {
  return (
    <div className='todo-list debug'>
        {children}
    </div>
  );
};

export {TodoList};