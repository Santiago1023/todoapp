import React from 'react';
import '../styles/Title.css';
const Titles = ({completedTodos, totalTodos}) => {
  return (
    <>
        <div className="div-title debug">
            <h1>Todo App</h1>
        </div>
        <div>
            <h1 className='tasks'>You have done {completedTodos} de {totalTodos} TODOs</h1>
        </div>
    </>
  );
};

export {Titles};