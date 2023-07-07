import React from 'react';
import '../styles/Title.css';
const Titles = () => {
  return (
    <>
        <div className="div-title debug">
            <h1>Todo App</h1>
        </div>
        <div>
            <h1 className='tasks'>You have done 2 de 5 TODOs</h1>
        </div>
    </>
  );
};

export {Titles};