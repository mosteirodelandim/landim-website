import React from 'react';
import { isMobile } from 'react-device-detect';

import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map((social) => {
          const {
            style, icon, name, url, urlApp,
          } = social;
          return (
            <li key={url}>
              <a href={urlApp} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
        
        {isMobile
          ? (
            <li key="phone">
              <a href="tel://+351911042785" className="icon solid fa-phone">
                <span className="label">Mobile phone</span>
              </a>
            </li>
          ) : null}
      </ul>
      <ul className="copyright">
        <li>All rights reserved</li>
        <li>
           Mosteiro de Landim &copy; {(new Date().getFullYear())}
        </li>
      </ul>
    </footer>
  );
}
