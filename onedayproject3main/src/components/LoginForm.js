import "../css/LoginForm.css";

export default function LoginForm() {
    return (
        <form className="login-form">
            <input
                type="email"
                id="id"
                className="id-input input"
                placeholder="Enter your email address"
            />
            <input
                type="password"
                id="password"
                className="password-input input"
            />
            <button className="email-login-button">LOGIN</button>
            <a href="/" className="sign-up-button">
                회원 가입하기
            </a>
            <button className="google-login-button loginBtn ">
                Google로 로그인 하기
            </button>
            <button className="kakao-login-button loginBtn">
                KaKao로 로그인 하기
            </button>
            <button className="naver-login-button loginBtn">
                Naver로 로그인 하기
            </button>
        </form>
    );
}
