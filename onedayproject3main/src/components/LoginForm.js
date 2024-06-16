import "../css/LoginForm.css";

export default function LoginForm() {
  return (
    <form className="LoginPage-login-form">
      <div className="LoginPage-logo-wrapper">
        <p className="LoginPage-logo">TEAM COK</p>
      </div>
      <input
        type="email"
        id="id"
        className="LoginPage-input LoginPage-login-box-item"
        placeholder="Enter your email address"
        required
      />
      <input
        type="password"
        id="password"
        className="LoginPage-input LoginPage-login-box-item"
        required
      />
      <button className="LoginPage-email-login-button">LOGIN</button>
      <a href="/signup" className="LoginPage-sign-up-word">
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
