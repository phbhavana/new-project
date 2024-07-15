
import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, children }:any) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose} className="CloseButton">
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
