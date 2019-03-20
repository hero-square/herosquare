import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const { useIsLoggedIn, isLoggedIn } = props;

  if (isLoggedIn) return <Redirect to="/home" />;

  return (
    <div>
      <button
        onClick={() => {useIsLoggedIn(true);}}>
        Click button to log in for now
      </button>
    </div>
  );
};

export default Login;
