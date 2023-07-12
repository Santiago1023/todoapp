import React from 'react';
import '../styles/Input.css';
const Input = ({onChange}) => {
  return (
    <input input='text' className='input-search' placeholder='Search a todo...' onChange={onChange}></input>
  );
};

export {Input};