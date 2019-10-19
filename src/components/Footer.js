import React from 'react';
import { useTranslation } from 'react-i18next';

import config from '../../config';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map((social) => {
          const {
            style, icon, name, url, urlApp,
          } = social;
          return (
            <li key={url}>
              <a target="_blank" rel="noopener noreferrer" href={urlApp} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>{t('landing:footer')}</li>
        <li>
           Mosteiro de Landim &copy; {(new Date().getFullYear())}
        </li>
      </ul>
    </footer>
  );
}
