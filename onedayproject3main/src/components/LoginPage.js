import "../css/LoginPage.css";
import LoginForm from "./LoginForm";

export default function App() {
    return (
        <div className="container">
            <div className="white-container">
                <div className="login-container">
                    <h1 className="logo">LOGO</h1>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
