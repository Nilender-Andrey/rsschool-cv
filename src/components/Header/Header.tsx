import React, { useEffect, useState } from 'react';

import './Header.scss';
import List from './List';

function Header() {
  const [position, setPosition] = useState('nav_horizontally');

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 30) {
        setPosition('nav_vertically');
      } else {
        setPosition('nav_horizontally');
      }
    };
  }, []);

  return (
    <header className="header">
      <nav className={`nav ${position}`}>
        <List />
      </nav>
    </header>
  );
}

export default Header;
