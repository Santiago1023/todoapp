import React from 'react'
import { IconButton } from './IconButton';
import { FaCheck, FaTimes } from 'react-icons/fa';
import '../styles/TodoItem.css';

const TodoItem = ({text}) => {
  return (
    <div className='todo-item'>
        <div className='todo-item-interno'>
            <IconButton icon={FaCheck} className='icon-check' onClick={()=>{console.log('click check')}}/>
            <span>{text}</span>
            <div className='icon-delete-wrapper'>
              <IconButton icon={FaTimes} className='icon-delete' onClick={()=>{console.log('click delete')}}/>
            </div>
        </div>
    </div>
  );
};

export {TodoItem};