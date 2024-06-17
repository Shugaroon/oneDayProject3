import React, { useState } from "react";
import "../css/LoginForm.css";

export default function LoginForm({ themeColor, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    await onLogin(email, password);
  };

  return (
    <form className="LoginPage-login-form" onSubmit={handleSubmit}>
      <div className="LoginPage-logo-wrapper">
        <p className="LoginPage-logo">TEAM COK</p>
      </div>
      <input
        type="email"
        id="id"
        className="LoginPage-input LoginPage-login-box-item"
        placeholder="Enter your email address"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        className="LoginPage-input LoginPage-login-box-item"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        className="LoginPage-email-login-button"
        style={{ backgroundColor: themeColor }}
      >
        LOGIN
      </button>
      <a
        href="/signup"
        className="LoginPage-sign-up-word"
        style={{ color: themeColor }}
      >
        회원 가입하기
      </a>
      <div className="LoginPage-loginBtn-wrapper">
        <button className="LoginPage-google-login-button LoginPage-login-box-item">
          Google로 로그인 하기
        </button>
        <button className="LoginPage-kakao-login-button LoginPage-login-box-item">
          KaKao로 로그인 하기
        </button>
        <button className="LoginPage-naver-login-button LoginPage-login-box-item">
          Naver로 로그인 하기
        </button>
      </div>
    </form>
  );
}
