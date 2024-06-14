import "../css/SignUpPage.css";
import SignUpForm from "./SignUpForm";

export default function App() {
    return (
        <div className="container">
            <div className="white-container">
                <div className="signUp-container">
                    <div className="SignUp-form-wrapper">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
