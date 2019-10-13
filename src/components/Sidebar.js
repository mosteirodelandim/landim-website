import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Nav from './Nav';

function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);

  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1>
        <Link to="/">Landim</Link>
      </h1>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  );
}

SideBar.propTypes = {
  fullMenu: PropTypes.bool,
};

SideBar.defaultProps = {
  fullMenu: false,
};

export default SideBar;
