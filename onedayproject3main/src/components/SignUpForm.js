import "../css/SignUpForm.css";

export default function SignUpForm({ themeColor }) {
  return (
    <form className="SignUpForm-signUp-form">
      <div className="SignUpForm-sign-up-wrapper">
        <span className="SignUpForm-sign-up-logo">Sign Up</span>
        <span className="SignUpForm-encouraging-create-account-words">
          Create your account in seconds.
        </span>
      </div>
      <input
        type="text"
        id="name"
        className="SignUpForm-signUp-box-item SignUpForm-input"
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        id="email"
        className="SignUpForm-signUp-box-item SignUpForm-input"
        placeholder="Email Address"
        required
      />
      <input
        type="password"
        id="password"
        className="SignUpForm-signUp-box-item SignUpForm-input"
        placeholder="Password"
        required
      />

      <span className="SignUpForm-checkbox-span">
        <input type="checkbox" id="checkbox" />I agree to the
        <a href="/out" style={{ color: themeColor }}>
          Terms of Service
        </a>
        <span>and</span>
        <a href="/out" style={{ color: themeColor }}>
          Privacy Policy
        </a>
      </span>
      <button
        className="SignUpForm-create-account-button "
        style={{ backgroundColor: themeColor }}
      >
        Create an account
      </button>
      <div>
        <span className="SignUpForm-word-item">Already a member?</span>
        <a
          href="/login"
          className="SignUpForm-word-item"
          style={{ color: themeColor }}
        >
          Log in
        </a>
      </div>
    </form>
  );
}
