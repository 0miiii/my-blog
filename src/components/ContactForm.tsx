"use client";

import React from "react";
import Modal from "./Modal";
import { useModal } from "@/hooks";

const ContactForm = () => {
  const { isOpen, showModalHandler, closeModalHandler } = useModal();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
  };

  return (
    <section>
      <Modal isOpen={isOpen} onClose={closeModalHandler}>
        <div className="p-5">서비스 준비중입니다.</div>
      </Modal>
      <form
        className="bg-white rounded-lg shadow-md p-4"
        onSubmit={submitHandler}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="button"
          // type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={showModalHandler}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
