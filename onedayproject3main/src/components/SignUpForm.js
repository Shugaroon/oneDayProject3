import "../css/SignUpForm.css";

export default function SignUpForm() {
    return (
        <form className="signUp-form">
            <div className="sign-up-wrapper">
                <span className="sign-up-logo">Sign Up</span>
                <span className="encouraging-create-account-words">
                    Create your account in seconds.
                </span>
            </div>
            <input
                type="text"
                id="name"
                className="name-input input signUp-box-item"
                placeholder="Full Name"
                required
            />
            <input
                type="email"
                id="email"
                className="email-input input signUp-box-item"
                placeholder="Email Address"
                required
            />
            <input
                type="password"
                id="password"
                className="password-input input signUp-box-item"
                placeholder="Password"
                required
            />

            <span className="checkbox-span">
                <input type="checkbox" id="checkbox" />I agree to the
                <a href="#" className="terms-of-service word-item">
                    Terms of Service
                </a>
                <span>and</span>
                <a href="#" className="privacy-policy word-item">
                    Privacy Policy
                </a>
            </span>
            <button className="create-account-button ">
                Create an account
            </button>
            <div className="login-already-in-member">
                <span className="word-item">Already a member?</span>
                <a href="/" className="word-item">
                    Log in
                </a>
            </div>
        </form>
    );
}
