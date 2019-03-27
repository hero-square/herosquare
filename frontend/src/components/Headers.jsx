import React from 'react';
// import logo from '../logo.svg';
import '../style/hamburger.css';
import '../style/header.css';

const Header = props => {
  const { isOpen, setIsOpen, setAuthStatus } = props;

  return (
    <header className="App__header">
      <div className='App__left'>
        <button
          className={`
        hamburger
        hamburger--elastic
        ${isOpen ? 'is-active' : ''}
        `}
          onClick={() => setIsOpen(!isOpen)}
          type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <h1 className="App__title"> HeroSquare </h1>
      </div>
      <div className='App__right'>
        <button className="logout" onClick={()=>setAuthStatus(false)}>Logout</button>
      </div>
    </header>
  );
};

export const LandingHeader = props => {
  return (
    <header className="App__header">
      <div>
        <h1 className="App__title"> HeroSquare </h1>
      </div>
      <div>
        <button className="button--login">Log In</button>
        <button className="button--login">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
