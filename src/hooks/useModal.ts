"use client";

import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  return { showModal, showModalHandler, closeModalHandler };
};
