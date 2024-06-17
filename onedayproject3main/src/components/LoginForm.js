import React, { useState } from "react";
import "../css/LoginForm.css";
import googleLogo from "./img/google.PNG";
import kakaoLogo from "./img/kakao.PNG";
import naverLogo from "./img/naver.PNG";

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
                <p className="LoginPage-teamKok-logo">TEAM KOK</p>
            </div>
            <input
                type="email"
                id="id"
                className="LoginPage-input LoginPage-login-box-item"
                placeholder="Email Address"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                id="password"
                className="LoginPage-input LoginPage-login-box-item"
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button
                className="LoginPage-email-login-button"
                style={{ backgroundColor: themeColor }}
            >
                Log in
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
                    <img
                        src={googleLogo}
                        alt="googleLogo"
                        className="LoginPage-login-logo LoginPage-google-logo"
                    />
                    Google로 로그인 하기
                </button>
                <button className="LoginPage-kakao-login-button LoginPage-login-box-item">
                    <img
                        src={kakaoLogo}
                        alt="kakaoLogo"
                        className="LoginPage-login-logo LoginPage-kakao-logo"
                    />
                    KaKao로 로그인 하기
                </button>
                <button className="LoginPage-naver-login-button LoginPage-login-box-item">
                    <img
                        src={naverLogo}
                        alt="naverLogo"
                        className="LoginPage-login-logo LoginPage-naver-logo"
                    />
                    Naver로 로그인 하기
                </button>
            </div>
        </form>
    );
}
