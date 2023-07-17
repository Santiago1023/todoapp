import React, { useContext } from 'react';
import '../styles/Title.css';
import { TodoContext } from './TodoContext';

const Titles = () => {  
  const {completedTodos, totalTodos } = useContext(TodoContext);  
  return (
    <>
        <div className="div-title">
            <h1>Todo App</h1>
        </div>
        <div>
            <h1 className='tasks'>You have done {completedTodos} de {totalTodos} TODOs</h1>
        </div>
    </>
  );
};

export {Titles};