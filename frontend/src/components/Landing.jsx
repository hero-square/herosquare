import React from 'react';
import { Link } from 'react-router-dom';

const Landing = props => {
  return (
    <div>
      <h1>this is home page</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Landing;
