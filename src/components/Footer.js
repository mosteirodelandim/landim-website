import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map((social) => {
          const {
            style, icon, name, url,
          } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
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
