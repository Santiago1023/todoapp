import React from 'react'
import { IconButton } from './IconButton';
import { FaCheck, FaTimes } from 'react-icons/fa';
import '../styles/TodoItem.css';


const TodoItem = ({text, onCheck, state, onDelete}) => {

  return (
    <div className='todo-item'>
        <div className='todo-item-interno'>
            <IconButton 
              icon={FaCheck}
              className='icon-check' 
              onClick={onCheck}
              />
            <span className={state ? 'underline' : 'no-underline'}>{text}</span>
            <div className='icon-delete-wrapper'>
              <IconButton
              icon={FaTimes}
              className='icon-delete'
              onClick={onDelete}
              />
            </div>
        </div>
    </div>
  );
};

export {TodoItem};