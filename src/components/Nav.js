import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SlideDown } from 'react-slidedown';
import FlagIcon from './FlagIcon';
import i18n from '../i18n/i18n';
import 'react-slidedown/lib/slidedown.css';

function historyTab(t, toggleHistory, setToggleHistory) {
  return (
    <>
      <li style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/history">{t('sidebar:history.main')}</Link>
        <a onClick={() => setToggleHistory(!toggleHistory)}>
          { toggleHistory
            ? <span className="icon solid fa-chevron-down" />
            : <span className="icon solid fa-chevron-left" />}
        </a>
      </li>

      <SlideDown className="my-dropdown-slidedown">
        {toggleHistory

          ? (
            <>
              <li id="li-submenu">
                <Link to="/history#origin">{t('sidebar:history.origins')}</Link>
              </li>
              <li id="li-submenu">
                <Link to="/history#priests">{t('sidebar:history.priests')}</Link>
              </li>
              <li id="li-submenu">
                <Link to="/history#extinction">{t('sidebar:history.extinction')}</Link>
              </li>
              <li id="li-submenu">
                <Link to="/history#sale">{t('sidebar:history.sale')}</Link>
              </li>
              <li id="li-submenu">
                <Link to="/history#notable">{t('sidebar:history.notable')}</Link>
              </li>
              <li id="li-submenu">
                <Link to="/history#book">{t('sidebar:history.book')}</Link>
              </li>
            </>
          ) : null}
      </SlideDown>
    </>
  );
}

function Nav({ onMenuToggle = () => {} }) {
  const { t } = useTranslation();
  const [toggleHistory, setToggleHistory] = useState(false);

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

              {historyTab(t, toggleHistory, setToggleHistory)}

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
