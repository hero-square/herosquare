import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../style/Login.css'

const Login = props => {
  const { setAuthStatus, authStatus } = props;
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');

  if (authStatus) return <Redirect to="/home" />;

  const handleForm = e => {
    e.preventDefault();
    //* hash passwords and other security here
    // should stick to only oauth for security purposes
    console.log(username);
    console.log(password);
    
    //authentication request, if response...
    setAuthStatus(true);
  };

  return (
    <div>
      <h1>Welcome to HeroSquare</h1>
      <div className="loginmodal">
        <div className="signin-container">
          <h2 className="signin-heading">Sign In Now</h2>
        </div>
        <div className="login-wrap">
          <form onSubmit={handleForm}>
            <div>
            <input
              className="login-input"
              type="text"
              required
              name='username'
              placeholder='User ID'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            </div>
            <div>
            <input
              className="login-input"
              id="password-padding"
              type="password"
              required
              name='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            </div>
            <button className="button--solid" id="sign-in-button" type='submit'>Sign In</button>
          </form>
          <div className="forget-password">
            <button className="not-solid-button" onClick={() => <Redirect to="/retrievePassword" />}>
              Forgot Password?
            </button>
          </div>
          <hr className="login-divider"></hr>
          <div className="social-media-container">
            <p className="social-media-text" id="social-media-text-top">or you can sign in via your social network</p>
            <button id="facebook-button">Facebook</button>
            <button id="twitter-button">Twitter</button>
            <div className="registration">
              <p className="social-media-text" id="social-media-text-bottom">Don't have an account yet?</p>
              <button className="not-solid-button" onClick={() => <Redirect to="/signup" />}>Create an Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
