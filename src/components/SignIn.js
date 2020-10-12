import React from "react";
import { Link } from "react-router-dom";

function SignIn(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="signin">
      <div className="signin-container">
        <label>Username</label>
        <input
          type="email"
          value={email}
          autoFocus
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error-message">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          value={password}
          autoFocus
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error-message">{passwordError}</p>
        <div className="btn-container">
          {hasAccount ? (
            <>
              <button onClick={handleSignIn}>Sign In</button>
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}><Link to='/sign-up' className='user-link'> Sign Up</Link></span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Already have an account?
                <span onClick={() => setHasAccount(!hasAccount)}><Link to='/sign-in' className='user-link'> Sign In</Link></span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignIn;
