import React from 'react'

const Home = props => {
  const {setAuthStatus} =props;
  return (
    <div>
      <h1>you are logged in</h1>
      <button onClick={()=>setAuthStatus(false)}>Logout</button>
    </div>
  )
}

export default Home
