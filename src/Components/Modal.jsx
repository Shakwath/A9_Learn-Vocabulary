// components/Modal.jsx
import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        {children}
        <button onClick={onClose} className="absolute top-2 right-4 text-gray-500">&times;</button>
      </div>
    </div>
  );
};

export default Modal;
