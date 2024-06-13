import "../css/LoginPage.css";
import LoginForm from "./LoginForm";

export default function App() {
    return (
        <div className="container">
            <div className="white-container">
                <div className="login-container">
                    <div className="login-form-wrapper">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
