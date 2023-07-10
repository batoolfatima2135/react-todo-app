import { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, openModal, () => setOpenModal(false));
  return (
    <div>
      <button type="button" onClick={() => setOpenModal(true)}>Open Modal</button>
      {openModal && (
      <div ref={ref}>
        <button type="button" onClick={() => setOpenModal(false)}>X</button>
        <h1>This is a modal</h1>
      </div>
      )}
    </div>

  );
};
export default Modal;
