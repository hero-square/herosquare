import React from 'react';

const Header = () => {
  return (
    <header className="App__header">
      {window.innerWidth < '800px' ? (
        <div>hi</div>
      ) : (
        <img className="App__logo" src={logo} alt="logo" />
      )}
      <h2 className="App__title"> HeroSquare </h2>
    </header>
  );
};

export default Header;
