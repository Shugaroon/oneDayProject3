import "../css/SignUpPage.css";
import SignUpForm from "./SignUpForm";
// test
export default function SignUpPage({ themeColor }) {
  return (
    <div
      className="SignUpPage-container"
      style={{ backgroundColor: themeColor }}
    >
      <div className="SignUpPage-white-container">
        <div className="SignUpPage-signUp-container">
          <div className="SignUpPage-SignUp-form-wrapper">
            <SignUpForm themeColor={themeColor} />
          </div>
        </div>
      </div>
    </div>
  );
}
