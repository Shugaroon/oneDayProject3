import "../css/SignUpPage.css";
import SignUpForm from "./SignUpForm";
// test
export default function SignUpPage() {
    return (
        <div className="SignUpPage-container">
            <div className="SignUpPage-white-container">
                <div className="SignUpPage-signUp-container">
                    <div className="SignUpPage-SignUp-form-wrapper">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
