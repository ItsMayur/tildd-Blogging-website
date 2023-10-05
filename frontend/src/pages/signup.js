import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Signup(props) {
  // <---CONSTANTS USED IN PAGE--->
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [verificaionEmail, setVerificationEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [verificaion, setVerification] = useState("");

  // <---SUBMIT BUTTON FUNCTION--->
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          alert("Please enter your verification code..");
          document.getElementById("SignupForm").style.display = "NONE";
          document.getElementById("OtpForm").style.display = "flex";
          setVerificationEmail(e.target.email.value);
        } else {
          alert("Please check your login information.");
        }
      });
  };
  // <---OTP VERIFICATION BUTTON--->
  const handleSubmitVerification = (e) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/otpLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: verificaionEmail,
        verificationCode: e.target.verificaion.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          alert("Login successfully");
          router.push("/");
        } else {
          alert("Please check your login information.");
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Head>
        <title>Register</title>
      </Head>
      <div className="h-auto space-y-5 bg-purple p-10 rounded-3xl">
        <h2 className="text-5xl text-white">Register</h2>
        <form
          className="flex flex-col space-y-5"
          id="SignupForm"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstname" className="text-white">
              Full name
            </label>
            <input
              value={firstname}
              name="firstname"
              onChange={(e) => setfirstName(e.target.value)}
              id="firstname"
              placeholder="first Name"
            />
            <label htmlFor="lastname" className="text-white">
              Full name
            </label>
            <input
              value={lastname}
              name="lastname"
              onChange={(e) => setlastName(e.target.value)}
              id="lastname"
              placeholder="last Name"
            />
            <label htmlFor="email" className="text-white">
              email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password" className="text-white">
              password
            </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="bg-black py-2 rounded-full text-white"
          >
            REGISTER
          </button>
        </form>
        <form
          className="flex flex-col space-y-5 hidden"
          id="OtpForm"
          onSubmit={handleSubmitVerification}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstname" className="text-white">
              Verification
            </label>
            <input
              value={verificaion}
              name="verificaion"
              onChange={(e) => setVerification(e.target.value)}
              id="verificaion"
              placeholder="Enter your otp here"
            />

            <button
              type="submit"
              className="bg-black py-2 rounded-full text-white"
            >
              REGISTER
            </button>
          </div>
        </form>
        <Link className="link-btn text-white" href="/signin">
          Already have an account?<strong> Login here.</strong>
        </Link>
      </div>
    </div>
  );
}
