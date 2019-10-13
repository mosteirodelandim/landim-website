import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function Nav({ onMenuToggle = () => {} }) {
  const { t } = useTranslation();

  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>{t('sidebar:label')}</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">{t('sidebar:landing')}</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={(e) => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
};

export default Nav;
