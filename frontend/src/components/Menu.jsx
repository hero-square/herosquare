import React from 'react';
import ListElement from './ListElement.jsx';
import '../style/Menu.css';
import uuidv4 from 'uuid/v4';
import list from './routes';

const Menu = props => {
  const { isOpen} = props;

  //** should have profile picture and name when open */
  
  return (
    <div
      className={`App__menu ${
        isOpen ? 'App__menu--open' : 'App__menu--closed'
      }`}>
      {list.map(el => (
        <ListElement el={el} isOpen={isOpen} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Menu;
