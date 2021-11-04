import { useRef } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Modal.css";

const Modal = ({title, submitText, className, children, targetElement, ...props}) => {
  const modalRef = useRef();

  const handleModalClose = (e) => {
    modalRef.current.classList.remove('modal--open');
  }


  return (
    <div ref={modalRef} className="modal modal--open" tabindex="-1">
      <div onClick={handleModalClose} className="modal__dialog">
        <div className="modal__content">
          <Button onClick={handleModalClose} className="modal__close btn--green btn--close" aria-label="Close" />
          <h5 className="modal__title">{title}</h5>
          <div className="modal__body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;