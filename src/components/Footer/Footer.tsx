import React from 'react';
import logo from '../../assets/rs_school_js.svg';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer footer_position">
      <div className="footer-info">
        © 2022{' '}
        <a
          className="footer-info__link link"
          href="https://github.com/Nilender-Andrey"
          target="_blank"
          rel="noreferrer"
        >
          Nilender-Andrey
        </a>
      </div>

      <a
        className="course-logo"
        href="https://rs.school/js/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="course-img" src={logo} alt="rs-school logo" />
      </a>
    </footer>
  );
}

export default Footer;
