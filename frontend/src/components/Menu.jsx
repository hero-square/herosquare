import React from 'react';
import ListElement from './ListElement.jsx';
import '../style/Menu.css';
import uuidv4 from 'uuid/v4';
import list from './routes';

const Menu = props => {
  const { isOpen, name, picture } = props;

  return (
    <div
      className={`App__menu ${
        isOpen ? 'App__menu--open' : 'App__menu--closed'
      }`}>
      <div>
        <img src={picture} alt="" width='150px'/>
        <h2>{name}</h2>
      </div>
      {list.map(el => (
        <ListElement el={el} isOpen={isOpen} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Menu;
