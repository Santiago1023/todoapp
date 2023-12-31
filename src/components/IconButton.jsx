import React from 'react';
import '../styles/TodoItem.css';

const IconButton = ({ icon: Icon, className, onClick }) => {
    return (
        <button 
          className='icon-button'  
          onClick={onClick}
        >
          <Icon className={`${className}`}/>
        </button>
  );
};
export {IconButton};