import React, { useContext } from 'react';
import '../styles/Input.css';
import { TodoContext } from './TodoContext';

const Input = () => {  
  const { searchValue, setSearchValue} = useContext(TodoContext);
  return (
    <input
      input='text'
      className='input-search'
      placeholder='Search a todo...'
      // onChange={onChange}
      // value={value}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      value={searchValue}
    ></input>
  );
};

export {Input};