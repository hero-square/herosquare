import React from 'react'

const Home = props => {
  const {setAuthStatus} = props;
  return (
    <div>
      <h1>this is home page</h1>
      <button onClick = {()=>{setAuthStatus(false)}}>logout</button>
    </div>
  )
}

export default Home
