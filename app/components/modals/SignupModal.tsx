"use client";
import Modal from "./Modal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "../../hooks/useSignupModaI";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";

const SignupModal = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const signupModal = useSignupModal();

  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    };
    const response = await apiService.post(
      "api/auth/register/",
      JSON.stringify(formData)
    );
    console.log(response);
    if (response.access) {
      // handleLogin
      signupModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setErrors(tmpErrors);
    }
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Sign Up</h2>
      <form className="space-y-4" action={submitSignup}>
        <input
          placeholder="Your e-mail address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          onChange={(e) => setPassword1(e.target.value)}
        />

        <input
          placeholder="Repeat password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          onChange={(e) => setPassword2(e.target.value)}
        />
        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}
        <CustomButton label="Submit" onClick={submitSignup} />
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
