import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const { setAuthStatus, authStatus } = props;
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  if (authStatus) return <Redirect to="/home" />;

  return (
    <div>
      <h1>Welcome to HeroSquare</h1>
      <input
        name="username"
        type="text"
        value={username}
        onChange={e => setUsername(e.value)}
      />
      <input
        name="pass"
        type="password"
        value={password}
        onChange={e => setPassword(e.value)}
      />
      <button
        onClick={() => {
          setAuthStatus(true);
        }}>
        Click button to log in for now
      </button>
      <button onClick={() => <Redirect to="/signup" />}>signup</button>
      <button onClick={() => <Redirect to="/retrievePassword" />}>
        forgot password
      </button>
    </div>
  );
};

export default Login;
