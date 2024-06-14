import "../css/LoginForm.css";

export default function LoginForm() {
    return (
        <form className="login-form">
            <div className="logo-wrapper">
                <p className="logo">TEAM COK</p>
            </div>
            <input
                type="email"
                id="id"
                className="input login-box-item"
                placeholder="Enter your email address"
                required
            />
            <input
                type="password"
                id="password"
                className="input login-box-item"
                required
            />
            <button className="email-login-button">LOGIN</button>
            <a href="/" className="sign-up-word">
                회원 가입하기
            </a>
            <div className="loginBtn-wrapper">
                <button className="google-login-button login-box-item">
                    Google로 로그인 하기
                </button>
                <button className="kakao-login-button login-box-item">
                    KaKao로 로그인 하기
                </button>
                <button className="naver-login-button login-box-item">
                    Naver로 로그인 하기
                </button>
            </div>
        </form>
    );
}
