import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const { useIsLoggedIn, isLoggedIn } = props;
  const [password,usePassword] = useState('')
  const [username,useUsername] = useState('')

  if (isLoggedIn) return <Redirect to="/home" />;

  return (
    <div>
      <h1>Welcome to HeroSquare</h1>
      <input name="username" type="text" value={username} onChange={e=>useUsername(e.value)}/>
      <input name="pass" type="password" value={password} onChange={e=>usePassword(e.value)}/>
      <button
        onClick={() => {useIsLoggedIn(true);}}>
        Click button to log in for now
      </button>
      <button onClick={()=><Redirect to='/signup'/>}>signup</button>
      <button onClick={()=><Redirect to='/retrievePassword'/>}>forgot password</button>
    </div>
  );
};

export default Login;
