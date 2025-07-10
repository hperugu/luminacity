import React from 'react';
import CloseIcon from '../icons/CloseIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-neutral-dark">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 text-neutral-medium hover:text-neutral-dark transition-colors rounded-lg hover:bg-gray-100"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="text-neutral-dark">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;