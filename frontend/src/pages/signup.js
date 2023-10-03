import Link from "next/link";
import React, { useState } from "react";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
          alert("You are logged in.");
          this.goToMain();
        } else {
          alert("Please check your login information.");
        }
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">Full name</label>
        <input
          value={firstname}
          name="firstname"
          onChange={(e) => setfirstName(e.target.value)}
          id="firstname"
          placeholder="first Name"
        />
        <label htmlFor="lastname">Full name</label>
        <input
          value={lastname}
          name="lastname"
          onChange={(e) => setlastName(e.target.value)}
          id="lastname"
          placeholder="last Name"
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <Link className="link-btn" href="/signin">
        Already have an account? Login here.
      </Link>
    </div>
  );
}
