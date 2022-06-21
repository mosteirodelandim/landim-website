import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';

import Nav from './Nav';

import logo from '../assets/images/logo.webp';

function SideBar({ fullMenu, showMenu }) {
  const [headerOpen, toggleHeader] = useState(false);

  if(!showMenu)
    return null

  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1>
        <Link to="/">
          <img id="logo" src={logo} alt=""/>
        </Link>
      </h1>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <OutsideClickHandler
          onOutsideClick={() => {
            if(headerOpen) {
              toggleHeader(false)
            }
          }}
        >
          <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
        </OutsideClickHandler>
      </div>
    </header>
  );
}

SideBar.propTypes = {
  fullMenu: PropTypes.bool,
  showMenu: PropTypes.bool
};

SideBar.defaultProps = {
  fullMenu: false,
  showMenu: true
};

export default SideBar;
