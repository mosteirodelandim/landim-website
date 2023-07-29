import React from 'react';
import { useTranslation } from 'react-i18next';
import Obfuscate from 'react-obfuscate';

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

          // Obfuscate the e-mail address to prevent spam bots from viewing it
          if (name === 'Email') {
            return (
              <li key={name}>
                <Obfuscate email={urlApp} className={`icon`}>
                  <a target="_blank" rel="noopener noreferrer" className={`icon ${style} ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </Obfuscate>
              </li>
            )
          } else {
            return (
              <li key={name}>
                <a target="_blank" rel="noopener noreferrer" href={urlApp} className={`icon ${style} ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          }
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
