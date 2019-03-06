import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
  const [isOpen, setIsOpen] = props;

  return (
    <div>
      <h3>hi</h3>
      {/* append is-active to animate hamburger */}
    </div>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Menu;
