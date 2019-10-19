import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import FlagIcon from './FlagIcon';
import i18n from '../i18n/i18n';


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
                <div className="flags">
                  <div onClick={() => {
                    i18n.changeLanguage('pt');
                    window.location.reload();
                  }}
                  >
                    <FlagIcon code="pt" />
                  </div>
                  <div onClick={() => {
                    i18n.changeLanguage('en');
                    window.location.reload();
                  }}
                  >
                    <FlagIcon code="gb" />
                  </div>
                </div>
              </li>

              <li>
                <Link to="/">{t('sidebar:landing')}</Link>
              </li>
              <li>
                <Link to="/history">{t('sidebar:history')}</Link>
              </li>
              <li>
                <Link to="/services">{t('sidebar:services')}</Link>
              </li>
              <li>
                <Link to="/services#photogallery">{t('sidebar:photos')}</Link>
              </li>
              <li>
                <Link to="/wine_stay">{t('sidebar:wine_stay')}</Link>
              </li>
              <li>
                <Link to="/faq">{t('sidebar:faq')}</Link>
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
