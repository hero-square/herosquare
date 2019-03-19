import React from 'react';
import { Link } from 'react-router-dom';

const ListElement = props => {
  const {el,isOpen} = props;
  return (
    <>
    {isOpen ? 
    <Link to={el.path}>
      <button className="Menu__list-element">{el.title}</button>
    </Link>:<div />
    }
    </>
  );
};

export default ListElement;
