"use client";
import Modal from "./Modal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "../../hooks/useSignupModaI";

const SignupModal = () => {
  const signupModal = useSignupModal();
  const content = (
    <>
      <h2 className="mb-6 text-2xl">Sign Up</h2>
      <form className="space-y-4">
        <input
          placeholder="Your e-mail address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          placeholder="Repeat password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          Error
        </div>
        <CustomButton label="Submit" />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label={"Log in"}
      content={content}
    />
  );
};

export default SignupModal;
