import React from 'react'
import { IconButton } from './IconButton';
import { FaCheck, FaTimes } from 'react-icons/fa';
import '../styles/TodoItem.css';

const TodoItem = () => {
  return (
    <div className='todo-item debug'>
        <div className='todo-item-interno debug'>
            <IconButton icon={FaCheck} className='icon-check' onClick={()=>{console.log('click check')}}/>
            <span>texto</span>
        </div>
        <IconButton icon={FaTimes} className='icon-delete' onClick={()=>{console.log('click delete')}}/>
    </div>
  );
};

export {TodoItem};