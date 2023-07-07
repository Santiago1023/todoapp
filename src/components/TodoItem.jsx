import React from 'react'
import { IconButton } from './IconButton';
import { FaCheck, FaTimes } from 'react-icons/fa';
import '../styles/TodoItem.css';

const TodoItem = ({text}) => {
  return (
    <div className='todo-item debug'>
        <div className='todo-item-interno debug'>
            <IconButton icon={FaCheck} className='icon-check debug' onClick={()=>{console.log('click check')}}/>
            <span className='spam-text debug'>{text}</span>
        </div>
        <IconButton icon={FaTimes} className='icon-delete debug' onClick={()=>{console.log('click delete')}}/>
    </div>
  );
};

export {TodoItem};