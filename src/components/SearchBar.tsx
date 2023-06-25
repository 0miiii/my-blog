"use client";

import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import { useModal } from "@/hooks";

const SearchBar = () => {
  const { isOpen, closeModalHandler, showModalHandler } = useModal();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get("search")?.toString() || "";

    showModalHandler();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModalHandler}>
        <div className="p-5">서비스 준비중입니다.</div>
      </Modal>

      <form
        className="w-full flex gap-2 bg-white p-2 border border-gray-300 rounded focus-within:ring-1 focus-within:ring-blue-500"
        onSubmit={submitHandler}
      >
        <Image src="/icons/search.svg" alt="search" width={25} height={25} />
        <input
          name="search"
          type="search"
          className="w-full text-black p-1 focus:outline-none"
        />
      </form>
    </>
  );
};

export default SearchBar;
