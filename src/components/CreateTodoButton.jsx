
import React from 'react'
import '../styles/CreateTodoButton.css'
import { FaPlusCircle } from 'react-icons/fa';
import { IconButton } from './IconButton';

const CreateTodoButton = ({openModal, setOpenModal}) => {
  return (
    <div className='icon-button-container'>
      <IconButton
          icon={FaPlusCircle}
          onClick={() => {
              setOpenModal(!openModal);
          }}
          className='icon-add'
      />
    </div>

  );
};

export {CreateTodoButton};