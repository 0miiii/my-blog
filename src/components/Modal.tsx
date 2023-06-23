"use client";

import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  portalElId: string;
}

const Modal: React.FC<IProps> = ({ children, isOpen, onClose, portalElId }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const overlayClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    const escKeyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", escKeyDownHandler);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", escKeyDownHandler);
    }

    return () => {
      document.removeEventListener("keydown", escKeyDownHandler);
    };
  }, [isOpen, onClose]);

  if (typeof window === "undefined" || !isOpen) return null;

  let portalElement = document.querySelector(`#${portalElId}`);
  if (!portalElement) {
    portalElement = document.createElement("div");
    portalElement.setAttribute("id", portalElId);
    document.body.insertBefore(portalElement, document.body.firstChild);
  }

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-40 bg-black bg-opacity-75"
        ref={overlayRef}
        onClick={overlayClickHandler}
      >
        <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-lg shadow-md">
          {children}
        </div>
      </div>
    </>,
    portalElement
  );
};

export default Modal;
