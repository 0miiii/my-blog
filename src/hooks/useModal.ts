"use client";

import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return { isOpen, showModalHandler, closeModalHandler };
};
