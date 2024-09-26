'use client';
import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';
import { HiXMark } from 'react-icons/hi2';
import { createPortal } from 'react-dom';
import useEventClickOutSide from '../_hooks/useEventClickOutSide';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useEventClickOutSide(close);
  if (name !== openName) return null;
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-[var(--backdrop-color)] backdrop-blur-sm z-[1000] transition-all duration-500">
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 rounded-lg shadow-lg p-8 transition-all duration-500"
      >
        <button
          onClick={close}
          className="bg-none border-none p-1 rounded-sm translate-x-2 transition-all duration-200 absolute top-3 right-5 hover:bg-gray-100"
        >
          <HiXMark className="w-6 h-6 text-gray-500" />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
