import React, { useState } from "react";
import "../css/SignUpForm.css";

export default function SignUpForm({ themeColor, onSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    await onSignup(name, email, password);
  };

  return (
    <form className="SignUpForm-signUp-form" onSubmit={handleSubmit}>
      <div className="SignUpForm-sign-up-wrapper">
        <span className="SignUpForm-sign-up-logo">Sign Up</span>
        <span className="SignUpForm-encouraging-create-account-words">
          Create your account in seconds.
        </span>
      </div>
      <input
        type="text"
        id="name"
        className="SignUpForm-signUp-box-item SignUpForm-input"
        placeholder="Full Name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        id="email"
        className="SignUpForm-signUp-box-item SignUpForm-input"
        placeholder="Email Address"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        className="SignUpForm-signUp-box-item SignUpForm-input"
        placeholder="Password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <span className="SignUpForm-checkbox-span">
        <input type="checkbox" id="checkbox" />I agree
        <a href="/out" style={{ color: themeColor }}>
          Terms of Service
        </a>
        <span>and</span>
        <a href="/out" style={{ color: themeColor }}>
          Privacy Policy
        </a>
      </span>
      <button
        className="SignUpForm-create-account-button "
        style={{ backgroundColor: themeColor }}
      >
        Create an account
      </button>
      <div className="SignUpForm-member">
        <span className="SignUpForm-word-item">Already a member?</span>
        <a
          href="/login"
          className="SignUpForm-word-item"
          style={{ color: themeColor }}
        >
          Log in
        </a>
      </div>
    </form>
  );
}
