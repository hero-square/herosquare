import React from 'react';
import ListElement from './ListElement.jsx';
import '../style/Menu.css';
import '../style/hamburger.css';
import uuidv4 from 'uuid/v4';

const Menu = props => {
  const { isOpen, setIsOpen, list } = props;

  return (
    <div
      className={`App__menu ${
        isOpen ? 'App__menu--open' : 'App__menu--closed'
      }`}>
      {/* append is-active to animate hamburger */}
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
      {list.map(el => (
        <ListElement el={el} isOpen={isOpen} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Menu;
