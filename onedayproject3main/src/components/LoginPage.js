import "../css/LoginPage.css";
import LoginForm from "./LoginForm";

export default function LoginPage({ themeColor, onLogin }) {
  return (
    <div
      className="LoginPage-container"
      style={{ backgroundColor: themeColor }}
    >
      <div className="LoginPage-white-container">
        <div className="LoginPage-login-container">
          <div className="LoginPage-login-form-wrapper">
            <LoginForm themeColor={themeColor} onLogin={onLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}
