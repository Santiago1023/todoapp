import React from 'react';
import '../styles/Input.css';
const Input = ({onChange, value}) => {
  // value = a un estado 
  return (
    <input
      input='text'
      className='input-search'
      placeholder='Search a todo...'
      onChange={onChange}
      value={value}
    ></input>
  );
};

export {Input};