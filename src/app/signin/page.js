// ***** Use Client *****
"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// ***** SignIn Page Component *****
const SignIn = () => {
  const router = useRouter();

  const onSubmit = async (evt) => {
    evt?.preventDefault();
    try {
      const authResponse = await signIn("credentials", {
        redirect: false,
        email: "joe@gmail.com",
        password: "123456",
      });

      if (!authResponse?.ok) {
        alert();
        return;
      }
      router?.push("/dashboard");
    } catch (error) {
      alert(error?.message);
    }
  };
  return (
    <div>
      <h1>Welcome To SignIn</h1>
      <button type="submit" onClick={onSubmit}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
