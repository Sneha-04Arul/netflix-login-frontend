import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sign In</h1>

        <input type="email" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />

        <button>Sign In</button>

        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span>Need help?</span>
        </div>

        <p className="signup">
          New to Netflix? <span>Sign up now.</span>
        </p>

        <p className="captcha">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </div>
  );
}

export default Login;
