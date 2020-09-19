import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';

import Nav from './Nav';

import logo from '../assets/images/logo.webp';

function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);

  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1>
        <Link to="/">
          <img src={logo} alt="" style={{maxHeight: "8vh"}}/>
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
};

SideBar.defaultProps = {
  fullMenu: false,
};

export default SideBar;
