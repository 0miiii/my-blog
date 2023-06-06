"use client";

import React from "react";
import Modal from "./Modal";
import { useModal } from "@/hooks";

const SubscriptionForm = () => {
  const { showModal, showModalHandler, closeModalHandler } = useModal();
  return (
    <section className="bg-white rounded-lg shadow-md p-4">
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <div className="p-5">서비스 준비중입니다.</div>
        </Modal>
      )}
      <h2 className="text-xl font-bold mb-4">
        구독하시면 게시글이 발행될 때 메일로 알림을 받으실 수 있습니다. 😊
      </h2>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          className="border border-gray-300 rounded p-2"
          required
        />
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={showModalHandler}
        >
          구독하기
        </button>
      </form>
    </section>
  );
};

export default SubscriptionForm;
