import React from "react";
import ReactDOM from "react-dom";

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({ children, onClose }) => {
  if (typeof window === "undefined") return null;

  const portalElement = document.getElementById("overlays") as
    | Element
    | DocumentFragment;

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-40 bg-black bg-opacity-75"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 mx-auto bg-white rounded-lg shadow-md z-50">
        {children}
      </div>
    </>,
    portalElement
  );
};

export default Modal;
