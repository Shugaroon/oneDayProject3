import "../css/LoginPage.css";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <div className="LoginPage-container">
            <div className="LoginPage-white-container">
                <div className="LoginPage-login-container">
                    <div className="LoginPage-login-form-wrapper">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
