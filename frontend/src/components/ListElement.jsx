import React from 'react';
import { Link } from 'react-router-dom';

const ListElement = props => {
  const { el } = props;
  return (
    <Link to={el.path}>
      <button className="Menu__list-element">{el.title}</button>
    </Link>
  );
};

export default ListElement;
