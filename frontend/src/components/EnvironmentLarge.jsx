import React from 'react';
import Header from './Header';

const EnvironmentLarge = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="App__wrapper">
        <Menu list={list} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`App__container ${
            isOpen ? 'App__container--open' : 'App__container--closed'
          }`}
        />
      </div>
    </>
  );
};

export default EnvironmentLarge;
