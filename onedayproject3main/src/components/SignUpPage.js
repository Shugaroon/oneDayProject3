import "../css/SignUpPage.css";
import SignUpForm from "./SignUpForm";

export default function SignUpPage({ themeColor, onSignup }) {
  return (
    <div
      className="SignUpPage-container"
      style={{ backgroundColor: themeColor }}
    >
      <div className="SignUpPage-white-container">
        <div className="SignUpPage-signUp-container">
          <div className="SignUpPage-SignUp-form-wrapper">
            <SignUpForm themeColor={themeColor} onSignup={onSignup} />
          </div>
        </div>
      </div>
    </div>
  );
}
