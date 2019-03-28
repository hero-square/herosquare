import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListElement = props => {
  const {el,isOpen} = props;
  return (
    <>
    {isOpen ? 
    <Link to={el.path}>
      <button className="Menu__list-element"><FontAwesomeIcon icon={el.icon}/>  {el.title}</button>
    </Link>:<div />
    }
    </>
  );
};

export default ListElement;
