import React from 'react';
// import logo from '../logo.svg';
import '../style/hamburger.css';

const Header = props => {
  const { isOpen, setIsOpen } = props;

  return (
    <header className="App__header">
      <div className='App__left'>
        <button
          className={`
        hamburger
        hamburger--elastic
        Menu__hamburger
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
