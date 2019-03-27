import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

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
      <form onSubmit={handleForm}>
        <input
          type="text"
          required
          name='username'
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          required
          name='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="button--solid" type='submit'>Log In</button>
      </form>
      <button className="button--solid" onClick={() => <Redirect to="/signup" />}>signup</button>
      <button className="button--solid" onClick={() => <Redirect to="/retrievePassword" />}>
        forgot password
      </button>
    </div>
  );
};

export default Login;
