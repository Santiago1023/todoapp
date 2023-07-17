import React from 'react'
import ReactDOM from "react-dom";
import '../styles/Modal.css';

const Modal = ({children}) => {
  return ReactDOM.createPortal(
    <div className='portal'>{children}</div>,
    document.getElementById('modal')
  );
};

export {Modal};