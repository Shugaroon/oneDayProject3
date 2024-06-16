import "../css/LoginPage.css";
import LoginForm from "./LoginForm";

export default function LoginPage({ themeColor }) {
  return (
    <div
      className="LoginPage-container"
      style={{ backgroundColor: themeColor }}
    >
      <div className="LoginPage-white-container">
        <div className="LoginPage-login-container">
          <div className="LoginPage-login-form-wrapper">
            <LoginForm themeColor={themeColor} />
          </div>
        </div>
      </div>
    </div>
  );
}
