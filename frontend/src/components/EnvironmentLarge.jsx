import React,{useState} from 'react';
import Menu from './Menu';
import Header from './Header';

// contains Routes
import list from './routesList';

const EnvironmentLarge = props => {
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
